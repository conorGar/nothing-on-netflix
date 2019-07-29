import React from 'react';
import './SearchOptions.css';

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

    render(){
        return(
            <div className="searchContainer">
                <h1>I'm looking for a movie...</h1>
                    <div className="form-container">
                        {/* <div className="search-box"> */}
                        <select value={this.state.operation} onChange={this.onGenreFilterChange} className="search-box">
                            <option value="add">with lots of...</option>
                            <option value="horror">SPOOKY SCARY THINGS</option>
                            <option value="action">HEART-PUMPING ACTION</option>
                            <option value="adventure">ADVENTURE</option>
                            <option value="romance">WHOLESOME ROMANCE</option>
                            <option value="romance2">LESS-WHOLESOME ROMANCE</option>
                            <option value="comedy">GREAT GOOFS</option>
                        </select>
                        {/* </div> */}
                        {/* <input type="text" className="search-box" placeholder="with a lot of.."value={this.props.value}   onChange={this.props.onChange} name="genre-filter"></input> */}
                        {/* <input type="text" className="search-box" placeholder="that came out.."value="" name="date-filter"></input> */}
                        {/* <input type="text" className="search-box" placeholder="with scores that are at least..."value="" name="rating-filter"></input> */}
                        <select value={this.state.operation}  onChange={this.onDateFilterChange} className="search-box">
                            <option value="add">that came out...</option>
                            <option value="2010">VERY Recently.</option>
                            <option value="2000">Pretty recently.</option>
                            <option value="1980">A while ago</option>
                            <option value="1950">A long time ago.</option>
                            <option value="1900">It doesn't matter</option>
                        </select>

                        <select value={this.state.operation}  onChange={this.onRateFilterChange} className="search-box">
                            <option value="add">considered to be...</option>
                            <option value="4.3">Among the greatest movies ever made.</option>
                            <option value="4">Pretty good.</option>
                            <option value="3">Watchable.</option>
                            <option value="2">So bad it's good.</option>
                            <option value="1">So bad it's actually just bad.</option>
                            <option value="0">It doesn't matter</option>
                        </select>

                    </div>
                    <div className="search-button" onClick={this.props.searchHandler}>MAKE MY DECISIONS FOR ME! -></div>

            </div>
        )
    }
}

export default SearchOptions;