import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import './moviedetails.css';

const MovieDetails = () => {

  const { data: movies } = useSelector(state => state.movies);

  const { id } = useParams();
  const movieId = id;

  const movieDetail = movies.filter((movie) => movieId == movie.id)
  const movie = movieDetail[0];
  console.log(movie)

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
            <h3>Release Date: {movie ? movie.release_date : ""}|
              Length:{movie ? movie.genre_ids.length : ""} </h3>
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