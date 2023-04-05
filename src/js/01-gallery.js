// Add imports above this line
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
import createGalleryitems from './gallery/func-create-gallery-items';
import { option } from './gallery/option-for-library';
import lazyload from './gallery/lazy-load';
import SimpleLightbox from 'simplelightbox';

const galleryEl = document.querySelector('.gallery');
const galleryMurkup = createGalleryitems(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryMurkup);
const lazyImg = document.querySelectorAll("img[loading='lazy']");
const gallery = new SimpleLightbox('.gallery a', option);
lazyload(lazyImg);
