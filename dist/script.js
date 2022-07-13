/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fetchCountryDetails = void 0;
const render_countries_1 = __webpack_require__(/*! ./renderers/render.countries */ "./src/renderers/render.countries.ts");
const render_country_details_1 = __webpack_require__(/*! ./renderers/render.country.details */ "./src/renderers/render.country.details.ts");
const search_input_1 = __webpack_require__(/*! ./inputHandlers/search.input */ "./src/inputHandlers/search.input.ts");
const region_input_1 = __webpack_require__(/*! ./inputHandlers/region.input */ "./src/inputHandlers/region.input.ts");
const toggle_theme_mode_1 = __webpack_require__(/*! ./inputHandlers/toggle.theme.mode */ "./src/inputHandlers/toggle.theme.mode.ts");
const genericFetch = (url, init) => __awaiter(void 0, void 0, void 0, function* () {
    const fetchedData = yield fetch(url, init);
    return (yield fetchedData.json());
});
const fetchCountries = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield genericFetch('https://restcountries.com/v3.1/all');
    (0, render_countries_1.renderCountries)(data);
    (0, region_input_1.filterByRegion)();
    (0, toggle_theme_mode_1.toggleThemeMode)();
    (0, search_input_1.searchInputHandler)();
    (0, render_country_details_1.getCountryDetails)();
});
fetchCountries();
const fetchCountryDetails = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const requestDetails = yield fetch(`https://restcountries.com/v3.1/name/${name}`);
    const countryData = yield requestDetails.json();
    (0, render_country_details_1.renderCountryDetails)(countryData);
});
exports.fetchCountryDetails = fetchCountryDetails;


/***/ }),

/***/ "./src/get-countries.ts":
/*!******************************!*\
  !*** ./src/get-countries.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCountryISO2 = void 0;
const countryISOMapping = {
    AFG: "AF",
    ALA: "AX",
    ALB: "AL",
    DZA: "DZ",
    ASM: "AS",
    AND: "AD",
    AGO: "AO",
    AIA: "AI",
    ATA: "AQ",
    ATG: "AG",
    ARG: "AR",
    ARM: "AM",
    ABW: "AW",
    AUS: "AU",
    AUT: "AT",
    AZE: "AZ",
    BHS: "BS",
    BHR: "BH",
    BGD: "BD",
    BRB: "BB",
    BLR: "BY",
    BEL: "BE",
    BLZ: "BZ",
    BEN: "BJ",
    BMU: "BM",
    BTN: "BT",
    BOL: "BO",
    BIH: "BA",
    BWA: "BW",
    BVT: "BV",
    BRA: "BR",
    VGB: "VG",
    IOT: "IO",
    BRN: "BN",
    BGR: "BG",
    BFA: "BF",
    BDI: "BI",
    KHM: "KH",
    CMR: "CM",
    CAN: "CA",
    CPV: "CV",
    CYM: "KY",
    CAF: "CF",
    TCD: "TD",
    CHL: "CL",
    CHN: "CN",
    HKG: "HK",
    MAC: "MO",
    CXR: "CX",
    CCK: "CC",
    COL: "CO",
    COM: "KM",
    COG: "CG",
    COD: "CD",
    COK: "CK",
    CRI: "CR",
    CIV: "CI",
    HRV: "HR",
    CUB: "CU",
    CYP: "CY",
    CZE: "CZ",
    DNK: "DK",
    DJI: "DJ",
    DMA: "DM",
    DOM: "DO",
    ECU: "EC",
    EGY: "EG",
    SLV: "SV",
    GNQ: "GQ",
    ERI: "ER",
    EST: "EE",
    ETH: "ET",
    FLK: "FK",
    FRO: "FO",
    FJI: "FJ",
    FIN: "FI",
    FRA: "FR",
    GUF: "GF",
    PYF: "PF",
    ATF: "TF",
    GAB: "GA",
    GMB: "GM",
    GEO: "GE",
    DEU: "DE",
    GHA: "GH",
    GIB: "GI",
    GRC: "GR",
    GRL: "GL",
    GRD: "GD",
    GLP: "GP",
    GUM: "GU",
    GTM: "GT",
    GGY: "GG",
    GIN: "GN",
    GNB: "GW",
    GUY: "GY",
    HTI: "HT",
    HMD: "HM",
    VAT: "VA",
    HND: "HN",
    HUN: "HU",
    ISL: "IS",
    IND: "IN",
    IDN: "ID",
    IRN: "IR",
    IRQ: "IQ",
    IRL: "IE",
    IMN: "IM",
    ISR: "IL",
    ITA: "IT",
    JAM: "JM",
    JPN: "JP",
    JEY: "JE",
    JOR: "JO",
    KAZ: "KZ",
    KEN: "KE",
    KIR: "KI",
    PRK: "KP",
    KOR: "KR",
    KWT: "KW",
    KGZ: "KG",
    LAO: "LA",
    LVA: "LV",
    LBN: "LB",
    LSO: "LS",
    LBR: "LR",
    LBY: "LY",
    LIE: "LI",
    LTU: "LT",
    LUX: "LU",
    MKD: "MK",
    MDG: "MG",
    MWI: "MW",
    MYS: "MY",
    MDV: "MV",
    MLI: "ML",
    MLT: "MT",
    MHL: "MH",
    MTQ: "MQ",
    MRT: "MR",
    MUS: "MU",
    MYT: "YT",
    MEX: "MX",
    FSM: "FM",
    MDA: "MD",
    MCO: "MC",
    MNG: "MN",
    MNE: "ME",
    MSR: "MS",
    MAR: "MA",
    MOZ: "MZ",
    MMR: "MM",
    NAM: "NA",
    NRU: "NR",
    NPL: "NP",
    NLD: "NL",
    ANT: "AN",
    NCL: "NC",
    NZL: "NZ",
    NIC: "NI",
    NER: "NE",
    NGA: "NG",
    NIU: "NU",
    NFK: "NF",
    MNP: "MP",
    NOR: "NO",
    OMN: "OM",
    PAK: "PK",
    PLW: "PW",
    PSE: "PS",
    PAN: "PA",
    PNG: "PG",
    PRY: "PY",
    PER: "PE",
    PHL: "PH",
    PCN: "PN",
    POL: "PL",
    PRT: "PT",
    PRI: "PR",
    QAT: "QA",
    REU: "RE",
    ROU: "RO",
    RUS: "RU",
    RWA: "RW",
    BLM: "BL",
    SHN: "SH",
    KNA: "KN",
    LCA: "LC",
    MAF: "MF",
    SPM: "PM",
    VCT: "VC",
    WSM: "WS",
    SMR: "SM",
    STP: "ST",
    SAU: "SA",
    SEN: "SN",
    SRB: "RS",
    SYC: "SC",
    SLE: "SL",
    SGP: "SG",
    SVK: "SK",
    SVN: "SI",
    SLB: "SB",
    SOM: "SO",
    ZAF: "ZA",
    SGS: "GS",
    SSD: "SS",
    ESP: "ES",
    LKA: "LK",
    SDN: "SD",
    SUR: "SR",
    SJM: "SJ",
    SWZ: "SZ",
    SWE: "SE",
    CHE: "CH",
    SYR: "SY",
    TWN: "TW",
    TJK: "TJ",
    TZA: "TZ",
    THA: "TH",
    TLS: "TL",
    TGO: "TG",
    TKL: "TK",
    TON: "TO",
    TTO: "TT",
    TUN: "TN",
    TUR: "TR",
    TKM: "TM",
    TCA: "TC",
    TUV: "TV",
    UGA: "UG",
    UKR: "UA",
    ARE: "AE",
    GBR: "GB",
    USA: "US",
    UMI: "UM",
    URY: "UY",
    UZB: "UZ",
    VUT: "VU",
    VEN: "VE",
    VNM: "VN",
    VIR: "VI",
    WLF: "WF",
    ESH: "EH",
    YEM: "YE",
    ZMB: "ZM",
    ZWE: "ZW",
    XKX: "XK"
};
const getCountryISO2 = (countryCode) => {
    return countryISOMapping[countryCode];
};
exports.getCountryISO2 = getCountryISO2;


/***/ }),

/***/ "./src/inputHandlers/close.country.details.ts":
/*!****************************************************!*\
  !*** ./src/inputHandlers/close.country.details.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.closeCountryDetails = void 0;
const closeCountryDetails = () => {
    const countryDetailsContainer = document.querySelector('.country__details-container');
    const countriesSection = document.querySelector('.countries__section');
    const inputsContainer = document.querySelector('.inputs__container');
    const returnBtn = document.querySelector('.button__return');
    returnBtn.addEventListener('click', (e) => {
        e.preventDefault();
        countriesSection.style.display = '';
        inputsContainer.style.display = '';
        countryDetailsContainer.remove();
    });
};
exports.closeCountryDetails = closeCountryDetails;


/***/ }),

/***/ "./src/inputHandlers/region.input.ts":
/*!*******************************************!*\
  !*** ./src/inputHandlers/region.input.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.filterByRegion = void 0;
const filterByRegion = () => {
    const countryContainer = [...document.querySelectorAll(".country__container")];
    const selectRegion = document.querySelector('.region-input');
    selectRegion.addEventListener('change', () => {
        let regionSelected = selectRegion.value;
        countryContainer.forEach(country => {
            country.dataset.region !== regionSelected ? country.parentElement.classList.add('hidden') : country.parentElement.classList.remove('hidden');
            if (regionSelected === '')
                country.parentElement.classList.remove('hidden');
        });
    });
};
exports.filterByRegion = filterByRegion;


/***/ }),

/***/ "./src/inputHandlers/search.input.ts":
/*!*******************************************!*\
  !*** ./src/inputHandlers/search.input.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.searchInputHandler = void 0;
const searchInputHandler = () => {
    const searchInput = document.querySelector('.search-input');
    const countryContainer = [...document.querySelectorAll(".country__container")];
    const selectRegion = document.querySelector('.region-input');
    searchInput.addEventListener('input', (e) => {
        e.preventDefault();
        countryContainer.forEach(country => {
            if (searchInput.value.length === 0 && selectRegion.value === '')
                country.parentElement.classList.remove('hidden');
            if (searchInput.value.length === 0 && country.dataset.region === selectRegion.value)
                country.parentElement.classList.remove('hidden');
            !country.dataset.name.toLowerCase().startsWith(`${searchInput.value.toLowerCase()}`) ? country.parentElement.classList.add('hidden') : country.parentElement.classList.remove('hidden');
        });
    });
};
exports.searchInputHandler = searchInputHandler;


/***/ }),

/***/ "./src/inputHandlers/toggle.theme.mode.ts":
/*!************************************************!*\
  !*** ./src/inputHandlers/toggle.theme.mode.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toggleThemeMode = void 0;
const toggleThemeMode = () => {
    const checkbox = document.getElementById('theme-mode__checkbox');
    const header = document.querySelector('.header');
    const body = document.querySelector('body');
    const searchInput = document.querySelector('.search-input');
    const regionInput = document.querySelector('.region-input');
    const countryDetails = document.querySelectorAll('.country__details');
    const colorDarkBlue = "hsl(209, 23%, 22%)";
    const colorVeryDarkBlue = "hsl(207, 26%, 17%)";
    const colorVeryDarkBlueText = "hsl(200, 15%, 8%)";
    const colorVeryLightGrayBackground = "hsl(0, 0%, 98%)";
    const colorWhite = "#f3f3f3";
    const darkTheme = () => {
        header.style.backgroundColor = colorDarkBlue;
        body.style.backgroundColor = colorVeryDarkBlue;
        body.style.color = colorWhite;
        searchInput.style.backgroundColor = colorDarkBlue;
        regionInput.style.backgroundColor = colorDarkBlue;
        if (countryDetails)
            countryDetails.forEach(country => country.style.backgroundColor = colorDarkBlue);
    };
    const lightTheme = () => {
        header.style.backgroundColor = colorWhite;
        body.style.backgroundColor = colorVeryLightGrayBackground;
        body.style.color = colorVeryDarkBlueText;
        searchInput.style.backgroundColor = colorWhite;
        regionInput.style.backgroundColor = colorWhite;
        if (countryDetails)
            countryDetails.forEach(country => country.style.backgroundColor = colorWhite);
    };
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        checkbox.checked = true;
        darkTheme();
    }
    checkbox.addEventListener('change', () => {
        checkbox.checked ? darkTheme() : lightTheme();
    });
};
exports.toggleThemeMode = toggleThemeMode;


/***/ }),

/***/ "./src/renderers/render.countries.ts":
/*!*******************************************!*\
  !*** ./src/renderers/render.countries.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderCountries = void 0;
const renderCountries = (countries) => {
    const countrySection = document.querySelector(".countries__section");
    countries.forEach((country) => {
        countrySection.insertAdjacentHTML('beforeend', `
        <a href="#" class="country__details">
            <div class="country__container" data-region="${country.region}" data-name="${country.name.common}" data-official="${country.name.official}">
                <img src="https://flagcdn.com/w640/${country.cca2.toLowerCase()}.png" alt="${country.flag}" class="country__flag" />
                <h3 class="country__name">${country.name.common}</h3>
                <ul class="country__list">
                    <li class="country__list--item"><strong>Population:</strong> ${country.population.toLocaleString('en-US')}</li>
                    <li class="country__list--item"><strong>Region:</strong> ${country.region}</li>
                    <li class="country__list--item"><strong>Capital:</strong> ${country.capital ? country.capital[0] : '(╯°□°）╯︵ ┻━┻'}</li>
                </ul>
            </div>
        </a>
    `);
    });
};
exports.renderCountries = renderCountries;


/***/ }),

/***/ "./src/renderers/render.country.details.ts":
/*!*************************************************!*\
  !*** ./src/renderers/render.country.details.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCountryDetails = exports.renderCountryDetails = void 0;
const get_countries_1 = __webpack_require__(/*! ../get-countries */ "./src/get-countries.ts");
const close_country_details_1 = __webpack_require__(/*! ../inputHandlers/close.country.details */ "./src/inputHandlers/close.country.details.ts");
const app_1 = __webpack_require__(/*! ../app */ "./src/app.ts");
const renderCountryDetails = (countryDetails) => {
    const body = document.querySelector('body');
    const countryDetailsContainer = document.createElement('div');
    countryDetailsContainer.classList.add('country__details-container');
    countryDetailsContainer.classList.add('general-width');
    countryDetailsContainer.classList.add('center');
    body.appendChild(countryDetailsContainer);
    let currencies;
    let nativeName;
    const borderCountries = countryDetails[0].borders ? countryDetails[0].borders.map(country => (0, get_countries_1.getCountryISO2)(country)) : [];
    let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    !countryDetails[0].hasOwnProperty('currencies') ? currencies = ['No available currency.'] : currencies = (Object.values(countryDetails[0].currencies)).map(currencyType => currencyType.name);
    !countryDetails[0].name.hasOwnProperty('nativeName') ? nativeName = ['No native name available.'] : nativeName = (Object.values(countryDetails[0].name.nativeName)).map(name => name.common);
    const addBorderCountries = () => {
        const borderCountriesContainer = document.querySelector('.bordering-country__container');
        if (borderCountries.length === 0)
            borderCountriesContainer.insertAdjacentHTML('beforeend', `<span class="bordering-country--not-found">There are no bordering countries with this country!</span>`);
        borderCountries.forEach((country, i) => {
            borderCountriesContainer.insertAdjacentHTML('beforeend', `
                ${i < 3 ? (country ? `<span class="bordering-country">${regionNames.of(country)}</span>` : ``) : ""}
           `);
        });
    };
    countryDetailsContainer.insertAdjacentHTML('beforeend', `
        <div class="wrapper__return-button">
            <button class="button__return">&larr; Back</button>
        </div>
        <div class="container__country-info">
            <div class="container__country-flag">
                <img src="https://flagcdn.com/w1280/${countryDetails[0].cca2.toLowerCase()}.png" alt="Country flag" class="country-flag">
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
    `);
    addBorderCountries();
    (0, close_country_details_1.closeCountryDetails)();
};
exports.renderCountryDetails = renderCountryDetails;
const getCountryDetails = () => {
    const countryDetails = document.querySelectorAll('.country__details');
    const countriesSection = document.querySelector('.countries__section');
    const inputsContainer = document.querySelector('.inputs__container');
    countryDetails.forEach(country => {
        country.addEventListener('click', () => {
            countriesSection.style.display = 'none';
            inputsContainer.style.display = 'none';
            (0, app_1.fetchCountryDetails)(country.firstElementChild.dataset.official);
        });
    });
};
exports.getCountryDetails = getCountryDetails;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwSEFBK0Q7QUFDL0QsNElBQTZGO0FBQzdGLHNIQUFrRTtBQUNsRSxzSEFBOEQ7QUFDOUQscUlBQW9FO0FBRXBFLE1BQU0sWUFBWSxHQUFHLENBQVUsR0FBc0IsRUFBRSxJQUFrQixFQUFjLEVBQUU7SUFDckYsTUFBTSxXQUFXLEdBQWEsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JELE9BQU8sQ0FBQyxNQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBTSxDQUFDO0FBQzNDLENBQUM7QUFFRCxNQUFNLGNBQWMsR0FBRyxHQUF3QixFQUFFO0lBQzdDLE1BQU0sSUFBSSxHQUFHLE1BQU0sWUFBWSxDQUFpQixvQ0FBb0MsQ0FBQyxDQUFDO0lBQ3RGLHNDQUFlLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsaUNBQWMsR0FBRSxDQUFDO0lBQ2pCLHVDQUFlLEdBQUUsQ0FBQztJQUNsQixxQ0FBa0IsR0FBRSxDQUFDO0lBQ3JCLDhDQUFpQixHQUFFLENBQUM7QUFDeEIsQ0FBQztBQUVELGNBQWMsRUFBRSxDQUFDO0FBRVYsTUFBTSxtQkFBbUIsR0FBRyxDQUFPLElBQVksRUFBRSxFQUFFO0lBQ3RELE1BQU0sY0FBYyxHQUFHLE1BQU0sS0FBSyxDQUFDLHVDQUF1QyxJQUFJLEVBQUUsQ0FBQztJQUNqRixNQUFNLFdBQVcsR0FBRyxNQUFNLGNBQWMsQ0FBQyxJQUFJLEVBQUU7SUFDL0MsaURBQW9CLEVBQUMsV0FBVyxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUpZLDJCQUFtQix1QkFJL0I7Ozs7Ozs7Ozs7Ozs7O0FDekJELE1BQU0saUJBQWlCLEdBQTBDO0lBQzdELEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFH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Qjs7Ozs7OztVQ3JGRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9yZXN0LWNvdW50cmllcy1hcGktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci1tYXN0ZXIvLi9zcmMvZ2V0LWNvdW50cmllcy50cyIsIndlYnBhY2s6Ly9yZXN0LWNvdW50cmllcy1hcGktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci1tYXN0ZXIvLi9zcmMvaW5wdXRIYW5kbGVycy9jbG9zZS5jb3VudHJ5LmRldGFpbHMudHMiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyLy4vc3JjL2lucHV0SGFuZGxlcnMvcmVnaW9uLmlucHV0LnRzIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci8uL3NyYy9pbnB1dEhhbmRsZXJzL3NlYXJjaC5pbnB1dC50cyIsIndlYnBhY2s6Ly9yZXN0LWNvdW50cmllcy1hcGktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci1tYXN0ZXIvLi9zcmMvaW5wdXRIYW5kbGVycy90b2dnbGUudGhlbWUubW9kZS50cyIsIndlYnBhY2s6Ly9yZXN0LWNvdW50cmllcy1hcGktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci1tYXN0ZXIvLi9zcmMvcmVuZGVyZXJzL3JlbmRlci5jb3VudHJpZXMudHMiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyLy4vc3JjL3JlbmRlcmVycy9yZW5kZXIuY291bnRyeS5kZXRhaWxzLnRzIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0LWNvdW50cmllcy1hcGktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci1tYXN0ZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0LWNvdW50cmllcy1hcGktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci1tYXN0ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ291bnRyeU1vZGVsIH0gZnJvbSBcIi4vbW9kZWxzL2NvdW50cnkubW9kZWxcIjtcclxuaW1wb3J0IHsgcmVuZGVyQ291bnRyaWVzIH0gZnJvbSBcIi4vcmVuZGVyZXJzL3JlbmRlci5jb3VudHJpZXNcIjtcclxuaW1wb3J0IHsgZ2V0Q291bnRyeURldGFpbHMsIHJlbmRlckNvdW50cnlEZXRhaWxzIH0gZnJvbSBcIi4vcmVuZGVyZXJzL3JlbmRlci5jb3VudHJ5LmRldGFpbHNcIjtcclxuaW1wb3J0IHsgc2VhcmNoSW5wdXRIYW5kbGVyIH0gZnJvbSBcIi4vaW5wdXRIYW5kbGVycy9zZWFyY2guaW5wdXRcIjtcclxuaW1wb3J0IHsgZmlsdGVyQnlSZWdpb24gfSBmcm9tIFwiLi9pbnB1dEhhbmRsZXJzL3JlZ2lvbi5pbnB1dFwiO1xyXG5pbXBvcnQgeyB0b2dnbGVUaGVtZU1vZGUgfSBmcm9tIFwiLi9pbnB1dEhhbmRsZXJzL3RvZ2dsZS50aGVtZS5tb2RlXCI7XHJcblxyXG5jb25zdCBnZW5lcmljRmV0Y2ggPSBhc3luYyA8VD4odXJsOiBVUkwgfCBSZXF1ZXN0SW5mbywgaW5pdD86IFJlcXVlc3RJbml0KTogUHJvbWlzZTxUPiA9PiB7XHJcbiAgICBjb25zdCBmZXRjaGVkRGF0YTogUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xyXG4gICAgcmV0dXJuIChhd2FpdCBmZXRjaGVkRGF0YS5qc29uKCkpIGFzIFQ7XHJcbn1cclxuXHJcbmNvbnN0IGZldGNoQ291bnRyaWVzID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdlbmVyaWNGZXRjaDxDb3VudHJ5TW9kZWxbXT4oJ2h0dHBzOi8vcmVzdGNvdW50cmllcy5jb20vdjMuMS9hbGwnKTtcclxuICAgIHJlbmRlckNvdW50cmllcyhkYXRhKTtcclxuICAgIGZpbHRlckJ5UmVnaW9uKCk7XHJcbiAgICB0b2dnbGVUaGVtZU1vZGUoKTtcclxuICAgIHNlYXJjaElucHV0SGFuZGxlcigpO1xyXG4gICAgZ2V0Q291bnRyeURldGFpbHMoKTtcclxufVxyXG5cclxuZmV0Y2hDb3VudHJpZXMoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaENvdW50cnlEZXRhaWxzID0gYXN5bmMgKG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdERldGFpbHMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xL25hbWUvJHtuYW1lfWApXHJcbiAgICBjb25zdCBjb3VudHJ5RGF0YSA9IGF3YWl0IHJlcXVlc3REZXRhaWxzLmpzb24oKVxyXG4gICAgcmVuZGVyQ291bnRyeURldGFpbHMoY291bnRyeURhdGEpO1xyXG59IiwiaW1wb3J0IHsgSXNvS2V5c01vZGVsIH0gZnJvbSBcIi4vbW9kZWxzL2lzby1rZXlzLm1vZGVsXCI7XHJcblxyXG5jb25zdCBjb3VudHJ5SVNPTWFwcGluZzogUmVjb3JkPElzb0tleXNNb2RlbCB8IHN0cmluZywgc3RyaW5nPiA9IHtcclxuICAgIEFGRzogXCJBRlwiLFxyXG4gICAgQUxBOiBcIkFYXCIsXHJcbiAgICBBTEI6IFwiQUxcIixcclxuICAgIERaQTogXCJEWlwiLFxyXG4gICAgQVNNOiBcIkFTXCIsXHJcbiAgICBBTkQ6IFwiQURcIixcclxuICAgIEFHTzogXCJBT1wiLFxyXG4gICAgQUlBOiBcIkFJXCIsXHJcbiAgICBBVEE6IFwiQVFcIixcclxuICAgIEFURzogXCJBR1wiLFxyXG4gICAgQVJHOiBcIkFSXCIsXHJcbiAgICBBUk06IFwiQU1cIixcclxuICAgIEFCVzogXCJBV1wiLFxyXG4gICAgQVVTOiBcIkFVXCIsXHJcbiAgICBBVVQ6IFwiQVRcIixcclxuICAgIEFaRTogXCJBWlwiLFxyXG4gICAgQkhTOiBcIkJTXCIsXHJcbiAgICBCSFI6IFwiQkhcIixcclxuICAgIEJHRDogXCJCRFwiLFxyXG4gICAgQlJCOiBcIkJCXCIsXHJcbiAgICBCTFI6IFwiQllcIixcclxuICAgIEJFTDogXCJCRVwiLFxyXG4gICAgQkxaOiBcIkJaXCIsXHJcbiAgICBCRU46IFwiQkpcIixcclxuICAgIEJNVTogXCJCTVwiLFxyXG4gICAgQlROOiBcIkJUXCIsXHJcbiAgICBCT0w6IFwiQk9cIixcclxuICAgIEJJSDogXCJCQVwiLFxyXG4gICAgQldBOiBcIkJXXCIsXHJcbiAgICBCVlQ6IFwiQlZcIixcclxuICAgIEJSQTogXCJCUlwiLFxyXG4gICAgVkdCOiBcIlZHXCIsXHJcbiAgICBJT1Q6IFwiSU9cIixcclxuICAgIEJSTjogXCJCTlwiLFxyXG4gICAgQkdSOiBcIkJHXCIsXHJcbiAgICBCRkE6IFwiQkZcIixcclxuICAgIEJESTogXCJCSVwiLFxyXG4gICAgS0hNOiBcIktIXCIsXHJcbiAgICBDTVI6IFwiQ01cIixcclxuICAgIENBTjogXCJDQVwiLFxyXG4gICAgQ1BWOiBcIkNWXCIsXHJcbiAgICBDWU06IFwiS1lcIixcclxuICAgIENBRjogXCJDRlwiLFxyXG4gICAgVENEOiBcIlREXCIsXHJcbiAgICBDSEw6IFwiQ0xcIixcclxuICAgIENITjogXCJDTlwiLFxyXG4gICAgSEtHOiBcIkhLXCIsXHJcbiAgICBNQUM6IFwiTU9cIixcclxuICAgIENYUjogXCJDWFwiLFxyXG4gICAgQ0NLOiBcIkNDXCIsXHJcbiAgICBDT0w6IFwiQ09cIixcclxuICAgIENPTTogXCJLTVwiLFxyXG4gICAgQ09HOiBcIkNHXCIsXHJcbiAgICBDT0Q6IFwiQ0RcIixcclxuICAgIENPSzogXCJDS1wiLFxyXG4gICAgQ1JJOiBcIkNSXCIsXHJcbiAgICBDSVY6IFwiQ0lcIixcclxuICAgIEhSVjogXCJIUlwiLFxyXG4gICAgQ1VCOiBcIkNVXCIsXHJcbiAgICBDWVA6IFwiQ1lcIixcclxuICAgIENaRTogXCJDWlwiLFxyXG4gICAgRE5LOiBcIkRLXCIsXHJcbiAgICBESkk6IFwiREpcIixcclxuICAgIERNQTogXCJETVwiLFxyXG4gICAgRE9NOiBcIkRPXCIsXHJcbiAgICBFQ1U6IFwiRUNcIixcclxuICAgIEVHWTogXCJFR1wiLFxyXG4gICAgU0xWOiBcIlNWXCIsXHJcbiAgICBHTlE6IFwiR1FcIixcclxuICAgIEVSSTogXCJFUlwiLFxyXG4gICAgRVNUOiBcIkVFXCIsXHJcbiAgICBFVEg6IFwiRVRcIixcclxuICAgIEZMSzogXCJGS1wiLFxyXG4gICAgRlJPOiBcIkZPXCIsXHJcbiAgICBGSkk6IFwiRkpcIixcclxuICAgIEZJTjogXCJGSVwiLFxyXG4gICAgRlJBOiBcIkZSXCIsXHJcbiAgICBHVUY6IFwiR0ZcIixcclxuICAgIFBZRjogXCJQRlwiLFxyXG4gICAgQVRGOiBcIlRGXCIsXHJcbiAgICBHQUI6IFwiR0FcIixcclxuICAgIEdNQjogXCJHTVwiLFxyXG4gICAgR0VPOiBcIkdFXCIsXHJcbiAgICBERVU6IFwiREVcIixcclxuICAgIEdIQTogXCJHSFwiLFxyXG4gICAgR0lCOiBcIkdJXCIsXHJcbiAgICBHUkM6IFwiR1JcIixcclxuICAgIEdSTDogXCJHTFwiLFxyXG4gICAgR1JEOiBcIkdEXCIsXHJcbiAgICBHTFA6IFwiR1BcIixcclxuICAgIEdVTTogXCJHVVwiLFxyXG4gICAgR1RNOiBcIkdUXCIsXHJcbiAgICBHR1k6IFwiR0dcIixcclxuICAgIEdJTjogXCJHTlwiLFxyXG4gICAgR05COiBcIkdXXCIsXHJcbiAgICBHVVk6IFwiR1lcIixcclxuICAgIEhUSTogXCJIVFwiLFxyXG4gICAgSE1EOiBcIkhNXCIsXHJcbiAgICBWQVQ6IFwiVkFcIixcclxuICAgIEhORDogXCJITlwiLFxyXG4gICAgSFVOOiBcIkhVXCIsXHJcbiAgICBJU0w6IFwiSVNcIixcclxuICAgIElORDogXCJJTlwiLFxyXG4gICAgSUROOiBcIklEXCIsXHJcbiAgICBJUk46IFwiSVJcIixcclxuICAgIElSUTogXCJJUVwiLFxyXG4gICAgSVJMOiBcIklFXCIsXHJcbiAgICBJTU46IFwiSU1cIixcclxuICAgIElTUjogXCJJTFwiLFxyXG4gICAgSVRBOiBcIklUXCIsXHJcbiAgICBKQU06IFwiSk1cIixcclxuICAgIEpQTjogXCJKUFwiLFxyXG4gICAgSkVZOiBcIkpFXCIsXHJcbiAgICBKT1I6IFwiSk9cIixcclxuICAgIEtBWjogXCJLWlwiLFxyXG4gICAgS0VOOiBcIktFXCIsXHJcbiAgICBLSVI6IFwiS0lcIixcclxuICAgIFBSSzogXCJLUFwiLFxyXG4gICAgS09SOiBcIktSXCIsXHJcbiAgICBLV1Q6IFwiS1dcIixcclxuICAgIEtHWjogXCJLR1wiLFxyXG4gICAgTEFPOiBcIkxBXCIsXHJcbiAgICBMVkE6IFwiTFZcIixcclxuICAgIExCTjogXCJMQlwiLFxyXG4gICAgTFNPOiBcIkxTXCIsXHJcbiAgICBMQlI6IFwiTFJcIixcclxuICAgIExCWTogXCJMWVwiLFxyXG4gICAgTElFOiBcIkxJXCIsXHJcbiAgICBMVFU6IFwiTFRcIixcclxuICAgIExVWDogXCJMVVwiLFxyXG4gICAgTUtEOiBcIk1LXCIsXHJcbiAgICBNREc6IFwiTUdcIixcclxuICAgIE1XSTogXCJNV1wiLFxyXG4gICAgTVlTOiBcIk1ZXCIsXHJcbiAgICBNRFY6IFwiTVZcIixcclxuICAgIE1MSTogXCJNTFwiLFxyXG4gICAgTUxUOiBcIk1UXCIsXHJcbiAgICBNSEw6IFwiTUhcIixcclxuICAgIE1UUTogXCJNUVwiLFxyXG4gICAgTVJUOiBcIk1SXCIsXHJcbiAgICBNVVM6IFwiTVVcIixcclxuICAgIE1ZVDogXCJZVFwiLFxyXG4gICAgTUVYOiBcIk1YXCIsXHJcbiAgICBGU006IFwiRk1cIixcclxuICAgIE1EQTogXCJNRFwiLFxyXG4gICAgTUNPOiBcIk1DXCIsXHJcbiAgICBNTkc6IFwiTU5cIixcclxuICAgIE1ORTogXCJNRVwiLFxyXG4gICAgTVNSOiBcIk1TXCIsXHJcbiAgICBNQVI6IFwiTUFcIixcclxuICAgIE1PWjogXCJNWlwiLFxyXG4gICAgTU1SOiBcIk1NXCIsXHJcbiAgICBOQU06IFwiTkFcIixcclxuICAgIE5SVTogXCJOUlwiLFxyXG4gICAgTlBMOiBcIk5QXCIsXHJcbiAgICBOTEQ6IFwiTkxcIixcclxuICAgIEFOVDogXCJBTlwiLFxyXG4gICAgTkNMOiBcIk5DXCIsXHJcbiAgICBOWkw6IFwiTlpcIixcclxuICAgIE5JQzogXCJOSVwiLFxyXG4gICAgTkVSOiBcIk5FXCIsXHJcbiAgICBOR0E6IFwiTkdcIixcclxuICAgIE5JVTogXCJOVVwiLFxyXG4gICAgTkZLOiBcIk5GXCIsXHJcbiAgICBNTlA6IFwiTVBcIixcclxuICAgIE5PUjogXCJOT1wiLFxyXG4gICAgT01OOiBcIk9NXCIsXHJcbiAgICBQQUs6IFwiUEtcIixcclxuICAgIFBMVzogXCJQV1wiLFxyXG4gICAgUFNFOiBcIlBTXCIsXHJcbiAgICBQQU46IFwiUEFcIixcclxuICAgIFBORzogXCJQR1wiLFxyXG4gICAgUFJZOiBcIlBZXCIsXHJcbiAgICBQRVI6IFwiUEVcIixcclxuICAgIFBITDogXCJQSFwiLFxyXG4gICAgUENOOiBcIlBOXCIsXHJcbiAgICBQT0w6IFwiUExcIixcclxuICAgIFBSVDogXCJQVFwiLFxyXG4gICAgUFJJOiBcIlBSXCIsXHJcbiAgICBRQVQ6IFwiUUFcIixcclxuICAgIFJFVTogXCJSRVwiLFxyXG4gICAgUk9VOiBcIlJPXCIsXHJcbiAgICBSVVM6IFwiUlVcIixcclxuICAgIFJXQTogXCJSV1wiLFxyXG4gICAgQkxNOiBcIkJMXCIsXHJcbiAgICBTSE46IFwiU0hcIixcclxuICAgIEtOQTogXCJLTlwiLFxyXG4gICAgTENBOiBcIkxDXCIsXHJcbiAgICBNQUY6IFwiTUZcIixcclxuICAgIFNQTTogXCJQTVwiLFxyXG4gICAgVkNUOiBcIlZDXCIsXHJcbiAgICBXU006IFwiV1NcIixcclxuICAgIFNNUjogXCJTTVwiLFxyXG4gICAgU1RQOiBcIlNUXCIsXHJcbiAgICBTQVU6IFwiU0FcIixcclxuICAgIFNFTjogXCJTTlwiLFxyXG4gICAgU1JCOiBcIlJTXCIsXHJcbiAgICBTWUM6IFwiU0NcIixcclxuICAgIFNMRTogXCJTTFwiLFxyXG4gICAgU0dQOiBcIlNHXCIsXHJcbiAgICBTVks6IFwiU0tcIixcclxuICAgIFNWTjogXCJTSVwiLFxyXG4gICAgU0xCOiBcIlNCXCIsXHJcbiAgICBTT006IFwiU09cIixcclxuICAgIFpBRjogXCJaQVwiLFxyXG4gICAgU0dTOiBcIkdTXCIsXHJcbiAgICBTU0Q6IFwiU1NcIixcclxuICAgIEVTUDogXCJFU1wiLFxyXG4gICAgTEtBOiBcIkxLXCIsXHJcbiAgICBTRE46IFwiU0RcIixcclxuICAgIFNVUjogXCJTUlwiLFxyXG4gICAgU0pNOiBcIlNKXCIsXHJcbiAgICBTV1o6IFwiU1pcIixcclxuICAgIFNXRTogXCJTRVwiLFxyXG4gICAgQ0hFOiBcIkNIXCIsXHJcbiAgICBTWVI6IFwiU1lcIixcclxuICAgIFRXTjogXCJUV1wiLFxyXG4gICAgVEpLOiBcIlRKXCIsXHJcbiAgICBUWkE6IFwiVFpcIixcclxuICAgIFRIQTogXCJUSFwiLFxyXG4gICAgVExTOiBcIlRMXCIsXHJcbiAgICBUR086IFwiVEdcIixcclxuICAgIFRLTDogXCJUS1wiLFxyXG4gICAgVE9OOiBcIlRPXCIsXHJcbiAgICBUVE86IFwiVFRcIixcclxuICAgIFRVTjogXCJUTlwiLFxyXG4gICAgVFVSOiBcIlRSXCIsXHJcbiAgICBUS006IFwiVE1cIixcclxuICAgIFRDQTogXCJUQ1wiLFxyXG4gICAgVFVWOiBcIlRWXCIsXHJcbiAgICBVR0E6IFwiVUdcIixcclxuICAgIFVLUjogXCJVQVwiLFxyXG4gICAgQVJFOiBcIkFFXCIsXHJcbiAgICBHQlI6IFwiR0JcIixcclxuICAgIFVTQTogXCJVU1wiLFxyXG4gICAgVU1JOiBcIlVNXCIsXHJcbiAgICBVUlk6IFwiVVlcIixcclxuICAgIFVaQjogXCJVWlwiLFxyXG4gICAgVlVUOiBcIlZVXCIsXHJcbiAgICBWRU46IFwiVkVcIixcclxuICAgIFZOTTogXCJWTlwiLFxyXG4gICAgVklSOiBcIlZJXCIsXHJcbiAgICBXTEY6IFwiV0ZcIixcclxuICAgIEVTSDogXCJFSFwiLFxyXG4gICAgWUVNOiBcIllFXCIsXHJcbiAgICBaTUI6IFwiWk1cIixcclxuICAgIFpXRTogXCJaV1wiLFxyXG4gICAgWEtYOiBcIlhLXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvdW50cnlJU08yID0gKGNvdW50cnlDb2RlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGNvdW50cnlJU09NYXBwaW5nWzxzdHJpbmc+Y291bnRyeUNvZGVdO1xyXG59IiwiZXhwb3J0IGNvbnN0IGNsb3NlQ291bnRyeURldGFpbHMgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCBjb3VudHJ5RGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJ5X19kZXRhaWxzLWNvbnRhaW5lcicpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0IGNvdW50cmllc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRyaWVzX19zZWN0aW9uJykhIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgaW5wdXRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0c19fY29udGFpbmVyJykhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3QgcmV0dXJuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9fcmV0dXJuJykhIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICAgIHJldHVybkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY291bnRyaWVzU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgaW5wdXRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICBjb3VudHJ5RGV0YWlsc0NvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgIH0pXHJcbn0iLCJleHBvcnQgY29uc3QgZmlsdGVyQnlSZWdpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb3VudHJ5Q29udGFpbmVyID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTERpdkVsZW1lbnQ+KFwiLmNvdW50cnlfX2NvbnRhaW5lclwiKV0hO1xyXG4gICAgY29uc3Qgc2VsZWN0UmVnaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lvbi1pbnB1dCcpISBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgIHNlbGVjdFJlZ2lvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlZ2lvblNlbGVjdGVkID0gc2VsZWN0UmVnaW9uLnZhbHVlO1xyXG4gICAgICAgIGNvdW50cnlDb250YWluZXIuZm9yRWFjaChjb3VudHJ5ID0+IHtcclxuICAgICAgICAgICAgY291bnRyeS5kYXRhc2V0LnJlZ2lvbiAhPT0gcmVnaW9uU2VsZWN0ZWQgPyBjb3VudHJ5LnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpIDogY291bnRyeS5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgaWYgKHJlZ2lvblNlbGVjdGVkID09PSAnJykgY291bnRyeS5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSIsImV4cG9ydCBjb25zdCBzZWFyY2hJbnB1dEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKSEgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGNvdW50cnlDb250YWluZXIgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRGl2RWxlbWVudD4oXCIuY291bnRyeV9fY29udGFpbmVyXCIpXSE7XHJcbiAgICBjb25zdCBzZWxlY3RSZWdpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaW9uLWlucHV0JykhIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG5cclxuICAgIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY291bnRyeUNvbnRhaW5lci5mb3JFYWNoKGNvdW50cnkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoSW5wdXQudmFsdWUubGVuZ3RoID09PSAwICYmIHNlbGVjdFJlZ2lvbi52YWx1ZSA9PT0gJycpIGNvdW50cnkucGFyZW50RWxlbWVudCEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hJbnB1dC52YWx1ZS5sZW5ndGggPT09IDAgJiYgY291bnRyeS5kYXRhc2V0LnJlZ2lvbiA9PT0gc2VsZWN0UmVnaW9uLnZhbHVlKSBjb3VudHJ5LnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAhY291bnRyeS5kYXRhc2V0Lm5hbWUhLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChgJHtzZWFyY2hJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpfWApID8gY291bnRyeS5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSA6IGNvdW50cnkucGFyZW50RWxlbWVudCEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSIsImV4cG9ydCBjb25zdCB0b2dnbGVUaGVtZU1vZGUgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAvL0RPTSBFbGVtZW50c1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWUtbW9kZV9fY2hlY2tib3gnKSEgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKSEgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpISBhcyBIVE1MQm9keUVsZW1lbnQ7XHJcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKSEgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IHJlZ2lvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lvbi1pbnB1dCcpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgY291bnRyeURldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PignLmNvdW50cnlfX2RldGFpbHMnKTtcclxuXHJcblxyXG4gICAgLy9Db2xvciB2YXJpYWJsZXMgYXMgaW4gU0FTU1xyXG4gICAgY29uc3QgY29sb3JEYXJrQmx1ZSA9IFwiaHNsKDIwOSwgMjMlLCAyMiUpXCI7XHJcbiAgICBjb25zdCBjb2xvclZlcnlEYXJrQmx1ZSA9IFwiaHNsKDIwNywgMjYlLCAxNyUpXCI7XHJcbiAgICBjb25zdCBjb2xvclZlcnlEYXJrQmx1ZVRleHQgPSBcImhzbCgyMDAsIDE1JSwgOCUpXCI7XHJcbiAgICBjb25zdCBjb2xvclZlcnlMaWdodEdyYXlCYWNrZ3JvdW5kID0gXCJoc2woMCwgMCUsIDk4JSlcIjtcclxuICAgIGNvbnN0IGNvbG9yV2hpdGUgPSBcIiNmM2YzZjNcIjtcclxuXHJcbiAgICBjb25zdCBkYXJrVGhlbWUgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yRGFya0JsdWU7XHJcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclZlcnlEYXJrQmx1ZTtcclxuICAgICAgICBib2R5LnN0eWxlLmNvbG9yID0gY29sb3JXaGl0ZTtcclxuICAgICAgICBzZWFyY2hJbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvckRhcmtCbHVlO1xyXG4gICAgICAgIHJlZ2lvbklucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yRGFya0JsdWU7XHJcblxyXG4gICAgICAgIGlmIChjb3VudHJ5RGV0YWlscykgY291bnRyeURldGFpbHMuZm9yRWFjaChjb3VudHJ5ID0+IGNvdW50cnkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JEYXJrQmx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaWdodFRoZW1lID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcldoaXRlO1xyXG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JWZXJ5TGlnaHRHcmF5QmFja2dyb3VuZDtcclxuICAgICAgICBib2R5LnN0eWxlLmNvbG9yID0gY29sb3JWZXJ5RGFya0JsdWVUZXh0O1xyXG4gICAgICAgIHNlYXJjaElucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yV2hpdGU7XHJcbiAgICAgICAgcmVnaW9uSW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JXaGl0ZTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50cnlEZXRhaWxzKSBjb3VudHJ5RGV0YWlscy5mb3JFYWNoKGNvdW50cnkgPT4gY291bnRyeS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcldoaXRlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgZGFya1RoZW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgZXZlbnQgYW5kIHRoZW1lIHRvZ2dsZVxyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPyBkYXJrVGhlbWUoKSA6IGxpZ2h0VGhlbWUoKTtcclxuICAgIH0pXHJcbn0iLCJpbXBvcnQgeyBDb3VudHJ5TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2NvdW50cnkubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJDb3VudHJpZXMgPSAoY291bnRyaWVzOiBDb3VudHJ5TW9kZWxbXSkgPT4ge1xyXG4gICAgY29uc3QgY291bnRyeVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50cmllc19fc2VjdGlvblwiKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvdW50cmllcy5mb3JFYWNoKChjb3VudHJ5KSA9PiB7XHJcbiAgICAgICAgY291bnRyeVNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImNvdW50cnlfX2RldGFpbHNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50cnlfX2NvbnRhaW5lclwiIGRhdGEtcmVnaW9uPVwiJHtjb3VudHJ5LnJlZ2lvbn1cIiBkYXRhLW5hbWU9XCIke2NvdW50cnkubmFtZS5jb21tb259XCIgZGF0YS1vZmZpY2lhbD1cIiR7Y291bnRyeS5uYW1lLm9mZmljaWFsfVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ZsYWdjZG4uY29tL3c2NDAvJHtjb3VudHJ5LmNjYTIhLnRvTG93ZXJDYXNlKCl9LnBuZ1wiIGFsdD1cIiR7Y291bnRyeS5mbGFnfVwiIGNsYXNzPVwiY291bnRyeV9fZmxhZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjb3VudHJ5X19uYW1lXCI+JHtjb3VudHJ5Lm5hbWUuY29tbW9ufTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjb3VudHJ5X19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeV9fbGlzdC0taXRlbVwiPjxzdHJvbmc+UG9wdWxhdGlvbjo8L3N0cm9uZz4gJHtjb3VudHJ5LnBvcHVsYXRpb24udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyl9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5X19saXN0LS1pdGVtXCI+PHN0cm9uZz5SZWdpb246PC9zdHJvbmc+ICR7Y291bnRyeS5yZWdpb259PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5X19saXN0LS1pdGVtXCI+PHN0cm9uZz5DYXBpdGFsOjwvc3Ryb25nPiAke2NvdW50cnkuY2FwaXRhbCA/IGNvdW50cnkuY2FwaXRhbFswXSA6ICco4pWvwrDilqHCsO+8ieKVr++4tSDilLvilIHilLsnfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICBgKVxyXG4gICAgfSlcclxufTsiLCJpbXBvcnQgeyBDb3VudHJ5TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2NvdW50cnkubW9kZWxcIjtcclxuaW1wb3J0IHsgZ2V0Q291bnRyeUlTTzIgfSBmcm9tIFwiLi4vZ2V0LWNvdW50cmllc1wiO1xyXG5pbXBvcnQgeyBjbG9zZUNvdW50cnlEZXRhaWxzIH0gZnJvbSBcIi4uL2lucHV0SGFuZGxlcnMvY2xvc2UuY291bnRyeS5kZXRhaWxzXCI7XHJcbmltcG9ydCB7IGZldGNoQ291bnRyeURldGFpbHMgfSBmcm9tIFwiLi4vYXBwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyQ291bnRyeURldGFpbHMgPSAoY291bnRyeURldGFpbHM6IENvdW50cnlNb2RlbFtdKSA9PiB7XHJcbiAgICAvL0RPTVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSEgYXMgSFRNTEJvZHlFbGVtZW50O1xyXG4gICAgY29uc3QgY291bnRyeURldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvdW50cnlEZXRhaWxzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvdW50cnlfX2RldGFpbHMtY29udGFpbmVyJyk7XHJcbiAgICBjb3VudHJ5RGV0YWlsc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnZW5lcmFsLXdpZHRoJyk7XHJcbiAgICBjb3VudHJ5RGV0YWlsc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjZW50ZXInKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY291bnRyeURldGFpbHNDb250YWluZXIpO1xyXG5cclxuICAgIC8vVkFSSUFCTEVTXHJcbiAgICBsZXQgY3VycmVuY2llczogc3RyaW5nW107XHJcbiAgICBsZXQgbmF0aXZlTmFtZTogc3RyaW5nW107XHJcbiAgICBjb25zdCBib3JkZXJDb3VudHJpZXMgPSBjb3VudHJ5RGV0YWlsc1swXS5ib3JkZXJzID8gY291bnRyeURldGFpbHNbMF0uYm9yZGVycy5tYXAoY291bnRyeSA9PiBnZXRDb3VudHJ5SVNPMihjb3VudHJ5KSkgOiBbXTtcclxuICAgIGxldCByZWdpb25OYW1lcyA9IG5ldyBJbnRsLkRpc3BsYXlOYW1lcyhbJ2VuJ10sIHt0eXBlOiAncmVnaW9uJ30pXHJcblxyXG5cclxuICAgICFjb3VudHJ5RGV0YWlsc1swXS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVuY2llcycpID8gY3VycmVuY2llcyA9IFsnTm8gYXZhaWxhYmxlIGN1cnJlbmN5LiddIDogY3VycmVuY2llcyA9IChPYmplY3QudmFsdWVzKGNvdW50cnlEZXRhaWxzWzBdLmN1cnJlbmNpZXMpKS5tYXAoY3VycmVuY3lUeXBlID0+IGN1cnJlbmN5VHlwZS5uYW1lKTtcclxuICAgICFjb3VudHJ5RGV0YWlsc1swXS5uYW1lLmhhc093blByb3BlcnR5KCduYXRpdmVOYW1lJykgPyBuYXRpdmVOYW1lID0gWydObyBuYXRpdmUgbmFtZSBhdmFpbGFibGUuJ10gOiBuYXRpdmVOYW1lID0gKE9iamVjdC52YWx1ZXMoY291bnRyeURldGFpbHNbMF0ubmFtZS5uYXRpdmVOYW1lKSkubWFwKG5hbWUgPT4gbmFtZS5jb21tb24pO1xyXG5cclxuICAgIGNvbnN0IGFkZEJvcmRlckNvdW50cmllcyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBib3JkZXJDb3VudHJpZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9yZGVyaW5nLWNvdW50cnlfX2NvbnRhaW5lcicpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKGJvcmRlckNvdW50cmllcy5sZW5ndGggPT09IDApIGJvcmRlckNvdW50cmllc0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8c3BhbiBjbGFzcz1cImJvcmRlcmluZy1jb3VudHJ5LS1ub3QtZm91bmRcIj5UaGVyZSBhcmUgbm8gYm9yZGVyaW5nIGNvdW50cmllcyB3aXRoIHRoaXMgY291bnRyeSE8L3NwYW4+YClcclxuXHJcbiAgICAgICAgYm9yZGVyQ291bnRyaWVzLmZvckVhY2goKGNvdW50cnksIGkpID0+IHtcclxuICAgICAgICAgICAgYm9yZGVyQ291bnRyaWVzQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxyXG4gICAgICAgICAgICAgICAgJHtpIDwgMyA/IChjb3VudHJ5ID8gYDxzcGFuIGNsYXNzPVwiYm9yZGVyaW5nLWNvdW50cnlcIj4ke3JlZ2lvbk5hbWVzLm9mKGNvdW50cnkpfTwvc3Bhbj5gIDogYGApIDogXCJcIn1cclxuICAgICAgICAgICBgKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY291bnRyeURldGFpbHNDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJfX3JldHVybi1idXR0b25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbl9fcmV0dXJuXCI+JmxhcnI7IEJhY2s8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyX19jb3VudHJ5LWluZm9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lcl9fY291bnRyeS1mbGFnXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZmxhZ2Nkbi5jb20vdzEyODAvJHtjb3VudHJ5RGV0YWlsc1swXS5jY2EyIS50b0xvd2VyQ2FzZSgpfS5wbmdcIiBhbHQ9XCJDb3VudHJ5IGZsYWdcIiBjbGFzcz1cImNvdW50cnktZmxhZ1wiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lcl9fY291bnRyeS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJoZWFkaW5nLXNlY29uZGFyeVwiPiR7Y291bnRyeURldGFpbHNbMF0ubmFtZS5jb21tb259PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudHJ5LWluZm9fX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeS1pbmZvX19pdGVtXCI+PHN0cm9uZz5OYXRpdmUgbmFtZTogPC9zdHJvbmc+JHtuYXRpdmVOYW1lID8gbmF0aXZlTmFtZS5hdCgtMSkgOiBuYXRpdmVOYW1lWzBdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnktaW5mb19faXRlbVwiPjxzdHJvbmc+UG9wdWxhdGlvbjogPC9zdHJvbmc+JHtjb3VudHJ5RGV0YWlsc1swXS5wb3B1bGF0aW9uLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnktaW5mb19faXRlbVwiPjxzdHJvbmc+UmVnaW9uOiA8L3N0cm9uZz4ke2NvdW50cnlEZXRhaWxzWzBdLnJlZ2lvbiA/IGNvdW50cnlEZXRhaWxzWzBdLnJlZ2lvbiA6ICdObyByZWdpb24gYXZhaWxhYmxlLid9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeS1pbmZvX19pdGVtXCI+PHN0cm9uZz5TdWIgUmVnaW9uOiA8L3N0cm9uZz4ke2NvdW50cnlEZXRhaWxzWzBdLnN1YnJlZ2lvbiA/IGNvdW50cnlEZXRhaWxzWzBdLnN1YnJlZ2lvbiA6ICdObyBzdWIgcmVnaW9uIGF2YWlsYWJsZS4nfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnktaW5mb19faXRlbVwiPjxzdHJvbmc+Q2FwaXRhbDogPC9zdHJvbmc+JHtjb3VudHJ5RGV0YWlsc1swXS5jYXBpdGFsID8gY291bnRyeURldGFpbHNbMF0uY2FwaXRhbCA6ICdObyBjYXBpdGFsIGF2YWlsYWJsZS4nfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeS1pbmZvX19pdGVtXCI+PHN0cm9uZz5Ub3AgTGV2ZWwgRG9tYWluOiA8L3N0cm9uZz4ke2NvdW50cnlEZXRhaWxzWzBdLnRsZH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2l0ZW1cIj48c3Ryb25nPkN1cnJlbmNpZXM6IDwvc3Ryb25nPiR7Y3VycmVuY2llcy5sZW5ndGggPT09IDEgPyBjdXJyZW5jaWVzWzBdIDogY3VycmVuY2llcy5qb2luKCcsICcpfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnktaW5mb19faXRlbVwiPjxzdHJvbmc+TGFuZ3VhZ2VzOiA8L3N0cm9uZz4ke2NvdW50cnlEZXRhaWxzWzBdLmhhc093blByb3BlcnR5KCdsYW5ndWFnZXMnKSA/IE9iamVjdC52YWx1ZXMoY291bnRyeURldGFpbHNbMF0ubGFuZ3VhZ2VzKS50b1N0cmluZygpLnJlcGxhY2VBbGwoJywnLCAnLCAnKSA6ICdObyBsYW5ndWFnZSBhdmFpbGFibGUuJ308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJfX2JvcmRlci1jb3VudHJpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImJvcmRlci1jb3VudHJpZXNfX3RleHRcIj48c3Ryb25nPkJvcmRlciBjb3VudHJpZXM6IDwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyaW5nLWNvdW50cnlfX2NvbnRhaW5lclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYClcclxuICAgIGFkZEJvcmRlckNvdW50cmllcygpO1xyXG4gICAgY2xvc2VDb3VudHJ5RGV0YWlscygpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q291bnRyeURldGFpbHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb3VudHJ5RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KCcuY291bnRyeV9fZGV0YWlscycpITtcclxuICAgIGNvbnN0IGNvdW50cmllc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRyaWVzX19zZWN0aW9uJykhIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgaW5wdXRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0c19fY29udGFpbmVyJykhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuXHJcbiAgICBjb3VudHJ5RGV0YWlscy5mb3JFYWNoKGNvdW50cnkgPT4ge1xyXG4gICAgICAgIGNvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvdW50cmllc1NlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgaW5wdXRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBmZXRjaENvdW50cnlEZXRhaWxzKGNvdW50cnkuZmlyc3RFbGVtZW50Q2hpbGQhLmRhdGFzZXQub2ZmaWNpYWwpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9