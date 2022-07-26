export const toggleThemeMode = (): void => {
    //DOM Elements
    const checkbox = document.getElementById('theme-mode__checkbox')! as HTMLInputElement;
    const header = document.querySelector('.header')! as HTMLElement;
    const body = document.querySelector('body')! as HTMLBodyElement;
    const searchInput = document.querySelector('.search-input')! as HTMLInputElement;
    const regionInput = document.querySelector('.region-input')! as HTMLInputElement;
    const countryDetails = document.querySelectorAll<HTMLAnchorElement>('.country__details');
    const countryContainer = document.querySelectorAll<HTMLDivElement>('.country__container');
    const searchButton = document.querySelector('.button__search-icon') as HTMLButtonElement;


    //Color variables as in SASS
    const colorDarkBlue = "hsl(209, 23%, 22%)";
    const colorVeryDarkBlue = "hsl(207, 26%, 17%)";
    const colorVeryDarkBlueText = "#415B91";
    // const colorVeryLightGrayBackground = "hsl(0, 0%, 98%)";
    const colorWhite = "#f3f3f3";

    const darkTheme = (): void => {
        header.style.backgroundColor = colorDarkBlue;
        body.style.backgroundColor = colorVeryDarkBlue;
        body.style.color = colorWhite;
        searchInput.style.backgroundColor = colorDarkBlue;
        regionInput.style.backgroundColor = colorDarkBlue;
        searchButton.style.color = 'rgb(32, 44, 55)';
        searchButton.style.backgroundColor = '#e7e6ef';
        countryContainer.forEach(country => {
            country.style.backgroundColor = colorDarkBlue;
        })

        if (countryDetails) countryDetails.forEach(country => country.style.backgroundColor = colorDarkBlue)
    }

    const lightTheme = (): void => {
        header.style.backgroundColor = '#F9F9F9';
        body.style.backgroundColor = '#fff';
        body.style.color = colorVeryDarkBlueText;
        searchInput.style.backgroundColor = '#fff';
        regionInput.style.backgroundColor = '#fff';
        searchButton.style.color = '#fff';
        searchButton.style.backgroundColor = '#81b0ff';
        countryContainer.forEach(country => {
            country.style.backgroundColor = '#F9F9F9';
        })

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
