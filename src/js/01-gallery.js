// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Get Ref
const list = document.querySelector('.gallery');

// Create gallery markup
let galleryMarkupString = '';
function createGalleryMarkup(gallery) {
  for (const img of gallery) {
    galleryMarkupString += `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
  </a>
</div>`;
  }
  return galleryMarkupString;
}
list.innerHTML = createGalleryMarkup(galleryItems);

// Add event listener
list.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
}
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
