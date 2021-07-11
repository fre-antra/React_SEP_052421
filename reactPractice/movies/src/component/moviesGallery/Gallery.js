import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getMovie } from '../../api'
import Movie from './moviePoster/Movie';
import MoviePage from '../moviesPage/MoviePage';
import './galleryStyle.css'

const Gallery = ({ searchMovie }) => {
    
    let movies = [{
        id: '007',
        name: 'Avengers',
        year: 2021,
        poster: '/haha.jpg',
        detail: 'ablnskbfnkjasnf'
    }];
    // get all data from api
    useEffect(() => {
        console.log("get movies");
        // movies = getMovie(movie).then((res) => console.log(res.data));
    }, [searchMovie]);
    

    return (
        <div className='gallery'>
            {
                movies.map((movie) => (
                    <Link to={`/movie/${movie.id}`}>
                        <Movie key={movie.id} poster={ movie.poster} name={movie.name} year={movie.year}></Movie>
                    </Link>
                ))
            }
        </div>
    )
}

export default Gallery
