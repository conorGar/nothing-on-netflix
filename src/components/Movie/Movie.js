import React from 'react';


import './Movie.css';

function Movie(props){
    return(
        <div className="movie-container">
            <img src= {props.movieImg}/>
        </div>
    )
}

export default Movie;