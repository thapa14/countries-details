import FlagCard from "./FlagCard.tsx";
import type {Country} from "../types/CountriesTypesCheck.ts";
import useCountry from "../providers/country/useCountry.ts";

export default function MainBody() {
    const {filteredCountryData} = useCountry();
    return (
            <div className="p-6 md:p-0 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-12 md:my-16 justify-items-center gap-y-12">
                {filteredCountryData?.map((val: Country, index) =>
                        <FlagCard key={val.name + val.demonym + index} data={val}/>)
                }
            </div>

    )
}