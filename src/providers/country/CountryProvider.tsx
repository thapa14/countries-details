import {createContext, type ReactNode, useCallback, useMemo, useReducer} from "react";
import type {Country} from "../../types/CountriesTypesCheck.ts";
import type {ActionType, CountryContextType, CountryDataType} from "../../types/ContextTypesCheck.ts";
import {filterFunction, getAllRegions} from "../../utils.ts";

// eslint-disable-next-line react-refresh/only-export-components
export const CountryContext = createContext<CountryContextType | null>(null)

const initialState: CountryDataType = {
    countryData: null,
    filteredCountryData: [],
    selectedCountry: null,
    searchValue: "",
    region: "",
    regionList: []
};

const reducer = (state: CountryDataType, action: ActionType) => {
    if (action.type === "countryData") {
        return {...state, countryData: action.payload};
    } else if (action.type === "searchValue") {
        return {...state, searchValue: action.payload}
    } else if (action.type === "region") {
        return {...state, region: action.payload}
    } else if (action.type === "filteredCountryData") {
        return {...state, filteredCountryData: action.payload}
    } else if (action.type === "selectedCountry") {
        return {...state, selectedCountry: action.payload}
    } else if (action.type === "regionList") {
        return {...state, regionList: action.payload}
    }
    return initialState
}

export default function CountryProvider({children}: { children: ReactNode }) {

    const [country, dispatch] = useReducer(reducer, initialState);

    // function to fetch the country data
    const fetchCountries = useCallback((countries: Country[]): void => {
        dispatch({type: "countryData", payload: countries});
        dispatch({type: "filteredCountryData", payload: countries});
        dispatch({type: "regionList", payload: getAllRegions(countries)})
    }, [])


    // function to set the search value in state
    const setSearchValue = useCallback((searchWord: string) => {
        dispatch({type: "searchValue", payload: searchWord});
        dispatch({
            type: "filteredCountryData",
            payload: filterFunction(country.countryData, searchWord, country?.region)
        });
    }, [country.countryData, country?.region])

    // function to set the region in state
    const setRegion = useCallback((region: string) => {
        dispatch({type: "region", payload: region});
        dispatch({
            type: "filteredCountryData",
            payload: filterFunction(country.countryData, country?.searchValue, region)
        });
    }, [country.countryData, country?.searchValue]);

    // function to select a country
    const setSelectedCountry = useCallback((selectedCountry: Country | null) => {
        dispatch({type: "selectedCountry", payload: selectedCountry});
    }, [])

    const providerState = useMemo(() => ({
        countryData: country.countryData,
        filteredCountryData: country.filteredCountryData,
        selectedCountry: country.selectedCountry,
        setSelectedCountry: setSelectedCountry,
        fetchCountries,
        searchValue: country.searchValue,
        region: country.region,
        regionList: country.regionList,
        setSearchValue,
        setRegion,

    }), [
        country.countryData,
        country.filteredCountryData,
        country.selectedCountry,
        country.searchValue,
        country.region,
        country.regionList,
        setSelectedCountry,
        fetchCountries,
        setSearchValue,
        setRegion
    ])

    return (
            <CountryContext.Provider value={providerState}>
                {children}
            </CountryContext.Provider>
    )
}