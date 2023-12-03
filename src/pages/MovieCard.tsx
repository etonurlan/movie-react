import { useParams, Link } from "react-router-dom"
import ReactStars from "react-rating-stars-component"
import { useDispatch, useSelector } from "react-redux"
import confetti from 'canvas-confetti'

import { useGetMovieByIdQuery } from "../store/kinopoisk/kinopoisk.api"
import { addMovieToValue } from "../store/kinopoisk/movie"

export const MovieCard = () => {
    const {id} = useParams()

    const {data, isLoading} = useGetMovieByIdQuery(id)

    const dispatch = useDispatch()

    const value = useSelector((state: any) => state.movie.value)

    let movieRate = 0
    const ratingValue = () => {
        value.map((rating: any) => {
            if(rating.id === id) {
                movieRate = rating.rate
            } 
        })
    }
    ratingValue()

    const starRating = {
        size: 40,
        count: 10,
        isHalf: false,
        value: movieRate,
        color: "grey",
        activeColor: "gold",
        onChange: (rate: number) => {
            confetti({
                particleCount: 500,
                spread: 180,
                shapes: ['star'],
                colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
            })
            dispatch(addMovieToValue({id, rate}))
        }
      };
   
    return (
        <div className="px-5 py-2 text-white">
            {isLoading && <h2 className="text-center text-white font-semibold text-[25px]">Loading...</h2>}
            <div className="flex mb-[20px]">
                <div className="mr-[15px]">
                    <img className="max-w-[400px] max-h-[500px]"
                    src={data?.poster?.url} alt="Poster" />
                </div>
                <div>
                    <ReactStars {...starRating} />
                    {data?.name ? <h2><span className="font-semibold text-[17px] text-[#ff5]">Name:</span> {data.name}</h2> : null}
                    {data?.type ? <h3><span className="font-semibold text-[17px] text-[#ff5]">Genre:</span> {data.type}</h3> : null}
                    {data?.ageRating ? <h3><span className="font-semibold text-[17px] text-[#ff5]">Age rating:</span> {data.ageRating}</h3> : null}
                    {data?.movieLength ? <h3><span className="font-semibold text-[17px] text-[#ff5]">Movie length:</span> {data.movieLength}</h3> : null}
                    {data?.description ? <p><span className="font-semibold text-[17px] text-[#ff5]">Description:</span> {data.description}</p> : null}
                    {data?.slogan ? <h3><span className="font-semibold text-[17px] text-[#ff5]">Slogan:</span> {data.slogan}</h3> : null}
                    {data?.rating.imdb ? <h3><span className="font-semibold text-[17px] text-[#ff5]">Rating:</span> {data.rating.imdb}</h3> : null}
                    {data?.year ? <h3><span className="font-semibold text-[17px] text-[#ff5]">Year:</span> {data.year}</h3> : null}
                    {data?.budget.value ? <h3><span className="font-semibold text-[17px] text-[#ff5]">Budget:</span> {data.budget.value} {data?.budget?.currency}</h3> : null}
                    {data?.fees.world.value ? <h3><span className="font-semibold text-[17px] text-[#ff5]">Fees:</span> {data.fees.world.value} {data?.fees?.world?.currency}</h3> : null}
                </div>
            </div>
            <div>
                {data?.facts.length > 0 ? <h2 className="font-semibold text-[20px] text-[#ff5]">Facts:</h2> : null}
                {data?.facts.map((filmFact: any) => (
                    <p className="mb-[10px]">{filmFact.value.replace(/<(.|\n)*?>/g, '')}</p>
                ))}
            </div>
            <div className="mb-[15px]">
                {data?.persons.length > 0 ? <h2 className="font-semibold text-[20px] text-[#ff5] mb-[15px]">Actors:</h2> : null}
                <div className="flex">
                    {data?.persons.slice(0, 5).map((actor: any) => (
                        <Link className="mr-auto last:mr-0" key={actor.id} to={`/actor/${actor.id}`}>
                            <img className="h-[225px] w-[175px] mb-[10px]" src={actor.photo} alt={actor.name} />
                            <h2 className="hover:text-[#ff5]">{actor.name}</h2>
                        </Link>
                    ))}
                </div>
            </div>
            <div>
                {data?.similarMovies.length > 0 ? <h2 className="font-semibold text-[20px] text-[#ff5] mb-[15px]">Similar movies:</h2> : null}
                <div className="flex">
                    {data?.similarMovies.slice(0, 5).map((movie: any) => (
                        <Link className="mr-auto last:mr-0" key={movie.id} to={`/movie/${movie.id}`}>
                            <img className="h-[225px] w-[175px] mb-[10px]" src={movie.poster.previewUrl} alt={movie.name} />
                            <h2 className="hover:text-[#ff5]">{movie.name}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        
    )
}