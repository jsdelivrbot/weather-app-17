import React, {Component} from "react";
import {connect} from "react-redux";
class WeatherList extends Component{
  render(){
      return(
        <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Tempertaure</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
        </table>
      )
  }
}
function mapStateToProps({weather}){
  return {weather}; // {weather} === {weather: weather} === {state = state.weather}
}
export defualt connect(mapStateToProps)(WeatherList);
