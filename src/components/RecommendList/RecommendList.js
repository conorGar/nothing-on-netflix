import React from 'react';
import Movie from '../Movie/Movie'
import './RecommendList.css'

class RecommendList extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }


    render(){
        const movies = this.props.recommendedMovies.map((movie,index) =>
            <Movie 
            key = {index}
            movieImg = {movie.image}
            
            />
            
            )

        return(
            <div className= "recommendation-container"> 
                 <Movie />
                {movies}
            </div>
        )
    }

}

export default RecommendList;