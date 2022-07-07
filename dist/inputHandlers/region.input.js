"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByRegion = void 0;
const filterByRegion = () => {
    const countryContainer = [...document.querySelectorAll(".country__container")];
    const selectRegion = document.querySelector('.region-input');
    selectRegion.addEventListener('change', () => {
        let regionSelected = selectRegion.value;
        countryContainer.forEach(country => {
            country.dataset.region !== regionSelected ? country.parentElement.classList.add('hidden') : country.parentElement.classList.remove('hidden');
            if (regionSelected === '')
                country.parentElement.classList.remove('hidden');
        });
    });
};
exports.filterByRegion = filterByRegion;
//# sourceMappingURL=region.input.js.map