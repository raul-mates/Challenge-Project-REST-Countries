import { CountryModel } from "../models/country.model";
import { getCountryISO2 } from "../get-countries";
import { closeCountryDetails } from "../inputHandlers/close.country.details";
import { fetchCountryDetails } from "../app";

export const renderCountryDetails = (countryDetails: CountryModel[]) => {
    //DOM
    const body = document.querySelector('body')! as HTMLBodyElement;
    const countryDetailsContainer = document.createElement('div');
    countryDetailsContainer.classList.add('country__details-container');
    countryDetailsContainer.classList.add('general-width');
    countryDetailsContainer.classList.add('center');
    body.appendChild(countryDetailsContainer);

    //VARIABLES
    let currencies: string[];
    let nativeName: string[];
    const borderCountries = countryDetails[0].borders ? countryDetails[0].borders.map(country => getCountryISO2(country)) : [];
    let regionNames = new Intl.DisplayNames(['en'], {type: 'region'})


    !countryDetails[0].hasOwnProperty('currencies') ? currencies = ['No available currency.'] : currencies = (Object.values(countryDetails[0].currencies)).map(currencyType => currencyType.name);
    !countryDetails[0].name.hasOwnProperty('nativeName') ? nativeName = ['No native name available.'] : nativeName = (Object.values(countryDetails[0].name.nativeName)).map(name => name.common);

    const addBorderCountries = () => {
        const borderCountriesContainer = document.querySelector('.bordering-country__container')! as HTMLDivElement;

        if (borderCountries.length === 0) borderCountriesContainer.insertAdjacentHTML('beforeend', `<span class="bordering-country--not-found">There are no bordering countries with this country!</span>`)

        borderCountries.forEach((country, i) => {
            borderCountriesContainer.insertAdjacentHTML('beforeend', `
                ${i < 3 ? (country ? `<span class="bordering-country">${regionNames.of(country)}</span>` : ``) : ""}
           `)
        })
    }

    countryDetailsContainer.insertAdjacentHTML('beforeend', `
        <div class="wrapper__return-button">
            <button class="button__return">&larr; Back</button>
        </div>
        <div class="container__country-info">
            <div class="container__country-flag">
                <img src="${countryDetails[0].flags.png}" alt="Country flag" class="country-flag">
            </div>
            <div class="container__country-details">
                <h2 class="heading-secondary">${countryDetails[0].name.common}</h2>
                <div class="country-info__wrapper">
                    <ul class="country-info__list">
                        <li class="country-info__item"><strong>Native name: </strong>${nativeName ? nativeName.at(-1) : nativeName[0]}</li>
                        <li class="country-info__item"><strong>Population: </strong>${countryDetails[0].population.toLocaleString('en-US')}</li>
                        <li class="country-info__item"><strong>Region: </strong>${countryDetails[0].region ? countryDetails[0].region : 'No region available.'}</li>
                        <li class="country-info__item"><strong>Sub Region: </strong>${countryDetails[0].subregion ? countryDetails[0].subregion : 'No sub region available.'}</li>
                        <li class="country-info__item"><strong>Capital: </strong>${countryDetails[0].capital ? countryDetails[0].capital : 'No capital available.'}</li>
                    </ul>
                    <ul class="country-info__list">
                        <li class="country-info__item"><strong>Top Level Domain: </strong>${countryDetails[0].tld}</li>
                        <li class="country-info__item"><strong>Currencies: </strong>${currencies.length === 1 ? currencies[0] : currencies.join(', ')}</li>
                        <li class="country-info__item"><strong>Languages: </strong>${countryDetails[0].hasOwnProperty('languages') ? Object.values(countryDetails[0].languages).toString().replaceAll(',', ', ') : 'No language available.'}</li>
                    </ul>
                </div>
                <div class="container__border-countries">
                    <p class="border-countries__text"><strong>Border countries: </strong></p>
                    <div class="bordering-country__container"></div>
                </div>
            </div>
        </div>
    `)
    addBorderCountries();
    closeCountryDetails();
}

export const getCountryDetails = () => {
    const countryDetails = document.querySelectorAll<HTMLAnchorElement>('.country__details')!;
    const countriesSection = document.querySelector('.countries__section')! as HTMLElement;
    const inputsContainer = document.querySelector('.inputs__container')! as HTMLDivElement;


    countryDetails.forEach(country => {
        country.addEventListener('click', () => {
            countriesSection.style.display = 'none';
            inputsContainer.style.display = 'none';
            //@ts-ignore
            fetchCountryDetails(country.firstElementChild!.dataset.official)
        })
    })
}