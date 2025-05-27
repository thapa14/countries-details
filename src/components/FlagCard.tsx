import type {Country} from "../types/CountriesTypesCheck.ts";
import useCountry from "../providers/country/useCountry.ts";

export default function FlagCard({data}: { data: Country }) {
    const {setSelectedCountry} = useCountry()

    return (
            <div className="min-w-[120px] w-full max-w-[260px] h-75 shadow-sm dark:shadow-lg bg-surface-light dark:bg-surface-dark rounded-lg cursor-pointer"
                 onClick={() => {
                     setSelectedCountry(data)
                 }}
            >
                <div className="flag w-full h-1/2">
                    <img src={data.flag} alt="flag" className="w-100 h-full object-cover rounded-t-lg "/>
                </div>
                <div className="details p-2 dark:text-text-dark">
                    <h2 className="text-xl mb-4">
                        {data.name}
                    </h2>

                    <div className="other-details">
                        <div className="flex items-center gap-2 dark:text-text-dark">
                            <h6 className="text-base">Population:</h6>
                            <p className="text-sm text-input-light font-medium">{data.population}</p>
                        </div>
                        <div className="flex items-center gap-2 dark:text-text-dark">
                            <h6 className="text-base">Region:</h6>
                            <p className="text-sm text-input-light font-medium">{data.region}</p>
                        </div>
                        <div className="flex items-center gap-2 dark:text-text-dark">
                            <h6 className="text-base">Capital:</h6>
                            <p className="text-sm text-input-light font-medium">{data.capital}</p>
                        </div>
                    </div>

                </div>
            </div>
    )
}