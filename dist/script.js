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
    !countryDetails[0].hasOwnProperty('nativeName') ? nativeName = ['No native name available.'] : nativeName = (Object.values(countryDetails[0].name.nativeName)).map(name => name.common);
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
            console.log(country.firstElementChild);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwSEFBK0Q7QUFDL0QsNElBQTZGO0FBQzdGLHNIQUFrRTtBQUNsRSxzSEFBOEQ7QUFDOUQscUlBQW9FO0FBRXBFLE1BQU0sWUFBWSxHQUFHLENBQVUsR0FBc0IsRUFBRSxJQUFrQixFQUFjLEVBQUU7SUFDckYsTUFBTSxXQUFXLEdBQWEsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JELE9BQU8sQ0FBQyxNQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBTSxDQUFDO0FBQzNDLENBQUM7QUFFRCxNQUFNLGNBQWMsR0FBRyxHQUF3QixFQUFFO0lBQzdDLE1BQU0sSUFBSSxHQUFHLE1BQU0sWUFBWSxDQUFpQixvQ0FBb0MsQ0FBQyxDQUFDO0lBQ3RGLHNDQUFlLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsaUNBQWMsR0FBRSxDQUFDO0lBQ2pCLHVDQUFlLEdBQUUsQ0FBQztJQUNsQixxQ0FBa0IsR0FBRSxDQUFDO0lBQ3JCLDhDQUFpQixHQUFFLENBQUM7QUFDeEIsQ0FBQztBQUVELGNBQWMsRUFBRSxDQUFDO0FBRVYsTUFBTSxtQkFBbUIsR0FBRyxDQUFPLElBQVksRUFBRSxFQUFFO0lBQ3RELE1BQU0sY0FBYyxHQUFHLE1BQU0sS0FBSyxDQUFDLHVDQUF1QyxJQUFJLEVBQUUsQ0FBQztJQUNqRixNQUFNLFdBQVcsR0FBRyxNQUFNLGNBQWMsQ0FBQyxJQUFJLEVBQUU7SUFDL0MsaURBQW9CLEVBQUMsV0FBVyxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUpZLDJCQUFtQix1QkFJL0I7Ozs7Ozs7Ozs7Ozs7O0FDekJELE1BQU0saUJBQWlCLEdBQTBDO0lBQzdELEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFH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O0FBQ04sQ0FBQztBQWZZLHlCQUFpQixxQkFlN0I7Ozs7Ozs7VUN0RkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyLy4vc3JjL2dldC1jb3VudHJpZXMudHMiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyLy4vc3JjL2lucHV0SGFuZGxlcnMvY2xvc2UuY291bnRyeS5kZXRhaWxzLnRzIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci8uL3NyYy9pbnB1dEhhbmRsZXJzL3JlZ2lvbi5pbnB1dC50cyIsIndlYnBhY2s6Ly9yZXN0LWNvdW50cmllcy1hcGktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci1tYXN0ZXIvLi9zcmMvaW5wdXRIYW5kbGVycy9zZWFyY2guaW5wdXQudHMiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyLy4vc3JjL2lucHV0SGFuZGxlcnMvdG9nZ2xlLnRoZW1lLm1vZGUudHMiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyLy4vc3JjL3JlbmRlcmVycy9yZW5kZXIuY291bnRyaWVzLnRzIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci8uL3NyYy9yZW5kZXJlcnMvcmVuZGVyLmNvdW50cnkuZGV0YWlscy50cyIsIndlYnBhY2s6Ly9yZXN0LWNvdW50cmllcy1hcGktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci1tYXN0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0LWNvdW50cmllcy1hcGktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci1tYXN0ZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvdW50cnlNb2RlbCB9IGZyb20gXCIuL21vZGVscy9jb3VudHJ5Lm1vZGVsXCI7XHJcbmltcG9ydCB7IHJlbmRlckNvdW50cmllcyB9IGZyb20gXCIuL3JlbmRlcmVycy9yZW5kZXIuY291bnRyaWVzXCI7XHJcbmltcG9ydCB7IGdldENvdW50cnlEZXRhaWxzLCByZW5kZXJDb3VudHJ5RGV0YWlscyB9IGZyb20gXCIuL3JlbmRlcmVycy9yZW5kZXIuY291bnRyeS5kZXRhaWxzXCI7XHJcbmltcG9ydCB7IHNlYXJjaElucHV0SGFuZGxlciB9IGZyb20gXCIuL2lucHV0SGFuZGxlcnMvc2VhcmNoLmlucHV0XCI7XHJcbmltcG9ydCB7IGZpbHRlckJ5UmVnaW9uIH0gZnJvbSBcIi4vaW5wdXRIYW5kbGVycy9yZWdpb24uaW5wdXRcIjtcclxuaW1wb3J0IHsgdG9nZ2xlVGhlbWVNb2RlIH0gZnJvbSBcIi4vaW5wdXRIYW5kbGVycy90b2dnbGUudGhlbWUubW9kZVwiO1xyXG5cclxuY29uc3QgZ2VuZXJpY0ZldGNoID0gYXN5bmMgPFQ+KHVybDogVVJMIHwgUmVxdWVzdEluZm8sIGluaXQ/OiBSZXF1ZXN0SW5pdCk6IFByb21pc2U8VD4gPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hlZERhdGE6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBpbml0KTtcclxuICAgIHJldHVybiAoYXdhaXQgZmV0Y2hlZERhdGEuanNvbigpKSBhcyBUO1xyXG59XHJcblxyXG5jb25zdCBmZXRjaENvdW50cmllcyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZW5lcmljRmV0Y2g8Q291bnRyeU1vZGVsW10+KCdodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YzLjEvYWxsJyk7XHJcbiAgICByZW5kZXJDb3VudHJpZXMoZGF0YSk7XHJcbiAgICBmaWx0ZXJCeVJlZ2lvbigpO1xyXG4gICAgdG9nZ2xlVGhlbWVNb2RlKCk7XHJcbiAgICBzZWFyY2hJbnB1dEhhbmRsZXIoKTtcclxuICAgIGdldENvdW50cnlEZXRhaWxzKCk7XHJcbn1cclxuXHJcbmZldGNoQ291bnRyaWVzKCk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hDb3VudHJ5RGV0YWlscyA9IGFzeW5jIChuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHJlcXVlc3REZXRhaWxzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcmVzdGNvdW50cmllcy5jb20vdjMuMS9uYW1lLyR7bmFtZX1gKVxyXG4gICAgY29uc3QgY291bnRyeURhdGEgPSBhd2FpdCByZXF1ZXN0RGV0YWlscy5qc29uKClcclxuICAgIHJlbmRlckNvdW50cnlEZXRhaWxzKGNvdW50cnlEYXRhKTtcclxufSIsImltcG9ydCB7IElzb0tleXNNb2RlbCB9IGZyb20gXCIuL21vZGVscy9pc28ta2V5cy5tb2RlbFwiO1xyXG5cclxuY29uc3QgY291bnRyeUlTT01hcHBpbmc6IFJlY29yZDxJc29LZXlzTW9kZWwgfCBzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgICBBRkc6IFwiQUZcIixcclxuICAgIEFMQTogXCJBWFwiLFxyXG4gICAgQUxCOiBcIkFMXCIsXHJcbiAgICBEWkE6IFwiRFpcIixcclxuICAgIEFTTTogXCJBU1wiLFxyXG4gICAgQU5EOiBcIkFEXCIsXHJcbiAgICBBR086IFwiQU9cIixcclxuICAgIEFJQTogXCJBSVwiLFxyXG4gICAgQVRBOiBcIkFRXCIsXHJcbiAgICBBVEc6IFwiQUdcIixcclxuICAgIEFSRzogXCJBUlwiLFxyXG4gICAgQVJNOiBcIkFNXCIsXHJcbiAgICBBQlc6IFwiQVdcIixcclxuICAgIEFVUzogXCJBVVwiLFxyXG4gICAgQVVUOiBcIkFUXCIsXHJcbiAgICBBWkU6IFwiQVpcIixcclxuICAgIEJIUzogXCJCU1wiLFxyXG4gICAgQkhSOiBcIkJIXCIsXHJcbiAgICBCR0Q6IFwiQkRcIixcclxuICAgIEJSQjogXCJCQlwiLFxyXG4gICAgQkxSOiBcIkJZXCIsXHJcbiAgICBCRUw6IFwiQkVcIixcclxuICAgIEJMWjogXCJCWlwiLFxyXG4gICAgQkVOOiBcIkJKXCIsXHJcbiAgICBCTVU6IFwiQk1cIixcclxuICAgIEJUTjogXCJCVFwiLFxyXG4gICAgQk9MOiBcIkJPXCIsXHJcbiAgICBCSUg6IFwiQkFcIixcclxuICAgIEJXQTogXCJCV1wiLFxyXG4gICAgQlZUOiBcIkJWXCIsXHJcbiAgICBCUkE6IFwiQlJcIixcclxuICAgIFZHQjogXCJWR1wiLFxyXG4gICAgSU9UOiBcIklPXCIsXHJcbiAgICBCUk46IFwiQk5cIixcclxuICAgIEJHUjogXCJCR1wiLFxyXG4gICAgQkZBOiBcIkJGXCIsXHJcbiAgICBCREk6IFwiQklcIixcclxuICAgIEtITTogXCJLSFwiLFxyXG4gICAgQ01SOiBcIkNNXCIsXHJcbiAgICBDQU46IFwiQ0FcIixcclxuICAgIENQVjogXCJDVlwiLFxyXG4gICAgQ1lNOiBcIktZXCIsXHJcbiAgICBDQUY6IFwiQ0ZcIixcclxuICAgIFRDRDogXCJURFwiLFxyXG4gICAgQ0hMOiBcIkNMXCIsXHJcbiAgICBDSE46IFwiQ05cIixcclxuICAgIEhLRzogXCJIS1wiLFxyXG4gICAgTUFDOiBcIk1PXCIsXHJcbiAgICBDWFI6IFwiQ1hcIixcclxuICAgIENDSzogXCJDQ1wiLFxyXG4gICAgQ09MOiBcIkNPXCIsXHJcbiAgICBDT006IFwiS01cIixcclxuICAgIENPRzogXCJDR1wiLFxyXG4gICAgQ09EOiBcIkNEXCIsXHJcbiAgICBDT0s6IFwiQ0tcIixcclxuICAgIENSSTogXCJDUlwiLFxyXG4gICAgQ0lWOiBcIkNJXCIsXHJcbiAgICBIUlY6IFwiSFJcIixcclxuICAgIENVQjogXCJDVVwiLFxyXG4gICAgQ1lQOiBcIkNZXCIsXHJcbiAgICBDWkU6IFwiQ1pcIixcclxuICAgIEROSzogXCJES1wiLFxyXG4gICAgREpJOiBcIkRKXCIsXHJcbiAgICBETUE6IFwiRE1cIixcclxuICAgIERPTTogXCJET1wiLFxyXG4gICAgRUNVOiBcIkVDXCIsXHJcbiAgICBFR1k6IFwiRUdcIixcclxuICAgIFNMVjogXCJTVlwiLFxyXG4gICAgR05ROiBcIkdRXCIsXHJcbiAgICBFUkk6IFwiRVJcIixcclxuICAgIEVTVDogXCJFRVwiLFxyXG4gICAgRVRIOiBcIkVUXCIsXHJcbiAgICBGTEs6IFwiRktcIixcclxuICAgIEZSTzogXCJGT1wiLFxyXG4gICAgRkpJOiBcIkZKXCIsXHJcbiAgICBGSU46IFwiRklcIixcclxuICAgIEZSQTogXCJGUlwiLFxyXG4gICAgR1VGOiBcIkdGXCIsXHJcbiAgICBQWUY6IFwiUEZcIixcclxuICAgIEFURjogXCJURlwiLFxyXG4gICAgR0FCOiBcIkdBXCIsXHJcbiAgICBHTUI6IFwiR01cIixcclxuICAgIEdFTzogXCJHRVwiLFxyXG4gICAgREVVOiBcIkRFXCIsXHJcbiAgICBHSEE6IFwiR0hcIixcclxuICAgIEdJQjogXCJHSVwiLFxyXG4gICAgR1JDOiBcIkdSXCIsXHJcbiAgICBHUkw6IFwiR0xcIixcclxuICAgIEdSRDogXCJHRFwiLFxyXG4gICAgR0xQOiBcIkdQXCIsXHJcbiAgICBHVU06IFwiR1VcIixcclxuICAgIEdUTTogXCJHVFwiLFxyXG4gICAgR0dZOiBcIkdHXCIsXHJcbiAgICBHSU46IFwiR05cIixcclxuICAgIEdOQjogXCJHV1wiLFxyXG4gICAgR1VZOiBcIkdZXCIsXHJcbiAgICBIVEk6IFwiSFRcIixcclxuICAgIEhNRDogXCJITVwiLFxyXG4gICAgVkFUOiBcIlZBXCIsXHJcbiAgICBITkQ6IFwiSE5cIixcclxuICAgIEhVTjogXCJIVVwiLFxyXG4gICAgSVNMOiBcIklTXCIsXHJcbiAgICBJTkQ6IFwiSU5cIixcclxuICAgIElETjogXCJJRFwiLFxyXG4gICAgSVJOOiBcIklSXCIsXHJcbiAgICBJUlE6IFwiSVFcIixcclxuICAgIElSTDogXCJJRVwiLFxyXG4gICAgSU1OOiBcIklNXCIsXHJcbiAgICBJU1I6IFwiSUxcIixcclxuICAgIElUQTogXCJJVFwiLFxyXG4gICAgSkFNOiBcIkpNXCIsXHJcbiAgICBKUE46IFwiSlBcIixcclxuICAgIEpFWTogXCJKRVwiLFxyXG4gICAgSk9SOiBcIkpPXCIsXHJcbiAgICBLQVo6IFwiS1pcIixcclxuICAgIEtFTjogXCJLRVwiLFxyXG4gICAgS0lSOiBcIktJXCIsXHJcbiAgICBQUks6IFwiS1BcIixcclxuICAgIEtPUjogXCJLUlwiLFxyXG4gICAgS1dUOiBcIktXXCIsXHJcbiAgICBLR1o6IFwiS0dcIixcclxuICAgIExBTzogXCJMQVwiLFxyXG4gICAgTFZBOiBcIkxWXCIsXHJcbiAgICBMQk46IFwiTEJcIixcclxuICAgIExTTzogXCJMU1wiLFxyXG4gICAgTEJSOiBcIkxSXCIsXHJcbiAgICBMQlk6IFwiTFlcIixcclxuICAgIExJRTogXCJMSVwiLFxyXG4gICAgTFRVOiBcIkxUXCIsXHJcbiAgICBMVVg6IFwiTFVcIixcclxuICAgIE1LRDogXCJNS1wiLFxyXG4gICAgTURHOiBcIk1HXCIsXHJcbiAgICBNV0k6IFwiTVdcIixcclxuICAgIE1ZUzogXCJNWVwiLFxyXG4gICAgTURWOiBcIk1WXCIsXHJcbiAgICBNTEk6IFwiTUxcIixcclxuICAgIE1MVDogXCJNVFwiLFxyXG4gICAgTUhMOiBcIk1IXCIsXHJcbiAgICBNVFE6IFwiTVFcIixcclxuICAgIE1SVDogXCJNUlwiLFxyXG4gICAgTVVTOiBcIk1VXCIsXHJcbiAgICBNWVQ6IFwiWVRcIixcclxuICAgIE1FWDogXCJNWFwiLFxyXG4gICAgRlNNOiBcIkZNXCIsXHJcbiAgICBNREE6IFwiTURcIixcclxuICAgIE1DTzogXCJNQ1wiLFxyXG4gICAgTU5HOiBcIk1OXCIsXHJcbiAgICBNTkU6IFwiTUVcIixcclxuICAgIE1TUjogXCJNU1wiLFxyXG4gICAgTUFSOiBcIk1BXCIsXHJcbiAgICBNT1o6IFwiTVpcIixcclxuICAgIE1NUjogXCJNTVwiLFxyXG4gICAgTkFNOiBcIk5BXCIsXHJcbiAgICBOUlU6IFwiTlJcIixcclxuICAgIE5QTDogXCJOUFwiLFxyXG4gICAgTkxEOiBcIk5MXCIsXHJcbiAgICBBTlQ6IFwiQU5cIixcclxuICAgIE5DTDogXCJOQ1wiLFxyXG4gICAgTlpMOiBcIk5aXCIsXHJcbiAgICBOSUM6IFwiTklcIixcclxuICAgIE5FUjogXCJORVwiLFxyXG4gICAgTkdBOiBcIk5HXCIsXHJcbiAgICBOSVU6IFwiTlVcIixcclxuICAgIE5GSzogXCJORlwiLFxyXG4gICAgTU5QOiBcIk1QXCIsXHJcbiAgICBOT1I6IFwiTk9cIixcclxuICAgIE9NTjogXCJPTVwiLFxyXG4gICAgUEFLOiBcIlBLXCIsXHJcbiAgICBQTFc6IFwiUFdcIixcclxuICAgIFBTRTogXCJQU1wiLFxyXG4gICAgUEFOOiBcIlBBXCIsXHJcbiAgICBQTkc6IFwiUEdcIixcclxuICAgIFBSWTogXCJQWVwiLFxyXG4gICAgUEVSOiBcIlBFXCIsXHJcbiAgICBQSEw6IFwiUEhcIixcclxuICAgIFBDTjogXCJQTlwiLFxyXG4gICAgUE9MOiBcIlBMXCIsXHJcbiAgICBQUlQ6IFwiUFRcIixcclxuICAgIFBSSTogXCJQUlwiLFxyXG4gICAgUUFUOiBcIlFBXCIsXHJcbiAgICBSRVU6IFwiUkVcIixcclxuICAgIFJPVTogXCJST1wiLFxyXG4gICAgUlVTOiBcIlJVXCIsXHJcbiAgICBSV0E6IFwiUldcIixcclxuICAgIEJMTTogXCJCTFwiLFxyXG4gICAgU0hOOiBcIlNIXCIsXHJcbiAgICBLTkE6IFwiS05cIixcclxuICAgIExDQTogXCJMQ1wiLFxyXG4gICAgTUFGOiBcIk1GXCIsXHJcbiAgICBTUE06IFwiUE1cIixcclxuICAgIFZDVDogXCJWQ1wiLFxyXG4gICAgV1NNOiBcIldTXCIsXHJcbiAgICBTTVI6IFwiU01cIixcclxuICAgIFNUUDogXCJTVFwiLFxyXG4gICAgU0FVOiBcIlNBXCIsXHJcbiAgICBTRU46IFwiU05cIixcclxuICAgIFNSQjogXCJSU1wiLFxyXG4gICAgU1lDOiBcIlNDXCIsXHJcbiAgICBTTEU6IFwiU0xcIixcclxuICAgIFNHUDogXCJTR1wiLFxyXG4gICAgU1ZLOiBcIlNLXCIsXHJcbiAgICBTVk46IFwiU0lcIixcclxuICAgIFNMQjogXCJTQlwiLFxyXG4gICAgU09NOiBcIlNPXCIsXHJcbiAgICBaQUY6IFwiWkFcIixcclxuICAgIFNHUzogXCJHU1wiLFxyXG4gICAgU1NEOiBcIlNTXCIsXHJcbiAgICBFU1A6IFwiRVNcIixcclxuICAgIExLQTogXCJMS1wiLFxyXG4gICAgU0ROOiBcIlNEXCIsXHJcbiAgICBTVVI6IFwiU1JcIixcclxuICAgIFNKTTogXCJTSlwiLFxyXG4gICAgU1daOiBcIlNaXCIsXHJcbiAgICBTV0U6IFwiU0VcIixcclxuICAgIENIRTogXCJDSFwiLFxyXG4gICAgU1lSOiBcIlNZXCIsXHJcbiAgICBUV046IFwiVFdcIixcclxuICAgIFRKSzogXCJUSlwiLFxyXG4gICAgVFpBOiBcIlRaXCIsXHJcbiAgICBUSEE6IFwiVEhcIixcclxuICAgIFRMUzogXCJUTFwiLFxyXG4gICAgVEdPOiBcIlRHXCIsXHJcbiAgICBUS0w6IFwiVEtcIixcclxuICAgIFRPTjogXCJUT1wiLFxyXG4gICAgVFRPOiBcIlRUXCIsXHJcbiAgICBUVU46IFwiVE5cIixcclxuICAgIFRVUjogXCJUUlwiLFxyXG4gICAgVEtNOiBcIlRNXCIsXHJcbiAgICBUQ0E6IFwiVENcIixcclxuICAgIFRVVjogXCJUVlwiLFxyXG4gICAgVUdBOiBcIlVHXCIsXHJcbiAgICBVS1I6IFwiVUFcIixcclxuICAgIEFSRTogXCJBRVwiLFxyXG4gICAgR0JSOiBcIkdCXCIsXHJcbiAgICBVU0E6IFwiVVNcIixcclxuICAgIFVNSTogXCJVTVwiLFxyXG4gICAgVVJZOiBcIlVZXCIsXHJcbiAgICBVWkI6IFwiVVpcIixcclxuICAgIFZVVDogXCJWVVwiLFxyXG4gICAgVkVOOiBcIlZFXCIsXHJcbiAgICBWTk06IFwiVk5cIixcclxuICAgIFZJUjogXCJWSVwiLFxyXG4gICAgV0xGOiBcIldGXCIsXHJcbiAgICBFU0g6IFwiRUhcIixcclxuICAgIFlFTTogXCJZRVwiLFxyXG4gICAgWk1COiBcIlpNXCIsXHJcbiAgICBaV0U6IFwiWldcIixcclxuICAgIFhLWDogXCJYS1wiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb3VudHJ5SVNPMiA9IChjb3VudHJ5Q29kZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBjb3VudHJ5SVNPTWFwcGluZ1s8c3RyaW5nPmNvdW50cnlDb2RlXTtcclxufSIsImV4cG9ydCBjb25zdCBjbG9zZUNvdW50cnlEZXRhaWxzID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgY291bnRyeURldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRyeV9fZGV0YWlscy1jb250YWluZXInKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjb25zdCBjb3VudHJpZXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50cmllc19fc2VjdGlvbicpISBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGlucHV0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dHNfX2NvbnRhaW5lcicpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0IHJldHVybkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fX3JldHVybicpISBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgICByZXR1cm5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvdW50cmllc1NlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgIGlucHV0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgY291bnRyeURldGFpbHNDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICB9KVxyXG59IiwiZXhwb3J0IGNvbnN0IGZpbHRlckJ5UmVnaW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY291bnRyeUNvbnRhaW5lciA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxEaXZFbGVtZW50PihcIi5jb3VudHJ5X19jb250YWluZXJcIildITtcclxuICAgIGNvbnN0IHNlbGVjdFJlZ2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpb24taW5wdXQnKSEgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICBzZWxlY3RSZWdpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCByZWdpb25TZWxlY3RlZCA9IHNlbGVjdFJlZ2lvbi52YWx1ZTtcclxuICAgICAgICBjb3VudHJ5Q29udGFpbmVyLmZvckVhY2goY291bnRyeSA9PiB7XHJcbiAgICAgICAgICAgIGNvdW50cnkuZGF0YXNldC5yZWdpb24gIT09IHJlZ2lvblNlbGVjdGVkID8gY291bnRyeS5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSA6IGNvdW50cnkucGFyZW50RWxlbWVudCEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGlmIChyZWdpb25TZWxlY3RlZCA9PT0gJycpIGNvdW50cnkucGFyZW50RWxlbWVudCEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0iLCJleHBvcnQgY29uc3Qgc2VhcmNoSW5wdXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0JykhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBjb3VudHJ5Q29udGFpbmVyID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTERpdkVsZW1lbnQ+KFwiLmNvdW50cnlfX2NvbnRhaW5lclwiKV0hO1xyXG4gICAgY29uc3Qgc2VsZWN0UmVnaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lvbi1pbnB1dCcpISBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuXHJcbiAgICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvdW50cnlDb250YWluZXIuZm9yRWFjaChjb3VudHJ5ID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlYXJjaElucHV0LnZhbHVlLmxlbmd0aCA9PT0gMCAmJiBzZWxlY3RSZWdpb24udmFsdWUgPT09ICcnKSBjb3VudHJ5LnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoSW5wdXQudmFsdWUubGVuZ3RoID09PSAwICYmIGNvdW50cnkuZGF0YXNldC5yZWdpb24gPT09IHNlbGVjdFJlZ2lvbi52YWx1ZSkgY291bnRyeS5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgIWNvdW50cnkuZGF0YXNldC5uYW1lIS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoYCR7c2VhcmNoSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKX1gKSA/IGNvdW50cnkucGFyZW50RWxlbWVudCEuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykgOiBjb3VudHJ5LnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0iLCJleHBvcnQgY29uc3QgdG9nZ2xlVGhlbWVNb2RlID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgLy9ET00gRWxlbWVudHNcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lLW1vZGVfX2NoZWNrYm94JykhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykhIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSEgYXMgSFRNTEJvZHlFbGVtZW50O1xyXG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0JykhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCByZWdpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpb24taW5wdXQnKSEgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGNvdW50cnlEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oJy5jb3VudHJ5X19kZXRhaWxzJyk7XHJcblxyXG5cclxuICAgIC8vQ29sb3IgdmFyaWFibGVzIGFzIGluIFNBU1NcclxuICAgIGNvbnN0IGNvbG9yRGFya0JsdWUgPSBcImhzbCgyMDksIDIzJSwgMjIlKVwiO1xyXG4gICAgY29uc3QgY29sb3JWZXJ5RGFya0JsdWUgPSBcImhzbCgyMDcsIDI2JSwgMTclKVwiO1xyXG4gICAgY29uc3QgY29sb3JWZXJ5RGFya0JsdWVUZXh0ID0gXCJoc2woMjAwLCAxNSUsIDglKVwiO1xyXG4gICAgY29uc3QgY29sb3JWZXJ5TGlnaHRHcmF5QmFja2dyb3VuZCA9IFwiaHNsKDAsIDAlLCA5OCUpXCI7XHJcbiAgICBjb25zdCBjb2xvcldoaXRlID0gXCIjZmZmXCI7XHJcblxyXG4gICAgY29uc3QgZGFya1RoZW1lID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvckRhcmtCbHVlO1xyXG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JWZXJ5RGFya0JsdWU7XHJcbiAgICAgICAgYm9keS5zdHlsZS5jb2xvciA9IGNvbG9yV2hpdGU7XHJcbiAgICAgICAgc2VhcmNoSW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JEYXJrQmx1ZTtcclxuICAgICAgICByZWdpb25JbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvckRhcmtCbHVlO1xyXG5cclxuICAgICAgICBpZiAoY291bnRyeURldGFpbHMpIGNvdW50cnlEZXRhaWxzLmZvckVhY2goY291bnRyeSA9PiBjb3VudHJ5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yRGFya0JsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGlnaHRUaGVtZSA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JXaGl0ZTtcclxuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yVmVyeUxpZ2h0R3JheUJhY2tncm91bmQ7XHJcbiAgICAgICAgYm9keS5zdHlsZS5jb2xvciA9IGNvbG9yVmVyeURhcmtCbHVlVGV4dDtcclxuICAgICAgICBzZWFyY2hJbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcldoaXRlO1xyXG4gICAgICAgIHJlZ2lvbklucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yV2hpdGU7XHJcblxyXG4gICAgICAgIGlmIChjb3VudHJ5RGV0YWlscykgY291bnRyeURldGFpbHMuZm9yRWFjaChjb3VudHJ5ID0+IGNvdW50cnkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JXaGl0ZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykge1xyXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIGRhcmtUaGVtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGV2ZW50IGFuZCB0aGVtZSB0b2dnbGVcclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBjaGVja2JveC5jaGVja2VkID8gZGFya1RoZW1lKCkgOiBsaWdodFRoZW1lKCk7XHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IHsgQ291bnRyeU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9jb3VudHJ5Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyQ291bnRyaWVzID0gKGNvdW50cmllczogQ291bnRyeU1vZGVsW10pID0+IHtcclxuICAgIGNvbnN0IGNvdW50cnlTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3VudHJpZXNfX3NlY3Rpb25cIikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb3VudHJpZXMuZm9yRWFjaCgoY291bnRyeSkgPT4ge1xyXG4gICAgICAgIGNvdW50cnlTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjb3VudHJ5X19kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudHJ5X19jb250YWluZXJcIiBkYXRhLXJlZ2lvbj1cIiR7Y291bnRyeS5yZWdpb259XCIgZGF0YS1uYW1lPVwiJHtjb3VudHJ5Lm5hbWUuY29tbW9ufVwiIGRhdGEtb2ZmaWNpYWw9XCIke2NvdW50cnkubmFtZS5vZmZpY2lhbH1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtjb3VudHJ5LmZsYWdzLnBuZ31cIiBhbHQ9XCIke2NvdW50cnkuZmxhZ31cIiBjbGFzcz1cImNvdW50cnlfX2ZsYWdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY291bnRyeV9fbmFtZVwiPiR7Y291bnRyeS5uYW1lLmNvbW1vbn08L2gzPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY291bnRyeV9fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnlfX2xpc3QtLWl0ZW1cIj48c3Ryb25nPlBvcHVsYXRpb246PC9zdHJvbmc+ICR7Y291bnRyeS5wb3B1bGF0aW9uLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeV9fbGlzdC0taXRlbVwiPjxzdHJvbmc+UmVnaW9uOjwvc3Ryb25nPiAke2NvdW50cnkucmVnaW9ufTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeV9fbGlzdC0taXRlbVwiPjxzdHJvbmc+Q2FwaXRhbDo8L3N0cm9uZz4gJHtjb3VudHJ5LmNhcGl0YWwgPyBjb3VudHJ5LmNhcGl0YWxbMF0gOiAnKOKVr8Kw4pahwrDvvInila/vuLUg4pS74pSB4pS7J308L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgYClcclxuICAgIH0pXHJcbn07IiwiaW1wb3J0IHsgQ291bnRyeU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9jb3VudHJ5Lm1vZGVsXCI7XHJcbmltcG9ydCB7IGdldENvdW50cnlJU08yIH0gZnJvbSBcIi4uL2dldC1jb3VudHJpZXNcIjtcclxuaW1wb3J0IHsgY2xvc2VDb3VudHJ5RGV0YWlscyB9IGZyb20gXCIuLi9pbnB1dEhhbmRsZXJzL2Nsb3NlLmNvdW50cnkuZGV0YWlsc1wiO1xyXG5pbXBvcnQgeyBmZXRjaENvdW50cnlEZXRhaWxzIH0gZnJvbSBcIi4uL2FwcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckNvdW50cnlEZXRhaWxzID0gKGNvdW50cnlEZXRhaWxzOiBDb3VudHJ5TW9kZWxbXSkgPT4ge1xyXG4gICAgLy9ET01cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykhIGFzIEhUTUxCb2R5RWxlbWVudDtcclxuICAgIGNvbnN0IGNvdW50cnlEZXRhaWxzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb3VudHJ5RGV0YWlsc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb3VudHJ5X19kZXRhaWxzLWNvbnRhaW5lcicpO1xyXG4gICAgY291bnRyeURldGFpbHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2VuZXJhbC13aWR0aCcpO1xyXG4gICAgY291bnRyeURldGFpbHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2VudGVyJyk7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvdW50cnlEZXRhaWxzQ29udGFpbmVyKTtcclxuXHJcbiAgICAvL1ZBUklBQkxFU1xyXG4gICAgbGV0IGN1cnJlbmNpZXM6IHN0cmluZ1tdO1xyXG4gICAgbGV0IG5hdGl2ZU5hbWU6IHN0cmluZ1tdO1xyXG4gICAgY29uc3QgYm9yZGVyQ291bnRyaWVzID0gY291bnRyeURldGFpbHNbMF0uYm9yZGVycyA/IGNvdW50cnlEZXRhaWxzWzBdLmJvcmRlcnMubWFwKGNvdW50cnkgPT4gZ2V0Q291bnRyeUlTTzIoY291bnRyeSkpIDogW107XHJcbiAgICBsZXQgcmVnaW9uTmFtZXMgPSBuZXcgSW50bC5EaXNwbGF5TmFtZXMoWydlbiddLCB7dHlwZTogJ3JlZ2lvbid9KVxyXG5cclxuXHJcbiAgICAhY291bnRyeURldGFpbHNbMF0uaGFzT3duUHJvcGVydHkoJ2N1cnJlbmNpZXMnKSA/IGN1cnJlbmNpZXMgPSBbJ05vIGF2YWlsYWJsZSBjdXJyZW5jeS4nXSA6IGN1cnJlbmNpZXMgPSAoT2JqZWN0LnZhbHVlcyhjb3VudHJ5RGV0YWlsc1swXS5jdXJyZW5jaWVzKSkubWFwKGN1cnJlbmN5VHlwZSA9PiBjdXJyZW5jeVR5cGUubmFtZSk7XHJcbiAgICAhY291bnRyeURldGFpbHNbMF0uaGFzT3duUHJvcGVydHkoJ25hdGl2ZU5hbWUnKSA/IG5hdGl2ZU5hbWUgPSBbJ05vIG5hdGl2ZSBuYW1lIGF2YWlsYWJsZS4nXSA6IG5hdGl2ZU5hbWUgPSAoT2JqZWN0LnZhbHVlcyhjb3VudHJ5RGV0YWlsc1swXS5uYW1lLm5hdGl2ZU5hbWUpKS5tYXAobmFtZSA9PiBuYW1lLmNvbW1vbik7XHJcblxyXG4gICAgY29uc3QgYWRkQm9yZGVyQ291bnRyaWVzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvcmRlckNvdW50cmllc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3JkZXJpbmctY291bnRyeV9fY29udGFpbmVyJykhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoYm9yZGVyQ291bnRyaWVzLmxlbmd0aCA9PT0gMCkgYm9yZGVyQ291bnRyaWVzQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxzcGFuIGNsYXNzPVwiYm9yZGVyaW5nLWNvdW50cnktLW5vdC1mb3VuZFwiPlRoZXJlIGFyZSBubyBib3JkZXJpbmcgY291bnRyaWVzIHdpdGggdGhpcyBjb3VudHJ5ITwvc3Bhbj5gKVxyXG5cclxuICAgICAgICBib3JkZXJDb3VudHJpZXMuZm9yRWFjaCgoY291bnRyeSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBib3JkZXJDb3VudHJpZXNDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgICAgICAgICAke2kgPCAzID8gKGNvdW50cnkgPyBgPHNwYW4gY2xhc3M9XCJib3JkZXJpbmctY291bnRyeVwiPiR7cmVnaW9uTmFtZXMub2YoY291bnRyeSl9PC9zcGFuPmAgOiBgYCkgOiBcIlwifVxyXG4gICAgICAgICAgIGApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb3VudHJ5RGV0YWlsc0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlcl9fcmV0dXJuLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uX19yZXR1cm5cIj4mbGFycjsgQmFjazwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJfX2NvdW50cnktaW5mb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyX19jb3VudHJ5LWZsYWdcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtjb3VudHJ5RGV0YWlsc1swXS5mbGFncy5wbmd9XCIgYWx0PVwiQ291bnRyeSBmbGFnXCIgY2xhc3M9XCJjb3VudHJ5LWZsYWdcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJfX2NvdW50cnktZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiaGVhZGluZy1zZWNvbmRhcnlcIj4ke2NvdW50cnlEZXRhaWxzWzBdLm5hbWUuY29tbW9ufTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRyeS1pbmZvX193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY291bnRyeS1pbmZvX19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnktaW5mb19faXRlbVwiPjxzdHJvbmc+TmF0aXZlIG5hbWU6IDwvc3Ryb25nPiR7bmF0aXZlTmFtZSA/IG5hdGl2ZU5hbWUuYXQoLTEpIDogbmF0aXZlTmFtZVswXX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2l0ZW1cIj48c3Ryb25nPlBvcHVsYXRpb246IDwvc3Ryb25nPiR7Y291bnRyeURldGFpbHNbMF0ucG9wdWxhdGlvbi50b0xvY2FsZVN0cmluZygnZW4tVVMnKX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2l0ZW1cIj48c3Ryb25nPlJlZ2lvbjogPC9zdHJvbmc+JHtjb3VudHJ5RGV0YWlsc1swXS5yZWdpb24gPyBjb3VudHJ5RGV0YWlsc1swXS5yZWdpb24gOiAnTm8gcmVnaW9uIGF2YWlsYWJsZS4nfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnktaW5mb19faXRlbVwiPjxzdHJvbmc+U3ViIFJlZ2lvbjogPC9zdHJvbmc+JHtjb3VudHJ5RGV0YWlsc1swXS5zdWJyZWdpb24gPyBjb3VudHJ5RGV0YWlsc1swXS5zdWJyZWdpb24gOiAnTm8gc3ViIHJlZ2lvbiBhdmFpbGFibGUuJ308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2l0ZW1cIj48c3Ryb25nPkNhcGl0YWw6IDwvc3Ryb25nPiR7Y291bnRyeURldGFpbHNbMF0uY2FwaXRhbCA/IGNvdW50cnlEZXRhaWxzWzBdLmNhcGl0YWwgOiAnTm8gY2FwaXRhbCBhdmFpbGFibGUuJ308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY291bnRyeS1pbmZvX19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnktaW5mb19faXRlbVwiPjxzdHJvbmc+VG9wIExldmVsIERvbWFpbjogPC9zdHJvbmc+JHtjb3VudHJ5RGV0YWlsc1swXS50bGR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeS1pbmZvX19pdGVtXCI+PHN0cm9uZz5DdXJyZW5jaWVzOiA8L3N0cm9uZz4ke2N1cnJlbmNpZXMubGVuZ3RoID09PSAxID8gY3VycmVuY2llc1swXSA6IGN1cnJlbmNpZXMuam9pbignLCAnKX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2l0ZW1cIj48c3Ryb25nPkxhbmd1YWdlczogPC9zdHJvbmc+JHtjb3VudHJ5RGV0YWlsc1swXS5oYXNPd25Qcm9wZXJ0eSgnbGFuZ3VhZ2VzJykgPyBPYmplY3QudmFsdWVzKGNvdW50cnlEZXRhaWxzWzBdLmxhbmd1YWdlcykudG9TdHJpbmcoKS5yZXBsYWNlQWxsKCcsJywgJywgJykgOiAnTm8gbGFuZ3VhZ2UgYXZhaWxhYmxlLid9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyX19ib3JkZXItY291bnRyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJib3JkZXItY291bnRyaWVzX190ZXh0XCI+PHN0cm9uZz5Cb3JkZXIgY291bnRyaWVzOiA8L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlcmluZy1jb3VudHJ5X19jb250YWluZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGApXHJcbiAgICBhZGRCb3JkZXJDb3VudHJpZXMoKTtcclxuICAgIGNsb3NlQ291bnRyeURldGFpbHMoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvdW50cnlEZXRhaWxzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY291bnRyeURldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PignLmNvdW50cnlfX2RldGFpbHMnKSE7XHJcbiAgICBjb25zdCBjb3VudHJpZXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50cmllc19fc2VjdGlvbicpISBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGlucHV0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dHNfX2NvbnRhaW5lcicpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcblxyXG4gICAgY291bnRyeURldGFpbHMuZm9yRWFjaChjb3VudHJ5ID0+IHtcclxuICAgICAgICBjb3VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb3VudHJpZXNTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGlucHV0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb3VudHJ5LmZpcnN0RWxlbWVudENoaWxkKVxyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgZmV0Y2hDb3VudHJ5RGV0YWlscyhjb3VudHJ5LmZpcnN0RWxlbWVudENoaWxkIS5kYXRhc2V0Lm9mZmljaWFsKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==