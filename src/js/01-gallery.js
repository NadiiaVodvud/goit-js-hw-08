// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const container = document.querySelector('.gallery');
const picturesGallery = galleryItems
  .map(
    image =>
      `<div class="gallery__item"><a class="gallery__link" href=${image.original}><img class="gallery__image" src=${image.preview} data-source=${image.original} alt=${image.description}/></a></div>`
  )
  .join('');

container.insertAdjacentHTML('afterbegin', picturesGallery);

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const largeImageUrl = evt.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${largeImageUrl}">`, {
    onShow: instance => {
      document.addEventListener('keydown', onEscapeKeyPress);
    },
    onClose: instance => {
      document.removeEventListener('keydown', onEscapeKeyPress);
    },
  });

  instance.show();

  function onEscapeKeyPress(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}

container.addEventListener('click', onClick);
