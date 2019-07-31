import React from 'react'
import FrontIMG from '../../assets/frontImage.png';

import Info from '../Info/Info';
import './InfoPage.css';
function InfoPage(props){


    return(
        <div className ="info-container">
            {/* <Info /> */}

            <div className= "background">         
                 <img className="headerImg" alt="" id="headerImage1" src={props.image}/>
            </div>
            <img alt="" id="headerImageFront" src={FrontIMG}/>
            
            <div className= "text">
                <h1>Title{props.title}</h1>
                <h3>Rating{props.rating}</h3>
                <p>Description{props.synopsis}</p>
            </div>

        </div>
    )


}

export default InfoPage;