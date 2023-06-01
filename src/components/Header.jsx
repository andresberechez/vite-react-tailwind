import { useEffect, useRef, useState } from "react";
import IconMoon from "./Icons/IconMoon";
import IconSun from "./Icons/IconSun";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    // const refHeader = useRef(null);
    // con useRef puedo acceder al componente en react y hacer el classlist.add

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            // localStorage.theme = "dark";
            // refHeader.current.classList.add("bg-gray-900");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            // localStorage.theme = "dark";
            // refHeader.current.classList.remove("bg-gray-900");
        }
    }, [darkMode]);

    return (
        <header
            className="container mx-auto px-4 pt-8 md:max-w-xl" /*ref={refHeader}*/
        >
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.4em] text-white">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun /> : <IconMoon />}
                </button>
            </div>
        </header>
    );
};

export default Header;
