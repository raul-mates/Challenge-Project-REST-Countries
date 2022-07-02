"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapCountryModelToRenderCountryModel = void 0;
const mapCountryModelToRenderCountryModel = (country) => ({
    region: country.region,
    population: country.population,
    capital: country.capital,
    flag: country.flags.png
});
exports.mapCountryModelToRenderCountryModel = mapCountryModelToRenderCountryModel;
//# sourceMappingURL=mapping.util.js.map