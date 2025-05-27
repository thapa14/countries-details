export interface Translations {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa?: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
}

export interface Flags {
    svg: string;
    png: string;
}

export interface Currencies {
    code: string;
    name: string;
    symbol: string;
}

export interface Languages {
    iso639_1?: string;
    iso639_2?: string;
    name: string;
    nativeName?: string;
}

export interface RegionalBlocs {
    acronym: string;
    name: string;
    otherAcronyms?: string[];
    otherNames?: string[];
}

export interface Country {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital?: string;
    altSpellings?: string[];
    subregion: string;
    region: string;
    population: number;
    latlng?: number[];
    demonym: string;
    area?: number;
    gini?: number;
    timezones: string[];
    borders?: string[];
    nativeName: string;
    numericCode: string;
    currencies?: Currencies[];
    languages: Languages[];
    translations: Translations;
    flag: string;
    flags: Flags;
    regionalBlocs?: RegionalBlocs[];
    cioc?: string;
    independent: boolean;
}