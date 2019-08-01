import React from 'react'
import FrontIMG from '../../assets/frontImage.png';
import imdbLogo from '../../assets/imdbLogo.jpeg'
import siteLogo from '../../assets/title.png'
import Info from '../Info/Info';
import {Link } from 'react-router-dom';

import './InfoPage.css';
function InfoPage(props){


    return(
        <div className ="info-container">
            {/* <Info /> */}
            <Link to="/home" className="back-button" onClick={props.searchHandler} >
            <img alt="" id="backButtonImg" src={siteLogo}/>

            </Link>

            <div className= "background">         
                 <img className="bigImg" alt="" id="headerImage" src={props.image}/>
            </div>
            <img alt="" id="headerImageFront" src={FrontIMG}/>
            
            <div className= "text">
                <h1>{props.title}</h1>
                <div className="rating-container">
                <img src={imdbLogo} alt="" className="imdb-logo" />
                <h3>{props.rating}</h3>
                <h3>/ 10</h3>
                </div>
                <p>{props.synopsis}</p>
            </div>

        </div>
    )


}

export default InfoPage;