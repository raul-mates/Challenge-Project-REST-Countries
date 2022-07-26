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
const toggle_view_style_1 = __webpack_require__(/*! ./inputHandlers/toggle.view.style */ "./src/inputHandlers/toggle.view.style.ts");
const genericFetch = (url, init) => __awaiter(void 0, void 0, void 0, function* () {
    const fetchedData = yield fetch(url, init);
    return (yield fetchedData.json());
});
const fetchCountries = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield genericFetch("https://restcountries.com/v3.1/all");
    (0, render_countries_1.renderCountries)(data);
    (0, region_input_1.filterByRegion)();
    (0, toggle_theme_mode_1.toggleThemeMode)();
    (0, search_input_1.searchInputHandler)();
    (0, render_country_details_1.getCountryDetails)();
    (0, toggle_view_style_1.toggleViewStyle)();
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

/***/ "./src/inputHandlers/debounce.ts":
/*!***************************************!*\
  !*** ./src/inputHandlers/debounce.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.debounce = void 0;
const debounce = (func, time) => {
    let timerId;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(context, args);
        }, time);
    };
};
exports.debounce = debounce;


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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.searchInputHandler = void 0;
const debounce_1 = __webpack_require__(/*! ./debounce */ "./src/inputHandlers/debounce.ts");
const searchInputHandler = () => {
    const searchInput = document.querySelector(".search-input");
    const countryContainer = [...document.querySelectorAll(".country__container"),];
    const selectRegion = document.querySelector(".region-input");
    const searchButton = document.querySelector(".button__search-icon");
    searchInput.addEventListener("input", (0, debounce_1.debounce)((e) => {
        e.preventDefault();
        selectRegion.value = "";
        countryContainer.forEach((country) => {
            if (searchInput.value.length === 0 && selectRegion.value === "")
                country.parentElement.classList.remove("hidden");
            if (searchInput.value.length === 0 &&
                country.dataset.region === selectRegion.value)
                country.parentElement.classList.remove("hidden");
            !country.dataset
                .name.toLowerCase()
                .startsWith(`${searchInput.value.toLowerCase()}`)
                ? country.parentElement.classList.add("hidden")
                : country.parentElement.classList.remove("hidden");
        });
    }, 300));
    searchButton.addEventListener("click", (e) => {
        e.preventDefault();
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
    const countryContainer = document.querySelectorAll('.country__container');
    const searchButton = document.querySelector('.button__search-icon');
    const colorDarkBlue = "hsl(209, 23%, 22%)";
    const colorVeryDarkBlue = "hsl(207, 26%, 17%)";
    const colorVeryDarkBlueText = "#415B91";
    const colorWhite = "#f3f3f3";
    const darkTheme = () => {
        header.style.backgroundColor = colorDarkBlue;
        body.style.backgroundColor = colorVeryDarkBlue;
        body.style.color = colorWhite;
        searchInput.style.backgroundColor = colorDarkBlue;
        regionInput.style.backgroundColor = colorDarkBlue;
        searchButton.style.color = 'rgb(32, 44, 55)';
        searchButton.style.backgroundColor = '#e7e6ef';
        countryContainer.forEach(country => {
            country.style.backgroundColor = colorDarkBlue;
        });
        if (countryDetails)
            countryDetails.forEach(country => country.style.backgroundColor = colorDarkBlue);
    };
    const lightTheme = () => {
        header.style.backgroundColor = '#F9F9F9';
        body.style.backgroundColor = '#fff';
        body.style.color = colorVeryDarkBlueText;
        searchInput.style.backgroundColor = '#fff';
        regionInput.style.backgroundColor = '#fff';
        searchButton.style.color = '#fff';
        searchButton.style.backgroundColor = '#81b0ff';
        countryContainer.forEach(country => {
            country.style.backgroundColor = '#F9F9F9';
        });
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

/***/ "./src/inputHandlers/toggle.view.style.ts":
/*!************************************************!*\
  !*** ./src/inputHandlers/toggle.view.style.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toggleViewStyle = void 0;
const toggleViewStyle = () => {
    const gridStyleButton = document.querySelector('.grid-icon');
    const listStyleButton = document.querySelector('.list-icon');
    const countriesSection = document.querySelector('.countries__section');
    gridStyleButton.addEventListener('click', () => {
        if (countriesSection.classList.value.includes('list-style')) {
            countriesSection.classList.replace('list-style', 'grid-style');
        }
    });
    listStyleButton.addEventListener('click', () => {
        if (countriesSection.classList.value.includes('grid-style')) {
            countriesSection.classList.replace('grid-style', 'list-style');
        }
    });
};
exports.toggleViewStyle = toggleViewStyle;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwSEFBK0Q7QUFDL0QsNElBQThGO0FBQzlGLHNIQUFrRTtBQUNsRSxzSEFBOEQ7QUFDOUQscUlBQW9FO0FBQ3BFLHFJQUFvRTtBQUVwRSxNQUFNLFlBQVksR0FBRyxDQUFVLEdBQXNCLEVBQUUsSUFBa0IsRUFBYyxFQUFFO0lBQ3JGLE1BQU0sV0FBVyxHQUFhLE1BQU0sS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRCxPQUFPLENBQUMsTUFBTSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQU0sQ0FBQztBQUMzQyxDQUFDLEVBQUM7QUFFRixNQUFNLGNBQWMsR0FBRyxHQUF3QixFQUFFO0lBQzdDLE1BQU0sSUFBSSxHQUFHLE1BQU0sWUFBWSxDQUFpQixvQ0FBb0MsQ0FBQyxDQUFDO0lBQ3RGLHNDQUFlLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsaUNBQWMsR0FBRSxDQUFDO0lBQ2pCLHVDQUFlLEdBQUUsQ0FBQztJQUNsQixxQ0FBa0IsR0FBRSxDQUFDO0lBQ3JCLDhDQUFpQixHQUFFLENBQUM7SUFDcEIsdUNBQWUsR0FBRSxDQUFDO0FBQ3RCLENBQUMsRUFBQztBQUVGLGNBQWMsRUFBRSxDQUFDO0FBRVYsTUFBTSxtQkFBbUIsR0FBRyxDQUFPLElBQVksRUFBaUIsRUFBRTtJQUNyRSxNQUFNLGNBQWMsR0FBRyxNQUFNLEtBQUssQ0FBQyx1Q0FBdUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNsRixNQUFNLFdBQVcsR0FBRyxNQUFNLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoRCxpREFBb0IsRUFBQyxXQUFXLENBQUMsQ0FBQztBQUN0QyxDQUFDLEVBQUM7QUFKVywyQkFBbUIsdUJBSTlCOzs7Ozs7Ozs7Ozs7OztBQzNCRixNQUFNLGlCQUFpQixHQUEwQztJQUM3RCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FB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WSx5QkFBaUIscUJBYzdCOzs7Ozs7O1VDckZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0LWNvdW50cmllcy1hcGktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci1tYXN0ZXIvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci8uL3NyYy9nZXQtY291bnRyaWVzLnRzIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci8uL3NyYy9pbnB1dEhhbmRsZXJzL2Nsb3NlLmNvdW50cnkuZGV0YWlscy50cyIsIndlYnBhY2s6Ly9yZXN0LWNvdW50cmllcy1hcGktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci1tYXN0ZXIvLi9zcmMvaW5wdXRIYW5kbGVycy9kZWJvdW5jZS50cyIsIndlYnBhY2s6Ly9yZXN0LWNvdW50cmllcy1hcGktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci1tYXN0ZXIvLi9zcmMvaW5wdXRIYW5kbGVycy9yZWdpb24uaW5wdXQudHMiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyLy4vc3JjL2lucHV0SGFuZGxlcnMvc2VhcmNoLmlucHV0LnRzIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci8uL3NyYy9pbnB1dEhhbmRsZXJzL3RvZ2dsZS50aGVtZS5tb2RlLnRzIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci8uL3NyYy9pbnB1dEhhbmRsZXJzL3RvZ2dsZS52aWV3LnN0eWxlLnRzIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci8uL3NyYy9yZW5kZXJlcnMvcmVuZGVyLmNvdW50cmllcy50cyIsIndlYnBhY2s6Ly9yZXN0LWNvdW50cmllcy1hcGktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci1tYXN0ZXIvLi9zcmMvcmVuZGVyZXJzL3JlbmRlci5jb3VudHJ5LmRldGFpbHMudHMiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3VudHJ5TW9kZWwgfSBmcm9tIFwiLi9tb2RlbHMvY291bnRyeS5tb2RlbFwiO1xyXG5pbXBvcnQgeyByZW5kZXJDb3VudHJpZXMgfSBmcm9tIFwiLi9yZW5kZXJlcnMvcmVuZGVyLmNvdW50cmllc1wiO1xyXG5pbXBvcnQgeyBnZXRDb3VudHJ5RGV0YWlscywgcmVuZGVyQ291bnRyeURldGFpbHMsIH0gZnJvbSBcIi4vcmVuZGVyZXJzL3JlbmRlci5jb3VudHJ5LmRldGFpbHNcIjtcclxuaW1wb3J0IHsgc2VhcmNoSW5wdXRIYW5kbGVyIH0gZnJvbSBcIi4vaW5wdXRIYW5kbGVycy9zZWFyY2guaW5wdXRcIjtcclxuaW1wb3J0IHsgZmlsdGVyQnlSZWdpb24gfSBmcm9tIFwiLi9pbnB1dEhhbmRsZXJzL3JlZ2lvbi5pbnB1dFwiO1xyXG5pbXBvcnQgeyB0b2dnbGVUaGVtZU1vZGUgfSBmcm9tIFwiLi9pbnB1dEhhbmRsZXJzL3RvZ2dsZS50aGVtZS5tb2RlXCI7XHJcbmltcG9ydCB7IHRvZ2dsZVZpZXdTdHlsZSB9IGZyb20gXCIuL2lucHV0SGFuZGxlcnMvdG9nZ2xlLnZpZXcuc3R5bGVcIjtcclxuXHJcbmNvbnN0IGdlbmVyaWNGZXRjaCA9IGFzeW5jIDxUPih1cmw6IFVSTCB8IFJlcXVlc3RJbmZvLCBpbml0PzogUmVxdWVzdEluaXQpOiBQcm9taXNlPFQ+ID0+IHtcclxuICAgIGNvbnN0IGZldGNoZWREYXRhOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgaW5pdCk7XHJcbiAgICByZXR1cm4gKGF3YWl0IGZldGNoZWREYXRhLmpzb24oKSkgYXMgVDtcclxufTtcclxuXHJcbmNvbnN0IGZldGNoQ291bnRyaWVzID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdlbmVyaWNGZXRjaDxDb3VudHJ5TW9kZWxbXT4oXCJodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YzLjEvYWxsXCIpO1xyXG4gICAgcmVuZGVyQ291bnRyaWVzKGRhdGEpO1xyXG4gICAgZmlsdGVyQnlSZWdpb24oKTtcclxuICAgIHRvZ2dsZVRoZW1lTW9kZSgpO1xyXG4gICAgc2VhcmNoSW5wdXRIYW5kbGVyKCk7XHJcbiAgICBnZXRDb3VudHJ5RGV0YWlscygpO1xyXG4gICAgdG9nZ2xlVmlld1N0eWxlKCk7XHJcbn07XHJcblxyXG5mZXRjaENvdW50cmllcygpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ291bnRyeURldGFpbHMgPSBhc3luYyAobmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zdCByZXF1ZXN0RGV0YWlscyA9IGF3YWl0IGZldGNoKGBodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YzLjEvbmFtZS8ke25hbWV9YCk7XHJcbiAgICBjb25zdCBjb3VudHJ5RGF0YSA9IGF3YWl0IHJlcXVlc3REZXRhaWxzLmpzb24oKTtcclxuICAgIHJlbmRlckNvdW50cnlEZXRhaWxzKGNvdW50cnlEYXRhKTtcclxufTtcclxuIiwiaW1wb3J0IHsgSXNvS2V5c01vZGVsIH0gZnJvbSBcIi4vbW9kZWxzL2lzby1rZXlzLm1vZGVsXCI7XHJcblxyXG5jb25zdCBjb3VudHJ5SVNPTWFwcGluZzogUmVjb3JkPElzb0tleXNNb2RlbCB8IHN0cmluZywgc3RyaW5nPiA9IHtcclxuICAgIEFGRzogXCJBRlwiLFxyXG4gICAgQUxBOiBcIkFYXCIsXHJcbiAgICBBTEI6IFwiQUxcIixcclxuICAgIERaQTogXCJEWlwiLFxyXG4gICAgQVNNOiBcIkFTXCIsXHJcbiAgICBBTkQ6IFwiQURcIixcclxuICAgIEFHTzogXCJBT1wiLFxyXG4gICAgQUlBOiBcIkFJXCIsXHJcbiAgICBBVEE6IFwiQVFcIixcclxuICAgIEFURzogXCJBR1wiLFxyXG4gICAgQVJHOiBcIkFSXCIsXHJcbiAgICBBUk06IFwiQU1cIixcclxuICAgIEFCVzogXCJBV1wiLFxyXG4gICAgQVVTOiBcIkFVXCIsXHJcbiAgICBBVVQ6IFwiQVRcIixcclxuICAgIEFaRTogXCJBWlwiLFxyXG4gICAgQkhTOiBcIkJTXCIsXHJcbiAgICBCSFI6IFwiQkhcIixcclxuICAgIEJHRDogXCJCRFwiLFxyXG4gICAgQlJCOiBcIkJCXCIsXHJcbiAgICBCTFI6IFwiQllcIixcclxuICAgIEJFTDogXCJCRVwiLFxyXG4gICAgQkxaOiBcIkJaXCIsXHJcbiAgICBCRU46IFwiQkpcIixcclxuICAgIEJNVTogXCJCTVwiLFxyXG4gICAgQlROOiBcIkJUXCIsXHJcbiAgICBCT0w6IFwiQk9cIixcclxuICAgIEJJSDogXCJCQVwiLFxyXG4gICAgQldBOiBcIkJXXCIsXHJcbiAgICBCVlQ6IFwiQlZcIixcclxuICAgIEJSQTogXCJCUlwiLFxyXG4gICAgVkdCOiBcIlZHXCIsXHJcbiAgICBJT1Q6IFwiSU9cIixcclxuICAgIEJSTjogXCJCTlwiLFxyXG4gICAgQkdSOiBcIkJHXCIsXHJcbiAgICBCRkE6IFwiQkZcIixcclxuICAgIEJESTogXCJCSVwiLFxyXG4gICAgS0hNOiBcIktIXCIsXHJcbiAgICBDTVI6IFwiQ01cIixcclxuICAgIENBTjogXCJDQVwiLFxyXG4gICAgQ1BWOiBcIkNWXCIsXHJcbiAgICBDWU06IFwiS1lcIixcclxuICAgIENBRjogXCJDRlwiLFxyXG4gICAgVENEOiBcIlREXCIsXHJcbiAgICBDSEw6IFwiQ0xcIixcclxuICAgIENITjogXCJDTlwiLFxyXG4gICAgSEtHOiBcIkhLXCIsXHJcbiAgICBNQUM6IFwiTU9cIixcclxuICAgIENYUjogXCJDWFwiLFxyXG4gICAgQ0NLOiBcIkNDXCIsXHJcbiAgICBDT0w6IFwiQ09cIixcclxuICAgIENPTTogXCJLTVwiLFxyXG4gICAgQ09HOiBcIkNHXCIsXHJcbiAgICBDT0Q6IFwiQ0RcIixcclxuICAgIENPSzogXCJDS1wiLFxyXG4gICAgQ1JJOiBcIkNSXCIsXHJcbiAgICBDSVY6IFwiQ0lcIixcclxuICAgIEhSVjogXCJIUlwiLFxyXG4gICAgQ1VCOiBcIkNVXCIsXHJcbiAgICBDWVA6IFwiQ1lcIixcclxuICAgIENaRTogXCJDWlwiLFxyXG4gICAgRE5LOiBcIkRLXCIsXHJcbiAgICBESkk6IFwiREpcIixcclxuICAgIERNQTogXCJETVwiLFxyXG4gICAgRE9NOiBcIkRPXCIsXHJcbiAgICBFQ1U6IFwiRUNcIixcclxuICAgIEVHWTogXCJFR1wiLFxyXG4gICAgU0xWOiBcIlNWXCIsXHJcbiAgICBHTlE6IFwiR1FcIixcclxuICAgIEVSSTogXCJFUlwiLFxyXG4gICAgRVNUOiBcIkVFXCIsXHJcbiAgICBFVEg6IFwiRVRcIixcclxuICAgIEZMSzogXCJGS1wiLFxyXG4gICAgRlJPOiBcIkZPXCIsXHJcbiAgICBGSkk6IFwiRkpcIixcclxuICAgIEZJTjogXCJGSVwiLFxyXG4gICAgRlJBOiBcIkZSXCIsXHJcbiAgICBHVUY6IFwiR0ZcIixcclxuICAgIFBZRjogXCJQRlwiLFxyXG4gICAgQVRGOiBcIlRGXCIsXHJcbiAgICBHQUI6IFwiR0FcIixcclxuICAgIEdNQjogXCJHTVwiLFxyXG4gICAgR0VPOiBcIkdFXCIsXHJcbiAgICBERVU6IFwiREVcIixcclxuICAgIEdIQTogXCJHSFwiLFxyXG4gICAgR0lCOiBcIkdJXCIsXHJcbiAgICBHUkM6IFwiR1JcIixcclxuICAgIEdSTDogXCJHTFwiLFxyXG4gICAgR1JEOiBcIkdEXCIsXHJcbiAgICBHTFA6IFwiR1BcIixcclxuICAgIEdVTTogXCJHVVwiLFxyXG4gICAgR1RNOiBcIkdUXCIsXHJcbiAgICBHR1k6IFwiR0dcIixcclxuICAgIEdJTjogXCJHTlwiLFxyXG4gICAgR05COiBcIkdXXCIsXHJcbiAgICBHVVk6IFwiR1lcIixcclxuICAgIEhUSTogXCJIVFwiLFxyXG4gICAgSE1EOiBcIkhNXCIsXHJcbiAgICBWQVQ6IFwiVkFcIixcclxuICAgIEhORDogXCJITlwiLFxyXG4gICAgSFVOOiBcIkhVXCIsXHJcbiAgICBJU0w6IFwiSVNcIixcclxuICAgIElORDogXCJJTlwiLFxyXG4gICAgSUROOiBcIklEXCIsXHJcbiAgICBJUk46IFwiSVJcIixcclxuICAgIElSUTogXCJJUVwiLFxyXG4gICAgSVJMOiBcIklFXCIsXHJcbiAgICBJTU46IFwiSU1cIixcclxuICAgIElTUjogXCJJTFwiLFxyXG4gICAgSVRBOiBcIklUXCIsXHJcbiAgICBKQU06IFwiSk1cIixcclxuICAgIEpQTjogXCJKUFwiLFxyXG4gICAgSkVZOiBcIkpFXCIsXHJcbiAgICBKT1I6IFwiSk9cIixcclxuICAgIEtBWjogXCJLWlwiLFxyXG4gICAgS0VOOiBcIktFXCIsXHJcbiAgICBLSVI6IFwiS0lcIixcclxuICAgIFBSSzogXCJLUFwiLFxyXG4gICAgS09SOiBcIktSXCIsXHJcbiAgICBLV1Q6IFwiS1dcIixcclxuICAgIEtHWjogXCJLR1wiLFxyXG4gICAgTEFPOiBcIkxBXCIsXHJcbiAgICBMVkE6IFwiTFZcIixcclxuICAgIExCTjogXCJMQlwiLFxyXG4gICAgTFNPOiBcIkxTXCIsXHJcbiAgICBMQlI6IFwiTFJcIixcclxuICAgIExCWTogXCJMWVwiLFxyXG4gICAgTElFOiBcIkxJXCIsXHJcbiAgICBMVFU6IFwiTFRcIixcclxuICAgIExVWDogXCJMVVwiLFxyXG4gICAgTUtEOiBcIk1LXCIsXHJcbiAgICBNREc6IFwiTUdcIixcclxuICAgIE1XSTogXCJNV1wiLFxyXG4gICAgTVlTOiBcIk1ZXCIsXHJcbiAgICBNRFY6IFwiTVZcIixcclxuICAgIE1MSTogXCJNTFwiLFxyXG4gICAgTUxUOiBcIk1UXCIsXHJcbiAgICBNSEw6IFwiTUhcIixcclxuICAgIE1UUTogXCJNUVwiLFxyXG4gICAgTVJUOiBcIk1SXCIsXHJcbiAgICBNVVM6IFwiTVVcIixcclxuICAgIE1ZVDogXCJZVFwiLFxyXG4gICAgTUVYOiBcIk1YXCIsXHJcbiAgICBGU006IFwiRk1cIixcclxuICAgIE1EQTogXCJNRFwiLFxyXG4gICAgTUNPOiBcIk1DXCIsXHJcbiAgICBNTkc6IFwiTU5cIixcclxuICAgIE1ORTogXCJNRVwiLFxyXG4gICAgTVNSOiBcIk1TXCIsXHJcbiAgICBNQVI6IFwiTUFcIixcclxuICAgIE1PWjogXCJNWlwiLFxyXG4gICAgTU1SOiBcIk1NXCIsXHJcbiAgICBOQU06IFwiTkFcIixcclxuICAgIE5SVTogXCJOUlwiLFxyXG4gICAgTlBMOiBcIk5QXCIsXHJcbiAgICBOTEQ6IFwiTkxcIixcclxuICAgIEFOVDogXCJBTlwiLFxyXG4gICAgTkNMOiBcIk5DXCIsXHJcbiAgICBOWkw6IFwiTlpcIixcclxuICAgIE5JQzogXCJOSVwiLFxyXG4gICAgTkVSOiBcIk5FXCIsXHJcbiAgICBOR0E6IFwiTkdcIixcclxuICAgIE5JVTogXCJOVVwiLFxyXG4gICAgTkZLOiBcIk5GXCIsXHJcbiAgICBNTlA6IFwiTVBcIixcclxuICAgIE5PUjogXCJOT1wiLFxyXG4gICAgT01OOiBcIk9NXCIsXHJcbiAgICBQQUs6IFwiUEtcIixcclxuICAgIFBMVzogXCJQV1wiLFxyXG4gICAgUFNFOiBcIlBTXCIsXHJcbiAgICBQQU46IFwiUEFcIixcclxuICAgIFBORzogXCJQR1wiLFxyXG4gICAgUFJZOiBcIlBZXCIsXHJcbiAgICBQRVI6IFwiUEVcIixcclxuICAgIFBITDogXCJQSFwiLFxyXG4gICAgUENOOiBcIlBOXCIsXHJcbiAgICBQT0w6IFwiUExcIixcclxuICAgIFBSVDogXCJQVFwiLFxyXG4gICAgUFJJOiBcIlBSXCIsXHJcbiAgICBRQVQ6IFwiUUFcIixcclxuICAgIFJFVTogXCJSRVwiLFxyXG4gICAgUk9VOiBcIlJPXCIsXHJcbiAgICBSVVM6IFwiUlVcIixcclxuICAgIFJXQTogXCJSV1wiLFxyXG4gICAgQkxNOiBcIkJMXCIsXHJcbiAgICBTSE46IFwiU0hcIixcclxuICAgIEtOQTogXCJLTlwiLFxyXG4gICAgTENBOiBcIkxDXCIsXHJcbiAgICBNQUY6IFwiTUZcIixcclxuICAgIFNQTTogXCJQTVwiLFxyXG4gICAgVkNUOiBcIlZDXCIsXHJcbiAgICBXU006IFwiV1NcIixcclxuICAgIFNNUjogXCJTTVwiLFxyXG4gICAgU1RQOiBcIlNUXCIsXHJcbiAgICBTQVU6IFwiU0FcIixcclxuICAgIFNFTjogXCJTTlwiLFxyXG4gICAgU1JCOiBcIlJTXCIsXHJcbiAgICBTWUM6IFwiU0NcIixcclxuICAgIFNMRTogXCJTTFwiLFxyXG4gICAgU0dQOiBcIlNHXCIsXHJcbiAgICBTVks6IFwiU0tcIixcclxuICAgIFNWTjogXCJTSVwiLFxyXG4gICAgU0xCOiBcIlNCXCIsXHJcbiAgICBTT006IFwiU09cIixcclxuICAgIFpBRjogXCJaQVwiLFxyXG4gICAgU0dTOiBcIkdTXCIsXHJcbiAgICBTU0Q6IFwiU1NcIixcclxuICAgIEVTUDogXCJFU1wiLFxyXG4gICAgTEtBOiBcIkxLXCIsXHJcbiAgICBTRE46IFwiU0RcIixcclxuICAgIFNVUjogXCJTUlwiLFxyXG4gICAgU0pNOiBcIlNKXCIsXHJcbiAgICBTV1o6IFwiU1pcIixcclxuICAgIFNXRTogXCJTRVwiLFxyXG4gICAgQ0hFOiBcIkNIXCIsXHJcbiAgICBTWVI6IFwiU1lcIixcclxuICAgIFRXTjogXCJUV1wiLFxyXG4gICAgVEpLOiBcIlRKXCIsXHJcbiAgICBUWkE6IFwiVFpcIixcclxuICAgIFRIQTogXCJUSFwiLFxyXG4gICAgVExTOiBcIlRMXCIsXHJcbiAgICBUR086IFwiVEdcIixcclxuICAgIFRLTDogXCJUS1wiLFxyXG4gICAgVE9OOiBcIlRPXCIsXHJcbiAgICBUVE86IFwiVFRcIixcclxuICAgIFRVTjogXCJUTlwiLFxyXG4gICAgVFVSOiBcIlRSXCIsXHJcbiAgICBUS006IFwiVE1cIixcclxuICAgIFRDQTogXCJUQ1wiLFxyXG4gICAgVFVWOiBcIlRWXCIsXHJcbiAgICBVR0E6IFwiVUdcIixcclxuICAgIFVLUjogXCJVQVwiLFxyXG4gICAgQVJFOiBcIkFFXCIsXHJcbiAgICBHQlI6IFwiR0JcIixcclxuICAgIFVTQTogXCJVU1wiLFxyXG4gICAgVU1JOiBcIlVNXCIsXHJcbiAgICBVUlk6IFwiVVlcIixcclxuICAgIFVaQjogXCJVWlwiLFxyXG4gICAgVlVUOiBcIlZVXCIsXHJcbiAgICBWRU46IFwiVkVcIixcclxuICAgIFZOTTogXCJWTlwiLFxyXG4gICAgVklSOiBcIlZJXCIsXHJcbiAgICBXTEY6IFwiV0ZcIixcclxuICAgIEVTSDogXCJFSFwiLFxyXG4gICAgWUVNOiBcIllFXCIsXHJcbiAgICBaTUI6IFwiWk1cIixcclxuICAgIFpXRTogXCJaV1wiLFxyXG4gICAgWEtYOiBcIlhLXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvdW50cnlJU08yID0gKGNvdW50cnlDb2RlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGNvdW50cnlJU09NYXBwaW5nWzxzdHJpbmc+Y291bnRyeUNvZGVdO1xyXG59IiwiZXhwb3J0IGNvbnN0IGNsb3NlQ291bnRyeURldGFpbHMgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCBjb3VudHJ5RGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJ5X19kZXRhaWxzLWNvbnRhaW5lcicpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0IGNvdW50cmllc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRyaWVzX19zZWN0aW9uJykhIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgaW5wdXRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0c19fY29udGFpbmVyJykhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3QgcmV0dXJuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9fcmV0dXJuJykhIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICAgIHJldHVybkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY291bnRyaWVzU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgaW5wdXRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICBjb3VudHJ5RGV0YWlsc0NvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgIH0pXHJcbn0iLCJleHBvcnQgdHlwZSBWb2lkUmV0dXJuRm4gPSAoKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmM6IEZ1bmN0aW9uLCB0aW1lOiBudW1iZXIpOiBWb2lkUmV0dXJuRm4gPT4ge1xyXG4gICAgbGV0IHRpbWVySWQ6IE5vZGVKUy5UaW1lb3V0O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0aGlzOiB1bmtub3duKSB7XHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcclxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgfSwgdGltZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGZpbHRlckJ5UmVnaW9uID0gKCk6dm9pZCA9PiB7XHJcbiAgICBjb25zdCBjb3VudHJ5Q29udGFpbmVyID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTERpdkVsZW1lbnQ+KFwiLmNvdW50cnlfX2NvbnRhaW5lclwiKV0hO1xyXG4gICAgY29uc3Qgc2VsZWN0UmVnaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lvbi1pbnB1dCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgc2VsZWN0UmVnaW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBsZXQgcmVnaW9uU2VsZWN0ZWQgPSBzZWxlY3RSZWdpb24udmFsdWU7XHJcbiAgICAgICAgY291bnRyeUNvbnRhaW5lci5mb3JFYWNoKGNvdW50cnkgPT4ge1xyXG4gICAgICAgICAgICBjb3VudHJ5LmRhdGFzZXQucmVnaW9uICE9PSByZWdpb25TZWxlY3RlZCA/IGNvdW50cnkucGFyZW50RWxlbWVudCEuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykgOiBjb3VudHJ5LnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBpZiAocmVnaW9uU2VsZWN0ZWQgPT09ICcnKSBjb3VudHJ5LnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcbiIsImltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4vZGVib3VuY2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWFyY2hJbnB1dEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWlucHV0XCIpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgY291bnRyeUNvbnRhaW5lciA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxEaXZFbGVtZW50PihcIi5jb3VudHJ5X19jb250YWluZXJcIiksXSE7XHJcbiAgICBjb25zdCBzZWxlY3RSZWdpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZ2lvbi1pbnB1dFwiKSEgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbl9fc2VhcmNoLWljb25cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gICAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcImlucHV0XCIsXHJcbiAgICAgICAgZGVib3VuY2UoKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2VsZWN0UmVnaW9uLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgY291bnRyeUNvbnRhaW5lci5mb3JFYWNoKChjb3VudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoSW5wdXQudmFsdWUubGVuZ3RoID09PSAwICYmIHNlbGVjdFJlZ2lvbi52YWx1ZSA9PT0gXCJcIilcclxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5LnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeS5kYXRhc2V0LnJlZ2lvbiA9PT0gc2VsZWN0UmVnaW9uLnZhbHVlXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeS5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgIWNvdW50cnkuZGF0YXNldFxyXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0c1dpdGgoYCR7c2VhcmNoSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKX1gKVxyXG4gICAgICAgICAgICAgICAgICAgID8gY291bnRyeS5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBjb3VudHJ5LnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDMwMClcclxuICAgICk7XHJcblxyXG4gICAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgdG9nZ2xlVGhlbWVNb2RlID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgLy9ET00gRWxlbWVudHNcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lLW1vZGVfX2NoZWNrYm94JykhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykhIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSEgYXMgSFRNTEJvZHlFbGVtZW50O1xyXG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0JykhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCByZWdpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpb24taW5wdXQnKSEgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGNvdW50cnlEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oJy5jb3VudHJ5X19kZXRhaWxzJyk7XHJcbiAgICBjb25zdCBjb3VudHJ5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRGl2RWxlbWVudD4oJy5jb3VudHJ5X19jb250YWluZXInKTtcclxuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fX3NlYXJjaC1pY29uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG5cclxuICAgIC8vQ29sb3IgdmFyaWFibGVzIGFzIGluIFNBU1NcclxuICAgIGNvbnN0IGNvbG9yRGFya0JsdWUgPSBcImhzbCgyMDksIDIzJSwgMjIlKVwiO1xyXG4gICAgY29uc3QgY29sb3JWZXJ5RGFya0JsdWUgPSBcImhzbCgyMDcsIDI2JSwgMTclKVwiO1xyXG4gICAgY29uc3QgY29sb3JWZXJ5RGFya0JsdWVUZXh0ID0gXCIjNDE1QjkxXCI7XHJcbiAgICAvLyBjb25zdCBjb2xvclZlcnlMaWdodEdyYXlCYWNrZ3JvdW5kID0gXCJoc2woMCwgMCUsIDk4JSlcIjtcclxuICAgIGNvbnN0IGNvbG9yV2hpdGUgPSBcIiNmM2YzZjNcIjtcclxuXHJcbiAgICBjb25zdCBkYXJrVGhlbWUgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yRGFya0JsdWU7XHJcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclZlcnlEYXJrQmx1ZTtcclxuICAgICAgICBib2R5LnN0eWxlLmNvbG9yID0gY29sb3JXaGl0ZTtcclxuICAgICAgICBzZWFyY2hJbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvckRhcmtCbHVlO1xyXG4gICAgICAgIHJlZ2lvbklucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yRGFya0JsdWU7XHJcbiAgICAgICAgc2VhcmNoQnV0dG9uLnN0eWxlLmNvbG9yID0gJ3JnYigzMiwgNDQsIDU1KSc7XHJcbiAgICAgICAgc2VhcmNoQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZTdlNmVmJztcclxuICAgICAgICBjb3VudHJ5Q29udGFpbmVyLmZvckVhY2goY291bnRyeSA9PiB7XHJcbiAgICAgICAgICAgIGNvdW50cnkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JEYXJrQmx1ZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoY291bnRyeURldGFpbHMpIGNvdW50cnlEZXRhaWxzLmZvckVhY2goY291bnRyeSA9PiBjb3VudHJ5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yRGFya0JsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGlnaHRUaGVtZSA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGOUY5RjknO1xyXG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xyXG4gICAgICAgIGJvZHkuc3R5bGUuY29sb3IgPSBjb2xvclZlcnlEYXJrQmx1ZVRleHQ7XHJcbiAgICAgICAgc2VhcmNoSW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xyXG4gICAgICAgIHJlZ2lvbklucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcclxuICAgICAgICBzZWFyY2hCdXR0b24uc3R5bGUuY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgc2VhcmNoQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODFiMGZmJztcclxuICAgICAgICBjb3VudHJ5Q29udGFpbmVyLmZvckVhY2goY291bnRyeSA9PiB7XHJcbiAgICAgICAgICAgIGNvdW50cnkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGOUY5RjknO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChjb3VudHJ5RGV0YWlscykgY291bnRyeURldGFpbHMuZm9yRWFjaChjb3VudHJ5ID0+IGNvdW50cnkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JXaGl0ZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykge1xyXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIGRhcmtUaGVtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGV2ZW50IGFuZCB0aGVtZSB0b2dnbGVcclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBjaGVja2JveC5jaGVja2VkID8gZGFya1RoZW1lKCkgOiBsaWdodFRoZW1lKCk7XHJcbiAgICB9KVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCB0b2dnbGVWaWV3U3R5bGUgPSAoKTp2b2lkID0+IHtcclxuICAgIGNvbnN0IGdyaWRTdHlsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWljb24nKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGxpc3RTdHlsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWljb24nKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGNvdW50cmllc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRyaWVzX19zZWN0aW9uJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgZ3JpZFN0eWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmKGNvdW50cmllc1NlY3Rpb24uY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdsaXN0LXN0eWxlJykpIHtcclxuICAgICAgICAgICAgY291bnRyaWVzU2VjdGlvbi5jbGFzc0xpc3QucmVwbGFjZSgnbGlzdC1zdHlsZScsICdncmlkLXN0eWxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBsaXN0U3R5bGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoY291bnRyaWVzU2VjdGlvbi5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ2dyaWQtc3R5bGUnKSkge1xyXG4gICAgICAgICAgICBjb3VudHJpZXNTZWN0aW9uLmNsYXNzTGlzdC5yZXBsYWNlKCdncmlkLXN0eWxlJywgJ2xpc3Qtc3R5bGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbiIsImltcG9ydCB7IENvdW50cnlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvY291bnRyeS5tb2RlbFwiO1xyXG4vL3ByZXR0aWVyLWlnbm9yZVxyXG5leHBvcnQgY29uc3QgcmVuZGVyQ291bnRyaWVzID0gKGNvdW50cmllczogQ291bnRyeU1vZGVsW10pID0+IHtcclxuICAgIGNvbnN0IGNvdW50cnlTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3VudHJpZXNfX3NlY3Rpb25cIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjb3VudHJpZXMuZm9yRWFjaCgoY291bnRyeSkgPT4ge1xyXG4gICAgICAgIGNvdW50cnlTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjb3VudHJ5X19kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudHJ5X19jb250YWluZXJcIiBkYXRhLXJlZ2lvbj1cIiR7Y291bnRyeS5yZWdpb259XCIgZGF0YS1uYW1lPVwiJHtjb3VudHJ5Lm5hbWUuY29tbW9ufVwiIGRhdGEtb2ZmaWNpYWw9XCIke2NvdW50cnkubmFtZS5vZmZpY2lhbH1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9mbGFnY2RuLmNvbS93NjQwLyR7Y291bnRyeS5jY2EyIS50b0xvd2VyQ2FzZSgpfS5wbmdcIiBhbHQ9XCIke2NvdW50cnkuZmxhZ31cIiBjbGFzcz1cImNvdW50cnlfX2ZsYWdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lcl9fY291bnRyeS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY291bnRyeV9fbmFtZVwiPiR7Y291bnRyeS5uYW1lLmNvbW1vbn08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvdW50cnlfX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeV9fbGlzdC0taXRlbVwiPjxzdHJvbmc+UG9wdWxhdGlvbjo8L3N0cm9uZz4gJHtjb3VudHJ5LnBvcHVsYXRpb24udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyl9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeV9fbGlzdC0taXRlbVwiPjxzdHJvbmc+UmVnaW9uOjwvc3Ryb25nPiAke2NvdW50cnkucmVnaW9ufTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnlfX2xpc3QtLWl0ZW1cIj48c3Ryb25nPkNhcGl0YWw6PC9zdHJvbmc+ICR7Y291bnRyeS5jYXBpdGFsID8gY291bnRyeS5jYXBpdGFsWzBdIDogJyjila/CsOKWocKw77yJ4pWv77i1IOKUu+KUgeKUuyd9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgIGApXHJcbiAgICB9KVxyXG59O1xyXG4iLCJpbXBvcnQgeyBDb3VudHJ5TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2NvdW50cnkubW9kZWxcIjtcclxuaW1wb3J0IHsgZ2V0Q291bnRyeUlTTzIgfSBmcm9tIFwiLi4vZ2V0LWNvdW50cmllc1wiO1xyXG5pbXBvcnQgeyBjbG9zZUNvdW50cnlEZXRhaWxzIH0gZnJvbSBcIi4uL2lucHV0SGFuZGxlcnMvY2xvc2UuY291bnRyeS5kZXRhaWxzXCI7XHJcbmltcG9ydCB7IGZldGNoQ291bnRyeURldGFpbHMgfSBmcm9tIFwiLi4vYXBwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyQ291bnRyeURldGFpbHMgPSAoY291bnRyeURldGFpbHM6IENvdW50cnlNb2RlbFtdKSA9PiB7XHJcbiAgICAvL0RPTVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSBhcyBIVE1MQm9keUVsZW1lbnQ7XHJcbiAgICBjb25zdCBjb3VudHJ5RGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY291bnRyeURldGFpbHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY291bnRyeV9fZGV0YWlscy1jb250YWluZXInKTtcclxuICAgIGNvdW50cnlEZXRhaWxzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dlbmVyYWwtd2lkdGgnKTtcclxuICAgIGNvdW50cnlEZXRhaWxzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NlbnRlcicpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb3VudHJ5RGV0YWlsc0NvbnRhaW5lcik7XHJcblxyXG4gICAgLy9WQVJJQUJMRVNcclxuICAgIGxldCBjdXJyZW5jaWVzOiBzdHJpbmdbXTtcclxuICAgIGxldCBuYXRpdmVOYW1lOiBzdHJpbmdbXTtcclxuICAgIGNvbnN0IGJvcmRlckNvdW50cmllcyA9IGNvdW50cnlEZXRhaWxzWzBdLmJvcmRlcnMgPyBjb3VudHJ5RGV0YWlsc1swXS5ib3JkZXJzLm1hcChjb3VudHJ5ID0+IGdldENvdW50cnlJU08yKGNvdW50cnkpKSA6IFtdO1xyXG4gICAgbGV0IHJlZ2lvbk5hbWVzID0gbmV3IEludGwuRGlzcGxheU5hbWVzKFsnZW4nXSwge3R5cGU6ICdyZWdpb24nfSlcclxuXHJcblxyXG4gICAgIWNvdW50cnlEZXRhaWxzWzBdLmhhc093blByb3BlcnR5KCdjdXJyZW5jaWVzJykgPyBjdXJyZW5jaWVzID0gWydObyBhdmFpbGFibGUgY3VycmVuY3kuJ10gOiBjdXJyZW5jaWVzID0gKE9iamVjdC52YWx1ZXMoY291bnRyeURldGFpbHNbMF0uY3VycmVuY2llcykpLm1hcChjdXJyZW5jeVR5cGUgPT4gY3VycmVuY3lUeXBlLm5hbWUpO1xyXG4gICAgIWNvdW50cnlEZXRhaWxzWzBdLm5hbWUuaGFzT3duUHJvcGVydHkoJ25hdGl2ZU5hbWUnKSA/IG5hdGl2ZU5hbWUgPSBbJ05vIG5hdGl2ZSBuYW1lIGF2YWlsYWJsZS4nXSA6IG5hdGl2ZU5hbWUgPSAoT2JqZWN0LnZhbHVlcyhjb3VudHJ5RGV0YWlsc1swXS5uYW1lLm5hdGl2ZU5hbWUpKS5tYXAobmFtZSA9PiBuYW1lLmNvbW1vbik7XHJcblxyXG4gICAgY29uc3QgYWRkQm9yZGVyQ291bnRyaWVzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvcmRlckNvdW50cmllc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3JkZXJpbmctY291bnRyeV9fY29udGFpbmVyJykhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoYm9yZGVyQ291bnRyaWVzLmxlbmd0aCA9PT0gMCkgYm9yZGVyQ291bnRyaWVzQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxzcGFuIGNsYXNzPVwiYm9yZGVyaW5nLWNvdW50cnktLW5vdC1mb3VuZFwiPlRoZXJlIGFyZSBubyBib3JkZXJpbmcgY291bnRyaWVzIHdpdGggdGhpcyBjb3VudHJ5ITwvc3Bhbj5gKVxyXG5cclxuICAgICAgICBib3JkZXJDb3VudHJpZXMuZm9yRWFjaCgoY291bnRyeSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBib3JkZXJDb3VudHJpZXNDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgICAgICAgICAke2kgPCAzID8gKGNvdW50cnkgPyBgPHNwYW4gY2xhc3M9XCJib3JkZXJpbmctY291bnRyeVwiPiR7cmVnaW9uTmFtZXMub2YoY291bnRyeSl9PC9zcGFuPmAgOiBgYCkgOiBcIlwifVxyXG4gICAgICAgICAgIGApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb3VudHJ5RGV0YWlsc0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlcl9fcmV0dXJuLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uX19yZXR1cm5cIj4mbGFycjsgQmFjazwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJfX2NvdW50cnktaW5mb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyX19jb3VudHJ5LWZsYWdcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9mbGFnY2RuLmNvbS93MTI4MC8ke2NvdW50cnlEZXRhaWxzWzBdLmNjYTIhLnRvTG93ZXJDYXNlKCl9LnBuZ1wiIGFsdD1cIkNvdW50cnkgZmxhZ1wiIGNsYXNzPVwiY291bnRyeS1mbGFnXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyX19jb3VudHJ5LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImhlYWRpbmctc2Vjb25kYXJ5XCI+JHtjb3VudHJ5RGV0YWlsc1swXS5uYW1lLmNvbW1vbn08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50cnktaW5mb19fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvdW50cnktaW5mb19fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2l0ZW1cIj48c3Ryb25nPk5hdGl2ZSBuYW1lOiA8L3N0cm9uZz4ke25hdGl2ZU5hbWUgPyBuYXRpdmVOYW1lLmF0KC0xKSA6IG5hdGl2ZU5hbWVbMF19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeS1pbmZvX19pdGVtXCI+PHN0cm9uZz5Qb3B1bGF0aW9uOiA8L3N0cm9uZz4ke2NvdW50cnlEZXRhaWxzWzBdLnBvcHVsYXRpb24udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyl9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeS1pbmZvX19pdGVtXCI+PHN0cm9uZz5SZWdpb246IDwvc3Ryb25nPiR7Y291bnRyeURldGFpbHNbMF0ucmVnaW9uID8gY291bnRyeURldGFpbHNbMF0ucmVnaW9uIDogJ05vIHJlZ2lvbiBhdmFpbGFibGUuJ308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2l0ZW1cIj48c3Ryb25nPlN1YiBSZWdpb246IDwvc3Ryb25nPiR7Y291bnRyeURldGFpbHNbMF0uc3VicmVnaW9uID8gY291bnRyeURldGFpbHNbMF0uc3VicmVnaW9uIDogJ05vIHN1YiByZWdpb24gYXZhaWxhYmxlLid9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeS1pbmZvX19pdGVtXCI+PHN0cm9uZz5DYXBpdGFsOiA8L3N0cm9uZz4ke2NvdW50cnlEZXRhaWxzWzBdLmNhcGl0YWwgPyBjb3VudHJ5RGV0YWlsc1swXS5jYXBpdGFsIDogJ05vIGNhcGl0YWwgYXZhaWxhYmxlLid9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvdW50cnktaW5mb19fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2l0ZW1cIj48c3Ryb25nPlRvcCBMZXZlbCBEb21haW46IDwvc3Ryb25nPiR7Y291bnRyeURldGFpbHNbMF0udGxkfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnktaW5mb19faXRlbVwiPjxzdHJvbmc+Q3VycmVuY2llczogPC9zdHJvbmc+JHtjdXJyZW5jaWVzLmxlbmd0aCA9PT0gMSA/IGN1cnJlbmNpZXNbMF0gOiBjdXJyZW5jaWVzLmpvaW4oJywgJyl9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeS1pbmZvX19pdGVtXCI+PHN0cm9uZz5MYW5ndWFnZXM6IDwvc3Ryb25nPiR7Y291bnRyeURldGFpbHNbMF0uaGFzT3duUHJvcGVydHkoJ2xhbmd1YWdlcycpID8gT2JqZWN0LnZhbHVlcyhjb3VudHJ5RGV0YWlsc1swXS5sYW5ndWFnZXMpLnRvU3RyaW5nKCkucmVwbGFjZUFsbCgnLCcsICcsICcpIDogJ05vIGxhbmd1YWdlIGF2YWlsYWJsZS4nfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lcl9fYm9yZGVyLWNvdW50cmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYm9yZGVyLWNvdW50cmllc19fdGV4dFwiPjxzdHJvbmc+Qm9yZGVyIGNvdW50cmllczogPC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXJpbmctY291bnRyeV9fY29udGFpbmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgKVxyXG4gICAgYWRkQm9yZGVyQ291bnRyaWVzKCk7XHJcbiAgICBjbG9zZUNvdW50cnlEZXRhaWxzKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb3VudHJ5RGV0YWlscyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvdW50cnlEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oJy5jb3VudHJ5X19kZXRhaWxzJykhO1xyXG4gICAgY29uc3QgY291bnRyaWVzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJpZXNfX3NlY3Rpb24nKSEgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBpbnB1dHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRzX19jb250YWluZXInKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG5cclxuICAgIGNvdW50cnlEZXRhaWxzLmZvckVhY2goY291bnRyeSA9PiB7XHJcbiAgICAgICAgY291bnRyeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY291bnRyaWVzU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBpbnB1dHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGZldGNoQ291bnRyeURldGFpbHMoY291bnRyeS5maXJzdEVsZW1lbnRDaGlsZCEuZGF0YXNldC5vZmZpY2lhbClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9