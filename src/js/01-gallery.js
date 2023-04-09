// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

(function () {
  const smallImgGallery = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('afterbegin', smallImgGallery);
})();

const lightbox = new SimpleLightbox('.gallery .gallery__link', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: '250',
});
