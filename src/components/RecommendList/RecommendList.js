import React from 'react';
import Movie from '../Movie/Movie'
import './RecommendList.css'

class RecommendList extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
     
    }

    
    handleMovieClick = (title,rating,synopsis,image) =>{
        this.props.handleInfoDisplayFunction(title,rating,synopsis,image);
    }


    render =() =>{
        console.log("PASSED MOVIES:" + this.props.recommendedMovies);
       
        const movies = this.props.recommendedMovies.map((movie,index) =>
            
            <Movie 
            key = {index}
            movieImg = {movie.image}
            handleClickFunction = {this.handleMovieClick}
            movTitle= {movie.title}
            movRate= {movie.rating}
            movSynopsis= {movie.synopsis}

            />
            
            )

            console.log(movies);
        // this.handleMovieClick(movies[0].title, movies[0].movRate, movies[0].synopsis, movies)
        return(
            <div className= "recommendation-container"> 
                {movies}
            </div>
        )
    }

}

export default RecommendList;