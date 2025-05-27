import {useContext} from "react";
import {DarkModeContext} from "./DarkModeProvider.tsx";

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if(!context){
        throw new Error("useDarkMode must be used within DarkModeProvider");
    }

    return context;
}