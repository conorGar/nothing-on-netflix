import React from 'react'
import FrontIMG from '../../assets/frontImage.png';
import imdbLogo from '../../assets/imdbLogo.jpeg'
import siteLogo from '../../assets/title.png'
import Info from '../Info/Info';
import {Link } from 'react-router-dom';

import './InfoPage.css';
class InfoPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fadeIn: "fade"
        }
    }

    render(){
        // console.log("new infoPage render");
        // this.setState({
        //     fadeIn: "fade"
        // })

        // setInterval(1000,function(){
        //     this.setState({
        //         fadeIn: "info-container"
        //     })
        //     clearInterval(this);
        // })
    return(
        <div className ="info-container">
            {/* <Info /> */}
            <Link to="/home" className="back-button" onClick={this.props.clearList} >
            <img alt="" id="backButtonImg" src={siteLogo}/>

            </Link>

            <div className= "background">         
                 <img className="bigImg" alt="" id="headerImage" src={this.props.image}/>
            </div>
            <img alt="" id="headerImageFront" src={FrontIMG}/>
            
            <div className= "text">
                <h1>{this.props.title}</h1>
                <div className="rating-container">
                    <img src={imdbLogo} alt="" className="imdb-logo" />
                    <h3>{this.props.rating}</h3>
                    <h3>/ 10</h3>
                </div>
                <p className="synopsis">{this.props.synopsis}</p>
            </div>

        </div>
    )
    }


}

export default InfoPage;