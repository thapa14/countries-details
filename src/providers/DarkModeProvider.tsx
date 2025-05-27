import {createContext, type Dispatch, type ReactNode, type SetStateAction, useEffect, useState} from "react";

interface DarkModeContext {
    darkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const DarkModeContext = createContext<DarkModeContext | null>(null);

const getDefaultTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        return true;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default function DarkModeProvider({children}: { children: ReactNode }) {
    const [darkMode, setDarkMode] = useState(getDefaultTheme());

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('dark', darkMode);
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);


    return <DarkModeContext.Provider value={{darkMode, setDarkMode}}>{children}</DarkModeContext.Provider>;
}

