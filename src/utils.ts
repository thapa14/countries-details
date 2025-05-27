// function to filter counties  by search text and region
import type {Country} from "./types/CountriesTypesCheck.ts";

export const filterFunction = (countries: Country[] | null, searchValue: string = "", region: string = ""): Country[] => {
    if (!countries) {
        return [];
    }
    return countries.filter(country => {
        const countryNameMatch = !searchValue || country.name.toLowerCase().includes(searchValue.trim().toLowerCase());

        const regionMatch = !region || country.region === region;

        return countryNameMatch && regionMatch;
    })
}

export const getAllRegions = (countries: Country[]) => {
    const allRegions = countries.map((country: Country) => country.region);

    return [...new Set(allRegions)];
}
