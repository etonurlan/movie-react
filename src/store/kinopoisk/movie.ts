import { createSlice } from "@reduxjs/toolkit"

export const movieSlice = createSlice({
    name: "movie",
    initialState: {
        value: [],
    },
    reducers: {
        addMovieToValue: (state, { payload }) => {
            let newValue: any = [...state.value]
            const found = state.value.find(({ id }) => id === payload.id)

            if (found) {
                newValue = newValue.map((item: any) => {
                    return item.id === payload.id
                        ? { ...item, rate: payload.rate }
                        : item
                })
            } else newValue.push({...payload})

            state.value = newValue
        },
    },
})

export const { addMovieToValue } = movieSlice.actions

export default movieSlice.reducer