import {configureStore} from '@reduxjs/toolkit'

import {kinopoiskApi} from './kinopoisk/kinopoisk.api'
import movieReducer from "./kinopoisk/movie"

export const store = configureStore({
  reducer: {
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(kinopoiskApi.middleware)
})
