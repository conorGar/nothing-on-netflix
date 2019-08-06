import React from 'react';


import './Movie.css';

class Movie extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("Movie mounted!" + this.props.movTitle);
        this.props.handleClickFunction(this.props.movTitle, this.props.movRate, this.props.movSynopsis, this.props.movieImg);

    }

    clickMovie = (e) =>{
        console.log(e);
        this.props.handleClickFunction(this.props.movTitle, this.props.movRate, this.props.movSynopsis, this.props.movieImg);
    }

    render(){
        return(
            <div className="movie-container" onMouseEnter={this.clickMovie}>
                <img src= {this.props.movieImg} alt=""/>
            </div>
        )
    }
}

export default Movie;