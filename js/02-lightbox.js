import { galleryItems } from './gallery-items.js';
// Change code below this line



//console.log(galleryItems);


const containerGallery = document.querySelector(".gallery");
const markup = galleryItems.map(({ preview, original, description }) => `
 <li class = "gallery__item"> <a class="gallery__link" href="${original}">
   <img src="${preview}" class = "gallery__image" alt="${description}">
   </a>
 </li>
 `
   )
   .join("");
   containerGallery.insertAdjacentHTML("beforeend", markup);
   
   const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt", 
    captionPosition: "bottom", 
    captionDelay: 250,
  });

   




