import { CountryModel } from "../models/country.model";

//prettier-ignore
export const renderCountriesInListStyle = (countries: CountryModel[]) => {
  const listStyleButton = document.querySelector(".list-icon") as HTMLElement;
  const countrySection = document.querySelector(".countries__section") as HTMLElement;
  const countriesGridStyleContainer = document.querySelector('.countries-grid-style') as HTMLDivElement;

  listStyleButton.addEventListener("click", () => {
    countriesGridStyleContainer.classList.add('hidden');

    countries.forEach((country: CountryModel) => {
        countrySection.insertAdjacentHTML('beforeend', `
        <a href="#" class="country__details hidden">
            <div class="country__container" data-region="${country.region}" data-name="${country.name.common}" data-official="${country.name.official}">
                <img src="https://flagcdn.com/w640/${country.cca2!.toLowerCase()}.png" alt="${country.flag}" class="country__flag" />
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
  });
};