import { CountryModel } from "./models/country.model";


const genericFetch = async <T>(url: URL | RequestInfo, init?: RequestInit): Promise<T> => {
    const fetchedData: Response = await fetch(url, init);
    return (await fetchedData.json()) as T;
}

const fetchCountries = async (): Promise<void> => {
    const data = await genericFetch<CountryModel[]>('https://restcountries.com/v3.1/all');
    renderCountries(data);
}

fetchCountries();

const renderCountries = (countries: CountryModel[]) => {
    const countrySection = document.querySelector(".countries__section") as HTMLElement;
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
    `)
    })
};


const fetchCountryByInput = async (countryName: string) => {
    try {
        const getCountry = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await getCountry.json();
        renderCountries(data);
    } catch (err) {
        alert('Could not find specified country!');
    }
}


const searchInputHandler = () => {
    const searchInput = document.querySelector('.search-input')! as HTMLInputElement;
    const searchButton = document.querySelector('.button__search-icon')! as HTMLButtonElement;
    const countrySection = document.querySelector(".countries__section")! as HTMLElement;

    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (searchInput.value.length > 0) {
            countrySection.innerHTML = '';
            fetchCountryByInput(searchInput.value);
        }
    })

    searchInput.addEventListener('input', (e) => {
        console.log(e.target)
    })
}

searchInputHandler();

const fetchByRegion = async (region: string) => {
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
    const data = await response.json();
    renderCountries(data);
}

const filterByRegion = () => {
    const countrySection = document.querySelector(".countries__section") as HTMLElement;
    const selectForm = document.querySelector('.region-input')! as HTMLSelectElement;
    selectForm.addEventListener('change', () => {
        if (selectForm.value !== '') {
            countrySection.innerHTML = '';
            fetchByRegion(selectForm.value);
        }
        if (selectForm.value === 'All') {
            fetchCountries();
        }
    })
}
filterByRegion();

const toggleThemeMode = (): void => {
    //DOM Elements
    const checkbox = document.getElementById('theme-mode__checkbox')! as HTMLInputElement;
    const headingPrimary = document.querySelector('.heading-primary')! as HTMLElement;
    const header = document.querySelector('.header')! as HTMLElement;
    const body = document.querySelector('body')! as HTMLBodyElement;
    const searchInput = document.querySelector('.search-input')! as HTMLInputElement;
    const searchButton = document.querySelector('.button__search-icon')! as HTMLButtonElement;
    const regionInput = document.querySelector('.region-input')! as HTMLInputElement;

    //Color variables as in SASS
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
        } else {
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
    })
}
toggleThemeMode();
