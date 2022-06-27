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
const fetchCountries = () => __awaiter(void 0, void 0, void 0, function* () {
    const fetchedData = yield fetch(`https://restcountries.com/v3.1/all`);
    const data = yield fetchedData.json();
    console.log(data);
    renderCountry(data);
});
fetchCountries();
const renderCountry = (countries) => {
    const countrySection = document.querySelector(".countries__section");
    countries.forEach(country => {
        countrySection.insertAdjacentHTML('beforeend', `
    <div class="country__container">
            <img src="${country.flags.png}" alt="" class="country__flag">
            <ul class="country__list">
                <li class="country__list--item">Population: ${country.population}</li>
                <li class="country__list--item">Region: ${country.region}</li>
                <li class="country__list--item">Capital: ${country.capital}</li>
            </ul>
        </div>
    `);
    });
};
//# sourceMappingURL=app.js.map