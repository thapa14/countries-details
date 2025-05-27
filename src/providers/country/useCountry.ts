import {useContext} from "react";
import {CountryContext} from "./CountryProvider.tsx";

export default function useCountry() {
    const context = useContext(CountryContext);
    if(!context){
        throw new Error("useCountry must be used within DarkModeProvider");
    }
    return context;
}