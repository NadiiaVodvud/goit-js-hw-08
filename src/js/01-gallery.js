import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

const container = document.querySelector('.gallery');

const picturesGallery = galleryItems
  .map(
    image =>
      `<a class="gallery__item" href=${image.original}><img class="gallery__image" src=${image.preview} alt=${image.description}/></a>`
  )
  .join('');

container.insertAdjacentHTML('afterbegin', picturesGallery);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
