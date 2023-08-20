import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../../store/movieDetailsSlice'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useDispatch } from 'react-redux';

import './moviedetails.css';

const MovieDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieById(id));
  }, [dispatch, id]);

  return (

    <div>
      <div>
        <div className='movie-header'>
          <div style={{ fontSize: "25px" }}>Movie details
          </div><Link to="/">
            <i class="fa fa-home" aria-hidden="true" style={{ fontSize: "25px", color: "black" }}></i>
          </Link></div>
      </div>
      <div className='card-body'>
        <Card className='card' >
          <div className="movie-poster" style={{ height: 200 }}>
            <img src={`http://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
          </div>
          <CardContent className='content'>
            <Typography gutterBottom variant="h5" component="div">
              {movie ? movie.original_title : " "}
              (Rating:{""}{movie ? movie.vote_average : ""}<i className="fas fa-star" />)
            </Typography>
              // <h3>
              //   Release Date: {movie.release_date ? movie.release_date : "Unavailable"}|
              //   Length:{movie.genre_ids ? movie.genre_ids.length : "Unavailable"} 
              // </h3>
            <Typography variant="body2" color="text.secondary">
              {movie ? movie.overview : ""}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default MovieDetails;
