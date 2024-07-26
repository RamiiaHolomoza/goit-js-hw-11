import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import searchImagesByQuery from './js/pixabay-api.js';
import { showError } from './js/render-functions.js';

const form = document.querySelector('.gallery-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();

    if (query === '') {
        showError('Please enter a search query.');
        return;
    }

    searchImagesByQuery(query)
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            showError(error);
        });
});