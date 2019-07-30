import React from 'react';
import logo from './logo.svg';
import FrontPage from './components/FrontPage';
import SearchOptions from './components/SearchOptions';
import RecommendList from './components/RecommendList/RecommendList';


import Axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        genreFilter: '',
        dateFilter: '',
        ratingFilter: '',
        dateEndFilter: '',
        recommendations: []
    
    }
    this.genreArrarys = {
      horror: [10695,10944,1694,42023,45028,48303,61546,75405,75804,75930,8195,83059,8711,89585],
      action: [10673,10702,11804,11828,1192487,1365,1568,2125,2653,43040,43048,4344,46576,75418,76501,77232,788212,801362,852490,899,9584],
      comedy: [1009,10256,10375,105,10778,11559,11755,1208951,1333288,1402,1747,17648,2030,2700,31694,3300,34157,3519,3996,4058,4195,43040,4426,4906,52104,52140,52847,5286,5475,5610,56174,58905,59169,61132,61330,6197,63092,63115,6548,711366,7120,72407,7539,77599,77907,78163,78655,79871,7992,852492,869,89585,9302,9434,9702,9736]
    }

    this.testMovie = {
      image: "https://occ-0-2433-2705.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABeThSRoSA1795AhEnR15YSEJ3ZFqGbCqR1OQAt7j1778VdZe0nGL-yOxoAGL8AhAcgpsgwcV299ua19rwl-oZq3OPnBwWV4.jpg?r=a85",
      synopsis:"A soldier returns home from the Iraq War without his friend since training, launching an intense investigation into the mysterious disappearance.",
      title:"The Yellow Birds"
    }

  }

  changeGenreFilter = (newFilter) =>{
    this.setState({
      genreFilter: this.genreArrarys[newFilter]
    });

  }

  changeDateFilter = (newFilter) =>{
    let newEndDateFilter = '2019';

    if(parseInt(newFilter)+20 < 2019){
      newEndDateFilter = parseInt(newFilter) + 20
    }

    this.setState({
      dateFilter: newFilter,
      dateEndFilter: newEndDateFilter
    });

  }

  changeRateFilter = (newFilter) =>{
    this.setState({
      ratingFilter: newFilter
    });

  }

  // search = async(e) => {
  //   e.preventDefault();
    
  //   console.log("Search activated");
  //   const REACT_APP_API_KEY = ' ';

  //   try{
  //     const apiUrl = `https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get:new7-!${this.state.dateFilter},${this.state.dateEndFilter}-!0,5-!${this.state.ratingFilter},10-!${this.state.genreFilter}-!Any-!Any-!Any-!gt100-!{downloadable}&t=ns&cl=all&st=adv&ob=Relevance&p=1&sa=and`;

         
  //     // const apiResponse = await Axios.get(apiUrl)
  //     // .header("X-RAPIDAPI-KEY", REACT_APP_API_KEY); 
      
  //     const apiResponse = await Axios({
  //       url: apiUrl,
  //       method: 'GET',
  //       headers: {"X-RapidAPI-Key": REACT_APP_API_KEY,
  //                 "X-RapidAPI-Host":"unogs-unogs-v1.p.rapidapi.com"}
  //     })

  //     const movieData = apiResponse.data;
  //     console.log(apiResponse);
  //     console.log(movieData.ITEMS);

  //     if(apiResponse.status === 200){
  //       this.setState(prevState => ({
  //         recommendations: movieData.ITEMS
  //       }));
  //     } 
  //   }catch{

  //   }

  // }

  search = async(e) => {
    e.preventDefault();
    
    this.setState(prevState => ({
          recommendations: [this.testMovie]
    }));

  }

  render(){
    return (
      <div className="app-container">
        
        <div className="app-top">
        <FrontPage />

        <SearchOptions genreChangeHandle={this.changeGenreFilter} dateChangeHandle={this.changeDateFilter} rateChangeHandle={this.changeRateFilter}  searchHandler={this.search}/>
        
        </div>
       

        <RecommendList recommendedMovies = {this.state.recommendations}/>
      </div>
    );
  }
}

export default App;
