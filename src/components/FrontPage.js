import React from 'react';
import './FrontPage.css';
import SearchOptions from './SearchOptions';


import BladeRunnerIMG from '../assets/bladerunner.jpg';
import AkiraIMG from '../assets/akira.jpg';
import BasterdsIMG from '../assets/ingloriousBasterds.jpg';
import JokerIMG from '../assets/joker.jpeg';
import FrontIMG from '../assets/frontImage.png';



function FrontPage(props){

    return(
        <div className="frontImg">
           
            <img className="headerImg" alt="" id="headerImage1" src={BladeRunnerIMG}/>
            <img className="headerImg" alt="" id="headerImage2" src={AkiraIMG}/>
            <img className="headerImg" alt="" id="headerImage3" src={BasterdsIMG}/>
            <img className="headerImg" alt="" id="headerImage4" src={JokerIMG}/>
            <img alt="" id="headerImageFront" src={FrontIMG}/>
            {/* <SearchOptions /> */}

        </div>
    )
}


export default FrontPage;