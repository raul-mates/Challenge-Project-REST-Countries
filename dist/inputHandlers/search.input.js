"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchInputHandler = void 0;
const searchInputHandler = () => {
    const searchInput = document.querySelector('.search-input');
    const countryContainer = [...document.querySelectorAll(".country__container")];
    const selectRegion = document.querySelector('.region-input');
    searchInput.addEventListener('input', (e) => {
        e.preventDefault();
        countryContainer.forEach(country => {
            if (searchInput.value.length === 0 && selectRegion.value === '')
                country.parentElement.classList.remove('hidden');
            if (searchInput.value.length === 0 && country.dataset.region === selectRegion.value)
                country.parentElement.classList.remove('hidden');
            !country.dataset.name.toLowerCase().startsWith(`${searchInput.value.toLowerCase()}`) ? country.parentElement.classList.add('hidden') : country.parentElement.classList.remove('hidden');
        });
    });
};
exports.searchInputHandler = searchInputHandler;
//# sourceMappingURL=search.input.js.map