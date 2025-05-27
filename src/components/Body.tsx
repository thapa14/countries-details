import Filters from "./Filters.tsx";
import MainBody from "./MainBody.tsx";
import {useEffect} from "react";

import data from "../../data.json"
import useCountry from "../providers/country/useCountry.ts";
import DetailsPage from "./DetailsPage.tsx";

export default function Body() {

    const {selectedCountry, fetchCountries} = useCountry();

    console.log(selectedCountry)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetchCountries(data)
        }, 1000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [fetchCountries])

    return <div className="bg-bg-light dark:bg-bg-dark p-6 md:p-12">
        {selectedCountry ?
                <DetailsPage/> :
                <>
                    <Filters/>
                    <MainBody/>
                </>
        }
    </div>
}
