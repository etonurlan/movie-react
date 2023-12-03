import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const kinopoiskApi = createApi({
    reducerPath: "kinopoiskApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.kinopoisk.dev/v1.4/" }),
    endpoints: (builder) => ({
        getTopTen: builder.query({
            query: () => ({
                url: `/movie`,
                params: {
                    'audience.count': '1000-6666666',
                    limit: 10
                },
                headers: {
                    'X-API-KEY': 'G9D7YK9-HTBMQ7G-HKM21AN-M5Q6CE8',
                    'Access-Control-Allow-Origin': '*'
                }
            })
        }),
        getPopular: builder.query({
            query: () => ({
                url: `/movie`,
                params: {
                    limit: 50,
                    'rating.kp': '7-10',
                    year: '2020-2023'
                },
                headers: {
                    'X-API-KEY': 'G9D7YK9-HTBMQ7G-HKM21AN-M5Q6CE8',
                    'Access-Control-Allow-Origin': '*'
                }
            })
        }),
        getMovieById: builder.query({
            query: (id) => ({
                url: `/movie/${id}`,
                headers: {
                    'X-API-KEY': 'G9D7YK9-HTBMQ7G-HKM21AN-M5Q6CE8',
                    'Access-Control-Allow-Origin': '*'
                }
            })
        }),
        getActorById: builder.query({
            query: (id) => ({
                url: `/person/${id}`,
                headers: {
                    'X-API-KEY': 'G9D7YK9-HTBMQ7G-HKM21AN-M5Q6CE8',
                    'Access-Control-Allow-Origin': '*'
                }
            })
        }),
        searchActor: builder.query({
            query: (name) => ({
                url: `/person/search`,
                params: {
                    limit: 10,
                    query: name,
                },
                headers: {
                    'X-API-KEY': 'G9D7YK9-HTBMQ7G-HKM21AN-M5Q6CE8',
                    'Access-Control-Allow-Origin': '*'
                }
            })
        }),
        searchFilmByName: builder.query({
            query: (name) => ({
                url: `/movie/search`,
                params: {
                    limit: 10,
                    query: name,
                },
                headers: {
                    'X-API-KEY': 'G9D7YK9-HTBMQ7G-HKM21AN-M5Q6CE8',
                    'Access-Control-Allow-Origin': '*'
                }
            })
        }),
        searchFilmByCategories: builder.query({
            query: (film: any) => ({
                url: `/movie`,
                params: {
                    limit: 10,
                    type: film.type,
                    status: film.status,
                    year: film.year,
                    'rating.kp': film.rating,
                    ageRating: film.age,
                    'genres.name': film.genres
                },
                headers: {
                    'X-API-KEY': 'G9D7YK9-HTBMQ7G-HKM21AN-M5Q6CE8',
                    'Access-Control-Allow-Origin': '*'
                }
            })
        }),
    })
})

export const {useGetTopTenQuery, useGetPopularQuery,
     useGetMovieByIdQuery, useGetActorByIdQuery,
     useSearchActorQuery, useSearchFilmByNameQuery,
     useSearchFilmByCategoriesQuery} = kinopoiskApi