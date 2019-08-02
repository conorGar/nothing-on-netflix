import React from 'react';


import './Movie.css';

class Movie extends React.Component{
    constructor(props){
        super(props);
    }

    clickMovie = (e) =>{
        console.log(e);
        this.props.handleClickFunction(this.props.movTitle, this.props.movRate, this.props.movSynopsis, this.props.movieImg);
    }

    render(){
        return(
            <div className="movie-container" onClick={this.clickMovie}>
                <img src= {this.props.movieImg} alt=""/>
            </div>
        )
    }
}

export default Movie;