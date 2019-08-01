import React from 'react'
import FrontPage from '../FrontPage';
import SearchOptions from '../SearchOptions';

import './Home.css';

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    changeGenreFilter = (newFilter) =>{
        this.props.genreChangeHandle(newFilter);
    
      }
    
      changeDateFilter = (newFilter) =>{
        this.props.dateChangeHandle(newFilter);
    
      }
    
      changeRateFilter = (newFilter) =>{
        this.props.rateChangeHandle(newFilter);
    
      }

      search = (e) => {
          console.log("home search activate")
          this.props.searchHandler(e);
      }

      render(){
        return(
            <div className="home-container">
                <FrontPage />
                <SearchOptions genreChangeHandle={this.changeGenreFilter} dateChangeHandle={this.changeDateFilter} rateChangeHandle={this.changeRateFilter}  searchHandler={this.search}/>  
            </div>
        )
      }
}

export default Home;