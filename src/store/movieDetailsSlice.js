import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    movieDetails: null,
    loading: false,
    error: null,
};
const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovieById.fulfilled, (state, action) => {
                state.loading = false;
                state.movieDetails = action.payload;
            })
            .addCase(fetchMovieById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { fetchMovieStart, fetchMovieSuccess, fetchMovieFailure } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;

export const fetchMovieById = createAsyncThunk(
    'movieDetails/fetchMovieById',
    async (movieId) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}?api_key=06fb1dc40ed2a796e2d61130c353d781&language=en-US&page=1`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            throw error.response.data;
        }
    }
);