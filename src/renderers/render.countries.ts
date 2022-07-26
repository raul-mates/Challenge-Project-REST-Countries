import { CountryModel } from "../models/country.model";
//prettier-ignore
export const renderCountries = (countries: CountryModel[]) => {
    const countrySection = document.querySelector(".countries__section") as HTMLDivElement;
    countries.forEach((country) => {
        countrySection.insertAdjacentHTML('beforeend', `
        <a href="#" class="country__details">
            <div class="country__container" data-region="${country.region}" data-name="${country.name.common}" data-official="${country.name.official}">
                <img src="https://flagcdn.com/w640/${country.cca2!.toLowerCase()}.png" alt="${country.flag}" class="country__flag" />
                <div class="container__country-text">
                    <h3 class="country__name">${country.name.common}</h3>
                    <ul class="country__list">
                        <li class="country__list--item"><strong>Population:</strong> ${country.population.toLocaleString('en-US')}</li>
                        <li class="country__list--item"><strong>Region:</strong> ${country.region}</li>
                        <li class="country__list--item"><strong>Capital:</strong> ${country.capital ? country.capital[0] : '(╯°□°）╯︵ ┻━┻'}</li>
                    </ul>
                </div>
            </div>
        </a>
    `)
    })
};
