import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StatusCode from '../utils/StatusCode';

const initialState = {
    data: [],
    status: StatusCode.IDLE
};
const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state, action) => {
                state.status = StatusCode.LOADING;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = StatusCode.IDLE;
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.status = StatusCode.ERROR;
            })
    }
});

export const { fetchmovies } = movieSlice.actions;
export default movieSlice.reducer;

export const getMovies = createAsyncThunk('movies/get', async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=06fb1dc40ed2a796e2d61130c353d781&language=en-US&page=1')
    const result = await data.json();
    // console.log(data);
    return result.results;
})