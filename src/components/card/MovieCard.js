import React from 'react'

import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./MovieCard.css"


const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
        <Card className='card' sx={{ maxWidth: 300 }} style={{ textDecoration: "none" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={`http://image.tmdb.org/t/p/original${movie && movie.poster_path}`}
              alt="green iguana"
            />
            <CardContent>
              <div className='card__overlay'>
                <div className='card__title'>{movie ? movie.original_title : ""}</div>
                <div className='card__runtime'>
                  {movie ? movie.release_date : ""}
                  <span className='card_rating'>{movie ? movie.vote_average : ""}<i className="fas fa-star" />{""}</span>
                </div>
              </div>
              <h4 className='description-tag'>Description</h4>
              <Typography className='description' variant="body2" color="text.secondary">
                {movie ? movie.overview : ""}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  )
}

export default MovieCard