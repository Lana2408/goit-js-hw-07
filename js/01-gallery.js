import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerGallery = document.querySelector(".gallery");
const markup = galleryItems.map(({ preview, original, description }) => `
 <li class = "gallery__item"> <a class="gallery__link" href="${original}">
   <img src="${preview}" data-source="${original}" class = "gallery__image" alt="${description}" loading="lazy" width="300">
   </a>
 </li>
 `
   )
   .join("");
   containerGallery.insertAdjacentHTML("beforeend", markup);
console.log(galleryItems);


