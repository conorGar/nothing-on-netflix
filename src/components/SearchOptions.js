import React from 'react';
import './SearchOptions.css';
import {Router, Route, Link } from 'react-router-dom';

class SearchOptions extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    onGenreFilterChange = (event) =>{
        const newValue = event.target.value;
        this.props.genreChangeHandle(newValue);
        console.log(newValue)
    }

    onDateFilterChange = (event) =>{
        const newValue = event.target.value;
        this.props.dateChangeHandle(newValue);
        console.log(newValue)
    }

    onRateFilterChange = (event) => {
        const newValue = event.target.value;
        this.props.rateChangeHandle(newValue);
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



    render(){
        return(
            <div className="searchContainer">
                <h2>I'm looking for a movie...</h2>
                    <div className="form-container">
                        {/* <div className="search-box"> */}
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
                        {/* </div> */}
                        {/* <input type="text" className="search-box" placeholder="with a lot of.."value={this.props.value}   onChange={this.props.onChange} name="genre-filter"></input> */}
                        {/* <input type="text" className="search-box" placeholder="that came out.."value="" name="date-filter"></input> */}
                        {/* <input type="text" className="search-box" placeholder="with scores that are at least..."value="" name="rating-filter"></input> */}
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
                            <option value="8">Pretty good.</option>
                            <option value="6">I'll settle for watchable.</option>
                            <option value="4">So bad it's good.</option>
                            <option value="1">So bad it's actually just bad.</option>
                            <option value="0">It doesn't matter</option>
                        </select>

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