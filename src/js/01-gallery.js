import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');


function createGallery(galleryItems){
  return galleryItems.map((img, index) =>
    `<div class="gallery__item">
    <a class="gallery__link" href="${img.original}">
      <img
        class="gallery__image"
        src="${img.preview}"
        data-source="${img.original}"
        data-index="${index}"
        alt="${img.description}"
      />
    </a>
  </div>`
  ).join("");
}

const createGalleryElements = createGallery(galleryItems);
gallery.innerHTML = createGalleryElements;

gallery.addEventListener('click', onImageClick);

function onImageClick(e){
  e.preventDefault();
// console.log(e.target.dataset.source);
  const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}">
  `)
  
  instance.show()

  document.addEventListener('keydown', (e) => {
    const ESC_KEY_CODE = 'Escape';
    if(e.code === ESC_KEY_CODE){
      instance.close()
    }
  })
  
}
