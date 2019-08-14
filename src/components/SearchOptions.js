import React from 'react';

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


import './SearchOptions.css';
import {Router, Route, Link } from 'react-router-dom';

class SearchOptions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentSelectGenre: 0,
            currentSelectDate: 0,
            currentSelectRating:0

        };
    }



    onGenreFilterChange = (event) =>{
        const newValue = event.value;
        this.props.genreChangeHandle(newValue);

        let index = 0;
        if(event.value === 'horror'){
            index = 1;
        }else if(event.value === 'action'){
            index = 2;
        }else if(event.value === 'adventure'){
            index = 3;
        }else if(event.value === 'romance'){
            index = 4;
        }else if(event.value === 'thriller'){
            index = 5;
        }else if(event.value === 'comedy'){
            index = 6;
        }else if(event.value === 'drama'){
            index = 7;
        }

        this.setState({
            currentSelectGenre:index
        })
        console.log(newValue)
    }

    onDateFilterChange = (event) =>{
        const newValue = event.value;
        this.props.dateChangeHandle(newValue);

        let index = 0;
        if(event.value === '2010'){
            index = 1;
        }else if(event.value === '2000'){
            index = 2;
        }else if(event.value === '1980'){
            index = 3;
        }else if(event.value === '1950'){
            index = 4;
        }else if(event.value === '1900'){
            index = 5;
        }

        this.setState({
            currentSelectDate:index
        })
        console.log(newValue)
    }

    onRateFilterChange = (event) => {
        const newValue = event.value;
        this.props.rateChangeHandle(newValue);

        let index = 0;
        if(event.value === '8'){
            index = 1;
        }else if(event.value === '7'){
            index = 2;
        }else if(event.value === '6'){
            index = 3;
        }else if(event.value === '4'){
            index = 4;
        }else if(event.value === '1'){
            index = 5;
        }else if(event.value === '0'){
            index = 6;
        }

        this.setState({
            currentSelectRating:index
        })

        console.log(newValue)
    }


    onLanguageChange = (event) => {
        const newValue = event.target.value;
        this.props.languageChangeHandle(newValue);
    }       

    onMovieButtonClick = (event) => {
        this.props.searchHandler("Movie",event);
    }

    onShowButtonClick = (event) => {
        this.props.searchHandler("Series",event);

    }

    dropdownClick= (event) =>{
        this.setState({
            dropdownClassName: 'dropdown-list-show'
        })
    }

    testFunction = (event) =>{
        console.log(event)
    }


    render(){
        const options = [
            {value:"add", label:"with lots of:"},
            {value:"horror", label:"Spooky Things", indexVal: 1, className: 'menuClass'},
            {value:"action", label:"Heart-Pumping Action!", index: 2, className: 'menuClass'},
            {value:"adventure", label:"Adventure", index: 3, className: 'menuClass'},
            {value:"romance", label:"Romance", index: 4, className: 'menuClass'},
            {value:"thriller", label:"Suspense and Thrills", index: 5, className: 'menuClass'},
            {value:"comedy", label:"Great Goofs", index: 6, className: 'menuClass'},
            {value:"drama", label:"Drama", index: 7, className: 'menuClass'},

        ];

        const releaseOptions = [
            {value:"add", label:"that came out:"},
            {value:"2010", label:"Very Recently", className: 'menuClass'},
            {value:"2000", label:"Pretty Recently", className: 'menuClass'},
            {value:"1980", label:"A while ago", className: 'menuClass'},
            {value:"1950", label:"Way. WAY. Back.", className: 'menuClass'},
            {value:"1900", label:"It doesn't matter.", className: 'menuClass'},

        ];
        const ratingOptions = [
            {value:"add", label:"considered to be:"},
            {value:"8", label:"One of the greatest movies ever.", className: 'menuClass'},
            {value:"7", label:"At least pretty good.", className: 'menuClass'},
            {value:"6", label:"I'll settle for watchable", className: 'menuClass'},
            {value:"4", label:"So bad it's good.", className: 'menuClass'},
            {value:"1", label:"So bad it's actually just bad.", className: 'menuClass'},
            {value:"0", label:"It doesn't matter.", className: 'menuClass'},


        ];
        return(
            <div className="searchContainer">
                <h2>I'm looking for a movie...</h2>
                    <div className="form-container">

                        <Dropdown  controlClassName= 'dropdown'options={options} onChange={this.onGenreFilterChange} value={options[this.state.currentSelectGenre]} placeholder="Select option"/>
                        <Dropdown  controlClassName= 'dropdown'options={releaseOptions} onChange={this.onDateFilterChange} value={releaseOptions[this.state.currentSelectDate]} placeholder="Select option"/>
                        <Dropdown  controlClassName= 'dropdown'options={ratingOptions} onChange={this.onRateFilterChange} value={ratingOptions[this.state.currentSelectRating]} placeholder="Select option"/>
{/* 
                        <select value={this.state.operation} onChange={this.onGenreFilterChange} className="search-box">
                            <option value="add">with lots of: </option>
                            <option value="horror">Spooky Things</option>
                            <option value="action">Heart-Pumping Action</option>
                            <option value="adventure">Adventure</option>
                            <option value="romance">Romance</option>
                            <option value="thriller">Suspense and Thrills</option>
                            <option value="comedy">Great Goofs</option>
                            <option value="drama">Drama</option>
                        </select>
                       
                        <select value={this.state.operation}  onChange={this.onDateFilterChange} className="search-box" placeholder="....">
                            <option value="add">that came out:</option>
                            <option value="2010">VERY Recently.</option>
                            <option value="2000">Pretty recently.</option>
                            <option value="1980">A while ago</option>
                            <option value="1950">A long time ago.</option>
                            <option value="1900">It doesn't matter</option>
                        </select> 

                        <select value={this.state.operation}  onChange={this.onRateFilterChange} className="search-box">
                            <option value="add">considered to be:</option>
                            <option value="8.3">Among the greatest movies ever made.</option>
                            <option value="7.3">Pretty good.</option>
                            <option value="6">I'll settle for watchable.</option>
                            <option value="4">So bad it's good.</option>
                            <option value="1">So bad it's actually just bad.</option>
                            <option value="0">It doesn't matter</option>
                        </select> */}

                        <div className="languages-checkbox">
                            <input type="radio" name= 'language' value='English' onChange={this.onLanguageChange}/><label>English</label>
                            <input type="radio" name= 'language' value='Korean' onChange={this.onLanguageChange}/><label>Korean</label>
                            <input type="radio" name= 'language' value='Japanese' onChange={this.onLanguageChange}/><label>Japanese</label>
                            <input type="radio" name= 'language' value='Any' onChange={this.onLanguageChange}/><label>Any</label>
                            {/* <input type="radio" name= 'language' value='100'/><label>English</label>
                            <input type="radio" name= 'language' value='101'/><label>Korean</label>
                            <input type="radio" name= 'language' value='102'/><label>Japanese</label>
                            <input type="radio" name= 'language' value='103'/><label>French</label> */}
                            {/* <input type="checkbox" name= 'Spanish' value='104'>Spanish</input>
                            <input type="checkbox" name= 'German' value='105'>German</input>
                            <input type="checkbox" name= 'Swedish' value='106'>Swedish</input>
                            <input type="checkbox" name= 'Other' value='101'>Other</input> */}

                        </div>

                    </div>
                    {/* <Link to="/info" className="search-button" onClick={this.props.searchHandler} >SEARCH!</Link> */}
                    <div className="button-container">
                    
                        <div className="search-button" onClick={this.onMovieButtonClick}>
                            <p className="find-movies-text">Find Movies</p>
                        </div>
                        {/* <div className="search-button2" onClick={this.onShowButtonClick}>
                            <p className="find-movies-text">Find Shows</p>
                        </div> */}
                    </div>

            </div>
        )
    }
}

export default SearchOptions;