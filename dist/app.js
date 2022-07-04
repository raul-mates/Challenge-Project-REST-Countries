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
    toggleThemeMode();
    filterByRegion();
    searchInputHandler();
});
fetchCountries();
const renderCountries = (countries) => {
    const countrySection = document.querySelector(".countries__section");
    countries.forEach((country) => {
        countrySection.insertAdjacentHTML('beforeend', `
        <a href="#" class="country__details">
            <div class="country__container" data-region="${country.region}" data-name="${country.name.common}">
                <img src="${country.flags.png}" alt="${country.flag}" class="country__flag" />
                <h3 class="country__name">${country.name.common}</h3>
                <ul class="country__list">
                    <li class="country__list--item"><strong>Population:</strong> ${country.population.toLocaleString('en-US')}</li>
                    <li class="country__list--item"><strong>Region:</strong> ${country.region}</li>
                    <li class="country__list--item"><strong>Capital:</strong> ${country.capital ? country.capital[0] : '(╯°□°）╯︵ ┻━┻'}</li>
                </ul>
            </div>
        </a>
    `);
    });
};
const searchInputHandler = () => {
    const searchInput = document.querySelector('.search-input');
    const countryContainer = [...document.querySelectorAll(".country__container")];
    searchInput.addEventListener('input', (e) => {
        e.preventDefault();
        console.log(searchInput.value);
        countryContainer.forEach(country => {
            if (searchInput.value.length === 0) {
                country.parentElement.classList.remove('hidden');
            }
            if (!country.dataset.name.toLowerCase().startsWith(`${searchInput.value.toLowerCase()}`)) {
                country.parentElement.classList.add('hidden');
            }
            else {
                country.parentElement.classList.remove('hidden');
            }
        });
    });
};
const filterByRegion = () => {
    const countryContainer = [...document.querySelectorAll(".country__container")];
    const selectRegion = document.querySelector('.region-input');
    selectRegion.addEventListener('change', () => {
        let regionSelected = selectRegion.value;
        countryContainer.forEach(country => {
            if (country.dataset.region !== regionSelected) {
                country.parentElement.classList.add('hidden');
            }
            else {
                country.parentElement.classList.remove('hidden');
            }
            if (regionSelected === '') {
                country.parentElement.classList.remove('hidden');
            }
        });
    });
};
const toggleThemeMode = () => {
    const checkbox = document.getElementById('theme-mode__checkbox');
    const headingPrimary = document.querySelector('.heading-primary');
    const header = document.querySelector('.header');
    const body = document.querySelector('body');
    const countryDetails = document.querySelectorAll('.country__details');
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.button__search-icon');
    const regionInput = document.querySelector('.region-input');
    const countryContainer = document.querySelectorAll('.country__container');
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
            countryDetails.forEach(country => {
                country.style.color = colorWhite;
            });
            countryContainer.forEach(country => {
                country.style.backgroundColor = colorDarkBlue;
            });
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
            countryDetails.forEach(country => {
                country.style.color = colorVeryDarkBlueText;
            });
            countryContainer.forEach(country => {
                country.style.backgroundColor = colorWhite;
            });
            searchInput.style.backgroundColor = colorWhite;
            searchInput.style.color = colorVeryDarkBlueText;
            regionInput.style.backgroundColor = colorWhite;
            regionInput.style.color = colorVeryDarkBlueText;
            searchButton.style.backgroundColor = colorWhite;
            searchButton.style.color = colorVeryDarkBlueText;
        }
    });
};
//# sourceMappingURL=app.js.map