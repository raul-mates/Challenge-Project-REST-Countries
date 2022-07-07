export const toggleThemeMode = (): void => {
    //DOM Elements
    const checkbox = document.getElementById('theme-mode__checkbox')! as HTMLInputElement;
    const header = document.querySelector('.header')! as HTMLElement;
    const body = document.querySelector('body')! as HTMLBodyElement;
    const searchInput = document.querySelector('.search-input')! as HTMLInputElement;
    const regionInput = document.querySelector('.region-input')! as HTMLInputElement;
    const countryDetails = document.querySelectorAll<HTMLAnchorElement>('.country__details');


    //Color variables as in SASS
    const colorDarkBlue = "hsl(209, 23%, 22%)";
    const colorVeryDarkBlue = "hsl(207, 26%, 17%)";
    const colorVeryDarkBlueText = "hsl(200, 15%, 8%)";
    const colorVeryLightGrayBackground = "hsl(0, 0%, 98%)";
    const colorWhite = "#fff";

    const darkTheme = (): void => {
        header.style.backgroundColor = colorDarkBlue;
        body.style.backgroundColor = colorVeryDarkBlue;
        body.style.color = colorWhite;
        searchInput.style.backgroundColor = colorDarkBlue;
        regionInput.style.backgroundColor = colorDarkBlue;

        if (countryDetails) countryDetails.forEach(country => country.style.backgroundColor = colorDarkBlue)
    }

    const lightTheme = (): void => {
        header.style.backgroundColor = colorWhite;
        body.style.backgroundColor = colorVeryLightGrayBackground;
        body.style.color = colorVeryDarkBlueText;
        searchInput.style.backgroundColor = colorWhite;
        regionInput.style.backgroundColor = colorWhite;

        if (countryDetails) countryDetails.forEach(country => country.style.backgroundColor = colorWhite)
    }


    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        checkbox.checked = true;
        darkTheme();
    }

    // Check event and theme toggle
    checkbox.addEventListener('change', () => {
        checkbox.checked ? darkTheme() : lightTheme();
    })
}