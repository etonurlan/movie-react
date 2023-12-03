import { Link } from "react-router-dom"

import { useGetPopularQuery } from "../store/kinopoisk/kinopoisk.api"

export const Popular = () => {
    const {data, isLoading} = useGetPopularQuery("")

    return (
        <div className="px-5 py-2">
            <h2 className="text-white font-semibold text-[25px] mb-[20px]">
                Popular
            </h2>
            {isLoading && <h2 className="text-center text-white font-semibold text-[25px]">Loading...</h2>}
            <div className="grid grid-cols-5 gap-4">
                {data?.docs.map((film:any) => (
                    <Link key={film.id}
                     to={`/movie/${film.id}`}>
                        <img className="max-w-[300px] max-h-[400px]
                        transition ease-in-out hover:-translate-y-1 hover:scale-110"
                        src={film.poster?.previewUrl} alt="Poster" />
                    </Link>
                ))}
            </div>
        </div>
    )
}