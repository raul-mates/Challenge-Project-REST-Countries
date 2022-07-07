"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeCountryDetails = void 0;
const closeCountryDetails = () => {
    const countryDetailsContainer = document.querySelector('.country__details-container');
    const countriesSection = document.querySelector('.countries__section');
    const inputsContainer = document.querySelector('.inputs__container');
    const returnBtn = document.querySelector('.button__return');
    returnBtn.addEventListener('click', (e) => {
        e.preventDefault();
        countriesSection.style.display = '';
        inputsContainer.style.display = '';
        countryDetailsContainer.remove();
    });
};
exports.closeCountryDetails = closeCountryDetails;
//# sourceMappingURL=close.country.details.js.map