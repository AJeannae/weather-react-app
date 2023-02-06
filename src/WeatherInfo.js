import React from "react";
import "./Weather";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  console.log(props.data);
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <WeatherIcon code={props.data.icon} size={56} />

      <span className="temperature">{props.data.temperature}</span>
      <span className="unit">°F</span>

      <div className="container px-4 text-center">
        <div className="row gx-1">
          <div className="col">
            <div className="information-box">
              <div className="p-3">Description</div>
              <p className="text-capitalize">{props.data.description}</p>
            </div>
          </div>
        </div>

        <div className="row gx-1">
          <div className="col">
            <div className="information-box">
              <div className="p-3">Humidity</div>
              <p>{props.data.humidity}%</p>
            </div>
          </div>

          <div className="col">
            <div className="information-box">
              <div className="p-3">Wind Speed</div>
              <p>{props.data.wind} mph</p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
