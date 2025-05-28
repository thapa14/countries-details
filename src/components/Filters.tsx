import type {ChangeEvent} from "react";
import useCountry from "../providers/country/useCountry.ts";

export default function Filters() {
    const {region, setRegion, searchValue, setSearchValue, regionList} = useCountry();

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    }

    const onRegionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setRegion(e.target.value);
    }
    return (
            <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center gap-8 md:gap-2 ">
                <div className="flex justify-start items-center bg-surface-light dark:bg-surface-dark md:w-1/2 w-full md:max-w-120 md:min-w-60 shadow-sm dark:shadow-lg">
                    <div className="py-2 pl-4 pr-1 text-text-light dark:text-text-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="currentColor"
                                  d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"></path>
                        </svg>
                    </div>
                    <input placeholder="Search for a country..."
                           className="focus:outline-none focus:ring-0 focus:border-0 w-full p-2 text-text-light dark:text-text-dark"
                           value={searchValue}
                           onChange={onInputChange}
                    />
                </div>
                <select name="cars" id="cars"
                        className="bg-surface-light px-8 py-2 shadow-sm border-none focus:outline-none focus:ring-0 focus:border-0 dark:shadow-lg  dark:bg-surface-dark text-text-light dark:text-text-dark"
                        value={region}
                        onChange={onRegionChange}
                >
                    <option value="">Select a region</option>
                    {regionList.map((regionVal, index) => (
                            <option key={index}>{regionVal}</option>
                    ))}
                </select>
            </div>
    )
}