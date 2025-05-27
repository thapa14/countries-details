import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import DarkModeProvider from "./providers/DarkModeProvider.tsx";
import CountryProvider from "./providers/country/CountryProvider.tsx";

createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <DarkModeProvider>
                <CountryProvider>
                    <App/>
                </CountryProvider>
            </DarkModeProvider>
        </StrictMode>,
)
