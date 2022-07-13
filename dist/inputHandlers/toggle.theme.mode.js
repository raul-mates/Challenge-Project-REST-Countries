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
    const colorDarkBlue = "hsl(209, 23%, 22%)";
    const colorVeryDarkBlue = "hsl(207, 26%, 17%)";
    const colorVeryDarkBlueText = "hsl(200, 15%, 8%)";
    const colorVeryLightGrayBackground = "hsl(0, 0%, 98%)";
    const colorWhite = "#f3f3f3";
    const darkTheme = () => {
        header.style.backgroundColor = colorDarkBlue;
        body.style.backgroundColor = colorVeryDarkBlue;
        body.style.color = colorWhite;
        searchInput.style.backgroundColor = colorDarkBlue;
        regionInput.style.backgroundColor = colorDarkBlue;
        if (countryDetails)
            countryDetails.forEach(country => country.style.backgroundColor = colorDarkBlue);
    };
    const lightTheme = () => {
        header.style.backgroundColor = colorWhite;
        body.style.backgroundColor = colorVeryLightGrayBackground;
        body.style.color = colorVeryDarkBlueText;
        searchInput.style.backgroundColor = colorWhite;
        regionInput.style.backgroundColor = colorWhite;
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