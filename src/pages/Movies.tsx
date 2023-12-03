import { Link } from "react-router-dom"
import { useState } from "react"

import { useDebounce } from "../hooks/debounce"
import { useSearchFilmByNameQuery } from "../store/kinopoisk/kinopoisk.api"
import { useSearchFilmByCategoriesQuery } from "../store/kinopoisk/kinopoisk.api"

export const Movies = () => {
    const [search, setSearch] = useState("")
    const debounced = useDebounce(search)
    const {data, isLoading} = useSearchFilmByNameQuery(debounced, {
        skip: debounced.length<3,
    })

    const [handleType, setHandleType] = useState("movie")
    const [handleStatus, setHandleStatus] = useState("")
    const [handleGenre, setHandleGenre] = useState("")
    const [handleYear, setHandleYear] = useState("1874-2050")
    const [handleRating, setHandleRating] = useState("")
    const [handleAge, setHandleAge] = useState("")
    const {data: dataCategory} = useSearchFilmByCategoriesQuery(
        {
            type: handleType,
            status: handleStatus,
            year: handleYear,
            'rating.kp': handleRating,
            ageRating: handleAge,
            'genres.name': handleGenre
        }
    )
    console.log(dataCategory)

    return (
        <div>
            <div className="flex justify-center py-4 mb-[20px]">
                <input className="px-[40px] py-[10px] rounded-md
                transition ease-in-out hover:-translate-y-1
                hover:scale-110 cursor-pointer focus-visible:outline-none"
                value={search}
                onChange={e => setSearch(e.target.value)}
                type="text" placeholder="Search movie..." />
            </div>
            <div className="grid grid-cols-3 gap-4 justify-items-center">
                <form>
                    <label className="text-white" htmlFor="type-select">Type</label>
                    <select onChange={(event) => setHandleType(event.target.value)} name="type" id="type-select">
                        <option value="">-- Choose type --</option>
                        <option value="movie">Movie</option>
                        <option value="tv-series">TV-series</option>
                        <option value="cartoon">Cartoon</option>
                        <option value="animated-series">Animated series</option>
                        <option value="anime">Anime</option>
                    </select>
                </form>
                <form>
                    <label className="text-white" htmlFor="status-select">Status</label>
                    <select onChange={(event) => setHandleStatus(event.target.value)} name="status" id="status-select">
                        <option value="">-- Choose status --</option>
                        <option value="announced">Announced</option>
                        <option value="completed">Completed</option>
                        <option value="filming">Filming</option>
                        <option value="post-production">Post production</option>
                        <option value="pre-production">Pre production</option>
                    </select>
                </form>
                <form>
                    <label className="text-white" htmlFor="genres-select">Genres</label>
                    <select onChange={(event) => setHandleGenre(event.target.value)} name="genres" id="genres-select">
                        <option value="">-- Choose genres --</option>
                        <option value="ужасы">Ужасы</option>
                        <option value="фантастика">Фантастика</option>
                        <option value="Фэнтези">Фэнтези</option>
                        <option value="комедия">Комедия</option>
                        <option value="мелодрама">Мелодрама</option>
                    </select>
                </form>
                <input onChange={(event) => setHandleYear(event.target.value)} className="px-[40px] py-[10px] rounded-md
                transition ease-in-out hover:-translate-y-1
                hover:scale-110 cursor-pointer focus-visible:outline-none"
                type="text" placeholder="Choose year..." />
                <input onChange={(event) => setHandleRating(event.target.value)} className="px-[40px] py-[10px] rounded-md
                transition ease-in-out hover:-translate-y-1
                hover:scale-110 cursor-pointer focus-visible:outline-none"
                type="text" placeholder="Choose rating..." />
                <input onChange={(event) => setHandleAge(event.target.value)} className="px-[40px] py-[10px] rounded-md
                transition ease-in-out hover:-translate-y-1
                hover:scale-110 cursor-pointer focus-visible:outline-none"
                type="text" placeholder="Choose age rating..." />
            </div>
            {isLoading && <h2 className="text-center text-white font-semibold text-[25px]">Loading...</h2>}
            <div className="grid grid-cols-3 gap-4 justify-items-center">
                {data?.docs.map((movie:any) => (
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <h2 className="hover:text-[#ff5] text-white">{movie.alternativeName ? movie.alternativeName : movie.name}</h2>
                    </Link>
                ))}
                {dataCategory?.docs.map((movie:any) => (
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <h2 className="hover:text-[#ff5] text-white">{movie.alternativeName ? movie.alternativeName : movie.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}