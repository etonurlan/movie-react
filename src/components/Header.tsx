import { Link } from "react-router-dom"

import Logo from "../img/IMDB_Logo.png"

export const Header = () => {
    return (
        <header className="text-[#fff] flex items-center px-5 py-2">
            <Link className="mr-[20px]" to="/">
                <img className="w-[100px] h-auto" src={Logo} alt="Site Logo" />
            </Link>
            <Link className="mr-[40px] font-medium hover:text-[#e12500]" to="/movies">
                Movies
            </Link>
            <Link className="font-medium hover:text-[#e12500]" to="/actors">
                Actors
            </Link>
        </header>
    )
}