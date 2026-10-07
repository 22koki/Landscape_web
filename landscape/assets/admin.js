(() => {
  const config = window.RIVERSTONE_IMAGE_MANAGER;
  const sdk = window.supabase;
  if (!config || !sdk) return;

  const client = sdk.createClient(config.supabaseUrl, config.supabaseKey, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
  });
  const loginPanel = document.querySelector('[data-login-panel]');
  const dashboard = document.querySelector('[data-dashboard]');
  const loginForm = document.querySelector('[data-login-form]');
  const loginMessage = document.querySelector('[data-login-message]');
  const globalMessage = document.querySelector('[data-global-message]');
  const groupsRoot = document.querySelector('[data-image-groups]');
  const state = { overrides: new Map(), user: null };

  const setMessage = (element, message, success = false) => {
    element.textContent = message;
    element.classList.toggle('success', success);
  };

  const checkAdmin = async (user) => {
    if (!user || user.email.toLowerCase() !== config.ownerEmail.toLowerCase()) return false;
    const { data, error } = await client.from('image_admins').select('email').eq('email', config.ownerEmail).maybeSingle();
    if (error) throw error;
    return Boolean(data);
  };

  const loadOverrides = async () => {
    const { data, error } = await client.from('site_image_overrides').select('slot,image_url,storage_path');
    if (error) throw error;
    state.overrides = new Map(data.map((item) => [item.slot, item]));
  };

  const renderCards = () => {
    const grouped = config.slots.reduce((result, slot) => {
      (result[slot.group] ||= []).push(slot);
      return result;
    }, {});
    groupsRoot.replaceChildren();
    Object.entries(grouped).forEach(([groupName, slots]) => {
      const section = document.createElement('section');
      section.className = 'image-group';
      const heading = document.createElement('h2');
      heading.textContent = groupName;
      const grid = document.createElement('div');
      grid.className = 'image-grid';
      slots.forEach((slot) => grid.append(createCard(slot)));
      section.append(heading, grid);
      groupsRoot.append(section);
    });
  };

  const createCard = (slot) => {
    const override = state.overrides.get(slot.key);
    const card = document.createElement('article');
    card.className = 'image-card';
    card.dataset.slot = slot.key;
    card.innerHTML = `
      <div class="image-preview"><img alt="${slot.label}"><span class="override-badge" ${override ? '' : 'hidden'}>Changed</span></div>
      <div class="image-card-body">
        <h3>${slot.label}</h3>
        <label class="file-picker">Choose replacement<input type="file" accept="image/jpeg,image/png,image/webp,image/avif"></label>
        <div class="card-actions"><button class="replace-button" type="button">Replace image</button><button class="restore-button" type="button" ${override ? '' : 'hidden'}>Restore original</button></div>
        <p class="card-status" role="status"></p>
      </div>`;
    const preview = card.querySelector('img');
    const input = card.querySelector('input');
    preview.src = override?.image_url || slot.src;
    input.addEventListener('change', () => {
      if (!input.files[0]) return;
      const temporaryUrl = URL.createObjectURL(input.files[0]);
      preview.onload = () => URL.revokeObjectURL(temporaryUrl);
      preview.src = temporaryUrl;
    });
    card.querySelector('.replace-button').addEventListener('click', () => uploadReplacement(slot, card));
    card.querySelector('.restore-button').addEventListener('click', () => restoreOriginal(slot, card));
    return card;
  };

  const validateImage = (file) => new Promise((resolve, reject) => {
    if (!file) return reject(new Error('Choose an image first.'));
    if (!['image/jpeg', 'image/png', 'image/webp', 'image/avif'].includes(file.type)) return reject(new Error('Use a JPG, PNG, WebP or AVIF image.'));
    if (file.size > 12 * 1024 * 1024) return reject(new Error('The image must be smaller than 12 MB.'));
    const image = new Image();
    const url = URL.createObjectURL(file);
    image.onload = () => {
      URL.revokeObjectURL(url);
      if (image.naturalWidth < 1000 || image.naturalHeight < 650) reject(new Error('Choose a clearer image of at least 1000 × 650 pixels.'));
      else resolve();
    };
    image.onerror = () => { URL.revokeObjectURL(url); reject(new Error('This image could not be read.')); };
    image.src = url;
  });

  const uploadReplacement = async (slot, card) => {
    const input = card.querySelector('input');
    const button = card.querySelector('.replace-button');
    const status = card.querySelector('.card-status');
    try {
      button.disabled = true;
      await validateImage(input.files[0]);
      status.textContent = 'Uploading the clear original image…';
      const file = input.files[0];
      const extension = (file.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '');
      const path = `overrides/${slot.key}-${Date.now()}.${extension}`;
      const { error: uploadError } = await client.storage.from(config.bucket).upload(path, file, { cacheControl: '31536000', upsert: false, contentType: file.type });
      if (uploadError) throw uploadError;
      const { data: publicData } = client.storage.from(config.bucket).getPublicUrl(path);
      const previous = state.overrides.get(slot.key);
      const row = { slot: slot.key, image_url: publicData.publicUrl, storage_path: path, updated_by: state.user.id, updated_at: new Date().toISOString() };
      const { error: saveError } = await client.from('site_image_overrides').upsert(row, { onConflict: 'slot' });
      if (saveError) {
        await client.storage.from(config.bucket).remove([path]);
        throw saveError;
      }
      if (previous?.storage_path) await client.storage.from(config.bucket).remove([previous.storage_path]);
      state.overrides.set(slot.key, row);
      card.querySelector('img').src = publicData.publicUrl;
      card.querySelector('.override-badge').hidden = false;
      card.querySelector('.restore-button').hidden = false;
      input.value = '';
      status.textContent = 'Updated. The new image is now live.';
    } catch (error) {
      status.textContent = error.message || 'The image could not be updated.';
    } finally {
      button.disabled = false;
    }
  };

  const restoreOriginal = async (slot, card) => {
    const button = card.querySelector('.restore-button');
    const status = card.querySelector('.card-status');
    const previous = state.overrides.get(slot.key);
    if (!previous) return;
    try {
      button.disabled = true;
      status.textContent = 'Restoring the original…';
      const { error } = await client.from('site_image_overrides').delete().eq('slot', slot.key);
      if (error) throw error;
      await client.storage.from(config.bucket).remove([previous.storage_path]);
      state.overrides.delete(slot.key);
      card.querySelector('img').src = slot.src;
      card.querySelector('.override-badge').hidden = true;
      button.hidden = true;
      status.textContent = 'Original image restored.';
    } catch (error) {
      status.textContent = error.message || 'The original could not be restored.';
    } finally {
      button.disabled = false;
    }
  };

  const showDashboard = async (user) => {
    try {
      if (!await checkAdmin(user)) throw new Error('This account is not authorized to manage Riverstone images.');
      state.user = user;
      await loadOverrides();
      renderCards();
      loginPanel.hidden = true;
      dashboard.hidden = false;
    } catch (error) {
      await client.auth.signOut();
      setMessage(loginMessage, error.message);
    }
  };

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    setMessage(loginMessage, 'Signing in…');
    const data = new FormData(loginForm);
    const { data: result, error } = await client.auth.signInWithPassword({ email: data.get('email'), password: data.get('password') });
    if (error) return setMessage(loginMessage, error.message);
    await showDashboard(result.user);
  });

  document.querySelector('[data-create-login]').addEventListener('click', async () => {
    if (!loginForm.reportValidity()) return;
    setMessage(loginMessage, 'Creating the secure owner login…');
    const data = new FormData(loginForm);
    const { data: result, error } = await client.auth.signUp({ email: data.get('email'), password: data.get('password') });
    if (error) return setMessage(loginMessage, error.message);
    if (result.session) return showDashboard(result.user);
    setMessage(loginMessage, 'Check the Riverstone Gmail for the confirmation link, then return here and sign in.', true);
  });

  document.querySelector('[data-sign-out]').addEventListener('click', async () => {
    await client.auth.signOut();
    state.user = null;
    dashboard.hidden = true;
    loginPanel.hidden = false;
    loginForm.reset();
    loginForm.elements.email.value = config.ownerEmail;
    setMessage(loginMessage, 'Signed out safely.', true);
  });

  client.auth.getSession().then(({ data }) => {
    if (data.session?.user) showDashboard(data.session.user);
  });
})();
