import React from 'react'
import FrontPage from '../FrontPage';
import SearchOptions from '../SearchOptions';

import './Home.css';

function Home(props){
    return(
        <div className="home-container">
            <FrontPage />
            <SearchOptions genreChangeHandle={props.changeGenreFilter} dateChangeHandle={props.changeDateFilter} rateChangeHandle={props.changeRateFilter}  searchHandler={props.search}/>  
        </div>
    )
}

export default Home;