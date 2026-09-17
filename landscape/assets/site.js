(() => {
  const body = document.body;
  const header = document.querySelector('[data-header]');
  const menu = document.querySelector('[data-menu]');
  const menuButton = document.querySelector('[data-menu-button]');

  const syncHeader = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });

  if (menu && menuButton) {
    const closeMenu = () => {
      menu.classList.remove('is-open');
      menuButton.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      body.classList.remove('menu-open');
    };
    menuButton.addEventListener('click', () => {
      const open = !menu.classList.contains('is-open');
      menu.classList.toggle('is-open', open);
      menuButton.classList.toggle('is-open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      body.classList.toggle('menu-open', open);
    });
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => event.key === 'Escape' && closeMenu());
  }

  document.querySelectorAll('[data-year]').forEach((item) => {
    item.textContent = new Date().getFullYear();
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

  const filters = document.querySelectorAll('[data-gallery-filter]');
  const galleryItems = [...document.querySelectorAll('[data-gallery-item]')];
  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      const category = filter.dataset.galleryFilter;
      filters.forEach((item) => item.classList.toggle('is-active', item === filter));
      galleryItems.forEach((item) => {
        item.classList.toggle('is-hidden', category !== 'all' && item.dataset.category !== category);
      });
    });
  });

  const lightbox = document.querySelector('[data-lightbox]');
  if (lightbox && galleryItems.length) {
    const image = lightbox.querySelector('img');
    const caption = lightbox.querySelector('[data-lightbox-caption]');
    let currentIndex = 0;
    const visibleItems = () => galleryItems.filter((item) => !item.classList.contains('is-hidden'));
    const show = (index) => {
      const items = visibleItems();
      currentIndex = (index + items.length) % items.length;
      const item = items[currentIndex];
      image.src = item.dataset.full;
      image.alt = item.querySelector('img').alt;
      caption.textContent = item.dataset.caption || image.alt;
      lightbox.hidden = false;
      lightbox.classList.add('is-open');
      body.classList.add('lightbox-open');
    };
    const close = () => {
      lightbox.classList.remove('is-open');
      lightbox.hidden = true;
      body.classList.remove('lightbox-open');
    };
    galleryItems.forEach((item) => item.addEventListener('click', () => show(visibleItems().indexOf(item))));
    lightbox.querySelector('[data-lightbox-close]').addEventListener('click', close);
    lightbox.querySelector('[data-lightbox-prev]').addEventListener('click', () => show(currentIndex - 1));
    lightbox.querySelector('[data-lightbox-next]').addEventListener('click', () => show(currentIndex + 1));
    lightbox.addEventListener('click', (event) => event.target === lightbox && close());
    document.addEventListener('keydown', (event) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') show(currentIndex - 1);
      if (event.key === 'ArrowRight') show(currentIndex + 1);
    });
  }

  const quoteForm = document.querySelector('[data-quote-form]');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!quoteForm.reportValidity()) return;
      const data = new FormData(quoteForm);
      const message = [
        'Hello Riverstone, I would like to request a landscaping quote.',
        '',
        `Name: ${data.get('name')}`,
        `Phone: ${data.get('phone')}`,
        `Email: ${data.get('email') || 'Not provided'}`,
        `Service: ${data.get('service')}`,
        `Property: ${data.get('property')}`,
        `Location: ${data.get('location')}`,
        `Preferred timing: ${data.get('timing') || 'Flexible'}`,
        '',
        `Project details: ${data.get('message')}`
      ].join('\n');
      const status = quoteForm.querySelector('[data-form-status]');
      status.textContent = 'Your quote request is ready. Opening WhatsApp…';
      status.classList.add('is-visible');
      window.open(`https://wa.me/254725429407?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    });
  }
})();
