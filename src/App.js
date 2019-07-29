import React from 'react';
import logo from './logo.svg';
import FrontPage from './components/FrontPage';
import SearchOptions from './components/SearchOptions';
import Axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        genreFilter: '',
        dateFilter: '',
        ratingFilter: ''

    
    }
  }

  changeGenreFilter = (newFilter) =>{
    this.setState({
      genreFilter: newFilter
    });

  }

  changeDateFilter = (newFilter) =>{
    this.setState({
      dateFilter: newFilter
    });

  }

  changeRateFilter = (newFilter) =>{
    this.setState({
      ratingFilter: newFilter
    });

  }

  search = () => {
    console.log("Search activated");
  }

  render(){
    return (
      <div className="App">
        <FrontPage />
        <SearchOptions genreChangeHandle={this.changeGenreFilter} dateChangeHandle={this.changeDateFilter} rateChangeHandle={this.changeRateFilter}  searchHandler={this.search}/>
      </div>
    );
  }
}

export default App;
