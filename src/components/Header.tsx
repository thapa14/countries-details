import {useDarkMode} from "../providers/useDarkMode.ts";

export default function Header() {
    const {darkMode, setDarkMode} = useDarkMode();

    const toggleHandler = () => {
        setDarkMode((prev) => !prev);
    };

    return <>
        <div className="sticky top-0 w-full bg-surface-light shadow-sm dark:shadow-lg dark:bg-surface-dark">
            <div className="mx-8 py-4 flex justify-between items-center">
                <h4 className="text-lg dark:text-text-dark font-extrabold font-Nunito">Where in the world?</h4>
                <div className="flex gap-2">
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <button
                                    onClick={toggleHandler}
                                    className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                                            darkMode ? "bg-green-500" : "bg-gray-400"
                                    }`}
                            >
                                <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                                        darkMode ? "translate-x-6" : "translate-x-0"
                                }`}
                                ></div>
                            </button>
                        </div>
                    </div>
                    <p className="font-semibold text-text-light dark:text-text-dark">Dark Mode</p>
                </div>
            </div>
        </div>
    </>
}