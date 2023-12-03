import { useParams, Link } from "react-router-dom"

import { useGetActorByIdQuery } from "../store/kinopoisk/kinopoisk.api"

export const ActorCard = () => {
    const {id} = useParams()

    const {data, isLoading} = useGetActorByIdQuery(id)
    console.log(data)

    return (
        <div className="px-5 py-2 text-white">
            {isLoading && <h2 className="text-center text-white font-semibold text-[25px]">Loading...</h2>}
            <div className="flex mb-[20px]">
                <div className="mr-[15px]">
                    <img className="max-w-[400px] max-h-[500px]"
                    src={data?.photo} alt="Photo" />
                </div>
                <div>
                    {data?.name ? <h2><span className="font-semibold text-[17px] text-[#ff5]">Name:</span> {data.name}</h2> : null}
                    {data?.age ? <h2><span className="font-semibold text-[17px] text-[#ff5]">Age:</span> {data.age}</h2> : null}
                    <div className="flex">
                       {data?.movies.length > 0 ? <h2 className="font-semibold text-[17px] text-[#ff5] mr-[10px]">Movies:</h2> : null}
                        <div>
                            {data?.movies.slice(0, 5).map((movie: any) => (
                                <Link className="mr-auto last:mr-0" key={movie.id} to={`/movie/${movie.id}`}>
                                    <h2 className="hover:text-[#ff5]">{movie.name}</h2>
                                </Link>
                            ))}
                        </div> 
                    </div>
                </div>
            </div>
            <div>
                {data?.facts.length > 0 ? <h2 className="font-semibold text-[20px] text-[#ff5]">Facts:</h2> : null}
                {data?.facts.map((actorFact: any) => (
                    <p className="mb-[10px]">{actorFact.value.replace(/<(.|\n)*?>/g, '')}</p>
                ))}
            </div>
        </div>
    )
}