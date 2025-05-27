import useCountry from "../providers/country/useCountry.ts";

type DetailPropsType = {
    head: string;
    detail: string | string[] | number | undefined;
}

function Detail({head, detail}: DetailPropsType) {

    return <div className="flex gap-2 items-center">
        <h6 className="text-sm font-medium ">
            {head}:
        </h6>
        <p className="text-sm text-gray-500">
            {Array.isArray(detail) ? detail.join(", ") : detail}
        </p>
    </div>
}


export default function DetailsPage() {
    const {selectedCountry, setSelectedCountry} = useCountry();

    if (!selectedCountry) return null;

    return (
            <>
                <div className="flex flex-col gap-20">
                    <button className="self-start px-9 py-1 rounded-md cursor-pointer bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark shadow-md dark:shadow-lg"
                            onClick={() => setSelectedCountry(null)}>Back
                    </button>

                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="flag w-full md:w-1/2 lg:w-2/5 ">
                            <img src={selectedCountry.flag} alt="flag"
                                 className="w-full h-auto object-contain rounded-lg"/>
                        </div>

                        <div className="flex flex-col items-start gap-4 md:w-1/2 lg:w-3/5 lg:ml-20">
                            <h2 className="text-xl inline-block">
                                {selectedCountry.name}
                            </h2>

                            <div className="flex flex-col justify-between gap-6 md:gap-4 lg:gap-6 w-full md:flex-row ">
                                <div className="flex flex-col gap-2">
                                    <Detail head="Native Name" detail={selectedCountry.nativeName}/>
                                    <Detail head="Population" detail={selectedCountry.population}/>
                                    <Detail head="Sub Region" detail={selectedCountry.subregion}/>
                                    <Detail head="Region" detail={selectedCountry.region}/>
                                    <Detail head="Capital" detail={selectedCountry.capital}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Detail head="Top Level Domain" detail={selectedCountry.topLevelDomain}/>
                                    <Detail head="Currencies"
                                            detail={selectedCountry.currencies?.map((currency) => currency.name)}/>
                                    <Detail head="Languages"
                                            detail={selectedCountry.languages.map((language) => language.name)}/>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-2 items-start justify-center mt-6 md:mt-10 md:flex-row md:items-center md:gap-2">
                                <h6 className="text-sm font-medium">Border Countries:</h6>
                                <div className="flex gap-2 flex-wrap">
                                    {selectedCountry.borders?.map((border, index) => (
                                            <div key={index}
                                                 className=" px-8 py-1 text-sm font-light rounded-sm shadow-md bg-surface-light dark:bg-surface-dark dark:shadow-2xl">{border}</div>))}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </>
    )
}