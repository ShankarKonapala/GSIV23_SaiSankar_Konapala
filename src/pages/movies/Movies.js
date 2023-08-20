import React, { useEffect, useState } from 'react';
import MovieCard from '../../components/card/MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../store/moviesSlice';
import { Link } from 'react-router-dom';

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

import "./movies.css"

const Movies = () => {
  const dispatch = useDispatch();
  const { data: movies } = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = searchTerm === ''
    ? movies
    : movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (<>
    <div className='header'>
      <div className="search">
        <SearchTwoToneIcon className='search-icon' />

        <input style={{ width: "500px", height: "30px" }} className='search-input' type="text" placeholder="Search" value={searchTerm}
          onChange={handleSearchChange} />
      </div>
      <Link to="/">
        <i class="fa fa-home" aria-hidden="true" style={{ fontSize: "25px", color: "black" }}></i>
      </Link>
    </div>
    <div className='movie-card'>
      {
        filteredMovies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} id={index}></MovieCard>
        ))
      }
    </div>
  </>
  )
}

export default Movies