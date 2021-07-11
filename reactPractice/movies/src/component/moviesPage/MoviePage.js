import React from 'react'
import { Link } from 'react-router-dom';

const MoviePage = (props) => {
    console.log(props);
    return (
        <div>
             {/* <div className='gallery__movie'>
                <img src={`${poster}`} alt={`${name}`} />
                <div className='movie__info'>
                    <p className='info--name'> { name }</p>
                    <p className='info--year'> { year } </p>
                </div>
            </div> */}
            <h1>this is movie page</h1>

            <Link to={'/'}>
                back to  main
            </Link>
        </div>
    )
}

export default MoviePage
