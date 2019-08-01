import React from 'react';
import './FrontPage.css';
import SearchOptions from './SearchOptions';


import BladeRunnerIMG from '../assets/bladerunner.jpg';
import AkiraIMG from '../assets/akira.jpg';
import BasterdsIMG from '../assets/ingloriousBasterds.jpg';
import JokerIMG from '../assets/joker.jpg';
import FrontIMG from '../assets/frontImage.png';
import SiteTitle from '../assets/title.png';



function FrontPage(props){

    return(
        <div className="frontImg">
                <div className= "background">
                     
                     <img className="headerImg" alt="" id="headerImage1" src={BladeRunnerIMG}/>
                     <img className="headerImg" alt="" id="headerImage2" src={AkiraIMG}/>
                     <img className="headerImg" alt="" id="headerImage3" src={BasterdsIMG}/>
                     <img className="headerImg" alt="" id="headerImage4" src={JokerIMG}/>
                 </div>
            <img alt="" id="headerImageFront2" src={FrontIMG}/>
            <img alt="" id="title" src={SiteTitle}/>
            <div className= "text">
            <p>For us indecisive folks who need computers to tell us what we want.</p>
            </div>
           


        </div>
    )
}


export default FrontPage;