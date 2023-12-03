import { useState } from "react"
import { Link } from "react-router-dom"


import Bolt from "../img/bolt.png"
import RightArrow from "../img/right-arrow.png"
import LeftArrow from "../img/left-arrow.png"
import { useGetTopTenQuery } from "../store/kinopoisk/kinopoisk.api"

export const Carousel = () => {
    const [carouselCount, setCarouselCount] = useState(0)

    const {data, isLoading} = useGetTopTenQuery("")

    return (
        <div className="px-5 py-2">
            <div className="flex items-center">
                <img className="w-[30px] h-auto mr-3" src={Bolt} alt="Carousel Img" />
                <h2 className="text-[#e2bce8] text-[25px] font-semibold">
                    Top-10 for the month
                </h2>
            </div>
            {isLoading && <h2 className="text-center text-white font-semibold text-[25px]">Loading...</h2>}
            <div className="flex px-3 py-3 items-center">
                {carouselCount === 0 &&
                    <>
                        <Link className="mr-auto" to={`/movie/${data?.docs[0].id}`}>
                            <img className="max-w-[400px] max-h-[500px] pl-[50px]
                            transition ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={data?.docs[0].poster?.previewUrl} alt="Poster" />
                        </Link>
                        <Link className="mr-auto" to={`/movie/${data?.docs[1].id}`}>
                            <img className="max-w-[400px] max-h-[500px]
                            transition ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={data?.docs[1].poster?.previewUrl} alt="Poster" />
                        </Link>
                        <Link className="mr-auto" to={`/movie/${data?.docs[2].id}`}>
                            <img className="max-w-[400px] max-h-[500px] mr-auto
                            transition ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={data?.docs[2].poster?.previewUrl} alt="Poster" />
                        </Link>
                         <button onClick={() => {setCarouselCount(1)}}
                          className="bg-[#FF5] w-[50px] h-[50px] rounded-[50%]
                          transition ease-in-out hover:-translate-y-1 hover:scale-110">
                            <img src={RightArrow} alt="Arrow" />
                        </button>
                    </>
                }
                {carouselCount === 1 &&
                    <>  
                        <button onClick={() => {setCarouselCount(0)}} 
                        className="bg-[#FF5] w-[50px] h-[50px] rounded-[50%] mr-auto
                        transition ease-in-out hover:-translate-y-1 hover:scale-110">
                            <img src={LeftArrow} alt="Arrow" />
                        </button>
                        <Link className="mr-auto" to={`/movie/${data?.docs[2].id}`}>
                            <img className="max-w-[400px] max-h-[500px]
                            transition ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={data?.docs[2].poster?.previewUrl} alt="Poster" />
                        </Link>
                        <Link className="mr-auto" to={`/movie/${data?.docs[3].id}`}>
                             <img className="max-w-[400px] max-h-[500px]
                            transition ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={data?.docs[3].poster?.previewUrl} alt="Poster" />
                        </Link>
                        <Link className="mr-auto" to={`/movie/${data?.docs[4].id}`}>
                            <img className="max-w-[400px] max-h-[500px]
                            transition ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={data?.docs[4].poster?.previewUrl} alt="Poster" />
                        </Link>
                         <button onClick={() => {setCarouselCount(2)}}
                          className="bg-[#FF5] w-[50px] h-[50px] rounded-[50%]
                          transition ease-in-out hover:-translate-y-1 hover:scale-110">
                            <img src={RightArrow} alt="Arrow" />
                        </button>
                    </>
                }
                {carouselCount === 2 &&
                    <>
                        <button onClick={() => {setCarouselCount(1)}}
                         className="bg-[#FF5] w-[50px] h-[50px] rounded-[50%] mr-auto
                         transition ease-in-out hover:-translate-y-1 hover:scale-110">
                            <img src={LeftArrow} alt="Arrow" />
                        </button>
                        <Link className="mr-auto" to={`/movie/${data?.docs[4].id}`}>
                            <img className="max-w-[400px] max-h-[500px]
                            transition ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={data?.docs[4].poster?.previewUrl} alt="Poster" />
                        </Link>
                        <Link className="mr-auto" to={`/movie/${data?.docs[5].id}`}>
                            <img className="max-w-[400px] max-h-[500px]
                            transition ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={data?.docs[5].poster?.previewUrl} alt="Poster" />
                        </Link>
                        <Link className="mr-auto" to={`/movie/${data?.docs[6].id}`}>
                            <img className="max-w-[400px] max-h-[500px]
                            transition ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={data?.docs[6].poster?.previewUrl} alt="Poster" />
                        </Link>
                         <button onClick={() => {setCarouselCount(3)}}
                          className="bg-[#FF5] w-[50px] h-[50px] rounded-[50%]
                          transition ease-in-out hover:-translate-y-1 hover:scale-110">
                            <img src={RightArrow} alt="Arrow" />
                        </button>
                    </>
                }
                {carouselCount === 3 &&
                    <>
                        <button onClick={() => {setCarouselCount(2)}}
                         className="bg-[#FF5] w-[50px] h-[50px] rounded-[50%] mr-auto
                         transition ease-in-out hover:-translate-y-1 hover:scale-110">
                            <img src={LeftArrow} alt="Arrow" />
                        </button>
                        <Link className="mr-auto" to={`/movie/${data?.docs[6].id}`}>
                            <img className="max-w-[400px] max-h-[500px]
                            transition ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={data?.docs[6].poster?.previewUrl} alt="Poster" />
                        </Link>
                        <Link className="mr-auto" to={`/movie/${data?.docs[7].id}`}>
                            <img className="max-w-[400px] max-h-[500px]
                            transition ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={data?.docs[7].poster?.previewUrl} alt="Poster" />
                        </Link>
                        <Link className="mr-auto" to={`/movie/${data?.docs[8].id}`}>
                            <img className="max-w-[400px] max-h-[500px]
                            transition ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={data?.docs[8].poster?.previewUrl} alt="Poster" />
                        </Link>
                         <button onClick={() => {setCarouselCount(4)}}
                          className="bg-[#FF5] w-[50px] h-[50px] rounded-[50%]
                          transition ease-in-out hover:-translate-y-1 hover:scale-110">
                            <img src={RightArrow} alt="Arrow" />
                        </button>
                    </>
                }
                {carouselCount === 4 &&
                    <>
                        <button onClick={() => {setCarouselCount(3)}}
                         className="bg-[#FF5] w-[50px] h-[50px] rounded-[50%] mr-auto
                         transition ease-in-out hover:-translate-y-1 hover:scale-110">
                            <img src={LeftArrow} alt="Arrow" />
                        </button>
                        <Link className="mr-auto" to={`/movie/${data?.docs[7].id}`}>
                             <img className="max-w-[400px] max-h-[500px]
                            transition ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={data?.docs[7].poster?.previewUrl} alt="Poster" />
                        </Link>
                        <Link className="mr-auto" to={`/movie/${data?.docs[8].id}`}>
                            <img className="max-w-[400px] max-h-[500px]
                            transition ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={data?.docs[8].poster?.previewUrl} alt="Poster" />
                        </Link>
                        <Link className="mr-[50px]" to={`/movie/${data?.docs[9].id}`}>
                            <img className="max-w-[400px] max-h-[500px]
                            transition ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={data?.docs[9].poster?.previewUrl} alt="Poster" />
                        </Link>
                    </>
                }
            </div>
        </div>
    )
}