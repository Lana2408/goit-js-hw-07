import { galleryItems } from './gallery-items.js';
// Change code below this line



console.log(galleryItems);




const instance = basicLightbox.create(`<img src="" width="800" height="600">`, {
    onShow: () => {
      document.addEventListener("keydown", onEscDown);
    },
    onClose: () => {
      document.removeEventListener("keydown", onEscDown);
    },
  });
  
  