import { CountryModel } from "./models/country.model";
import { renderCountries } from "./renderers/render.countries";
import { getCountryDetails, renderCountryDetails } from "./renderers/render.country.details";
import { searchInputHandler } from "./inputHandlers/search.input";
import { filterByRegion } from "./inputHandlers/region.input";
import { toggleThemeMode } from "./inputHandlers/toggle.theme.mode";

const genericFetch = async <T>(url: URL | RequestInfo, init?: RequestInit): Promise<T> => {
    const fetchedData: Response = await fetch(url, init);
    return (await fetchedData.json()) as T;
}

const fetchCountries = async (): Promise<void> => {
    const data = await genericFetch<CountryModel[]>('https://restcountries.com/v3.1/all');
    console.log(data)
    renderCountries(data);
    filterByRegion();
    toggleThemeMode();
    searchInputHandler();
    getCountryDetails();
}

fetchCountries();

export const fetchCountryDetails = async (name: string): Promise<void> => {
    const requestDetails = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const countryData = await requestDetails.json()
    renderCountryDetails(countryData);
}
