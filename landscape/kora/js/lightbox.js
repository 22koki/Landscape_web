function loadImages(startIndex, endIndex) {
    const gallery = document.getElementById('imageGallery');
    for (let i = startIndex; i < endIndex && i < imageFileNames.length; i++) {
        const imgElement = document.createElement('a'); // Change to <a> for lightbox
        imgElement.href = imageFileNames[i]; // Set href to image URL
        imgElement.setAttribute('data-lightbox', 'gallery'); // Add data-lightbox attribute
        const img = document.createElement('img');
        img.src = imageFileNames[i];
        img.alt = `Image ${i + 1}`;
        imgElement.appendChild(img); // Append image to <a>
        
        const galleryItem = document.createElement('div');
        galleryItem.appendChild(imgElement); // Append <a> to gallery item

        gallery.appendChild(galleryItem);
    }

    if (endIndex < imageFileNames.length) {
        document.getElementById('viewMoreButton').style.display = 'block';
    } else {
        document.getElementById('viewMoreButton').style.display = 'none';
    }

    // Initialize lightbox after images are loaded
    lightbox.init();
}
