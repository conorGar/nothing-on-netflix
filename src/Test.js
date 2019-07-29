import React from 'react';
import Axios from 'axios'



class Test extends React.Component{


    constructor(props){
        super(props);
    }
//     var unirest = require("unirest");

// var req = unirest("GET", "https://unogs-unogs-v1.p.rapidapi.com/api.cgi");

// req.query({
// 	"t": "genres"
// });

// req.headers({
// 	"x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
// 	"x-rapidapi-key": "17788778b0mshf8dff8e0e4297a8p1142bejsn6aaf2c23812b"
// });


// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });


fetchData = () => {//endAirport, startAirport, startDate, endDate) => {
    return async (dispatch) => {
      try {
        const flights = await Axios({
          url: "https://unogs-unogs-v1.p.rapidapi.com/api.cgi",  //`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${startAirport}/${endAirport}/${startDate}/${endDate}`,
          method: 'GET',
          headers: {"X-RapidAPI-Key": "17788778b0mshf8dff8e0e4297a8p1142bejsn6aaf2c23812b"}
        })
        console.log(flights);
      } catch (error) {
        console.log(error)
      }
    }
  }

  fetchData();


    render(){
        return(
            <div></div>
        )
    }
}