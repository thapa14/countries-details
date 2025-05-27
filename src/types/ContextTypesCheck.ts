import type {Country} from "./CountriesTypesCheck.ts";

interface CountryBaseType {
    countryData: Country[] | null
    filteredCountryData: Country[] | []
    selectedCountry: Country | null;
    searchValue?: string;
    region?: string;
    regionList : string[]
}

export type CountryDataType = CountryBaseType

export interface CountryContextType extends CountryBaseType {
    setSelectedCountry: (country: Country | null) => void;
    fetchCountries: (country: Country[]) => void;
    setSearchValue: (value: string) => void;
    setRegion: (value: string) => void;
}


export type ActionType =
    | { type: "countryData", payload: Country[] }
    | { type: "filteredCountryData", payload: Country[] }
    | { type: "selectedCountry", payload: Country | null }
    | { type: "searchValue", payload: string | undefined }
    | { type: "region", payload: string | undefined }
    | { type: "regionList", payload: string[] }
