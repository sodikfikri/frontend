
import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/contanst/data"

const movieSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        movies: data
    },
    reducers: {
        addMovie(state, action) {
            // add movie to movies
            state.movies.push(action.payload)
        },
        deleteMovie() {}
    }
})


const moviesReducer = movieSlice.reducer
const {addMovie, deleteMovie} = movieSlice.actions

export default moviesReducer
export {
    addMovie, deleteMovie
}