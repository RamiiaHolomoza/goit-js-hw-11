// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

export function showError(error) {
    iziToast.error({
        position: "topRight",
        message: `${error}`,
    });
}

export function createGallary(data) {

    document.querySelector('.gallery-list').insertAdjacentHTML("beforeend", createGallary(images));

}


export function cleanGallery() {
    const list = document.querySelector(".gallery-list");
    list.innerHTML = "";
}