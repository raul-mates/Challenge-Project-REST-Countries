export interface CountryModel {
    name: CountryName;
    tld: string[];
    cca2?: string;
    ccn3?: string;
    cca3?: string;
    cioc?: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Record<string, CountryCurrency>;
    idd: Idd;
    capital?: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Record<string, string>;
    translations: Record<string, NativeNameObject>;
    latlng: [number, number];
    landlocked: boolean;
    area: number;
    demonyms: Record<string, Record<string, string>>;
    flag: string;
    maps: CountryMaps;
    population: number;
    gini: Record<string, number>;
    fifa: string;
    car: CountryCarModel;
    timezones: string[];
    continents: string[];
    flags: ImageFormats;
    coatOfArms: ImageFormats;
    startOfWeek: string;
    capitalInfo: CountryCapitalInfoModel | Record<string, unknown>;
    postalCode: CountryPostalCodeModel;
}

export interface CountryCapitalInfoModel {
    latlng: string[];
}

export interface CountryName {
    common: string;
    official: string;
    nativeName: Record<string, NativeNameObject>;
}

export interface CountryCarModel {
    signs: string[];
    side: string;
}

export interface CountryPostalCodeModel {
    format: string;
    regex: string;
}

export interface NativeNameObject {
    official: string;
    common: string;
}

export interface CountryMaps {
    googleMaps?: string;
    openStreetMaps?: string;
}

export interface Idd {
    root: string;
    suffixes: string[];
}

export interface CountryCurrency {
    name: string;
    symbol: string;
}

export interface ImageFormats {
    png: string;
    svg: string;
}