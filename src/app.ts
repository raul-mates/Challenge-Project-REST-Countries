import { CountryModel } from "./models/country.model";

export const countryISOMapping = {
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
}

//@ts-ignore
export const getCountryISO2 = (countryCode) => {
    //@ts-ignore
    return countryISOMapping[countryCode];
}

const genericFetch = async <T>(url: URL | RequestInfo, init?: RequestInit): Promise<T> => {
    const fetchedData: Response = await fetch(url, init);
    return (await fetchedData.json()) as T;
}

const fetchCountries = async (): Promise<void> => {
    const data = await genericFetch<CountryModel[]>('https://restcountries.com/v3.1/all');
    renderCountries(data);
    filterByRegion();
    toggleThemeMode();
    searchInputHandler();
    getCountryDetails();
}

fetchCountries();

const renderCountries = (countries: CountryModel[]) => {
    const countrySection = document.querySelector(".countries__section") as HTMLElement;
    countries.forEach((country) => {
        countrySection.insertAdjacentHTML('beforeend', `
        <a href="#" class="country__details">
            <div class="country__container" data-region="${country.region}" data-name="${country.name.common}" data-name-official="${country.name.official}">
                <img src="${country.flags.png}" alt="${country.flag}" class="country__flag" />
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
};


const searchInputHandler = () => {
    const searchInput = document.querySelector('.search-input')! as HTMLInputElement;
    const countryContainer = [...document.querySelectorAll<HTMLDivElement>(".country__container")]!;
    const selectRegion = document.querySelector('.region-input')! as HTMLSelectElement;

    searchInput.addEventListener('input', (e) => {
        e.preventDefault();
        countryContainer.forEach(country => {
            if (searchInput.value.length === 0 && selectRegion.value === '') {
                country.parentElement!.classList.remove('hidden');
            }
            if (searchInput.value.length === 0 && country.dataset.region === selectRegion.value) {
                country.parentElement!.classList.remove('hidden');
            }
            if (!country.dataset.name!.toLowerCase().startsWith(`${searchInput.value.toLowerCase()}`)) {
                country.parentElement!.classList.add('hidden');
            } else if (country.dataset.name!.toLowerCase().startsWith(`${searchInput.value.toLowerCase()}`) && country.dataset.region === selectRegion.value || selectRegion.value === '') {
                country.parentElement!.classList.remove('hidden');
            }
        })
    })
}


const filterByRegion = () => {
    const countryContainer = [...document.querySelectorAll<HTMLDivElement>(".country__container")]!;
    const selectRegion = document.querySelector('.region-input')! as HTMLSelectElement;
    selectRegion.addEventListener('change', () => {
        let regionSelected = selectRegion.value;
        countryContainer.forEach(country => {
            if (country.dataset.region !== regionSelected) {
                country.parentElement!.classList.add('hidden');
            } else {
                country.parentElement!.classList.remove('hidden')
            }
            if (regionSelected === '') {
                country.parentElement!.classList.remove('hidden');
            }
        })
    })
}

const toggleThemeMode = (): void => {
    //DOM Elements
    const checkbox = document.getElementById('theme-mode__checkbox')! as HTMLInputElement;
    const header = document.querySelector('.header')! as HTMLElement;
    const body = document.querySelector('body')! as HTMLBodyElement;
    const searchInput = document.querySelector('.search-input')! as HTMLInputElement;
    const regionInput = document.querySelector('.region-input')! as HTMLInputElement;
    const countryDetails = document.querySelectorAll<HTMLAnchorElement>('.country__details');


    //Color variables as in SASS
    const colorDarkBlue = "hsl(209, 23%, 22%)";
    const colorVeryDarkBlue = "hsl(207, 26%, 17%)";
    const colorVeryDarkBlueText = "hsl(200, 15%, 8%)";
    const colorVeryLightGrayBackground = "hsl(0, 0%, 98%)";
    const colorWhite = "#fff";

    const darkTheme = (): void => {
        header.style.backgroundColor = colorDarkBlue;
        body.style.backgroundColor = colorVeryDarkBlue;
        body.style.color = colorWhite;
        searchInput.style.backgroundColor = colorDarkBlue;
        regionInput.style.backgroundColor = colorDarkBlue;
        if (countryDetails) {
            countryDetails.forEach(country => {
                country.style.backgroundColor = colorDarkBlue;
            })
        }
    }

    const lightTheme = (): void => {
        header.style.backgroundColor = colorWhite;
        body.style.backgroundColor = colorVeryLightGrayBackground;
        body.style.color = colorVeryDarkBlueText;
        searchInput.style.backgroundColor = colorWhite;
        regionInput.style.backgroundColor = colorWhite;
        if (countryDetails) {
            countryDetails.forEach(country => {
                country.style.backgroundColor = colorWhite;
            })
        }
    }


    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        checkbox.checked = true;
        darkTheme();
    }

    // Check event and theme toggle
    checkbox.addEventListener('change', () => {
        checkbox.checked ? darkTheme() : lightTheme();
    })
}

const closeCountryDetails = (): void => {
    const countryDetailsContainer = document.querySelector('.country__details-container')! as HTMLDivElement;
    const countriesSection = document.querySelector('.countries__section')! as HTMLElement;
    const inputsContainer = document.querySelector('.inputs__container')! as HTMLDivElement;
    const returnBtn = document.querySelector('.button__return')! as HTMLButtonElement;
    returnBtn.addEventListener('click', (e) => {
        e.preventDefault()
        countriesSection.style.display = '';
        inputsContainer.style.display = '';
        countryDetailsContainer.remove();
    })
}

//@ts-ignore
const renderCountryDetails = (countryDetails: CountryModel[]) => {
    //DOM
    const body = document.querySelector('body')! as HTMLBodyElement;
    const countryDetailsContainer = document.createElement('div');
    countryDetailsContainer.classList.add('country__details-container');
    countryDetailsContainer.classList.add('general-width');
    countryDetailsContainer.classList.add('center');
    body.appendChild(countryDetailsContainer);

    //VARIABLES
    const currencies = (Object.values(countryDetails[0].currencies)).map(currencyType => currencyType.name)
    const nativeName = (Object.values(countryDetails[0].name.nativeName)).map(name => name.common)
    const borderCountries = countryDetails[0].borders ? countryDetails[0].borders.map(country => getCountryISO2(country)) : [];
    let regionNames = new Intl.DisplayNames(['en'], {type: 'region'})


    const addBorderCountries = () => {
        const borderCountriesContainer = document.querySelector('.bordering-country__container')! as HTMLDivElement;

        if (borderCountries.length === 0) {
            borderCountriesContainer.insertAdjacentHTML('beforeend', `
                <span class="bordering-country--not-found">There are no bordering countries with this country!</span>
           `)
        }

        borderCountries.forEach(country => {
            borderCountriesContainer.insertAdjacentHTML('beforeend', `
                ${country ? `<span class="bordering-country">${regionNames.of(country)}</span>` : ``}
           `)
        })
    }

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
                        <li class="country-info__item"><strong>Native name: </strong>${nativeName.at(-1)}</li>
                        <li class="country-info__item"><strong>Population: </strong>${countryDetails[0].population.toLocaleString('en-US')}</li>
                        <li class="country-info__item"><strong>Region: </strong>${countryDetails[0].region}</li>
                        <li class="country-info__item"><strong>Sub Region: </strong>${countryDetails[0].subregion}</li>
                        <li class="country-info__item"><strong>Capital: </strong>${countryDetails[0].capital}</li>
                    </ul>
                    <ul class="country-info__list">
                        <li class="country-info__item"><strong>Top Level Domain: </strong>${countryDetails[0].tld}</li>
                        <li class="country-info__item"><strong>Currencies: </strong>${currencies.length === 1 ? currencies[0] : currencies.join(', ')}</li>
                        <li class="country-info__item"><strong>Languages: </strong>${Object.values(countryDetails[0].languages).toString().replaceAll(',', ', ')}</li>
                    </ul>
                </div>
                <div class="container__border-countries">
                    <p class="border-countries__text"><strong>Border countries: </strong></p>
                    <div class="bordering-country__container"></div>
                </div>
            </div>
        </div>
    `)
    addBorderCountries();
    closeCountryDetails();
}

const fetchCountryDetails = async (name: string) => {
    const requestDetails = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const countryData = await requestDetails.json()
    renderCountryDetails(countryData);
}


const getCountryDetails = () => {
    const countryDetails = document.querySelectorAll<HTMLAnchorElement>('.country__details')!;
    const countriesSection = document.querySelector('.countries__section')! as HTMLElement;
    const inputsContainer = document.querySelector('.inputs__container')! as HTMLDivElement;


    countryDetails.forEach(country => {
        country.addEventListener('click', () => {
            countriesSection.style.display = 'none';
            inputsContainer.style.display = 'none';
            console.log(country.firstElementChild)
            //@ts-ignore
            fetchCountryDetails(country.firstElementChild!.dataset.name)
        })
    })
}