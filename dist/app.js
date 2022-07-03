"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const genericFetch = (url, init) => __awaiter(void 0, void 0, void 0, function* () {
    const fetchedData = yield fetch(url, init);
    return (yield fetchedData.json());
});
const fetchCountries = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield genericFetch('https://restcountries.com/v3.1/all');
    renderCountries(data);
});
fetchCountries();
const renderCountries = (countries) => {
    const countrySection = document.querySelector(".countries__section");
    countries.forEach((country) => {
        countrySection.insertAdjacentHTML('beforeend', `
        <a href="#" class="country__details">
            <div class="country__container" data-name=${country.name.common}>
                <img src="${country.flags.png}" alt="${country.flag}" class="country__flag" />
                <h3 class="country__name">${country.name.common}</h3>
                <ul class="country__list">
                    <li class="country__list--item"><strong>Population:</strong> ${country.population.toLocaleString('en-US')}</li>
                    <li class="country__list--item"><strong>Region:</strong> ${country.region}</li>
                    <li class="country__list--item"><strong>Capital:</strong> ${country.capital ? country.capital[0] : '-'}</li>
                </ul>
            </div>
        </a>
    `);
    });
};
const fetchCountryByInput = (countryName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getCountry = yield fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = yield getCountry.json();
        renderCountries(data);
    }
    catch (err) {
        alert('Could not find specified country!');
    }
});
const searchInputHandler = () => {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.button__search-icon');
    const countrySection = document.querySelector(".countries__section");
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (searchInput.value.length > 0) {
            countrySection.innerHTML = '';
            fetchCountryByInput(searchInput.value);
        }
    });
    searchInput.addEventListener('input', (e) => {
        console.log(e.target);
    });
};
searchInputHandler();
const fetchByRegion = (region) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = yield response.json();
    renderCountries(data);
});
const filterByRegion = () => {
    const countrySection = document.querySelector(".countries__section");
    const selectForm = document.querySelector('.region-input');
    selectForm.addEventListener('change', () => {
        if (selectForm.value !== '') {
            countrySection.innerHTML = '';
            fetchByRegion(selectForm.value);
        }
        if (selectForm.value === 'All') {
            fetchCountries();
        }
    });
};
filterByRegion();
const toggleThemeMode = () => {
    const checkbox = document.getElementById('theme-mode__checkbox');
    const headingPrimary = document.querySelector('.heading-primary');
    const header = document.querySelector('.header');
    const body = document.querySelector('body');
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.button__search-icon');
    const regionInput = document.querySelector('.region-input');
    let colorDarkBlue = "hsl(209, 23%, 22%)";
    let colorVeryDarkBlue = "hsl(207, 26%, 17%)";
    let colorVeryDarkBlueText = "hsl(200, 15%, 8%)";
    let colorVeryLightGrayBackground = "hsl(0, 0%, 98%)";
    let colorWhite = "#fff";
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            header.style.backgroundColor = colorDarkBlue;
            headingPrimary.style.color = colorWhite;
            body.style.backgroundColor = colorVeryDarkBlue;
            searchInput.style.backgroundColor = colorDarkBlue;
            searchInput.style.color = colorWhite;
            regionInput.style.backgroundColor = colorDarkBlue;
            regionInput.style.color = colorWhite;
            searchButton.style.backgroundColor = colorDarkBlue;
            searchButton.style.color = colorWhite;
        }
        else {
            header.style.backgroundColor = colorWhite;
            headingPrimary.style.color = colorVeryDarkBlueText;
            body.style.backgroundColor = colorVeryLightGrayBackground;
            searchInput.style.backgroundColor = colorWhite;
            searchInput.style.color = colorVeryDarkBlueText;
            regionInput.style.backgroundColor = colorWhite;
            regionInput.style.color = colorVeryDarkBlueText;
            searchButton.style.backgroundColor = colorWhite;
            searchButton.style.color = colorVeryDarkBlueText;
        }
    });
};
toggleThemeMode();
//# sourceMappingURL=app.js.map