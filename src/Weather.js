import React from "react";
import "./Weather.css";

export default function Weather() {
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

      <h1>New York</h1>
      <ul>
        <li>Monday January 16, 2023</li>
      </ul>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="Sunny"
      />
      <span className="temperature">34</span>
      <span className="unit">°F</span>

      <div className="container px-4 text-center">
        <div className="row gx-1">
          <div className="col">
            <div className="information-box">
              <div className="p-3">Description</div>
              <p>Sunny</p>
            </div>
          </div>
          <div className="col">
            <div className="information-box">
              <div className="p-3">Precipitation</div>
              <p>0 %</p>
            </div>
          </div>
        </div>

        <div className="row gx-1">
          <div className="col">
            <div className="information-box">
              <div className="p-3">Humidity</div>
              <p>39%</p>
            </div>
          </div>

          <div className="col">
            <div className="information-box">
              <div className="p-3">Wind Speed</div>
              <p>7 mph</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
