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
    const colorWhite = "#fff";
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
                <img src="${country.flags.png}" alt="${country.flag}" class="country__flag" />
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwSEFBK0Q7QUFDL0QsNElBQTZGO0FBQzdGLHNIQUFrRTtBQUNsRSxzSEFBOEQ7QUFDOUQscUlBQW9FO0FBRXBFLE1BQU0sWUFBWSxHQUFHLENBQVUsR0FBc0IsRUFBRSxJQUFrQixFQUFjLEVBQUU7SUFDckYsTUFBTSxXQUFXLEdBQWEsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JELE9BQU8sQ0FBQyxNQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBTSxDQUFDO0FBQzNDLENBQUM7QUFFRCxNQUFNLGNBQWMsR0FBRyxHQUF3QixFQUFFO0lBQzdDLE1BQU0sSUFBSSxHQUFHLE1BQU0sWUFBWSxDQUFpQixvQ0FBb0MsQ0FBQyxDQUFDO0lBQ3RGLHNDQUFlLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsaUNBQWMsR0FBRSxDQUFDO0lBQ2pCLHVDQUFlLEdBQUUsQ0FBQztJQUNsQixxQ0FBa0IsR0FBRSxDQUFDO0lBQ3JCLDhDQUFpQixHQUFFLENBQUM7QUFDeEIsQ0FBQztBQUVELGNBQWMsRUFBRSxDQUFDO0FBRVYsTUFBTSxtQkFBbUIsR0FBRyxDQUFPLElBQVksRUFBRSxFQUFFO0lBQ3RELE1BQU0sY0FBYyxHQUFHLE1BQU0sS0FBSyxDQUFDLHVDQUF1QyxJQUFJLEVBQUUsQ0FBQztJQUNqRixNQUFNLFdBQVcsR0FBRyxNQUFNLGNBQWMsQ0FBQyxJQUFJLEVBQUU7SUFDL0MsaURBQW9CLEVBQUMsV0FBVyxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUpZLDJCQUFtQix1QkFJL0I7Ozs7Ozs7Ozs7Ozs7O0FDekJELE1BQU0saUJBQWlCLEdBQTBDO0lBQzdELEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFH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ckZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0LWNvdW50cmllcy1hcGktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci1tYXN0ZXIvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci8uL3NyYy9nZXQtY291bnRyaWVzLnRzIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci8uL3NyYy9pbnB1dEhhbmRsZXJzL2Nsb3NlLmNvdW50cnkuZGV0YWlscy50cyIsIndlYnBhY2s6Ly9yZXN0LWNvdW50cmllcy1hcGktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci1tYXN0ZXIvLi9zcmMvaW5wdXRIYW5kbGVycy9yZWdpb24uaW5wdXQudHMiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyLy4vc3JjL2lucHV0SGFuZGxlcnMvc2VhcmNoLmlucHV0LnRzIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci8uL3NyYy9pbnB1dEhhbmRsZXJzL3RvZ2dsZS50aGVtZS5tb2RlLnRzIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci8uL3NyYy9yZW5kZXJlcnMvcmVuZGVyLmNvdW50cmllcy50cyIsIndlYnBhY2s6Ly9yZXN0LWNvdW50cmllcy1hcGktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci1tYXN0ZXIvLi9zcmMvcmVuZGVyZXJzL3JlbmRlci5jb3VudHJ5LmRldGFpbHMudHMiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3VudHJ5TW9kZWwgfSBmcm9tIFwiLi9tb2RlbHMvY291bnRyeS5tb2RlbFwiO1xyXG5pbXBvcnQgeyByZW5kZXJDb3VudHJpZXMgfSBmcm9tIFwiLi9yZW5kZXJlcnMvcmVuZGVyLmNvdW50cmllc1wiO1xyXG5pbXBvcnQgeyBnZXRDb3VudHJ5RGV0YWlscywgcmVuZGVyQ291bnRyeURldGFpbHMgfSBmcm9tIFwiLi9yZW5kZXJlcnMvcmVuZGVyLmNvdW50cnkuZGV0YWlsc1wiO1xyXG5pbXBvcnQgeyBzZWFyY2hJbnB1dEhhbmRsZXIgfSBmcm9tIFwiLi9pbnB1dEhhbmRsZXJzL3NlYXJjaC5pbnB1dFwiO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeVJlZ2lvbiB9IGZyb20gXCIuL2lucHV0SGFuZGxlcnMvcmVnaW9uLmlucHV0XCI7XHJcbmltcG9ydCB7IHRvZ2dsZVRoZW1lTW9kZSB9IGZyb20gXCIuL2lucHV0SGFuZGxlcnMvdG9nZ2xlLnRoZW1lLm1vZGVcIjtcclxuXHJcbmNvbnN0IGdlbmVyaWNGZXRjaCA9IGFzeW5jIDxUPih1cmw6IFVSTCB8IFJlcXVlc3RJbmZvLCBpbml0PzogUmVxdWVzdEluaXQpOiBQcm9taXNlPFQ+ID0+IHtcclxuICAgIGNvbnN0IGZldGNoZWREYXRhOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgaW5pdCk7XHJcbiAgICByZXR1cm4gKGF3YWl0IGZldGNoZWREYXRhLmpzb24oKSkgYXMgVDtcclxufVxyXG5cclxuY29uc3QgZmV0Y2hDb3VudHJpZXMgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2VuZXJpY0ZldGNoPENvdW50cnlNb2RlbFtdPignaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xL2FsbCcpO1xyXG4gICAgcmVuZGVyQ291bnRyaWVzKGRhdGEpO1xyXG4gICAgZmlsdGVyQnlSZWdpb24oKTtcclxuICAgIHRvZ2dsZVRoZW1lTW9kZSgpO1xyXG4gICAgc2VhcmNoSW5wdXRIYW5kbGVyKCk7XHJcbiAgICBnZXRDb3VudHJ5RGV0YWlscygpO1xyXG59XHJcblxyXG5mZXRjaENvdW50cmllcygpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ291bnRyeURldGFpbHMgPSBhc3luYyAobmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByZXF1ZXN0RGV0YWlscyA9IGF3YWl0IGZldGNoKGBodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YzLjEvbmFtZS8ke25hbWV9YClcclxuICAgIGNvbnN0IGNvdW50cnlEYXRhID0gYXdhaXQgcmVxdWVzdERldGFpbHMuanNvbigpXHJcbiAgICByZW5kZXJDb3VudHJ5RGV0YWlscyhjb3VudHJ5RGF0YSk7XHJcbn0iLCJpbXBvcnQgeyBJc29LZXlzTW9kZWwgfSBmcm9tIFwiLi9tb2RlbHMvaXNvLWtleXMubW9kZWxcIjtcclxuXHJcbmNvbnN0IGNvdW50cnlJU09NYXBwaW5nOiBSZWNvcmQ8SXNvS2V5c01vZGVsIHwgc3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gICAgQUZHOiBcIkFGXCIsXHJcbiAgICBBTEE6IFwiQVhcIixcclxuICAgIEFMQjogXCJBTFwiLFxyXG4gICAgRFpBOiBcIkRaXCIsXHJcbiAgICBBU006IFwiQVNcIixcclxuICAgIEFORDogXCJBRFwiLFxyXG4gICAgQUdPOiBcIkFPXCIsXHJcbiAgICBBSUE6IFwiQUlcIixcclxuICAgIEFUQTogXCJBUVwiLFxyXG4gICAgQVRHOiBcIkFHXCIsXHJcbiAgICBBUkc6IFwiQVJcIixcclxuICAgIEFSTTogXCJBTVwiLFxyXG4gICAgQUJXOiBcIkFXXCIsXHJcbiAgICBBVVM6IFwiQVVcIixcclxuICAgIEFVVDogXCJBVFwiLFxyXG4gICAgQVpFOiBcIkFaXCIsXHJcbiAgICBCSFM6IFwiQlNcIixcclxuICAgIEJIUjogXCJCSFwiLFxyXG4gICAgQkdEOiBcIkJEXCIsXHJcbiAgICBCUkI6IFwiQkJcIixcclxuICAgIEJMUjogXCJCWVwiLFxyXG4gICAgQkVMOiBcIkJFXCIsXHJcbiAgICBCTFo6IFwiQlpcIixcclxuICAgIEJFTjogXCJCSlwiLFxyXG4gICAgQk1VOiBcIkJNXCIsXHJcbiAgICBCVE46IFwiQlRcIixcclxuICAgIEJPTDogXCJCT1wiLFxyXG4gICAgQklIOiBcIkJBXCIsXHJcbiAgICBCV0E6IFwiQldcIixcclxuICAgIEJWVDogXCJCVlwiLFxyXG4gICAgQlJBOiBcIkJSXCIsXHJcbiAgICBWR0I6IFwiVkdcIixcclxuICAgIElPVDogXCJJT1wiLFxyXG4gICAgQlJOOiBcIkJOXCIsXHJcbiAgICBCR1I6IFwiQkdcIixcclxuICAgIEJGQTogXCJCRlwiLFxyXG4gICAgQkRJOiBcIkJJXCIsXHJcbiAgICBLSE06IFwiS0hcIixcclxuICAgIENNUjogXCJDTVwiLFxyXG4gICAgQ0FOOiBcIkNBXCIsXHJcbiAgICBDUFY6IFwiQ1ZcIixcclxuICAgIENZTTogXCJLWVwiLFxyXG4gICAgQ0FGOiBcIkNGXCIsXHJcbiAgICBUQ0Q6IFwiVERcIixcclxuICAgIENITDogXCJDTFwiLFxyXG4gICAgQ0hOOiBcIkNOXCIsXHJcbiAgICBIS0c6IFwiSEtcIixcclxuICAgIE1BQzogXCJNT1wiLFxyXG4gICAgQ1hSOiBcIkNYXCIsXHJcbiAgICBDQ0s6IFwiQ0NcIixcclxuICAgIENPTDogXCJDT1wiLFxyXG4gICAgQ09NOiBcIktNXCIsXHJcbiAgICBDT0c6IFwiQ0dcIixcclxuICAgIENPRDogXCJDRFwiLFxyXG4gICAgQ09LOiBcIkNLXCIsXHJcbiAgICBDUkk6IFwiQ1JcIixcclxuICAgIENJVjogXCJDSVwiLFxyXG4gICAgSFJWOiBcIkhSXCIsXHJcbiAgICBDVUI6IFwiQ1VcIixcclxuICAgIENZUDogXCJDWVwiLFxyXG4gICAgQ1pFOiBcIkNaXCIsXHJcbiAgICBETks6IFwiREtcIixcclxuICAgIERKSTogXCJESlwiLFxyXG4gICAgRE1BOiBcIkRNXCIsXHJcbiAgICBET006IFwiRE9cIixcclxuICAgIEVDVTogXCJFQ1wiLFxyXG4gICAgRUdZOiBcIkVHXCIsXHJcbiAgICBTTFY6IFwiU1ZcIixcclxuICAgIEdOUTogXCJHUVwiLFxyXG4gICAgRVJJOiBcIkVSXCIsXHJcbiAgICBFU1Q6IFwiRUVcIixcclxuICAgIEVUSDogXCJFVFwiLFxyXG4gICAgRkxLOiBcIkZLXCIsXHJcbiAgICBGUk86IFwiRk9cIixcclxuICAgIEZKSTogXCJGSlwiLFxyXG4gICAgRklOOiBcIkZJXCIsXHJcbiAgICBGUkE6IFwiRlJcIixcclxuICAgIEdVRjogXCJHRlwiLFxyXG4gICAgUFlGOiBcIlBGXCIsXHJcbiAgICBBVEY6IFwiVEZcIixcclxuICAgIEdBQjogXCJHQVwiLFxyXG4gICAgR01COiBcIkdNXCIsXHJcbiAgICBHRU86IFwiR0VcIixcclxuICAgIERFVTogXCJERVwiLFxyXG4gICAgR0hBOiBcIkdIXCIsXHJcbiAgICBHSUI6IFwiR0lcIixcclxuICAgIEdSQzogXCJHUlwiLFxyXG4gICAgR1JMOiBcIkdMXCIsXHJcbiAgICBHUkQ6IFwiR0RcIixcclxuICAgIEdMUDogXCJHUFwiLFxyXG4gICAgR1VNOiBcIkdVXCIsXHJcbiAgICBHVE06IFwiR1RcIixcclxuICAgIEdHWTogXCJHR1wiLFxyXG4gICAgR0lOOiBcIkdOXCIsXHJcbiAgICBHTkI6IFwiR1dcIixcclxuICAgIEdVWTogXCJHWVwiLFxyXG4gICAgSFRJOiBcIkhUXCIsXHJcbiAgICBITUQ6IFwiSE1cIixcclxuICAgIFZBVDogXCJWQVwiLFxyXG4gICAgSE5EOiBcIkhOXCIsXHJcbiAgICBIVU46IFwiSFVcIixcclxuICAgIElTTDogXCJJU1wiLFxyXG4gICAgSU5EOiBcIklOXCIsXHJcbiAgICBJRE46IFwiSURcIixcclxuICAgIElSTjogXCJJUlwiLFxyXG4gICAgSVJROiBcIklRXCIsXHJcbiAgICBJUkw6IFwiSUVcIixcclxuICAgIElNTjogXCJJTVwiLFxyXG4gICAgSVNSOiBcIklMXCIsXHJcbiAgICBJVEE6IFwiSVRcIixcclxuICAgIEpBTTogXCJKTVwiLFxyXG4gICAgSlBOOiBcIkpQXCIsXHJcbiAgICBKRVk6IFwiSkVcIixcclxuICAgIEpPUjogXCJKT1wiLFxyXG4gICAgS0FaOiBcIktaXCIsXHJcbiAgICBLRU46IFwiS0VcIixcclxuICAgIEtJUjogXCJLSVwiLFxyXG4gICAgUFJLOiBcIktQXCIsXHJcbiAgICBLT1I6IFwiS1JcIixcclxuICAgIEtXVDogXCJLV1wiLFxyXG4gICAgS0daOiBcIktHXCIsXHJcbiAgICBMQU86IFwiTEFcIixcclxuICAgIExWQTogXCJMVlwiLFxyXG4gICAgTEJOOiBcIkxCXCIsXHJcbiAgICBMU086IFwiTFNcIixcclxuICAgIExCUjogXCJMUlwiLFxyXG4gICAgTEJZOiBcIkxZXCIsXHJcbiAgICBMSUU6IFwiTElcIixcclxuICAgIExUVTogXCJMVFwiLFxyXG4gICAgTFVYOiBcIkxVXCIsXHJcbiAgICBNS0Q6IFwiTUtcIixcclxuICAgIE1ERzogXCJNR1wiLFxyXG4gICAgTVdJOiBcIk1XXCIsXHJcbiAgICBNWVM6IFwiTVlcIixcclxuICAgIE1EVjogXCJNVlwiLFxyXG4gICAgTUxJOiBcIk1MXCIsXHJcbiAgICBNTFQ6IFwiTVRcIixcclxuICAgIE1ITDogXCJNSFwiLFxyXG4gICAgTVRROiBcIk1RXCIsXHJcbiAgICBNUlQ6IFwiTVJcIixcclxuICAgIE1VUzogXCJNVVwiLFxyXG4gICAgTVlUOiBcIllUXCIsXHJcbiAgICBNRVg6IFwiTVhcIixcclxuICAgIEZTTTogXCJGTVwiLFxyXG4gICAgTURBOiBcIk1EXCIsXHJcbiAgICBNQ086IFwiTUNcIixcclxuICAgIE1ORzogXCJNTlwiLFxyXG4gICAgTU5FOiBcIk1FXCIsXHJcbiAgICBNU1I6IFwiTVNcIixcclxuICAgIE1BUjogXCJNQVwiLFxyXG4gICAgTU9aOiBcIk1aXCIsXHJcbiAgICBNTVI6IFwiTU1cIixcclxuICAgIE5BTTogXCJOQVwiLFxyXG4gICAgTlJVOiBcIk5SXCIsXHJcbiAgICBOUEw6IFwiTlBcIixcclxuICAgIE5MRDogXCJOTFwiLFxyXG4gICAgQU5UOiBcIkFOXCIsXHJcbiAgICBOQ0w6IFwiTkNcIixcclxuICAgIE5aTDogXCJOWlwiLFxyXG4gICAgTklDOiBcIk5JXCIsXHJcbiAgICBORVI6IFwiTkVcIixcclxuICAgIE5HQTogXCJOR1wiLFxyXG4gICAgTklVOiBcIk5VXCIsXHJcbiAgICBORks6IFwiTkZcIixcclxuICAgIE1OUDogXCJNUFwiLFxyXG4gICAgTk9SOiBcIk5PXCIsXHJcbiAgICBPTU46IFwiT01cIixcclxuICAgIFBBSzogXCJQS1wiLFxyXG4gICAgUExXOiBcIlBXXCIsXHJcbiAgICBQU0U6IFwiUFNcIixcclxuICAgIFBBTjogXCJQQVwiLFxyXG4gICAgUE5HOiBcIlBHXCIsXHJcbiAgICBQUlk6IFwiUFlcIixcclxuICAgIFBFUjogXCJQRVwiLFxyXG4gICAgUEhMOiBcIlBIXCIsXHJcbiAgICBQQ046IFwiUE5cIixcclxuICAgIFBPTDogXCJQTFwiLFxyXG4gICAgUFJUOiBcIlBUXCIsXHJcbiAgICBQUkk6IFwiUFJcIixcclxuICAgIFFBVDogXCJRQVwiLFxyXG4gICAgUkVVOiBcIlJFXCIsXHJcbiAgICBST1U6IFwiUk9cIixcclxuICAgIFJVUzogXCJSVVwiLFxyXG4gICAgUldBOiBcIlJXXCIsXHJcbiAgICBCTE06IFwiQkxcIixcclxuICAgIFNITjogXCJTSFwiLFxyXG4gICAgS05BOiBcIktOXCIsXHJcbiAgICBMQ0E6IFwiTENcIixcclxuICAgIE1BRjogXCJNRlwiLFxyXG4gICAgU1BNOiBcIlBNXCIsXHJcbiAgICBWQ1Q6IFwiVkNcIixcclxuICAgIFdTTTogXCJXU1wiLFxyXG4gICAgU01SOiBcIlNNXCIsXHJcbiAgICBTVFA6IFwiU1RcIixcclxuICAgIFNBVTogXCJTQVwiLFxyXG4gICAgU0VOOiBcIlNOXCIsXHJcbiAgICBTUkI6IFwiUlNcIixcclxuICAgIFNZQzogXCJTQ1wiLFxyXG4gICAgU0xFOiBcIlNMXCIsXHJcbiAgICBTR1A6IFwiU0dcIixcclxuICAgIFNWSzogXCJTS1wiLFxyXG4gICAgU1ZOOiBcIlNJXCIsXHJcbiAgICBTTEI6IFwiU0JcIixcclxuICAgIFNPTTogXCJTT1wiLFxyXG4gICAgWkFGOiBcIlpBXCIsXHJcbiAgICBTR1M6IFwiR1NcIixcclxuICAgIFNTRDogXCJTU1wiLFxyXG4gICAgRVNQOiBcIkVTXCIsXHJcbiAgICBMS0E6IFwiTEtcIixcclxuICAgIFNETjogXCJTRFwiLFxyXG4gICAgU1VSOiBcIlNSXCIsXHJcbiAgICBTSk06IFwiU0pcIixcclxuICAgIFNXWjogXCJTWlwiLFxyXG4gICAgU1dFOiBcIlNFXCIsXHJcbiAgICBDSEU6IFwiQ0hcIixcclxuICAgIFNZUjogXCJTWVwiLFxyXG4gICAgVFdOOiBcIlRXXCIsXHJcbiAgICBUSks6IFwiVEpcIixcclxuICAgIFRaQTogXCJUWlwiLFxyXG4gICAgVEhBOiBcIlRIXCIsXHJcbiAgICBUTFM6IFwiVExcIixcclxuICAgIFRHTzogXCJUR1wiLFxyXG4gICAgVEtMOiBcIlRLXCIsXHJcbiAgICBUT046IFwiVE9cIixcclxuICAgIFRUTzogXCJUVFwiLFxyXG4gICAgVFVOOiBcIlROXCIsXHJcbiAgICBUVVI6IFwiVFJcIixcclxuICAgIFRLTTogXCJUTVwiLFxyXG4gICAgVENBOiBcIlRDXCIsXHJcbiAgICBUVVY6IFwiVFZcIixcclxuICAgIFVHQTogXCJVR1wiLFxyXG4gICAgVUtSOiBcIlVBXCIsXHJcbiAgICBBUkU6IFwiQUVcIixcclxuICAgIEdCUjogXCJHQlwiLFxyXG4gICAgVVNBOiBcIlVTXCIsXHJcbiAgICBVTUk6IFwiVU1cIixcclxuICAgIFVSWTogXCJVWVwiLFxyXG4gICAgVVpCOiBcIlVaXCIsXHJcbiAgICBWVVQ6IFwiVlVcIixcclxuICAgIFZFTjogXCJWRVwiLFxyXG4gICAgVk5NOiBcIlZOXCIsXHJcbiAgICBWSVI6IFwiVklcIixcclxuICAgIFdMRjogXCJXRlwiLFxyXG4gICAgRVNIOiBcIkVIXCIsXHJcbiAgICBZRU06IFwiWUVcIixcclxuICAgIFpNQjogXCJaTVwiLFxyXG4gICAgWldFOiBcIlpXXCIsXHJcbiAgICBYS1g6IFwiWEtcIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q291bnRyeUlTTzIgPSAoY291bnRyeUNvZGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gY291bnRyeUlTT01hcHBpbmdbPHN0cmluZz5jb3VudHJ5Q29kZV07XHJcbn0iLCJleHBvcnQgY29uc3QgY2xvc2VDb3VudHJ5RGV0YWlscyA9ICgpOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IGNvdW50cnlEZXRhaWxzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50cnlfX2RldGFpbHMtY29udGFpbmVyJykhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3QgY291bnRyaWVzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJpZXNfX3NlY3Rpb24nKSEgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBpbnB1dHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRzX19jb250YWluZXInKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjb25zdCByZXR1cm5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19yZXR1cm4nKSEgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gICAgcmV0dXJuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb3VudHJpZXNTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICBpbnB1dHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgIGNvdW50cnlEZXRhaWxzQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgfSlcclxufSIsImV4cG9ydCBjb25zdCBmaWx0ZXJCeVJlZ2lvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvdW50cnlDb250YWluZXIgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRGl2RWxlbWVudD4oXCIuY291bnRyeV9fY29udGFpbmVyXCIpXSE7XHJcbiAgICBjb25zdCBzZWxlY3RSZWdpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaW9uLWlucHV0JykhIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgc2VsZWN0UmVnaW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBsZXQgcmVnaW9uU2VsZWN0ZWQgPSBzZWxlY3RSZWdpb24udmFsdWU7XHJcbiAgICAgICAgY291bnRyeUNvbnRhaW5lci5mb3JFYWNoKGNvdW50cnkgPT4ge1xyXG4gICAgICAgICAgICBjb3VudHJ5LmRhdGFzZXQucmVnaW9uICE9PSByZWdpb25TZWxlY3RlZCA/IGNvdW50cnkucGFyZW50RWxlbWVudCEuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykgOiBjb3VudHJ5LnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBpZiAocmVnaW9uU2VsZWN0ZWQgPT09ICcnKSBjb3VudHJ5LnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59IiwiZXhwb3J0IGNvbnN0IHNlYXJjaElucHV0SGFuZGxlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgY291bnRyeUNvbnRhaW5lciA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxEaXZFbGVtZW50PihcIi5jb3VudHJ5X19jb250YWluZXJcIildITtcclxuICAgIGNvbnN0IHNlbGVjdFJlZ2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpb24taW5wdXQnKSEgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcblxyXG4gICAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb3VudHJ5Q29udGFpbmVyLmZvckVhY2goY291bnRyeSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hJbnB1dC52YWx1ZS5sZW5ndGggPT09IDAgJiYgc2VsZWN0UmVnaW9uLnZhbHVlID09PSAnJykgY291bnRyeS5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgaWYgKHNlYXJjaElucHV0LnZhbHVlLmxlbmd0aCA9PT0gMCAmJiBjb3VudHJ5LmRhdGFzZXQucmVnaW9uID09PSBzZWxlY3RSZWdpb24udmFsdWUpIGNvdW50cnkucGFyZW50RWxlbWVudCEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICFjb3VudHJ5LmRhdGFzZXQubmFtZSEudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGAke3NlYXJjaElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCl9YCkgPyBjb3VudHJ5LnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpIDogY291bnRyeS5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59IiwiZXhwb3J0IGNvbnN0IHRvZ2dsZVRoZW1lTW9kZSA9ICgpOiB2b2lkID0+IHtcclxuICAgIC8vRE9NIEVsZW1lbnRzXHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZS1tb2RlX19jaGVja2JveCcpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpISBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykhIGFzIEhUTUxCb2R5RWxlbWVudDtcclxuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgcmVnaW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaW9uLWlucHV0JykhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBjb3VudHJ5RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KCcuY291bnRyeV9fZGV0YWlscycpO1xyXG5cclxuXHJcbiAgICAvL0NvbG9yIHZhcmlhYmxlcyBhcyBpbiBTQVNTXHJcbiAgICBjb25zdCBjb2xvckRhcmtCbHVlID0gXCJoc2woMjA5LCAyMyUsIDIyJSlcIjtcclxuICAgIGNvbnN0IGNvbG9yVmVyeURhcmtCbHVlID0gXCJoc2woMjA3LCAyNiUsIDE3JSlcIjtcclxuICAgIGNvbnN0IGNvbG9yVmVyeURhcmtCbHVlVGV4dCA9IFwiaHNsKDIwMCwgMTUlLCA4JSlcIjtcclxuICAgIGNvbnN0IGNvbG9yVmVyeUxpZ2h0R3JheUJhY2tncm91bmQgPSBcImhzbCgwLCAwJSwgOTglKVwiO1xyXG4gICAgY29uc3QgY29sb3JXaGl0ZSA9IFwiI2ZmZlwiO1xyXG5cclxuICAgIGNvbnN0IGRhcmtUaGVtZSA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JEYXJrQmx1ZTtcclxuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yVmVyeURhcmtCbHVlO1xyXG4gICAgICAgIGJvZHkuc3R5bGUuY29sb3IgPSBjb2xvcldoaXRlO1xyXG4gICAgICAgIHNlYXJjaElucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yRGFya0JsdWU7XHJcbiAgICAgICAgcmVnaW9uSW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JEYXJrQmx1ZTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50cnlEZXRhaWxzKSBjb3VudHJ5RGV0YWlscy5mb3JFYWNoKGNvdW50cnkgPT4gY291bnRyeS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvckRhcmtCbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpZ2h0VGhlbWUgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yV2hpdGU7XHJcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclZlcnlMaWdodEdyYXlCYWNrZ3JvdW5kO1xyXG4gICAgICAgIGJvZHkuc3R5bGUuY29sb3IgPSBjb2xvclZlcnlEYXJrQmx1ZVRleHQ7XHJcbiAgICAgICAgc2VhcmNoSW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JXaGl0ZTtcclxuICAgICAgICByZWdpb25JbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcldoaXRlO1xyXG5cclxuICAgICAgICBpZiAoY291bnRyeURldGFpbHMpIGNvdW50cnlEZXRhaWxzLmZvckVhY2goY291bnRyeSA9PiBjb3VudHJ5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yV2hpdGUpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpIHtcclxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBkYXJrVGhlbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBldmVudCBhbmQgdGhlbWUgdG9nZ2xlXHJcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA/IGRhcmtUaGVtZSgpIDogbGlnaHRUaGVtZSgpO1xyXG4gICAgfSlcclxufSIsImltcG9ydCB7IENvdW50cnlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvY291bnRyeS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckNvdW50cmllcyA9IChjb3VudHJpZXM6IENvdW50cnlNb2RlbFtdKSA9PiB7XHJcbiAgICBjb25zdCBjb3VudHJ5U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRyaWVzX19zZWN0aW9uXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY291bnRyaWVzLmZvckVhY2goKGNvdW50cnkpID0+IHtcclxuICAgICAgICBjb3VudHJ5U2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiY291bnRyeV9fZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRyeV9fY29udGFpbmVyXCIgZGF0YS1yZWdpb249XCIke2NvdW50cnkucmVnaW9ufVwiIGRhdGEtbmFtZT1cIiR7Y291bnRyeS5uYW1lLmNvbW1vbn1cIiBkYXRhLW9mZmljaWFsPVwiJHtjb3VudHJ5Lm5hbWUub2ZmaWNpYWx9XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Y291bnRyeS5mbGFncy5wbmd9XCIgYWx0PVwiJHtjb3VudHJ5LmZsYWd9XCIgY2xhc3M9XCJjb3VudHJ5X19mbGFnXCIgLz5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNvdW50cnlfX25hbWVcIj4ke2NvdW50cnkubmFtZS5jb21tb259PC9oMz5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvdW50cnlfX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5X19saXN0LS1pdGVtXCI+PHN0cm9uZz5Qb3B1bGF0aW9uOjwvc3Ryb25nPiAke2NvdW50cnkucG9wdWxhdGlvbi50b0xvY2FsZVN0cmluZygnZW4tVVMnKX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnlfX2xpc3QtLWl0ZW1cIj48c3Ryb25nPlJlZ2lvbjo8L3N0cm9uZz4gJHtjb3VudHJ5LnJlZ2lvbn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnlfX2xpc3QtLWl0ZW1cIj48c3Ryb25nPkNhcGl0YWw6PC9zdHJvbmc+ICR7Y291bnRyeS5jYXBpdGFsID8gY291bnRyeS5jYXBpdGFsWzBdIDogJyjila/CsOKWocKw77yJ4pWv77i1IOKUu+KUgeKUuyd9PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgIGApXHJcbiAgICB9KVxyXG59OyIsImltcG9ydCB7IENvdW50cnlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvY291bnRyeS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBnZXRDb3VudHJ5SVNPMiB9IGZyb20gXCIuLi9nZXQtY291bnRyaWVzXCI7XHJcbmltcG9ydCB7IGNsb3NlQ291bnRyeURldGFpbHMgfSBmcm9tIFwiLi4vaW5wdXRIYW5kbGVycy9jbG9zZS5jb3VudHJ5LmRldGFpbHNcIjtcclxuaW1wb3J0IHsgZmV0Y2hDb3VudHJ5RGV0YWlscyB9IGZyb20gXCIuLi9hcHBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJDb3VudHJ5RGV0YWlscyA9IChjb3VudHJ5RGV0YWlsczogQ291bnRyeU1vZGVsW10pID0+IHtcclxuICAgIC8vRE9NXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpISBhcyBIVE1MQm9keUVsZW1lbnQ7XHJcbiAgICBjb25zdCBjb3VudHJ5RGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY291bnRyeURldGFpbHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY291bnRyeV9fZGV0YWlscy1jb250YWluZXInKTtcclxuICAgIGNvdW50cnlEZXRhaWxzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dlbmVyYWwtd2lkdGgnKTtcclxuICAgIGNvdW50cnlEZXRhaWxzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NlbnRlcicpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb3VudHJ5RGV0YWlsc0NvbnRhaW5lcik7XHJcblxyXG4gICAgLy9WQVJJQUJMRVNcclxuICAgIGxldCBjdXJyZW5jaWVzOiBzdHJpbmdbXTtcclxuICAgIGxldCBuYXRpdmVOYW1lOiBzdHJpbmdbXTtcclxuICAgIGNvbnN0IGJvcmRlckNvdW50cmllcyA9IGNvdW50cnlEZXRhaWxzWzBdLmJvcmRlcnMgPyBjb3VudHJ5RGV0YWlsc1swXS5ib3JkZXJzLm1hcChjb3VudHJ5ID0+IGdldENvdW50cnlJU08yKGNvdW50cnkpKSA6IFtdO1xyXG4gICAgbGV0IHJlZ2lvbk5hbWVzID0gbmV3IEludGwuRGlzcGxheU5hbWVzKFsnZW4nXSwge3R5cGU6ICdyZWdpb24nfSlcclxuXHJcblxyXG4gICAgIWNvdW50cnlEZXRhaWxzWzBdLmhhc093blByb3BlcnR5KCdjdXJyZW5jaWVzJykgPyBjdXJyZW5jaWVzID0gWydObyBhdmFpbGFibGUgY3VycmVuY3kuJ10gOiBjdXJyZW5jaWVzID0gKE9iamVjdC52YWx1ZXMoY291bnRyeURldGFpbHNbMF0uY3VycmVuY2llcykpLm1hcChjdXJyZW5jeVR5cGUgPT4gY3VycmVuY3lUeXBlLm5hbWUpO1xyXG4gICAgIWNvdW50cnlEZXRhaWxzWzBdLm5hbWUuaGFzT3duUHJvcGVydHkoJ25hdGl2ZU5hbWUnKSA/IG5hdGl2ZU5hbWUgPSBbJ05vIG5hdGl2ZSBuYW1lIGF2YWlsYWJsZS4nXSA6IG5hdGl2ZU5hbWUgPSAoT2JqZWN0LnZhbHVlcyhjb3VudHJ5RGV0YWlsc1swXS5uYW1lLm5hdGl2ZU5hbWUpKS5tYXAobmFtZSA9PiBuYW1lLmNvbW1vbik7XHJcblxyXG4gICAgY29uc3QgYWRkQm9yZGVyQ291bnRyaWVzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvcmRlckNvdW50cmllc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3JkZXJpbmctY291bnRyeV9fY29udGFpbmVyJykhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoYm9yZGVyQ291bnRyaWVzLmxlbmd0aCA9PT0gMCkgYm9yZGVyQ291bnRyaWVzQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxzcGFuIGNsYXNzPVwiYm9yZGVyaW5nLWNvdW50cnktLW5vdC1mb3VuZFwiPlRoZXJlIGFyZSBubyBib3JkZXJpbmcgY291bnRyaWVzIHdpdGggdGhpcyBjb3VudHJ5ITwvc3Bhbj5gKVxyXG5cclxuICAgICAgICBib3JkZXJDb3VudHJpZXMuZm9yRWFjaCgoY291bnRyeSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBib3JkZXJDb3VudHJpZXNDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgICAgICAgICAke2kgPCAzID8gKGNvdW50cnkgPyBgPHNwYW4gY2xhc3M9XCJib3JkZXJpbmctY291bnRyeVwiPiR7cmVnaW9uTmFtZXMub2YoY291bnRyeSl9PC9zcGFuPmAgOiBgYCkgOiBcIlwifVxyXG4gICAgICAgICAgIGApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb3VudHJ5RGV0YWlsc0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlcl9fcmV0dXJuLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uX19yZXR1cm5cIj4mbGFycjsgQmFjazwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJfX2NvdW50cnktaW5mb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyX19jb3VudHJ5LWZsYWdcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtjb3VudHJ5RGV0YWlsc1swXS5mbGFncy5wbmd9XCIgYWx0PVwiQ291bnRyeSBmbGFnXCIgY2xhc3M9XCJjb3VudHJ5LWZsYWdcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJfX2NvdW50cnktZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiaGVhZGluZy1zZWNvbmRhcnlcIj4ke2NvdW50cnlEZXRhaWxzWzBdLm5hbWUuY29tbW9ufTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRyeS1pbmZvX193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY291bnRyeS1pbmZvX19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnktaW5mb19faXRlbVwiPjxzdHJvbmc+TmF0aXZlIG5hbWU6IDwvc3Ryb25nPiR7bmF0aXZlTmFtZSA/IG5hdGl2ZU5hbWUuYXQoLTEpIDogbmF0aXZlTmFtZVswXX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2l0ZW1cIj48c3Ryb25nPlBvcHVsYXRpb246IDwvc3Ryb25nPiR7Y291bnRyeURldGFpbHNbMF0ucG9wdWxhdGlvbi50b0xvY2FsZVN0cmluZygnZW4tVVMnKX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2l0ZW1cIj48c3Ryb25nPlJlZ2lvbjogPC9zdHJvbmc+JHtjb3VudHJ5RGV0YWlsc1swXS5yZWdpb24gPyBjb3VudHJ5RGV0YWlsc1swXS5yZWdpb24gOiAnTm8gcmVnaW9uIGF2YWlsYWJsZS4nfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnktaW5mb19faXRlbVwiPjxzdHJvbmc+U3ViIFJlZ2lvbjogPC9zdHJvbmc+JHtjb3VudHJ5RGV0YWlsc1swXS5zdWJyZWdpb24gPyBjb3VudHJ5RGV0YWlsc1swXS5zdWJyZWdpb24gOiAnTm8gc3ViIHJlZ2lvbiBhdmFpbGFibGUuJ308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2l0ZW1cIj48c3Ryb25nPkNhcGl0YWw6IDwvc3Ryb25nPiR7Y291bnRyeURldGFpbHNbMF0uY2FwaXRhbCA/IGNvdW50cnlEZXRhaWxzWzBdLmNhcGl0YWwgOiAnTm8gY2FwaXRhbCBhdmFpbGFibGUuJ308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY291bnRyeS1pbmZvX19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnktaW5mb19faXRlbVwiPjxzdHJvbmc+VG9wIExldmVsIERvbWFpbjogPC9zdHJvbmc+JHtjb3VudHJ5RGV0YWlsc1swXS50bGR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeS1pbmZvX19pdGVtXCI+PHN0cm9uZz5DdXJyZW5jaWVzOiA8L3N0cm9uZz4ke2N1cnJlbmNpZXMubGVuZ3RoID09PSAxID8gY3VycmVuY2llc1swXSA6IGN1cnJlbmNpZXMuam9pbignLCAnKX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2l0ZW1cIj48c3Ryb25nPkxhbmd1YWdlczogPC9zdHJvbmc+JHtjb3VudHJ5RGV0YWlsc1swXS5oYXNPd25Qcm9wZXJ0eSgnbGFuZ3VhZ2VzJykgPyBPYmplY3QudmFsdWVzKGNvdW50cnlEZXRhaWxzWzBdLmxhbmd1YWdlcykudG9TdHJpbmcoKS5yZXBsYWNlQWxsKCcsJywgJywgJykgOiAnTm8gbGFuZ3VhZ2UgYXZhaWxhYmxlLid9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyX19ib3JkZXItY291bnRyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJib3JkZXItY291bnRyaWVzX190ZXh0XCI+PHN0cm9uZz5Cb3JkZXIgY291bnRyaWVzOiA8L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlcmluZy1jb3VudHJ5X19jb250YWluZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGApXHJcbiAgICBhZGRCb3JkZXJDb3VudHJpZXMoKTtcclxuICAgIGNsb3NlQ291bnRyeURldGFpbHMoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvdW50cnlEZXRhaWxzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY291bnRyeURldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PignLmNvdW50cnlfX2RldGFpbHMnKSE7XHJcbiAgICBjb25zdCBjb3VudHJpZXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50cmllc19fc2VjdGlvbicpISBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGlucHV0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dHNfX2NvbnRhaW5lcicpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcblxyXG4gICAgY291bnRyeURldGFpbHMuZm9yRWFjaChjb3VudHJ5ID0+IHtcclxuICAgICAgICBjb3VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb3VudHJpZXNTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGlucHV0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgZmV0Y2hDb3VudHJ5RGV0YWlscyhjb3VudHJ5LmZpcnN0RWxlbWVudENoaWxkIS5kYXRhc2V0Lm9mZmljaWFsKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==