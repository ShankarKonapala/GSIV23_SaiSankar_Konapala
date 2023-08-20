import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import movieDetailsSlice from "./movieDetailsSlice";

const store = configureStore({
    reducer: {
        movies: moviesSlice,
        movie: movieDetailsSlice
    }
});

export default store;