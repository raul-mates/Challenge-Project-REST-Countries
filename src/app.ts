import { CountryModel } from "./models/country.model";


const genericFetch = async <T>(url: URL | RequestInfo, init?: RequestInit): Promise<T> => {
    const fetchedData: Response = await fetch(url, init);
    return (await fetchedData.json()) as T;
}

const fetchCountries = async (): Promise<void> => {
    const data = await genericFetch<CountryModel[]>('https://restcountries.com/v3.1/all');
    renderCountries(data);
    filterByRegion();
    toggleThemeMode();
    searchInputHandler();
}

fetchCountries();

const renderCountries = (countries: CountryModel[]) => {
    const countrySection = document.querySelector(".countries__section") as HTMLElement;
    countries.forEach((country) => {
        countrySection.insertAdjacentHTML('beforeend', `
        <a href="#" class="country__details">
            <div class="country__container light" data-region="${country.region}" data-name="${country.name.common}" data-native-name="${country.name.nativeName}" data-sub-region="${country.subregion}" data-currency="${country.currencies}" data-toplevel-domain="${country.tld}" data-languages="${country.languages}">
                <img src="${country.flags.png}" alt="${country.flag}" class="country__flag" />
                <h3 class="country__name">${country.name.common}</h3>
                <ul class="country__list">
                    <li class="country__list--item"><strong>Population:</strong> ${country.population.toLocaleString('en-US')}</li>
                    <li class="country__list--item"><strong>Region:</strong> ${country.region}</li>
                    <li class="country__list--item"><strong>Capital:</strong> ${country.capital ? country.capital[0] : '(╯°□°）╯︵ ┻━┻'}</li>
                </ul>
            </div>
        </a>
    `)
    })
};


const searchInputHandler = () => {
    const searchInput = document.querySelector('.search-input')! as HTMLInputElement;
    const countryContainer = [...document.querySelectorAll<HTMLDivElement>(".country__container")]!;
    const selectRegion = document.querySelector('.region-input')! as HTMLSelectElement;

    searchInput.addEventListener('input', (e) => {
        e.preventDefault();
        console.log(e)
        countryContainer.forEach(country => {
            if (searchInput.value.length === 0 && selectRegion.value === '') {
                country.parentElement!.classList.remove('hidden');
            }
            if (searchInput.value.length === 0 && country.dataset.region === selectRegion.value) {
                country.parentElement!.classList.remove('hidden');
            }
            if (!country.dataset.name!.toLowerCase().startsWith(`${searchInput.value.toLowerCase()}`)) {
                country.parentElement!.classList.add('hidden');
            } else if (country.dataset.name!.toLowerCase().startsWith(`${searchInput.value.toLowerCase()}`) && country.dataset.region === selectRegion.value || selectRegion.value === '') {
                country.parentElement!.classList.remove('hidden');
            }
        })
    })
}


const filterByRegion = () => {
    const countryContainer = [...document.querySelectorAll<HTMLDivElement>(".country__container")]!;
    const selectRegion = document.querySelector('.region-input')! as HTMLSelectElement;
    selectRegion.addEventListener('change', () => {
        let regionSelected = selectRegion.value;
        countryContainer.forEach(country => {
            if (country.dataset.region !== regionSelected) {
                country.parentElement!.classList.add('hidden');
            } else {
                country.parentElement!.classList.remove('hidden');
            }

            if (regionSelected === '') {
                country.parentElement!.classList.remove('hidden');
            }
        })
    })
}

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

    const darkTheme = (): void => {
        header.style.backgroundColor = colorDarkBlue;
        headingPrimary.style.color = colorWhite;
        body.style.backgroundColor = colorVeryDarkBlue;
        document.querySelectorAll('.light').forEach(el => {
            el.classList.replace('light', 'dark')
        })
        searchInput.style.backgroundColor = colorDarkBlue;
        searchInput.style.color = colorWhite;
        regionInput.style.backgroundColor = colorDarkBlue;
        regionInput.style.color = colorWhite;
        searchButton.style.backgroundColor = colorDarkBlue;
        searchButton.style.color = colorWhite;
    }

    const lightTheme = (): void => {
        header.style.backgroundColor = colorWhite;
        headingPrimary.style.color = colorVeryDarkBlueText;
        body.style.backgroundColor = colorVeryLightGrayBackground;
        document.querySelectorAll('.dark').forEach(el => {
            el.classList.replace('dark', 'light')
        })
        searchInput.style.backgroundColor = colorWhite;
        searchInput.style.color = colorVeryDarkBlueText;
        regionInput.style.backgroundColor = colorWhite;
        regionInput.style.color = colorVeryDarkBlueText;
        searchButton.style.backgroundColor = colorWhite;
        searchButton.style.color = colorVeryDarkBlueText;
    }


    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        checkbox.checked = true;
        darkTheme();
    }

    // Checked event and theme toggle
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            darkTheme()
        } else {
            lightTheme()
        }
    })
}
