import { Link } from "react-router-dom"
import { useState } from "react"

import { useDebounce } from "../hooks/debounce"
import { useSearchActorQuery } from "../store/kinopoisk/kinopoisk.api"

export const Actors = () => {
    const [search, setSearch] = useState("")
    const debounced = useDebounce(search)
    const {data, isLoading} = useSearchActorQuery(debounced, {
        skip: debounced.length<3,
    })

    return (
        <div>
            <div className="flex justify-center py-4 mb-[20px]">
                <input className="px-[40px] py-[10px] rounded-md
                transition ease-in-out hover:-translate-y-1
                hover:scale-110 cursor-pointer focus-visible:outline-none"
                value={search}
                onChange={e => setSearch(e.target.value)}
                type="text" placeholder="Search actor..." />
            </div>
            {isLoading && <h2 className="text-center text-white font-semibold text-[25px]">Loading...</h2>}
            <div className="grid grid-cols-3 gap-4 justify-items-center">
                {data?.docs.map((actor:any) => (
                    <Link key={actor.id} to={`/actor/${actor.id}`}>
                        <h2 className="hover:text-[#ff5] text-white">{actor.enName ? actor.enName : actor.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}