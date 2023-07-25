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

const instance = basicLightbox.create(`<img src="" width="800" height="600">`, {
  onShow: () => {
    document.addEventListener("keydown", onEscDown);
  },
  onClose: () => {
    document.removeEventListener("keydown", onEscDown);
  },
});

function onClick(event) {
    
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  instance.element().querySelector("img").src = event.target.dataset.source;

  instance.show();
}

containerGallery.addEventListener("click", onClick);

function onEscDown(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}


