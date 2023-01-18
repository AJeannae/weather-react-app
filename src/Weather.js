import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(prop) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      feels_like: Math.round(response.data.temperature.feels_like),
      iconUrl: response.data.condition.icon_url,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-4">
              <input type="submit" value="Search" className="btn w-100" />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
        </ul>
        <img src={weatherData.iconUrl} alt={weatherData.description} />
        <span className="temperature">{weatherData.temperature}</span>
        <span className="unit">°F</span>

        <div className="container px-4 text-center">
          <div className="row gx-1">
            <div className="col">
              <div className="information-box">
                <div className="p-3">Description</div>
                <p className="text-capitalize">{weatherData.description}</p>
              </div>
            </div>
            <div className="col">
              <div className="information-box">
                <div className="p-3">Feels Like</div>
                <p>{weatherData.feels_like}°F</p>
              </div>
            </div>
          </div>

          <div className="row gx-1">
            <div className="col">
              <div className="information-box">
                <div className="p-3">Humidity</div>
                <p>{weatherData.humidity}%</p>
              </div>
            </div>

            <div className="col">
              <div className="information-box">
                <div className="p-3">Wind Speed</div>
                <p>{weatherData.wind} mph</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a2b23253o6fc64ee4f6fffd00bcta52e";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${prop.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
