import React from 'react';
import Movie from '../Movie/Movie'
import './RecommendList.css'

class RecommendList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            loaded: false
        };
        const movies = [];
    }

    
    handleMovieClick = (title,rating,synopsis,image) =>{

        if(title && title.includes("&#39;")){
            title = title.replace("&#39;"," ' ");
        }
        if(synopsis && synopsis.includes("&#39;")){
            console.log("synopsis contains &39; !!" + title);
            synopsis = synopsis.replace("&#39;"," ' ");
        }
        console.log("Handle movie click in listJS" + title + rating)
        if(title){ //prevents passing 'undefined' values
        this.props.handleInfoDisplayFunction(title,rating,synopsis,image);
        }
    }

    componentDidUpdate = () =>{
        if(this.movies[0] && this.state.loaded === false){
        this.handleMovieClick(this.movies[0].title, this.movies[0].movRate, this.movies[0].synopsis, this.movies);
        this.setState({
            loaded: true
        })
        }
    }


    render =() =>{
        console.log("PASSED MOVIES:" + this.props.recommendedMovies);
       
        this.movies = this.props.recommendedMovies.map((movie,index) =>
            
            <Movie 
            key = {index}
            movieImg = {movie.image}
            handleClickFunction = {this.handleMovieClick}
            movTitle= {movie.title}
            movRate= {movie.rating}
            movSynopsis= {movie.synopsis}

            />
            
            )

            // console.log(movies);
       
        return(
            <div className= "recommendation-container"> 
            <h3>You should Watch:</h3>
                <div className= 'movie-list-container'>
                {this.movies}
                </div>
            </div>
        )
    }

}

export default RecommendList;