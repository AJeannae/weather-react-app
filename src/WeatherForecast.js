import React from "react";
import "./Weather";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="day">Fri</div>
          <WeatherIcon url={props.data.icon_url} size={36} />
          <div className="-weather-forecast-temperatures">
            <span className="weather-forecast-high-temperature">80°</span>
            <span className="weather-forecast-low-temperature">68°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
