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
const get_countries_1 = __webpack_require__(/*! ./get-countries */ "./src/get-countries.ts");
const genericFetch = (url, init) => __awaiter(void 0, void 0, void 0, function* () {
    const fetchedData = yield fetch(url, init);
    return (yield fetchedData.json());
});
const fetchCountries = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield genericFetch('https://restcountries.com/v3.1/all');
    renderCountries(data);
    filterByRegion();
    toggleThemeMode();
    searchInputHandler();
    getCountryDetails();
});
fetchCountries();
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
            if (!country.dataset.name.toLowerCase().startsWith(`${searchInput.value.toLowerCase()}`)) {
                country.parentElement.classList.add('hidden');
            }
            else if (country.dataset.name.toLowerCase().startsWith(`${searchInput.value.toLowerCase()}`) && country.dataset.region === selectRegion.value || selectRegion.value === '') {
                country.parentElement.classList.remove('hidden');
            }
        });
    });
};
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
        if (countryDetails) {
            countryDetails.forEach(country => {
                country.style.backgroundColor = colorDarkBlue;
            });
        }
    };
    const lightTheme = () => {
        header.style.backgroundColor = colorWhite;
        body.style.backgroundColor = colorVeryLightGrayBackground;
        body.style.color = colorVeryDarkBlueText;
        searchInput.style.backgroundColor = colorWhite;
        regionInput.style.backgroundColor = colorWhite;
        if (countryDetails) {
            countryDetails.forEach(country => {
                country.style.backgroundColor = colorWhite;
            });
        }
    };
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        checkbox.checked = true;
        darkTheme();
    }
    checkbox.addEventListener('change', () => {
        checkbox.checked ? darkTheme() : lightTheme();
    });
};
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
        if (borderCountries.length === 0) {
            borderCountriesContainer.insertAdjacentHTML('beforeend', `
                <span class="bordering-country--not-found">There are no bordering countries with this country!</span>
           `);
        }
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
    closeCountryDetails();
};
const fetchCountryDetails = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const requestDetails = yield fetch(`https://restcountries.com/v3.1/name/${name}`);
    const countryData = yield requestDetails.json();
    renderCountryDetails(countryData);
});
const getCountryDetails = () => {
    const countryDetails = document.querySelectorAll('.country__details');
    const countriesSection = document.querySelector('.countries__section');
    const inputsContainer = document.querySelector('.inputs__container');
    countryDetails.forEach(country => {
        country.addEventListener('click', () => {
            countriesSection.style.display = 'none';
            inputsContainer.style.display = 'none';
            console.log(country.firstElementChild);
            fetchCountryDetails(country.firstElementChild.dataset.official);
        });
    });
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0NBQ1o7QUFFTSxNQUFNLGNBQWMsR0FBRyxDQUFDLFdBQW1CLEVBQVUsRUFBRTtJQUMxRCxPQUFPLGlCQUFpQixDQUFTLFdBQVcsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFGWSxzQkFBYyxrQkFFMUI7Ozs7Ozs7VUMvUEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyLy4vc3JjL2dldC1jb3VudHJpZXMudHMiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLW1hc3Rlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItbWFzdGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3VudHJ5TW9kZWwgfSBmcm9tIFwiLi9tb2RlbHMvY291bnRyeS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBnZXRDb3VudHJ5SVNPMiB9IGZyb20gXCIuL2dldC1jb3VudHJpZXNcIjtcclxuXHJcbmNvbnN0IGdlbmVyaWNGZXRjaCA9IGFzeW5jIDxUPih1cmw6IFVSTCB8IFJlcXVlc3RJbmZvLCBpbml0PzogUmVxdWVzdEluaXQpOiBQcm9taXNlPFQ+ID0+IHtcclxuICAgIGNvbnN0IGZldGNoZWREYXRhOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgaW5pdCk7XHJcbiAgICByZXR1cm4gKGF3YWl0IGZldGNoZWREYXRhLmpzb24oKSkgYXMgVDtcclxufVxyXG5cclxuY29uc3QgZmV0Y2hDb3VudHJpZXMgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2VuZXJpY0ZldGNoPENvdW50cnlNb2RlbFtdPignaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xL2FsbCcpO1xyXG4gICAgcmVuZGVyQ291bnRyaWVzKGRhdGEpO1xyXG4gICAgZmlsdGVyQnlSZWdpb24oKTtcclxuICAgIHRvZ2dsZVRoZW1lTW9kZSgpO1xyXG4gICAgc2VhcmNoSW5wdXRIYW5kbGVyKCk7XHJcbiAgICBnZXRDb3VudHJ5RGV0YWlscygpO1xyXG59XHJcblxyXG5mZXRjaENvdW50cmllcygpO1xyXG5cclxuY29uc3QgcmVuZGVyQ291bnRyaWVzID0gKGNvdW50cmllczogQ291bnRyeU1vZGVsW10pID0+IHtcclxuICAgIGNvbnN0IGNvdW50cnlTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3VudHJpZXNfX3NlY3Rpb25cIikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb3VudHJpZXMuZm9yRWFjaCgoY291bnRyeSkgPT4ge1xyXG4gICAgICAgIGNvdW50cnlTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjb3VudHJ5X19kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudHJ5X19jb250YWluZXJcIiBkYXRhLXJlZ2lvbj1cIiR7Y291bnRyeS5yZWdpb259XCIgZGF0YS1uYW1lPVwiJHtjb3VudHJ5Lm5hbWUuY29tbW9ufVwiIGRhdGEtb2ZmaWNpYWw9XCIke2NvdW50cnkubmFtZS5vZmZpY2lhbH1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtjb3VudHJ5LmZsYWdzLnBuZ31cIiBhbHQ9XCIke2NvdW50cnkuZmxhZ31cIiBjbGFzcz1cImNvdW50cnlfX2ZsYWdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY291bnRyeV9fbmFtZVwiPiR7Y291bnRyeS5uYW1lLmNvbW1vbn08L2gzPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY291bnRyeV9fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnlfX2xpc3QtLWl0ZW1cIj48c3Ryb25nPlBvcHVsYXRpb246PC9zdHJvbmc+ICR7Y291bnRyeS5wb3B1bGF0aW9uLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeV9fbGlzdC0taXRlbVwiPjxzdHJvbmc+UmVnaW9uOjwvc3Ryb25nPiAke2NvdW50cnkucmVnaW9ufTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeV9fbGlzdC0taXRlbVwiPjxzdHJvbmc+Q2FwaXRhbDo8L3N0cm9uZz4gJHtjb3VudHJ5LmNhcGl0YWwgPyBjb3VudHJ5LmNhcGl0YWxbMF0gOiAnKOKVr8Kw4pahwrDvvInila/vuLUg4pS74pSB4pS7J308L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgYClcclxuICAgIH0pXHJcbn07XHJcblxyXG5cclxuY29uc3Qgc2VhcmNoSW5wdXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0JykhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBjb3VudHJ5Q29udGFpbmVyID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTERpdkVsZW1lbnQ+KFwiLmNvdW50cnlfX2NvbnRhaW5lclwiKV0hO1xyXG4gICAgY29uc3Qgc2VsZWN0UmVnaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lvbi1pbnB1dCcpISBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuXHJcbiAgICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvdW50cnlDb250YWluZXIuZm9yRWFjaChjb3VudHJ5ID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlYXJjaElucHV0LnZhbHVlLmxlbmd0aCA9PT0gMCAmJiBzZWxlY3RSZWdpb24udmFsdWUgPT09ICcnKSBjb3VudHJ5LnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlYXJjaElucHV0LnZhbHVlLmxlbmd0aCA9PT0gMCAmJiBjb3VudHJ5LmRhdGFzZXQucmVnaW9uID09PSBzZWxlY3RSZWdpb24udmFsdWUpIGNvdW50cnkucGFyZW50RWxlbWVudCEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvdW50cnkuZGF0YXNldC5uYW1lIS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoYCR7c2VhcmNoSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKX1gKSkge1xyXG4gICAgICAgICAgICAgICAgY291bnRyeS5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudHJ5LmRhdGFzZXQubmFtZSEudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGAke3NlYXJjaElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCl9YCkgJiYgY291bnRyeS5kYXRhc2V0LnJlZ2lvbiA9PT0gc2VsZWN0UmVnaW9uLnZhbHVlIHx8IHNlbGVjdFJlZ2lvbi52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnkucGFyZW50RWxlbWVudCEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmNvbnN0IGZpbHRlckJ5UmVnaW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY291bnRyeUNvbnRhaW5lciA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxEaXZFbGVtZW50PihcIi5jb3VudHJ5X19jb250YWluZXJcIildITtcclxuICAgIGNvbnN0IHNlbGVjdFJlZ2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpb24taW5wdXQnKSEgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICBzZWxlY3RSZWdpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCByZWdpb25TZWxlY3RlZCA9IHNlbGVjdFJlZ2lvbi52YWx1ZTtcclxuICAgICAgICBjb3VudHJ5Q29udGFpbmVyLmZvckVhY2goY291bnRyeSA9PiB7XHJcbiAgICAgICAgICAgIGNvdW50cnkuZGF0YXNldC5yZWdpb24gIT09IHJlZ2lvblNlbGVjdGVkID8gY291bnRyeS5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSA6IGNvdW50cnkucGFyZW50RWxlbWVudCEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGlmIChyZWdpb25TZWxlY3RlZCA9PT0gJycpIGNvdW50cnkucGFyZW50RWxlbWVudCEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZVRoZW1lTW9kZSA9ICgpOiB2b2lkID0+IHtcclxuICAgIC8vRE9NIEVsZW1lbnRzXHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZS1tb2RlX19jaGVja2JveCcpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpISBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykhIGFzIEhUTUxCb2R5RWxlbWVudDtcclxuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgcmVnaW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaW9uLWlucHV0JykhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBjb3VudHJ5RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KCcuY291bnRyeV9fZGV0YWlscycpO1xyXG5cclxuXHJcbiAgICAvL0NvbG9yIHZhcmlhYmxlcyBhcyBpbiBTQVNTXHJcbiAgICBjb25zdCBjb2xvckRhcmtCbHVlID0gXCJoc2woMjA5LCAyMyUsIDIyJSlcIjtcclxuICAgIGNvbnN0IGNvbG9yVmVyeURhcmtCbHVlID0gXCJoc2woMjA3LCAyNiUsIDE3JSlcIjtcclxuICAgIGNvbnN0IGNvbG9yVmVyeURhcmtCbHVlVGV4dCA9IFwiaHNsKDIwMCwgMTUlLCA4JSlcIjtcclxuICAgIGNvbnN0IGNvbG9yVmVyeUxpZ2h0R3JheUJhY2tncm91bmQgPSBcImhzbCgwLCAwJSwgOTglKVwiO1xyXG4gICAgY29uc3QgY29sb3JXaGl0ZSA9IFwiI2ZmZlwiO1xyXG5cclxuICAgIGNvbnN0IGRhcmtUaGVtZSA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JEYXJrQmx1ZTtcclxuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yVmVyeURhcmtCbHVlO1xyXG4gICAgICAgIGJvZHkuc3R5bGUuY29sb3IgPSBjb2xvcldoaXRlO1xyXG4gICAgICAgIHNlYXJjaElucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yRGFya0JsdWU7XHJcbiAgICAgICAgcmVnaW9uSW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JEYXJrQmx1ZTtcclxuICAgICAgICBpZiAoY291bnRyeURldGFpbHMpIHtcclxuICAgICAgICAgICAgY291bnRyeURldGFpbHMuZm9yRWFjaChjb3VudHJ5ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JEYXJrQmx1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGlnaHRUaGVtZSA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JXaGl0ZTtcclxuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yVmVyeUxpZ2h0R3JheUJhY2tncm91bmQ7XHJcbiAgICAgICAgYm9keS5zdHlsZS5jb2xvciA9IGNvbG9yVmVyeURhcmtCbHVlVGV4dDtcclxuICAgICAgICBzZWFyY2hJbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcldoaXRlO1xyXG4gICAgICAgIHJlZ2lvbklucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yV2hpdGU7XHJcbiAgICAgICAgaWYgKGNvdW50cnlEZXRhaWxzKSB7XHJcbiAgICAgICAgICAgIGNvdW50cnlEZXRhaWxzLmZvckVhY2goY291bnRyeSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yV2hpdGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgZGFya1RoZW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgZXZlbnQgYW5kIHRoZW1lIHRvZ2dsZVxyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPyBkYXJrVGhlbWUoKSA6IGxpZ2h0VGhlbWUoKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGNsb3NlQ291bnRyeURldGFpbHMgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCBjb3VudHJ5RGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJ5X19kZXRhaWxzLWNvbnRhaW5lcicpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0IGNvdW50cmllc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRyaWVzX19zZWN0aW9uJykhIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgaW5wdXRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0c19fY29udGFpbmVyJykhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3QgcmV0dXJuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9fcmV0dXJuJykhIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgcmV0dXJuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb3VudHJpZXNTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICBpbnB1dHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgIGNvdW50cnlEZXRhaWxzQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmNvbnN0IHJlbmRlckNvdW50cnlEZXRhaWxzID0gKGNvdW50cnlEZXRhaWxzOiBDb3VudHJ5TW9kZWxbXSkgPT4ge1xyXG4gICAgLy9ET01cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykhIGFzIEhUTUxCb2R5RWxlbWVudDtcclxuICAgIGNvbnN0IGNvdW50cnlEZXRhaWxzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb3VudHJ5RGV0YWlsc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb3VudHJ5X19kZXRhaWxzLWNvbnRhaW5lcicpO1xyXG4gICAgY291bnRyeURldGFpbHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2VuZXJhbC13aWR0aCcpO1xyXG4gICAgY291bnRyeURldGFpbHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2VudGVyJyk7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvdW50cnlEZXRhaWxzQ29udGFpbmVyKTtcclxuXHJcbiAgICAvL1ZBUklBQkxFU1xyXG4gICAgbGV0IGN1cnJlbmNpZXM7XHJcbiAgICBsZXQgbmF0aXZlTmFtZTtcclxuICAgIGNvbnN0IGJvcmRlckNvdW50cmllcyA9IGNvdW50cnlEZXRhaWxzWzBdLmJvcmRlcnMgPyBjb3VudHJ5RGV0YWlsc1swXS5ib3JkZXJzLm1hcChjb3VudHJ5ID0+IGdldENvdW50cnlJU08yKGNvdW50cnkpKSA6IFtdO1xyXG4gICAgbGV0IHJlZ2lvbk5hbWVzID0gbmV3IEludGwuRGlzcGxheU5hbWVzKFsnZW4nXSwge3R5cGU6ICdyZWdpb24nfSlcclxuXHJcbiAgICAhY291bnRyeURldGFpbHNbMF0uaGFzT3duUHJvcGVydHkoJ2N1cnJlbmNpZXMnKSA/IGN1cnJlbmNpZXMgPSBbJ05vIGF2YWlsYWJsZSBjdXJyZW5jeS4nXSA6IGN1cnJlbmNpZXMgPSAoT2JqZWN0LnZhbHVlcyhjb3VudHJ5RGV0YWlsc1swXS5jdXJyZW5jaWVzKSkubWFwKGN1cnJlbmN5VHlwZSA9PiBjdXJyZW5jeVR5cGUubmFtZSk7XHJcbiAgICAhY291bnRyeURldGFpbHNbMF0uaGFzT3duUHJvcGVydHkoJ25hdGl2ZU5hbWUnKSA/IG5hdGl2ZU5hbWUgPSBbJ05vIG5hdGl2ZSBuYW1lIGF2YWlsYWJsZS4nXSA6IG5hdGl2ZU5hbWUgPSAoT2JqZWN0LnZhbHVlcyhjb3VudHJ5RGV0YWlsc1swXS5uYW1lLm5hdGl2ZU5hbWUpKS5tYXAobmFtZSA9PiBuYW1lLmNvbW1vbik7XHJcblxyXG4gICAgY29uc3QgYWRkQm9yZGVyQ291bnRyaWVzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvcmRlckNvdW50cmllc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3JkZXJpbmctY291bnRyeV9fY29udGFpbmVyJykhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoYm9yZGVyQ291bnRyaWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBib3JkZXJDb3VudHJpZXNDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJvcmRlcmluZy1jb3VudHJ5LS1ub3QtZm91bmRcIj5UaGVyZSBhcmUgbm8gYm9yZGVyaW5nIGNvdW50cmllcyB3aXRoIHRoaXMgY291bnRyeSE8L3NwYW4+XHJcbiAgICAgICAgICAgYClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJvcmRlckNvdW50cmllcy5mb3JFYWNoKChjb3VudHJ5LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGJvcmRlckNvdW50cmllc0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuICAgICAgICAgICAgICAgICR7aSA8IDMgPyAoY291bnRyeSA/IGA8c3BhbiBjbGFzcz1cImJvcmRlcmluZy1jb3VudHJ5XCI+JHtyZWdpb25OYW1lcy5vZihjb3VudHJ5KX08L3NwYW4+YCA6IGBgKSA6IFwiXCJ9XHJcbiAgICAgICAgICAgYClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvdW50cnlEZXRhaWxzQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyX19yZXR1cm4tYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25fX3JldHVyblwiPiZsYXJyOyBCYWNrPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lcl9fY291bnRyeS1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJfX2NvdW50cnktZmxhZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2NvdW50cnlEZXRhaWxzWzBdLmZsYWdzLnBuZ31cIiBhbHQ9XCJDb3VudHJ5IGZsYWdcIiBjbGFzcz1cImNvdW50cnktZmxhZ1wiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lcl9fY291bnRyeS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJoZWFkaW5nLXNlY29uZGFyeVwiPiR7Y291bnRyeURldGFpbHNbMF0ubmFtZS5jb21tb259PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudHJ5LWluZm9fX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeS1pbmZvX19pdGVtXCI+PHN0cm9uZz5OYXRpdmUgbmFtZTogPC9zdHJvbmc+JHtuYXRpdmVOYW1lID8gbmF0aXZlTmFtZS5hdCgtMSkgOiBuYXRpdmVOYW1lWzBdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnktaW5mb19faXRlbVwiPjxzdHJvbmc+UG9wdWxhdGlvbjogPC9zdHJvbmc+JHtjb3VudHJ5RGV0YWlsc1swXS5wb3B1bGF0aW9uLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnktaW5mb19faXRlbVwiPjxzdHJvbmc+UmVnaW9uOiA8L3N0cm9uZz4ke2NvdW50cnlEZXRhaWxzWzBdLnJlZ2lvbiA/IGNvdW50cnlEZXRhaWxzWzBdLnJlZ2lvbiA6ICdObyByZWdpb24gYXZhaWxhYmxlLid9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeS1pbmZvX19pdGVtXCI+PHN0cm9uZz5TdWIgUmVnaW9uOiA8L3N0cm9uZz4ke2NvdW50cnlEZXRhaWxzWzBdLnN1YnJlZ2lvbiA/IGNvdW50cnlEZXRhaWxzWzBdLnN1YnJlZ2lvbiA6ICdObyBzdWIgcmVnaW9uIGF2YWlsYWJsZS4nfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnktaW5mb19faXRlbVwiPjxzdHJvbmc+Q2FwaXRhbDogPC9zdHJvbmc+JHtjb3VudHJ5RGV0YWlsc1swXS5jYXBpdGFsID8gY291bnRyeURldGFpbHNbMF0uY2FwaXRhbCA6ICdObyBjYXBpdGFsIGF2YWlsYWJsZS4nfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY291bnRyeS1pbmZvX19pdGVtXCI+PHN0cm9uZz5Ub3AgTGV2ZWwgRG9tYWluOiA8L3N0cm9uZz4ke2NvdW50cnlEZXRhaWxzWzBdLnRsZH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb3VudHJ5LWluZm9fX2l0ZW1cIj48c3Ryb25nPkN1cnJlbmNpZXM6IDwvc3Ryb25nPiR7Y3VycmVuY2llcy5sZW5ndGggPT09IDEgPyBjdXJyZW5jaWVzWzBdIDogY3VycmVuY2llcy5qb2luKCcsICcpfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvdW50cnktaW5mb19faXRlbVwiPjxzdHJvbmc+TGFuZ3VhZ2VzOiA8L3N0cm9uZz4ke2NvdW50cnlEZXRhaWxzWzBdLmhhc093blByb3BlcnR5KCdsYW5ndWFnZXMnKSA/IE9iamVjdC52YWx1ZXMoY291bnRyeURldGFpbHNbMF0ubGFuZ3VhZ2VzKS50b1N0cmluZygpLnJlcGxhY2VBbGwoJywnLCAnLCAnKSA6ICdObyBsYW5ndWFnZSBhdmFpbGFibGUuJ308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJfX2JvcmRlci1jb3VudHJpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImJvcmRlci1jb3VudHJpZXNfX3RleHRcIj48c3Ryb25nPkJvcmRlciBjb3VudHJpZXM6IDwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyaW5nLWNvdW50cnlfX2NvbnRhaW5lclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYClcclxuICAgIGFkZEJvcmRlckNvdW50cmllcygpO1xyXG4gICAgY2xvc2VDb3VudHJ5RGV0YWlscygpO1xyXG59XHJcblxyXG5jb25zdCBmZXRjaENvdW50cnlEZXRhaWxzID0gYXN5bmMgKG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdERldGFpbHMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xL25hbWUvJHtuYW1lfWApXHJcbiAgICBjb25zdCBjb3VudHJ5RGF0YSA9IGF3YWl0IHJlcXVlc3REZXRhaWxzLmpzb24oKVxyXG4gICAgcmVuZGVyQ291bnRyeURldGFpbHMoY291bnRyeURhdGEpO1xyXG59XHJcblxyXG5cclxuY29uc3QgZ2V0Q291bnRyeURldGFpbHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb3VudHJ5RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KCcuY291bnRyeV9fZGV0YWlscycpITtcclxuICAgIGNvbnN0IGNvdW50cmllc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRyaWVzX19zZWN0aW9uJykhIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgaW5wdXRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0c19fY29udGFpbmVyJykhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuXHJcbiAgICBjb3VudHJ5RGV0YWlscy5mb3JFYWNoKGNvdW50cnkgPT4ge1xyXG4gICAgICAgIGNvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvdW50cmllc1NlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgaW5wdXRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvdW50cnkuZmlyc3RFbGVtZW50Q2hpbGQpXHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBmZXRjaENvdW50cnlEZXRhaWxzKGNvdW50cnkuZmlyc3RFbGVtZW50Q2hpbGQhLmRhdGFzZXQub2ZmaWNpYWwpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0iLCJpbXBvcnQgeyBJc29LZXlzTW9kZWwgfSBmcm9tIFwiLi9tb2RlbHMvaXNvLWtleXMubW9kZWxcIjtcclxuXHJcbmNvbnN0IGNvdW50cnlJU09NYXBwaW5nOiBSZWNvcmQ8SXNvS2V5c01vZGVsIHwgc3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gICAgQUZHOiBcIkFGXCIsXHJcbiAgICBBTEE6IFwiQVhcIixcclxuICAgIEFMQjogXCJBTFwiLFxyXG4gICAgRFpBOiBcIkRaXCIsXHJcbiAgICBBU006IFwiQVNcIixcclxuICAgIEFORDogXCJBRFwiLFxyXG4gICAgQUdPOiBcIkFPXCIsXHJcbiAgICBBSUE6IFwiQUlcIixcclxuICAgIEFUQTogXCJBUVwiLFxyXG4gICAgQVRHOiBcIkFHXCIsXHJcbiAgICBBUkc6IFwiQVJcIixcclxuICAgIEFSTTogXCJBTVwiLFxyXG4gICAgQUJXOiBcIkFXXCIsXHJcbiAgICBBVVM6IFwiQVVcIixcclxuICAgIEFVVDogXCJBVFwiLFxyXG4gICAgQVpFOiBcIkFaXCIsXHJcbiAgICBCSFM6IFwiQlNcIixcclxuICAgIEJIUjogXCJCSFwiLFxyXG4gICAgQkdEOiBcIkJEXCIsXHJcbiAgICBCUkI6IFwiQkJcIixcclxuICAgIEJMUjogXCJCWVwiLFxyXG4gICAgQkVMOiBcIkJFXCIsXHJcbiAgICBCTFo6IFwiQlpcIixcclxuICAgIEJFTjogXCJCSlwiLFxyXG4gICAgQk1VOiBcIkJNXCIsXHJcbiAgICBCVE46IFwiQlRcIixcclxuICAgIEJPTDogXCJCT1wiLFxyXG4gICAgQklIOiBcIkJBXCIsXHJcbiAgICBCV0E6IFwiQldcIixcclxuICAgIEJWVDogXCJCVlwiLFxyXG4gICAgQlJBOiBcIkJSXCIsXHJcbiAgICBWR0I6IFwiVkdcIixcclxuICAgIElPVDogXCJJT1wiLFxyXG4gICAgQlJOOiBcIkJOXCIsXHJcbiAgICBCR1I6IFwiQkdcIixcclxuICAgIEJGQTogXCJCRlwiLFxyXG4gICAgQkRJOiBcIkJJXCIsXHJcbiAgICBLSE06IFwiS0hcIixcclxuICAgIENNUjogXCJDTVwiLFxyXG4gICAgQ0FOOiBcIkNBXCIsXHJcbiAgICBDUFY6IFwiQ1ZcIixcclxuICAgIENZTTogXCJLWVwiLFxyXG4gICAgQ0FGOiBcIkNGXCIsXHJcbiAgICBUQ0Q6IFwiVERcIixcclxuICAgIENITDogXCJDTFwiLFxyXG4gICAgQ0hOOiBcIkNOXCIsXHJcbiAgICBIS0c6IFwiSEtcIixcclxuICAgIE1BQzogXCJNT1wiLFxyXG4gICAgQ1hSOiBcIkNYXCIsXHJcbiAgICBDQ0s6IFwiQ0NcIixcclxuICAgIENPTDogXCJDT1wiLFxyXG4gICAgQ09NOiBcIktNXCIsXHJcbiAgICBDT0c6IFwiQ0dcIixcclxuICAgIENPRDogXCJDRFwiLFxyXG4gICAgQ09LOiBcIkNLXCIsXHJcbiAgICBDUkk6IFwiQ1JcIixcclxuICAgIENJVjogXCJDSVwiLFxyXG4gICAgSFJWOiBcIkhSXCIsXHJcbiAgICBDVUI6IFwiQ1VcIixcclxuICAgIENZUDogXCJDWVwiLFxyXG4gICAgQ1pFOiBcIkNaXCIsXHJcbiAgICBETks6IFwiREtcIixcclxuICAgIERKSTogXCJESlwiLFxyXG4gICAgRE1BOiBcIkRNXCIsXHJcbiAgICBET006IFwiRE9cIixcclxuICAgIEVDVTogXCJFQ1wiLFxyXG4gICAgRUdZOiBcIkVHXCIsXHJcbiAgICBTTFY6IFwiU1ZcIixcclxuICAgIEdOUTogXCJHUVwiLFxyXG4gICAgRVJJOiBcIkVSXCIsXHJcbiAgICBFU1Q6IFwiRUVcIixcclxuICAgIEVUSDogXCJFVFwiLFxyXG4gICAgRkxLOiBcIkZLXCIsXHJcbiAgICBGUk86IFwiRk9cIixcclxuICAgIEZKSTogXCJGSlwiLFxyXG4gICAgRklOOiBcIkZJXCIsXHJcbiAgICBGUkE6IFwiRlJcIixcclxuICAgIEdVRjogXCJHRlwiLFxyXG4gICAgUFlGOiBcIlBGXCIsXHJcbiAgICBBVEY6IFwiVEZcIixcclxuICAgIEdBQjogXCJHQVwiLFxyXG4gICAgR01COiBcIkdNXCIsXHJcbiAgICBHRU86IFwiR0VcIixcclxuICAgIERFVTogXCJERVwiLFxyXG4gICAgR0hBOiBcIkdIXCIsXHJcbiAgICBHSUI6IFwiR0lcIixcclxuICAgIEdSQzogXCJHUlwiLFxyXG4gICAgR1JMOiBcIkdMXCIsXHJcbiAgICBHUkQ6IFwiR0RcIixcclxuICAgIEdMUDogXCJHUFwiLFxyXG4gICAgR1VNOiBcIkdVXCIsXHJcbiAgICBHVE06IFwiR1RcIixcclxuICAgIEdHWTogXCJHR1wiLFxyXG4gICAgR0lOOiBcIkdOXCIsXHJcbiAgICBHTkI6IFwiR1dcIixcclxuICAgIEdVWTogXCJHWVwiLFxyXG4gICAgSFRJOiBcIkhUXCIsXHJcbiAgICBITUQ6IFwiSE1cIixcclxuICAgIFZBVDogXCJWQVwiLFxyXG4gICAgSE5EOiBcIkhOXCIsXHJcbiAgICBIVU46IFwiSFVcIixcclxuICAgIElTTDogXCJJU1wiLFxyXG4gICAgSU5EOiBcIklOXCIsXHJcbiAgICBJRE46IFwiSURcIixcclxuICAgIElSTjogXCJJUlwiLFxyXG4gICAgSVJROiBcIklRXCIsXHJcbiAgICBJUkw6IFwiSUVcIixcclxuICAgIElNTjogXCJJTVwiLFxyXG4gICAgSVNSOiBcIklMXCIsXHJcbiAgICBJVEE6IFwiSVRcIixcclxuICAgIEpBTTogXCJKTVwiLFxyXG4gICAgSlBOOiBcIkpQXCIsXHJcbiAgICBKRVk6IFwiSkVcIixcclxuICAgIEpPUjogXCJKT1wiLFxyXG4gICAgS0FaOiBcIktaXCIsXHJcbiAgICBLRU46IFwiS0VcIixcclxuICAgIEtJUjogXCJLSVwiLFxyXG4gICAgUFJLOiBcIktQXCIsXHJcbiAgICBLT1I6IFwiS1JcIixcclxuICAgIEtXVDogXCJLV1wiLFxyXG4gICAgS0daOiBcIktHXCIsXHJcbiAgICBMQU86IFwiTEFcIixcclxuICAgIExWQTogXCJMVlwiLFxyXG4gICAgTEJOOiBcIkxCXCIsXHJcbiAgICBMU086IFwiTFNcIixcclxuICAgIExCUjogXCJMUlwiLFxyXG4gICAgTEJZOiBcIkxZXCIsXHJcbiAgICBMSUU6IFwiTElcIixcclxuICAgIExUVTogXCJMVFwiLFxyXG4gICAgTFVYOiBcIkxVXCIsXHJcbiAgICBNS0Q6IFwiTUtcIixcclxuICAgIE1ERzogXCJNR1wiLFxyXG4gICAgTVdJOiBcIk1XXCIsXHJcbiAgICBNWVM6IFwiTVlcIixcclxuICAgIE1EVjogXCJNVlwiLFxyXG4gICAgTUxJOiBcIk1MXCIsXHJcbiAgICBNTFQ6IFwiTVRcIixcclxuICAgIE1ITDogXCJNSFwiLFxyXG4gICAgTVRROiBcIk1RXCIsXHJcbiAgICBNUlQ6IFwiTVJcIixcclxuICAgIE1VUzogXCJNVVwiLFxyXG4gICAgTVlUOiBcIllUXCIsXHJcbiAgICBNRVg6IFwiTVhcIixcclxuICAgIEZTTTogXCJGTVwiLFxyXG4gICAgTURBOiBcIk1EXCIsXHJcbiAgICBNQ086IFwiTUNcIixcclxuICAgIE1ORzogXCJNTlwiLFxyXG4gICAgTU5FOiBcIk1FXCIsXHJcbiAgICBNU1I6IFwiTVNcIixcclxuICAgIE1BUjogXCJNQVwiLFxyXG4gICAgTU9aOiBcIk1aXCIsXHJcbiAgICBNTVI6IFwiTU1cIixcclxuICAgIE5BTTogXCJOQVwiLFxyXG4gICAgTlJVOiBcIk5SXCIsXHJcbiAgICBOUEw6IFwiTlBcIixcclxuICAgIE5MRDogXCJOTFwiLFxyXG4gICAgQU5UOiBcIkFOXCIsXHJcbiAgICBOQ0w6IFwiTkNcIixcclxuICAgIE5aTDogXCJOWlwiLFxyXG4gICAgTklDOiBcIk5JXCIsXHJcbiAgICBORVI6IFwiTkVcIixcclxuICAgIE5HQTogXCJOR1wiLFxyXG4gICAgTklVOiBcIk5VXCIsXHJcbiAgICBORks6IFwiTkZcIixcclxuICAgIE1OUDogXCJNUFwiLFxyXG4gICAgTk9SOiBcIk5PXCIsXHJcbiAgICBPTU46IFwiT01cIixcclxuICAgIFBBSzogXCJQS1wiLFxyXG4gICAgUExXOiBcIlBXXCIsXHJcbiAgICBQU0U6IFwiUFNcIixcclxuICAgIFBBTjogXCJQQVwiLFxyXG4gICAgUE5HOiBcIlBHXCIsXHJcbiAgICBQUlk6IFwiUFlcIixcclxuICAgIFBFUjogXCJQRVwiLFxyXG4gICAgUEhMOiBcIlBIXCIsXHJcbiAgICBQQ046IFwiUE5cIixcclxuICAgIFBPTDogXCJQTFwiLFxyXG4gICAgUFJUOiBcIlBUXCIsXHJcbiAgICBQUkk6IFwiUFJcIixcclxuICAgIFFBVDogXCJRQVwiLFxyXG4gICAgUkVVOiBcIlJFXCIsXHJcbiAgICBST1U6IFwiUk9cIixcclxuICAgIFJVUzogXCJSVVwiLFxyXG4gICAgUldBOiBcIlJXXCIsXHJcbiAgICBCTE06IFwiQkxcIixcclxuICAgIFNITjogXCJTSFwiLFxyXG4gICAgS05BOiBcIktOXCIsXHJcbiAgICBMQ0E6IFwiTENcIixcclxuICAgIE1BRjogXCJNRlwiLFxyXG4gICAgU1BNOiBcIlBNXCIsXHJcbiAgICBWQ1Q6IFwiVkNcIixcclxuICAgIFdTTTogXCJXU1wiLFxyXG4gICAgU01SOiBcIlNNXCIsXHJcbiAgICBTVFA6IFwiU1RcIixcclxuICAgIFNBVTogXCJTQVwiLFxyXG4gICAgU0VOOiBcIlNOXCIsXHJcbiAgICBTUkI6IFwiUlNcIixcclxuICAgIFNZQzogXCJTQ1wiLFxyXG4gICAgU0xFOiBcIlNMXCIsXHJcbiAgICBTR1A6IFwiU0dcIixcclxuICAgIFNWSzogXCJTS1wiLFxyXG4gICAgU1ZOOiBcIlNJXCIsXHJcbiAgICBTTEI6IFwiU0JcIixcclxuICAgIFNPTTogXCJTT1wiLFxyXG4gICAgWkFGOiBcIlpBXCIsXHJcbiAgICBTR1M6IFwiR1NcIixcclxuICAgIFNTRDogXCJTU1wiLFxyXG4gICAgRVNQOiBcIkVTXCIsXHJcbiAgICBMS0E6IFwiTEtcIixcclxuICAgIFNETjogXCJTRFwiLFxyXG4gICAgU1VSOiBcIlNSXCIsXHJcbiAgICBTSk06IFwiU0pcIixcclxuICAgIFNXWjogXCJTWlwiLFxyXG4gICAgU1dFOiBcIlNFXCIsXHJcbiAgICBDSEU6IFwiQ0hcIixcclxuICAgIFNZUjogXCJTWVwiLFxyXG4gICAgVFdOOiBcIlRXXCIsXHJcbiAgICBUSks6IFwiVEpcIixcclxuICAgIFRaQTogXCJUWlwiLFxyXG4gICAgVEhBOiBcIlRIXCIsXHJcbiAgICBUTFM6IFwiVExcIixcclxuICAgIFRHTzogXCJUR1wiLFxyXG4gICAgVEtMOiBcIlRLXCIsXHJcbiAgICBUT046IFwiVE9cIixcclxuICAgIFRUTzogXCJUVFwiLFxyXG4gICAgVFVOOiBcIlROXCIsXHJcbiAgICBUVVI6IFwiVFJcIixcclxuICAgIFRLTTogXCJUTVwiLFxyXG4gICAgVENBOiBcIlRDXCIsXHJcbiAgICBUVVY6IFwiVFZcIixcclxuICAgIFVHQTogXCJVR1wiLFxyXG4gICAgVUtSOiBcIlVBXCIsXHJcbiAgICBBUkU6IFwiQUVcIixcclxuICAgIEdCUjogXCJHQlwiLFxyXG4gICAgVVNBOiBcIlVTXCIsXHJcbiAgICBVTUk6IFwiVU1cIixcclxuICAgIFVSWTogXCJVWVwiLFxyXG4gICAgVVpCOiBcIlVaXCIsXHJcbiAgICBWVVQ6IFwiVlVcIixcclxuICAgIFZFTjogXCJWRVwiLFxyXG4gICAgVk5NOiBcIlZOXCIsXHJcbiAgICBWSVI6IFwiVklcIixcclxuICAgIFdMRjogXCJXRlwiLFxyXG4gICAgRVNIOiBcIkVIXCIsXHJcbiAgICBZRU06IFwiWUVcIixcclxuICAgIFpNQjogXCJaTVwiLFxyXG4gICAgWldFOiBcIlpXXCIsXHJcbiAgICBYS1g6IFwiWEtcIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q291bnRyeUlTTzIgPSAoY291bnRyeUNvZGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gY291bnRyeUlTT01hcHBpbmdbPHN0cmluZz5jb3VudHJ5Q29kZV07XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9