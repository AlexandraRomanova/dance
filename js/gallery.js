// const galleryItem = document.querySelector(".gallery__item");
// const lightbox = document.querySelector('.js-lightbox');
// const lightboxOverlay = document.querySelector('.lightbox__overlay');
// const lightboxImage = document.querySelector('.lightbox__image');
// const buttonRight = document.querySelector(".button__right");
// const buttonLeft = document.querySelector(".button__left");
// const buttonClose = document.querySelector(".button__close");

// galleryItem.addEventListener("click", onOpenModal);
// buttonRight.addEventListener("click", onArrowRight);
// buttonLeft.addEventListener("click", onArrowLeft);
// buttonClose.addEventListener("click", onCloseModal);
// lightboxOverlay.addEventListener("click", onOverlayClick);



// function onOpenModal(event) {
//     event.preventDefault();
//     if (event.target === event.currentTarget) {
//         return;
//     }
//     lightbox.classList.add("is-open");
// }

// function onOverlayClick(event) {
    
// }

// function onArrowRight(event) {
// }

// function onArrowLeft(event) {
// }

// function onCloseModal(event) {   
// }

const gallery = document.querySelector(".gallery");
const largeImg = document.querySelector(".largeImg");
const buttonRight = document.querySelector(".js-right");
const buttonLeft = document.querySelector(".js-left");

gallery.addEventListener("click", onChangeImage);
// buttonRight.addEventListener("click", onRightNext);
// buttonLeft.addEventListener("click", onLeftNext);

function onChangeImage(event) {
    event.preventDefault();

    let galleryLink = event.target.closest("a");
    if (!galleryLink) {
        return;
    }

    largeImg.src = galleryLink.href;
    largeImg.alt = galleryLink.title;
}

// function onRightNext() {
//     const galleryItem = document.querySelector(".gallery__image");
//     const activeImage = largeImg.src;

//     let index = activeImage ? activeImage : 0;

//     if (index < gallery.length - 1) {
//         index += 1;
//     } else {
//         index = 0;
//     }

//     largeImg.src = galleryItem[index];
//     largeImg.alt = galleryItem[index];

    // const activeImage = items.findIndex(
    //     img => img.original === lightboxImageRef.src
    // );

    // let index = activeImage ? activeImage : 0;

    // if (index < items.length - 1) {
    //     index += 1;
    // } else {
    //     index = 0;
    // }
    // largeImg.src = items[index];
    // largeImg.alt = items[index];
// }

// function onLeftNext(event) {   
// }