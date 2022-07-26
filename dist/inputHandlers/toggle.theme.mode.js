"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleThemeMode = void 0;
const toggleThemeMode = () => {
    const checkbox = document.getElementById('theme-mode__checkbox');
    const header = document.querySelector('.header');
    const body = document.querySelector('body');
    const searchInput = document.querySelector('.search-input');
    const regionInput = document.querySelector('.region-input');
    const countryDetails = document.querySelectorAll('.country__details');
    const countryContainer = document.querySelectorAll('.country__container');
    const searchButton = document.querySelector('.button__search-icon');
    const colorDarkBlue = "hsl(209, 23%, 22%)";
    const colorVeryDarkBlue = "hsl(207, 26%, 17%)";
    const colorVeryDarkBlueText = "#415B91";
    const colorWhite = "#f3f3f3";
    const darkTheme = () => {
        header.style.backgroundColor = colorDarkBlue;
        body.style.backgroundColor = colorVeryDarkBlue;
        body.style.color = colorWhite;
        searchInput.style.backgroundColor = colorDarkBlue;
        regionInput.style.backgroundColor = colorDarkBlue;
        searchButton.style.color = 'rgb(32, 44, 55)';
        searchButton.style.backgroundColor = '#e7e6ef';
        countryContainer.forEach(country => {
            country.style.backgroundColor = colorDarkBlue;
        });
        if (countryDetails)
            countryDetails.forEach(country => country.style.backgroundColor = colorDarkBlue);
    };
    const lightTheme = () => {
        header.style.backgroundColor = '#F9F9F9';
        body.style.backgroundColor = '#fff';
        body.style.color = colorVeryDarkBlueText;
        searchInput.style.backgroundColor = '#fff';
        regionInput.style.backgroundColor = '#fff';
        searchButton.style.color = '#fff';
        searchButton.style.backgroundColor = '#81b0ff';
        countryContainer.forEach(country => {
            country.style.backgroundColor = '#F9F9F9';
        });
        if (countryDetails)
            countryDetails.forEach(country => country.style.backgroundColor = colorWhite);
    };
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        checkbox.checked = true;
        darkTheme();
    }
    checkbox.addEventListener('change', () => {
        checkbox.checked ? darkTheme() : lightTheme();
    });
};
exports.toggleThemeMode = toggleThemeMode;
//# sourceMappingURL=toggle.theme.mode.js.map