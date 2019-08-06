import React from 'react';
import {Router, Redirect, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import Home from './components/home/Home';
import RecommendList from './components/RecommendList/RecommendList';
import InfoPage from './components/InfoPage/InfoPage'

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
        ratingEndFilter: '10',
        typeFilter: 'Movie',
        recommendations: [],
        displayedTitle: '',
        displayedRating: '',
        displayedSynopsis: '',
        displayedImage: ''
    }
    this.genreArrarys = {
      horror: [10695,10944,1694,42023,45028,48303,61546,75405,75804,75930,8195,83059,8711,89585],
      action: [10673,10702,11804,11828,1192487,1365,1568,2125,2653,43040,43048,4344,46576,75418,76501,77232,788212,801362,852490,899,9584],
      comedy: [1009,10256,10375,105,10778,11559,11755,1208951,1333288,1402,1747,17648,2030,2700,31694,3300,34157,3519,3996,4058,4195,43040,4426,4906,52104,52140,52847,5286,5475,5610,56174,58905,59169,61132,61330,6197,63092,63115,6548,711366,7120,72407,7539,77599,77907,78163,78655,79871,7992,852492,869,89585,9302,9434,9702,9736],
      adventure: [1365],
      romance: [29281,36103,502673],
      drama: [11,11075,11714,1208954,1255,12994,13158, 2150, 25955, 26009, 2696, 2748, 2757, 2893, 29809, 3179, 31902,34204, 3653,3682, 384, 3916, 3947, 4282,4425,452,4961, 500, 5012, 52148, 52904,56169, 5763, 58677, 58755, 58796, 59064, 6206, 62235, 6616, 6763, 68699, 6889, 711367, 71591, 72354, 7243, 7539, 75459, 76507, 78628, 852493, 89804, 9299, 9847, 9873],
      thriller: [10306,10499,10504,10719,11014,11140,1138506, 1321,1774, 3269, 43048,46588,5505,58798, 65558, 6867, 75390, 78507, 799, 852488, 8933, 89811, 9147, 972]
    }

    this.testMovie = {
      image: "https://occ-0-2433-2705.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABeThSRoSA1795AhEnR15YSEJ3ZFqGbCqR1OQAt7j1778VdZe0nGL-yOxoAGL8AhAcgpsgwcV299ua19rwl-oZq3OPnBwWV4.jpg?r=a85",
      synopsis:"A soldier returns home from the Iraq War without his friend since training, launching an intense investigation into the mysterious disappearance.",
      title:"The Yellow Birds Yellow Birds Yellow Birds",
      rating:6
    }

  }

  changeGenreFilter = (newFilter) =>{
    this.setState({
      genreFilter: this.genreArrarys[newFilter]
    });

  }

  changeDateFilter = (newFilter) =>{
    let newEndDateFilter = '2019';


    if(newFilter==="1900"){
      newEndDateFilter = '2019';
    }else if(parseInt(newFilter)+20 < 2019){
      newEndDateFilter = parseInt(newFilter) + 20

    }

    this.setState({
      dateFilter: newFilter,
      dateEndFilter: newEndDateFilter
    });

  }

  changeRateFilter = (newFilter) =>{
    let rateEnd = 10;
    if(newFilter < 5){
      rateEnd = parseInt(newFilter) +2;
    }else{
      rateEnd = 10;
    }
    this.setState({
      ratingFilter: newFilter,
      ratingEndFilter: rateEnd
    });

  }

  scrambleArray = (array) =>{
    let j,x,i;
    for(i = array.length; i > 0; i--){
      j = Math.floor(Math.random()* (i + 1));
      x= array[i];
      array[i] = array[j];
      array[j] = x;
    }

    return array;
  }

  search = async(e) => {
    e.preventDefault();
    
    console.log("Search activated");
    const REACT_APP_API_KEY =  process.env.REACT_APP_API_TOKEN;

    try{                                                                                  
  //  const apiUrl = `https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=-!${this.state.dateFilter},${this.state.dateEndFilter}-!0,5-!${this.state.ratingFilter},${this.state.ratingEndFilter}-!0,10-!${this.state.genreFilter}-!${this.state.typeFilter}-!Any-!Any-!gt100-!{downloadable}&t=ns&cl=78&st=adv&ob=Relevance&p=1&sa=and`;
   const apiUrl =  `https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=-!${this.state.dateFilter},${this.state.dateEndFilter}-!0,5-!${this.state.ratingFilter},10-!${this.state.genreFilter}-!Any-!Any-!Any-!gt100-!{downloadable}&t=ns&cl=78&st=adv&ob=Relevance&p=1&sa=and`;

      
      console.log( "API url: " + apiUrl);
      // const apiResponse = await Axios.get(apiUrl)
      // .header("X-RAPIDAPI-KEY", REACT_APP_API_KEY); 
      
      const apiResponse = await Axios({
        url: apiUrl,
        method: 'GET',
        headers: {"X-RapidAPI-Key": REACT_APP_API_KEY,
                  "X-RapidAPI-Host":"unogs-unogs-v1.p.rapidapi.com"}
      })

      const movieData = apiResponse.data;
      console.log(apiResponse);
      console.log(movieData.ITEMS);


      if(apiResponse.status === 200){
        let randomMovies = [];
        if(movieData.ITEMS.length > 4){
          let scrambledArray = this.scrambleArray(movieData.ITEMS);
          console.log("scrambled array:" + scrambledArray);
            for(let i = 0; i < 4; i++){
                // let mov = movieData.ITEMS[Math.floor(Math.random()*movieData.ITEMS.length)];
                randomMovies.push(scrambledArray[i]);
            }
        }else{
            randomMovies = movieData.ITEMS;
        }
        console.log(randomMovies);
        this.setState(prevState => ({
          recommendations: randomMovies
        }));
      } 
    }catch{

    }

  }

  // search = async(e) => {
  //   e.preventDefault();
  //   console.log("Search APP activate");
  //   this.setState(prevState => ({
  //         recommendations: [this.testMovie, this.testMovie]
  //   }));

  // }

  handleClearList = () =>{
    this.setState({
      recommendations: []
    });
  }

  handleDisplayedInfo = (title,rating,synopsis,image) =>{
    this.setState({
      displayedTitle: title,
      displayedRating: rating,
      displayedSynopsis: synopsis,
      displayedImage: image
    });
  }



  render(){
    let infoPage = false;
    let reditectHolder;
    if(this.state.recommendations.length > 0){
      infoPage = true;
      console.log(this.state.recommendations);
      reditectHolder = <Redirect to="/info"/>
    }
    return (

      <div className="app-container">

      <Route exact path="/" render={() => (
        <Redirect to="/home"/>
      )}/>

        {reditectHolder}

        <Route path='/home' render={(routeProps) => (<Home {...routeProps}  genreChangeHandle={this.changeGenreFilter} dateChangeHandle={this.changeDateFilter} rateChangeHandle={this.changeRateFilter}  searchHandler={this.search}/>)} />


       <Route path='/info' render={() => (<InfoPage title={this.state.displayedTitle} rating={this.state.displayedRating} synopsis={this.state.displayedSynopsis} image={this.state.displayedImage} clearList = {this.handleClearList}/>)}/>
       {/* <div className = 'info-page-container'>
            
       </div> */}
        <RecommendList recommendedMovies = {this.state.recommendations} handleInfoDisplayFunction={this.handleDisplayedInfo}/>

      {/* <Route path='/home' render={(routeProps) => (<RecommendList {...routeProps} recommendedMovies = {this.state.recommendations} handleInfoDisplayFunction={this.handleDisplayedInfo}/>)}/> */}
      </div>
    );
  }
}

export default App;

