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
const list_style_renderer_1 = __webpack_require__(/*! ./renderers/list-style.renderer */ "./src/renderers/list-style.renderer.ts");
const genericFetch = (url, init) => __awaiter(void 0, void 0, void 0, function* () {
    const fetchedData = yield fetch(url, init);
    return (yield fetchedData.json());
});
const fetchCountries = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield genericFetch("https://restcountries.com/v3.1/all");
    console.log(data);
    (0, render_countries_1.renderCountries)(data);
    (0, region_input_1.filterByRegion)();
    (0, toggle_theme_mode_1.toggleThemeMode)();
    (0, search_input_1.searchInputHandler)();
    (0, render_country_details_1.getCountryDetails)();
    (0, list_style_renderer_1.renderCountriesInListStyle)(data);
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
    const countryContainer = [
        ...document.querySelectorAll(".country__container"),
    ];
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
        if (countryDetails)
            countryDetails.forEach(country => country.style.backgroundColor = colorDarkBlue);
    };
    const lightTheme = () => {
        header.style.backgroundColor = colorWhite;
        body.style.backgroundColor = '#fff';
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

/***/ "./src/renderers/list-style.renderer.ts":
/*!**********************************************!*\
  !*** ./src/renderers/list-style.renderer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderCountriesInListStyle = void 0;
const renderCountriesInListStyle = (countries) => {
    const listStyleButton = document.querySelector(".list-icon");
    const countrySection = document.querySelector(".countries__section");
    const countriesGridStyleContainer = document.querySelector('.countries-grid-style');
    listStyleButton.addEventListener("click", () => {
        countriesGridStyleContainer.classList.add('hidden');
        countries.forEach((country) => {
            countrySection.insertAdjacentHTML('beforeend', `
        <a href="#" class="country__details hidden">
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
    });
};
exports.renderCountriesInListStyle = renderCountriesInListStyle;


/***/ }),

/***/ "./src/renderers/render.countries.ts":
/*!*******************************************!*\
  !*** ./src/renderers/render.countries.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderCountries = void 0;
const renderCountries = (countries) => {
    const countrySection = document.querySelector(".countries-grid-style");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwSEFBK0Q7QUFDL0QsNElBRzRDO0FBQzVDLHNIQUFrRTtBQUNsRSxzSEFBOEQ7QUFDOUQscUlBQW9FO0FBQ3BFLG1JQUE2RTtBQUU3RSxNQUFNLFlBQVksR0FBRyxDQUNuQixHQUFzQixFQUN0QixJQUFrQixFQUNOLEVBQUU7SUFDZCxNQUFNLFdBQVcsR0FBYSxNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckQsT0FBTyxDQUFDLE1BQU0sV0FBVyxDQUFDLElBQUksRUFBRSxDQUFNLENBQUM7QUFDekMsQ0FBQyxFQUFDO0FBRUYsTUFBTSxjQUFjLEdBQUcsR0FBd0IsRUFBRTtJQUMvQyxNQUFNLElBQUksR0FBRyxNQUFNLFlBQVksQ0FDN0Isb0NBQW9DLENBQ3JDLENBQUM7SUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLHNDQUFlLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsaUNBQWMsR0FBRSxDQUFDO0lBQ2pCLHVDQUFlLEdBQUUsQ0FBQztJQUNsQixxQ0FBa0IsR0FBRSxDQUFDO0lBQ3JCLDhDQUFpQixHQUFFLENBQUM7SUFDcEIsb0RBQTBCLEVBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxFQUFDO0FBRUYsY0FBYyxFQUFFLENBQUM7QUFFVixNQUFNLG1CQUFtQixHQUFHLENBQU8sSUFBWSxFQUFpQixFQUFFO0lBQ3ZFLE1BQU0sY0FBYyxHQUFHLE1BQU0sS0FBSyxDQUNoQyx1Q0FBdUMsSUFBSSxFQUFFLENBQzlDLENBQUM7SUFDRixNQUFNLFdBQVcsR0FBRyxNQUFNLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoRCxpREFBb0IsRUFBQyxXQUFXLENBQUMsQ0FBQztBQUNwQyxDQUFDLEVBQUM7QUFOVywyQkFBbUIsdUJBTTlCOzs7Ozs7Ozs7Ozs7OztBQ3RDRixNQUFNLGlCQUFpQixHQUEwQztJQUM3RCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFF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QUksQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7Ozs7Ozs7OztLQVN0TyxDQUFDO0lBQ0Ysa0JBQWtCLEVBQUUsQ0FBQztJQUNyQiwrQ0FBbUIsR0FBRSxDQUFDO0FBQzFCLENBQUM7QUFoRVksNEJBQW9CLHdCQWdFaEM7QUFFTSxNQUFNLGlCQUFpQixHQUFHLEdBQUcsRUFBRTtJQUNsQyxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQW9CLG1CQUFtQixDQUFFLENBQUM7SUFDMUYsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFpQixDQUFDO0lBQ3ZGLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQW9CLENBQUM7SUFHeEYsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUM3QixPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNuQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUN4QyxlQUFlLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFFdkMsNkJBQW1CLEVBQUMsT0FBTyxDQUFDLGlCQUFrQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDcEUsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQWRZLHlCQUFpQixxQkFjN0I7Ozs7Ozs7VUNyRkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyLy4vc3JjL2dldC1jb3VudHJpZXMudHMiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyLy4vc3JjL2lucHV0SGFuZGxlcnMvY2xvc2UuY291bnRyeS5kZXRhaWxzLnRzIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci8uL3NyYy9pbnB1dEhhbmRsZXJzL2RlYm91bmNlLnRzIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci8uL3NyYy9pbnB1dEhhbmRsZXJzL3JlZ2lvbi5pbnB1dC50cyIsIndlYnBhY2s6Ly9yZXN0LWNvdW50cmllcy1hcGktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci1tYXN0ZXIvLi9zcmMvaW5wdXRIYW5kbGVycy9zZWFyY2guaW5wdXQudHMiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyLy4vc3JjL2lucHV0SGFuZGxlcnMvdG9nZ2xlLnRoZW1lLm1vZGUudHMiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyLy4vc3JjL3JlbmRlcmVycy9saXN0LXN0eWxlLnJlbmRlcmVyLnRzIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci8uL3NyYy9yZW5kZXJlcnMvcmVuZGVyLmNvdW50cmllcy50cyIsIndlYnBhY2s6Ly9yZXN0LWNvdW50cmllcy1hcGktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci1tYXN0ZXIvLi9zcmMvcmVuZGVyZXJzL3JlbmRlci5jb3VudHJ5LmRldGFpbHMudHMiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3VudHJ5TW9kZWwgfSBmcm9tIFwiLi9tb2RlbHMvY291bnRyeS5tb2RlbFwiO1xyXG5pbXBvcnQgeyByZW5kZXJDb3VudHJpZXMgfSBmcm9tIFwiLi9yZW5kZXJlcnMvcmVuZGVyLmNvdW50cmllc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldENvdW50cnlEZXRhaWxzLFxyXG4gIHJlbmRlckNvdW50cnlEZXRhaWxzLFxyXG59IGZyb20gXCIuL3JlbmRlcmVycy9yZW5kZXIuY291bnRyeS5kZXRhaWxzXCI7XHJcbmltcG9ydCB7IHNlYXJjaElucHV0SGFuZGxlciB9IGZyb20gXCIuL2lucHV0SGFuZGxlcnMvc2VhcmNoLmlucHV0XCI7XHJcbmltcG9ydCB7IGZpbHRlckJ5UmVnaW9uIH0gZnJvbSBcIi4vaW5wdXRIYW5kbGVycy9yZWdpb24uaW5wdXRcIjtcclxuaW1wb3J0IHsgdG9nZ2xlVGhlbWVNb2RlIH0gZnJvbSBcIi4vaW5wdXRIYW5kbGVycy90b2dnbGUudGhlbWUubW9kZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJDb3VudHJpZXNJbkxpc3RTdHlsZSB9IGZyb20gXCIuL3JlbmRlcmVycy9saXN0LXN0eWxlLnJlbmRlcmVyXCI7XHJcblxyXG5jb25zdCBnZW5lcmljRmV0Y2ggPSBhc3luYyA8VD4oXHJcbiAgdXJsOiBVUkwgfCBSZXF1ZXN0SW5mbyxcclxuICBpbml0PzogUmVxdWVzdEluaXRcclxuKTogUHJvbWlzZTxUPiA9PiB7XHJcbiAgY29uc3QgZmV0Y2hlZERhdGE6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBpbml0KTtcclxuICByZXR1cm4gKGF3YWl0IGZldGNoZWREYXRhLmpzb24oKSkgYXMgVDtcclxufTtcclxuXHJcbmNvbnN0IGZldGNoQ291bnRyaWVzID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZW5lcmljRmV0Y2g8Q291bnRyeU1vZGVsW10+KFxyXG4gICAgXCJodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YzLjEvYWxsXCJcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJlbmRlckNvdW50cmllcyhkYXRhKTtcclxuICBmaWx0ZXJCeVJlZ2lvbigpO1xyXG4gIHRvZ2dsZVRoZW1lTW9kZSgpO1xyXG4gIHNlYXJjaElucHV0SGFuZGxlcigpO1xyXG4gIGdldENvdW50cnlEZXRhaWxzKCk7XHJcbiAgcmVuZGVyQ291bnRyaWVzSW5MaXN0U3R5bGUoZGF0YSk7XHJcbn07XHJcblxyXG5mZXRjaENvdW50cmllcygpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ291bnRyeURldGFpbHMgPSBhc3luYyAobmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgY29uc3QgcmVxdWVzdERldGFpbHMgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YzLjEvbmFtZS8ke25hbWV9YFxyXG4gICk7XHJcbiAgY29uc3QgY291bnRyeURhdGEgPSBhd2FpdCByZXF1ZXN0RGV0YWlscy5qc29uKCk7XHJcbiAgcmVuZGVyQ291bnRyeURldGFpbHMoY291bnRyeURhdGEpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBJc29LZXlzTW9kZWwgfSBmcm9tIFwiLi9tb2RlbHMvaXNvLWtleXMubW9kZWxcIjtcclxuXHJcbmNvbnN0IGNvdW50cnlJU09NYXBwaW5nOiBSZWNvcmQ8SXNvS2V5c01vZGVsIHwgc3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gICAgQUZHOiBcIkFGXCIsXHJcbiAgICBBTEE6IFwiQVhcIixcclxuICAgIEFMQjogXCJBTFwiLFxyXG4gICAgRFpBOiBcIkRaXCIsXHJcbiAgICBBU006IFwiQVNcIixcclxuICAgIEFORDogXCJBRFwiLFxyXG4gICAgQUdPOiBcIkFPXCIsXHJcbiAgICBBSUE6IFwiQUlcIixcclxuICAgIEFUQTogXCJBUVwiLFxyXG4gICAgQVRHOiBcIkFHXCIsXHJcbiAgICBBUkc6IFwiQVJcIixcclxuICAgIEFSTTogXCJBTVwiLFxyXG4gICAgQUJXOiBcIkFXXCIsXHJcbiAgICBBVVM6IFwiQVVcIixcclxuICAgIEFVVDogXCJBVFwiLFxyXG4gICAgQVpFOiBcIkFaXCIsXHJcbiAgICBCSFM6IFwiQlNcIixcclxuICAgIEJIUjogXCJCSFwiLFxyXG4gICAgQkdEOiBcIkJEXCIsXHJcbiAgICBCUkI6IFwiQkJcIixcclxuICAgIEJMUjogXCJCWVwiLFxyXG4gICAgQkVMOiBcIkJFXCIsXHJcbiAgICBCTFo6IFwiQlpcIixcclxuICAgIEJFTjogXCJCSlwiLFxyXG4gICAgQk1VOiBcIkJNXCIsXHJcbiAgICBCVE46IFwiQlRcIixcclxuICAgIEJPTDogXCJCT1wiLFxyXG4gICAgQklIOiBcIkJBXCIsXHJcbiAgICBCV0E6IFwiQldcIixcclxuICAgIEJWVDogXCJCVlwiLFxyXG4gICAgQlJBOiBcIkJSXCIsXHJcbiAgICBWR0I6IFwiVkdcIixcclxuICAgIElPVDogXCJJT1wiLFxyXG4gICAgQlJOOiBcIkJOXCIsXHJcbiAgICBCR1I6IFwiQkdcIixcclxuICAgIEJGQTogXCJCRlwiLFxyXG4gICAgQkRJOiBcIkJJXCIsXHJcbiAgICBLSE06IFwiS0hcIixcclxuICAgIENNUjogXCJDTVwiLFxyXG4gICAgQ0FOOiBcIkNBXCIsXHJcbiAgICBDUFY6IFwiQ1ZcIixcclxuICAgIENZTTogXCJLWVwiLFxyXG4gICAgQ0FGOiBcIkNGXCIsXHJcbiAgICBUQ0Q6IFwiVERcIixcclxuICAgIENITDogXCJDTFwiLFxyXG4gICAgQ0hOOiBcIkNOXCIsXHJcbiAgICBIS0c6IFwiSEtcIixcclxuICAgIE1BQzogXCJNT1wiLFxyXG4gICAgQ1hSOiBcIkNYXCIsXHJcbiAgICBDQ0s6IFwiQ0NcIixcclxuICAgIENPTDogXCJDT1wiLFxyXG4gICAgQ09NOiBcIktNXCIsXHJcbiAgICBDT0c6IFwiQ0dcIixcclxuICAgIENPRDogXCJDRFwiLFxyXG4gICAgQ09LOiBcIkNLXCIsXHJcbiAgICBDUkk6IFwiQ1JcIixcclxuICAgIENJVjogXCJDSVwiLFxyXG4gICAgSFJWOiBcIkhSXCIsXHJcbiAgICBDVUI6IFwiQ1VcIixcclxuICAgIENZUDogXCJDWVwiLFxyXG4gICAgQ1pFOiBcIkNaXCIsXHJcbiAgICBETks6IFwiREtcIixcclxuICAgIERKSTogXCJESlwiLFxyXG4gICAgRE1BOiBcIkRNXCIsXHJcbiAgICBET006IFwiRE9cIixcclxuICAgIEVDVTogXCJFQ1wiLFxyXG4gICAgRUdZOiBcIkVHXCIsXHJcbiAgICBTTFY6IFwiU1ZcIixcclxuICAgIEdOUTogXCJHUVwiLFxyXG4gICAgRVJJOiBcIkVSXCIsXHJcbiAgICBFU1Q6IFwiRUVcIixcclxuICAgIEVUSDogXCJFVFwiLFxyXG4gICAgRkxLOiBcIkZLXCIsXHJcbiAgICBGUk86IFwiRk9cIixcclxuICAgIEZKSTogXCJGSlwiLFxyXG4gICAgRklOOiBcIkZJXCIsXHJcbiAgICBGUkE6IFwiRlJcIixcclxuICAgIEdVRjogXCJHRlwiLFxyXG4gICAgUFlGOiBcIlBGXCIsXHJcbiAgICBBVEY6IFwiVEZcIixcclxuICAgIEdBQjogXCJHQVwiLFxyXG4gICAgR01COiBcIkdNXCIsXHJcbiAgICBHRU86IFwiR0VcIixcclxuICAgIERFVTogXCJERVwiLFxyXG4gICAgR0hBOiBcIkdIXCIsXHJcbiAgICBHSUI6IFwiR0lcIixcclxuICAgIEdSQzogXCJHUlwiLFxyXG4gICAgR1JMOiBcIkdMXCIsXHJcbiAgICBHUkQ6IFwiR0RcIixcclxuICAgIEdMUDogXCJHUFwiLFxyXG4gICAgR1VNOiBcIkdVXCIsXHJcbiAgICBHVE06IFwiR1RcIixcclxuICAgIEdHWTogXCJHR1wiLFxyXG4gICAgR0lOOiBcIkdOXCIsXHJcbiAgICBHTkI6IFwiR1dcIixcclxuICAgIEdVWTogXCJHWVwiLFxyXG4gICAgSFRJOiBcIkhUXCIsXHJcbiAgICBITUQ6IFwiSE1cIixcclxuICAgIFZBVDogXCJWQVwiLFxyXG4gICAgSE5EOiBcIkhOXCIsXHJcbiAgICBIVU46IFwiSFVcIixcclxuICAgIElTTDogXCJJU1wiLFxyXG4gICAgSU5EOiBcIklOXCIsXHJcbiAgICBJRE46IFwiSURcIixcclxuICAgIElSTjogXCJJUlwiLFxyXG4gICAgSVJROiBcIklRXCIsXHJcbiAgICBJUkw6IFwiSUVcIixcclxuICAgIElNTjogXCJJTVwiLFxyXG4gICAgSVNSOiBcIklMXCIsXHJcbiAgICBJVEE6IFwiSVRcIixcclxuICAgIEpBTTogXCJKTVwiLFxyXG4gICAgSlBOOiBcIkpQXCIsXHJcbiAgICBKRVk6IFwiSkVcIixcclxuICAgIEpPUjogXCJKT1wiLFxyXG4gICAgS0FaOiBcIktaXCIsXHJcbiAgICBLRU46IFwiS0VcIixcclxuICAgIEtJUjogXCJLSVwiLFxyXG4gICAgUFJLOiBcIktQXCIsXHJcbiAgICBLT1I6IFwiS1JcIixcclxuICAgIEtXVDogXCJLV1wiLFxyXG4gICAgS0daOiBcIktHXCIsXHJcbiAgICBMQU86IFwiTEFcIixcclxuICAgIExWQTogXCJMVlwiLFxyXG4gICAgTEJOOiBcIkxCXCIsXHJcbiAgICBMU086IFwiTFNcIixcclxuICAgIExCUjogXCJMUlwiLFxyXG4gICAgTEJZOiBcIkxZXCIsXHJcbiAgICBMSUU6IFwiTElcIixcclxuICAgIExUVTogXCJMVFwiLFxyXG4gICAgTFVYOiBcIkxVXCIsXHJcbiAgICBNS0Q6IFwiTUtcIixcclxuICAgIE1ERzogXCJNR1wiLFxyXG4gICAgTVdJOiBcIk1XXCIsXHJcbiAgICBNWVM6IFwiTVlcIixcclxuICAgIE1EVjogXCJNVlwiLFxyXG4gICAgTUxJOiBcIk1MXCIsXHJcbiAgICBNTFQ6IFwiTVRcIixcclxuICAgIE1ITDogXCJNSFwiLFxyXG4gICAgTVRROiBcIk1RXCIsXHJcbiAgICBNUlQ6IFwiTVJcIixcclxuICAgIE1VUzogXCJNVVwiLFxyXG4gICAgTVlUOiBcIllUXCIsXHJcbiAgICBNRVg6IFwiTVhcIixcclxuICAgIEZTTTogXCJGTVwiLFxyXG4gICAgTURBOiBcIk1EXCIsXHJcbiAgICBNQ086IFwiTUNcIixcclxuICAgIE1ORzogXCJNTlwiLFxyXG4gICAgTU5FOiBcIk1FXCIsXHJcbiAgICBNU1I6IFwiTVNcIixcclxuICAgIE1BUjogXCJNQVwiLFxyXG4gICAgTU9aOiBcIk1aXCIsXHJcbiAgICBNTVI6IFwiTU1cIixcclxuICAgIE5BTTogXCJOQVwiLFxyXG4gICAgTlJVOiBcIk5SXCIsXHJcbiAgICBOUEw6IFwiTlBcIixcclxuICAgIE5MRDogXCJOTFwiLFxyXG4gICAgQU5UOiBcIkFOXCIsXHJcbiAgICBOQ0w6IFwiTkNcIixcclxuICAgIE5aTDogXCJOWlwiLFxyXG4gICAgTklDOiBcIk5JXCIsXHJcbiAgICBORVI6IFwiTkVcIixcclxuICAgIE5HQTogXCJOR1wiLFxyXG4gICAgTklVOiBcIk5VXCIsXHJcbiAgICBORks6IFwiTkZcIixcclxuICAgIE1OUDogXCJNUFwiLFxyXG4gICAgTk9SOiBcIk5PXCIsXHJcbiAgICBPTU46IFwiT01cIixcclxuICAgIFBBSzogXCJQS1wiLFxyXG4gICAgUExXOiBcIlBXXCIsXHJcbiAgICBQU0U6IFwiUFNcIixcclxuICAgIFBBTjogXCJQQVwiLFxyXG4gICAgUE5HOiBcIlBHXCIsXHJcbiAgICBQUlk6IFwiUFlcIixcclxuICAgIFBFUjogXCJQRVwiLFxyXG4gICAgUEhMOiBcIlBIXCIsXHJcbiAgICBQQ046IFwiUE5cIixcclxuICAgIFBPTDogXCJQTFwiLFxyXG4gICAgUFJUOiBcIlBUXCIsXHJcbiAgICBQUkk6IFwiUFJcIixcclxuICAgIFFBVDogXCJRQVwiLFxyXG4gICAgUkVVOiBcIlJFXCIsXHJcbiAgICBST1U6IFwiUk9cIixcclxuICAgIFJVUzogXCJSVVwiLFxyXG4gICAgUldBOiBcIlJXXCIsXHJcbiAgICBCTE06IFwiQkxcIixcclxuICAgIFNITjogXCJTSFwiLFxyXG4gICAgS05BOiBcIktOXCIsXHJcbiAgICBMQ0E6IFwiTENcIixcclxuICAgIE1BRjogXCJNRlwiLFxyXG4gICAgU1BNOiBcIlBNXCIsXHJcbiAgICBWQ1Q6IFwiVkNcIixcclxuICAgIFdTTTogXCJXU1wiLFxyXG4gICAgU01SOiBcIlNNXCIsXHJcbiAgICBTVFA6IFwiU1RcIixcclxuICAgIFNBVTogXCJTQVwiLFxyXG4gICAgU0VOOiBcIlNOXCIsXHJcbiAgICBTUkI6IFwiUlNcIixcclxuICAgIFNZQzogXCJTQ1wiLFxyXG4gICAgU0xFOiBcIlNMXCIsXHJcbiAgICBTR1A6IFwiU0dcIixcclxuICAgIFNWSzogXCJTS1wiLFxyXG4gICAgU1ZOOiBcIlNJXCIsXHJcbiAgICBTTEI6IFwiU0JcIixcclxuICAgIFNPTTogXCJTT1wiLFxyXG4gICAgWkFGOiBcIlpBXCIsXHJcbiAgICBTR1M6IFwiR1NcIixcclxuICAgIFNTRDogXCJTU1wiLFxyXG4gICAgRVNQOiBcIkVTXCIsXHJcbiAgICBMS0E6IFwiTEtcIixcclxuICAgIFNETjogXCJTRFwiLFxyXG4gICAgU1VSOiBcIlNSXCIsXHJcbiAgICBTSk06IFwiU0pcIixcclxuICAgIFNXWjogXCJTWlwiLFxyXG4gICAgU1dFOiBcIlNFXCIsXHJcbiAgICBDSEU6IFwiQ0hcIixcclxuICAgIFNZUjogXCJTWVwiLFxyXG4gICAgVFdOOiBcIlRXXCIsXHJcbiAgICBUSks6IFwiVEpcIixcclxuICAgIFRaQTogXCJUWlwiLFxyXG4gICAgVEhBOiBcIlRIXCIsXHJcbiAgICBUTFM6IFwiVExcIixcclxuICAgIFRHTzogXCJUR1wiLFxyXG4gICAgVEtMOiBcIlRLXCIsXHJcbiAgICBUT046IFwiVE9cIixcclxuICAgIFRUTzogXCJUVFwiLFxyXG4gICAgVFVOOiBcIlROXCIsXHJcbiAgICBUVVI6IFwiVFJcIixcclxuICAgIFRLTTogXCJUTVwiLFxyXG4gICAgVENBOiBcIlRDXCIsXHJcbiAgICBUVVY6IFwiVFZcIixcclxuICAgIFVHQTogXCJVR1wiLFxyXG4gICAgVUtSOiBcIlVBXCIsXHJcbiAgICBBUkU6IFwiQUVcIixcclxuICAgIEdCUjogXCJHQlwiLFxyXG4gICAgVVNBOiBcIlVTXCIsXHJcbiAgICBVTUk6IFwiVU1cIixcclxuICAgIFVSWTogXCJVWVwiLFxyXG4gICAgVVpCOiBcIlVaXCIsXHJcbiAgICBWVVQ6IFwiVlVcIixcclxuICAgIFZFTjogXCJWRVwiLFxyXG4gICAgVk5NOiBcIlZOXCIsXHJcbiAgICBWSVI6IFwiVklcIixcclxuICAgIFdMRjogXCJXRlwiLFxyXG4gICAgRVNIOiBcIkVIXCIsXHJcbiAgICBZRU06IFwiWUVcIixcclxuICAgIFpNQjogXCJaTVwiLFxyXG4gICAgWldFOiBcIlpXXCIsXHJcbiAgICBYS1g6IFwiWEtcIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q291bnRyeUlTTzIgPSAoY291bnRyeUNvZGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gY291bnRyeUlTT01hcHBpbmdbPHN0cmluZz5jb3VudHJ5Q29kZV07XHJcbn0iLCJleHBvcnQgY29uc3QgY2xvc2VDb3VudHJ5RGV0YWlscyA9ICgpOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IGNvdW50cnlEZXRhaWxzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50cnlfX2RldGFpbHMtY29udGFpbmVyJykhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3QgY291bnRyaWVzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJpZXNfX3NlY3Rpb24nKSEgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBpbnB1dHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRzX19jb250YWluZXInKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjb25zdCByZXR1cm5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19yZXR1cm4nKSEgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gICAgcmV0dXJuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb3VudHJpZXNTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICBpbnB1dHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgIGNvdW50cnlEZXRhaWxzQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgfSlcclxufSIsImV4cG9ydCB0eXBlIFZvaWRSZXR1cm5GbiA9ICgpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYzogRnVuY3Rpb24sIHRpbWU6IG51bWJlcik6IFZvaWRSZXR1cm5GbiA9PiB7XHJcbiAgICBsZXQgdGltZXJJZDogTm9kZUpTLlRpbWVvdXQ7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRoaXM6IHVua25vd24pIHtcclxuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xyXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICB9LCB0aW1lKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgZmlsdGVyQnlSZWdpb24gPSAoKTp2b2lkID0+IHtcclxuICAgIGNvbnN0IGNvdW50cnlDb250YWluZXIgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRGl2RWxlbWVudD4oXCIuY291bnRyeV9fY29udGFpbmVyXCIpXSE7XHJcbiAgICBjb25zdCBzZWxlY3RSZWdpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaW9uLWlucHV0JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICBzZWxlY3RSZWdpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCByZWdpb25TZWxlY3RlZCA9IHNlbGVjdFJlZ2lvbi52YWx1ZTtcclxuICAgICAgICBjb3VudHJ5Q29udGFpbmVyLmZvckVhY2goY291bnRyeSA9PiB7XHJcbiAgICAgICAgICAgIGNvdW50cnkuZGF0YXNldC5yZWdpb24gIT09IHJlZ2lvblNlbGVjdGVkID8gY291bnRyeS5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSA6IGNvdW50cnkucGFyZW50RWxlbWVudCEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGlmIChyZWdpb25TZWxlY3RlZCA9PT0gJycpIGNvdW50cnkucGFyZW50RWxlbWVudCEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuIiwiaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi9kZWJvdW5jZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaElucHV0SGFuZGxlciA9ICgpID0+IHtcclxuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5zZWFyY2gtaW5wdXRcIlxyXG4gICkhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgY29uc3QgY291bnRyeUNvbnRhaW5lciA9IFtcclxuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTERpdkVsZW1lbnQ+KFwiLmNvdW50cnlfX2NvbnRhaW5lclwiKSxcclxuICBdITtcclxuICBjb25zdCBzZWxlY3RSZWdpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIucmVnaW9uLWlucHV0XCJcclxuICApISBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuYnV0dG9uX19zZWFyY2gtaWNvblwiXHJcbiAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwiaW5wdXRcIixcclxuICAgIGRlYm91bmNlKChlOiBFdmVudCkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHNlbGVjdFJlZ2lvbi52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIGNvdW50cnlDb250YWluZXIuZm9yRWFjaCgoY291bnRyeSkgPT4ge1xyXG4gICAgICAgIGlmIChzZWFyY2hJbnB1dC52YWx1ZS5sZW5ndGggPT09IDAgJiYgc2VsZWN0UmVnaW9uLnZhbHVlID09PSBcIlwiKVxyXG4gICAgICAgICAgY291bnRyeS5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHNlYXJjaElucHV0LnZhbHVlLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgY291bnRyeS5kYXRhc2V0LnJlZ2lvbiA9PT0gc2VsZWN0UmVnaW9uLnZhbHVlXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgY291bnRyeS5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICFjb3VudHJ5LmRhdGFzZXRcclxuICAgICAgICAgIC5uYW1lIS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAuc3RhcnRzV2l0aChgJHtzZWFyY2hJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpfWApXHJcbiAgICAgICAgICA/IGNvdW50cnkucGFyZW50RWxlbWVudCEuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxyXG4gICAgICAgICAgOiBjb3VudHJ5LnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMzAwKVxyXG4gICk7XHJcblxyXG4gIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHRvZ2dsZVRoZW1lTW9kZSA9ICgpOiB2b2lkID0+IHtcclxuICAgIC8vRE9NIEVsZW1lbnRzXHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZS1tb2RlX19jaGVja2JveCcpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpISBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykhIGFzIEhUTUxCb2R5RWxlbWVudDtcclxuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgcmVnaW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaW9uLWlucHV0JykhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBjb3VudHJ5RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KCcuY291bnRyeV9fZGV0YWlscycpO1xyXG5cclxuXHJcbiAgICAvL0NvbG9yIHZhcmlhYmxlcyBhcyBpbiBTQVNTXHJcbiAgICBjb25zdCBjb2xvckRhcmtCbHVlID0gXCJoc2woMjA5LCAyMyUsIDIyJSlcIjtcclxuICAgIGNvbnN0IGNvbG9yVmVyeURhcmtCbHVlID0gXCJoc2woMjA3LCAyNiUsIDE3JSlcIjtcclxuICAgIGNvbnN0IGNvbG9yVmVyeURhcmtCbHVlVGV4dCA9IFwiIzQxNUI5MVwiO1xyXG4gICAgLy8gY29uc3QgY29sb3JWZXJ5TGlnaHRHcmF5QmFja2dyb3VuZCA9IFwiaHNsKDAsIDAlLCA5OCUpXCI7XHJcbiAgICBjb25zdCBjb2xvcldoaXRlID0gXCIjZjNmM2YzXCI7XHJcblxyXG4gICAgY29uc3QgZGFya1RoZW1lID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvckRhcmtCbHVlO1xyXG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JWZXJ5RGFya0JsdWU7XHJcbiAgICAgICAgYm9keS5zdHlsZS5jb2xvciA9IGNvbG9yV2hpdGU7XHJcbiAgICAgICAgc2VhcmNoSW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JEYXJrQmx1ZTtcclxuICAgICAgICByZWdpb25JbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvckRhcmtCbHVlO1xyXG5cclxuICAgICAgICBpZiAoY291bnRyeURldGFpbHMpIGNvdW50cnlEZXRhaWxzLmZvckVhY2goY291bnRyeSA9PiBjb3VudHJ5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yRGFya0JsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGlnaHRUaGVtZSA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JXaGl0ZTtcclxuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcclxuICAgICAgICBib2R5LnN0eWxlLmNvbG9yID0gY29sb3JWZXJ5RGFya0JsdWVUZXh0O1xyXG4gICAgICAgIHNlYXJjaElucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yV2hpdGU7XHJcbiAgICAgICAgcmVnaW9uSW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JXaGl0ZTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50cnlEZXRhaWxzKSBjb3VudHJ5RGV0YWlscy5mb3JFYWNoKGNvdW50cnkgPT4gY291bnRyeS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcldoaXRlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgZGFya1RoZW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgZXZlbnQgYW5kIHRoZW1lIHRvZ2dsZVxyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPyBkYXJrVGhlbWUoKSA6IGxpZ2h0VGhlbWUoKTtcclxuICAgIH0pXHJcbn1cclxuIiwiaW1wb3J0IHsgQ291bnRyeU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9jb3VudHJ5Lm1vZGVsXCI7XHJcblxyXG4vL3ByZXR0aWVyLWlnbm9yZVxyXG5leHBvcnQgY29uc3QgcmVuZGVyQ291bnRyaWVzSW5MaXN0U3R5bGUgPSAoY291bnRyaWVzOiBDb3VudHJ5TW9kZWxbXSkgPT4ge1xyXG4gIGNvbnN0IGxpc3RTdHlsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1pY29uXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gIGNvbnN0IGNvdW50cnlTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3VudHJpZXNfX3NlY3Rpb25cIikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgY29uc3QgY291bnRyaWVzR3JpZFN0eWxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50cmllcy1ncmlkLXN0eWxlJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGxpc3RTdHlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY291bnRyaWVzR3JpZFN0eWxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cclxuICAgIGNvdW50cmllcy5mb3JFYWNoKChjb3VudHJ5OiBDb3VudHJ5TW9kZWwpID0+IHtcclxuICAgICAgICBjb3VudHJ5U2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiY291bnRyeV9fZGV0YWlscyBoaWRkZW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50cnlfX2NvbnRhaW5lclwiIGRhdGEtcmVnaW9uPVwiJHtjb3VudHJ5LnJlZ2lvbn1cIiBkYXRhLW5hbWU9XCIke2NvdW50cnkubmFtZS5jb21tb259XCIgZGF0YS1vZmZpY2lhbD1cIiR7Y291bnRyeS5uYW1lLm9mZmljaWFsfVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ZsYWdjZG4uY29tL3c2NDAvJHtjb3VudHJ5LmNjYTIhLnRvTG93ZXJDYXNlKCl9LnBuZ1wiIGFsdD1cIiR7Y291bnRyeS5mbGFnfVwiIGNsYXNzPVwiY291bnRyeV9fZmxhZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjb3VudHJ5X19uYW1lXCI+JHtjb3VudHJ5Lm5hbWUuY29tbW9ufTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjb3VudHJ5X19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeV9fbGlzdC0taXRlbVwiPjxzdHJvbmc+UG9wdWxhdGlvbjo8L3N0cm9uZz4gJHtjb3VudHJ5LnBvcHVsYXRpb24udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyl9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5X19saXN0LS1pdGVtXCI+PHN0cm9uZz5SZWdpb246PC9zdHJvbmc+ICR7Y291bnRyeS5yZWdpb259PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5X19saXN0LS1pdGVtXCI+PHN0cm9uZz5DYXBpdGFsOjwvc3Ryb25nPiAke2NvdW50cnkuY2FwaXRhbCA/IGNvdW50cnkuY2FwaXRhbFswXSA6ICco4pWvwrDilqHCsO+8ieKVr++4tSDilLvilIHilLsnfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICBgKVxyXG4gICAgfSlcclxuICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgQ291bnRyeU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9jb3VudHJ5Lm1vZGVsXCI7XHJcbi8vcHJldHRpZXItaWdub3JlXHJcbmV4cG9ydCBjb25zdCByZW5kZXJDb3VudHJpZXMgPSAoY291bnRyaWVzOiBDb3VudHJ5TW9kZWxbXSkgPT4ge1xyXG4gICAgY29uc3QgY291bnRyeVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50cmllcy1ncmlkLXN0eWxlXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY291bnRyaWVzLmZvckVhY2goKGNvdW50cnkpID0+IHtcclxuICAgICAgICBjb3VudHJ5U2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiY291bnRyeV9fZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRyeV9fY29udGFpbmVyXCIgZGF0YS1yZWdpb249XCIke2NvdW50cnkucmVnaW9ufVwiIGRhdGEtbmFtZT1cIiR7Y291bnRyeS5uYW1lLmNvbW1vbn1cIiBkYXRhLW9mZmljaWFsPVwiJHtjb3VudHJ5Lm5hbWUub2ZmaWNpYWx9XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZmxhZ2Nkbi5jb20vdzY0MC8ke2NvdW50cnkuY2NhMiEudG9Mb3dlckNhc2UoKX0ucG5nXCIgYWx0PVwiJHtjb3VudHJ5LmZsYWd9XCIgY2xhc3M9XCJjb3VudHJ5X19mbGFnXCIgLz5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNvdW50cnlfX25hbWVcIj4ke2NvdW50cnkubmFtZS5jb21tb259PC9oMz5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvdW50cnlfX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5X19saXN0LS1pdGVtXCI+PHN0cm9uZz5Qb3B1bGF0aW9uOjwvc3Ryb25nPiAke2NvdW50cnkucG9wdWxhdGlvbi50b0xvY2FsZVN0cmluZygnZW4tVVMnKX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnlfX2xpc3QtLWl0ZW1cIj48c3Ryb25nPlJlZ2lvbjo8L3N0cm9uZz4gJHtjb3VudHJ5LnJlZ2lvbn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnlfX2xpc3QtLWl0ZW1cIj48c3Ryb25nPkNhcGl0YWw6PC9zdHJvbmc+ICR7Y291bnRyeS5jYXBpdGFsID8gY291bnRyeS5jYXBpdGFsWzBdIDogJyjila/CsOKWocKw77yJ4pWv77i1IOKUu+KUgeKUuyd9PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgIGApXHJcbiAgICB9KVxyXG59O1xyXG4iLCJpbXBvcnQgeyBDb3VudHJ5TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2NvdW50cnkubW9kZWxcIjtcclxuaW1wb3J0IHsgZ2V0Q291bnRyeUlTTzIgfSBmcm9tIFwiLi4vZ2V0LWNvdW50cmllc1wiO1xyXG5pbXBvcnQgeyBjbG9zZUNvdW50cnlEZXRhaWxzIH0gZnJvbSBcIi4uL2lucHV0SGFuZGxlcnMvY2xvc2UuY291bnRyeS5kZXRhaWxzXCI7XHJcbmltcG9ydCB7IGZldGNoQ291bnRyeURldGFpbHMgfSBmcm9tIFwiLi4vYXBwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyQ291bnRyeURldGFpbHMgPSAoY291bnRyeURldGFpbHM6IENvdW50cnlNb2RlbFtdKSA9PiB7XHJcbiAgICAvL0RPTVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSBhcyBIVE1MQm9keUVsZW1lbnQ7XHJcbiAgICBjb25zdCBjb3VudHJ5RGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY291bnRyeURldGFpbHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY291bnRyeV9fZGV0YWlscy1jb250YWluZXInKTtcclxuICAgIGNvdW50cnlEZXRhaWxzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dlbmVyYWwtd2lkdGgnKTtcclxuICAgIGNvdW50cnlEZXRhaWxzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NlbnRlcicpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb3VudHJ5RGV0YWlsc0NvbnRhaW5lcik7XHJcblxyXG4gICAgLy9WQVJJQUJMRVNcclxuICAgIGxldCBjdXJyZW5jaWVzOiBzdHJpbmdbXTtcclxuICAgIGxldCBuYXRpdmVOYW1lOiBzdHJpbmdbXTtcclxuICAgIGNvbnN0IGJvcmRlckNvdW50cmllcyA9IGNvdW50cnlEZXRhaWxzWzBdLmJvcmRlcnMgPyBjb3VudHJ5RGV0YWlsc1swXS5ib3JkZXJzLm1hcChjb3VudHJ5ID0+IGdldENvdW50cnlJU08yKGNvdW50cnkpKSA6IFtdO1xyXG4gICAgbGV0IHJlZ2lvbk5hbWVzID0gbmV3IEludGwuRGlzcGxheU5hbWVzKFsnZW4nXSwge3R5cGU6ICdyZWdpb24nfSlcclxuXHJcblxyXG4gICAgIWNvdW50cnlEZXRhaWxzWzBdLmhhc093blByb3BlcnR5KCdjdXJyZW5jaWVzJykgPyBjdXJyZW5jaWVzID0gWydObyBhdmFpbGFibGUgY3VycmVuY3kuJ10gOiBjdXJyZW5jaWVzID0gKE9iamVjdC52YWx1ZXMoY291bnRyeURldGFpbHNbMF0uY3VycmVuY2llcykpLm1hcChjdXJyZW5jeVR5cGUgPT4gY3VycmVuY3lUeXBlLm5hbWUpO1xyXG4gICAgIWNvdW50cnlEZXRhaWxzWzBdLm5hbWUuaGFzT3duUHJvcGVydHkoJ25hdGl2ZU5hbWUnKSA/IG5hdGl2ZU5hbWUgPSBbJ05vIG5hdGl2ZSBuYW1lIGF2YWlsYWJsZS4nXSA6IG5hdGl2ZU5hbWUgPSAoT2JqZWN0LnZhbHVlcyhjb3VudHJ5RGV0YWlsc1swXS5uYW1lLm5hdGl2ZU5hbWUpKS5tYXAobmFtZSA9PiBuYW1lLmNvbW1vbik7XHJcblxyXG4gICAgY29uc3QgYWRkQm9yZGVyQ291bnRyaWVzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvcmRlckNvdW50cmllc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3JkZXJpbmctY291bnRyeV9fY29udGFpbmVyJykhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoYm9yZGVyQ291bnRyaWVzLmxlbmd0aCA9PT0gMCkgYm9yZGVyQ291bnRyaWVzQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxzcGFuIGNsYXNzPVwiYm9yZGVyaW5nLWNvdW50cnktLW5vdC1mb3VuZFwiPlRoZXJlIGFyZSBubyBib3JkZXJpbmcgY291bnRyaWVzIHdpdGggdGhpcyBjb3VudHJ5ITwvc3Bhbj5gKVxyXG5cclxuICAgICAgICBib3JkZXJDb3VudHJpZXMuZm9yRWFjaCgoY291bnRyeSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBib3JkZXJDb3VudHJpZXNDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgICAgICAgICAke2kgPCAzID8gKGNvdW50cnkgPyBgPHNwYW4gY2xhc3M9XCJib3JkZXJpbmctY291bnRyeVwiPiR7cmVnaW9uTmFtZXMub2YoY291bnRyeSl9PC9zcGFuPmAgOiBgYCkgOiBcIlwifVxyXG4gICAgICAgICAgIGApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb3VudHJ5RGV0YWlsc0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlcl9fcmV0dXJuLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uX19yZXR1cm5cIj4mbGFycjsgQmFjazwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJfX2NvdW50cnktaW5mb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyX19jb3VudHJ5LWZsYWdcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9mbGFnY2RuLmNvbS93MTI4MC8ke2NvdW50cnlEZXRhaWxzWzBdLmNjYTIhLnRvTG93ZXJDYXNlKCl9LnBuZ1wiIGFsdD1cIkNvdW50cnkgZmxhZ1wiIGNsYXNzPVwiY291bnRyeS1mbGFnXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyX19jb3VudHJ5LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImhlYWRpbmctc2Vjb25kYXJ5XCI+JHtjb3VudHJ5RGV0YWlsc1swXS5uYW1lLmNvbW1vbn08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50cnktaW5mb19fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvdW50cnktaW5mb19fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2l0ZW1cIj48c3Ryb25nPk5hdGl2ZSBuYW1lOiA8L3N0cm9uZz4ke25hdGl2ZU5hbWUgPyBuYXRpdmVOYW1lLmF0KC0xKSA6IG5hdGl2ZU5hbWVbMF19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeS1pbmZvX19pdGVtXCI+PHN0cm9uZz5Qb3B1bGF0aW9uOiA8L3N0cm9uZz4ke2NvdW50cnlEZXRhaWxzWzBdLnBvcHVsYXRpb24udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyl9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeS1pbmZvX19pdGVtXCI+PHN0cm9uZz5SZWdpb246IDwvc3Ryb25nPiR7Y291bnRyeURldGFpbHNbMF0ucmVnaW9uID8gY291bnRyeURldGFpbHNbMF0ucmVnaW9uIDogJ05vIHJlZ2lvbiBhdmFpbGFibGUuJ308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2l0ZW1cIj48c3Ryb25nPlN1YiBSZWdpb246IDwvc3Ryb25nPiR7Y291bnRyeURldGFpbHNbMF0uc3VicmVnaW9uID8gY291bnRyeURldGFpbHNbMF0uc3VicmVnaW9uIDogJ05vIHN1YiByZWdpb24gYXZhaWxhYmxlLid9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeS1pbmZvX19pdGVtXCI+PHN0cm9uZz5DYXBpdGFsOiA8L3N0cm9uZz4ke2NvdW50cnlEZXRhaWxzWzBdLmNhcGl0YWwgPyBjb3VudHJ5RGV0YWlsc1swXS5jYXBpdGFsIDogJ05vIGNhcGl0YWwgYXZhaWxhYmxlLid9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvdW50cnktaW5mb19fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2l0ZW1cIj48c3Ryb25nPlRvcCBMZXZlbCBEb21haW46IDwvc3Ryb25nPiR7Y291bnRyeURldGFpbHNbMF0udGxkfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnktaW5mb19faXRlbVwiPjxzdHJvbmc+Q3VycmVuY2llczogPC9zdHJvbmc+JHtjdXJyZW5jaWVzLmxlbmd0aCA9PT0gMSA/IGN1cnJlbmNpZXNbMF0gOiBjdXJyZW5jaWVzLmpvaW4oJywgJyl9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeS1pbmZvX19pdGVtXCI+PHN0cm9uZz5MYW5ndWFnZXM6IDwvc3Ryb25nPiR7Y291bnRyeURldGFpbHNbMF0uaGFzT3duUHJvcGVydHkoJ2xhbmd1YWdlcycpID8gT2JqZWN0LnZhbHVlcyhjb3VudHJ5RGV0YWlsc1swXS5sYW5ndWFnZXMpLnRvU3RyaW5nKCkucmVwbGFjZUFsbCgnLCcsICcsICcpIDogJ05vIGxhbmd1YWdlIGF2YWlsYWJsZS4nfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lcl9fYm9yZGVyLWNvdW50cmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYm9yZGVyLWNvdW50cmllc19fdGV4dFwiPjxzdHJvbmc+Qm9yZGVyIGNvdW50cmllczogPC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXJpbmctY291bnRyeV9fY29udGFpbmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgKVxyXG4gICAgYWRkQm9yZGVyQ291bnRyaWVzKCk7XHJcbiAgICBjbG9zZUNvdW50cnlEZXRhaWxzKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb3VudHJ5RGV0YWlscyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvdW50cnlEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oJy5jb3VudHJ5X19kZXRhaWxzJykhO1xyXG4gICAgY29uc3QgY291bnRyaWVzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJpZXNfX3NlY3Rpb24nKSEgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBpbnB1dHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRzX19jb250YWluZXInKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG5cclxuICAgIGNvdW50cnlEZXRhaWxzLmZvckVhY2goY291bnRyeSA9PiB7XHJcbiAgICAgICAgY291bnRyeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY291bnRyaWVzU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBpbnB1dHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGZldGNoQ291bnRyeURldGFpbHMoY291bnRyeS5maXJzdEVsZW1lbnRDaGlsZCEuZGF0YXNldC5vZmZpY2lhbClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9