import React from 'react'
import './movieStyle.css'

const Movie = ({poster, name, year}) => {
    return (
        <div className='gallery__movie'>
                <img src={`${poster}`} alt={`${name}`} />
                <div className='movie__info'>
                    <p className='info--name'> { name }</p>
                    <p className='info--year'> { year } </p>
                </div>
        </div>
    )
}

export default Movie
