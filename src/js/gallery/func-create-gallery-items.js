
export default function createGalleryitems(image){
    return image.map(({preview, original, description}) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img loading="lazy" class="gallery__image lazyload" data-src="${preview}" alt="${description}" />
    </a>
    </li>`
    
    }).join("")
    };