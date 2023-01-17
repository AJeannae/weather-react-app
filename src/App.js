import React from "react";
import Weather from "./Weather";
import "./index.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://astonishing-sunflower-3f5c0b.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Alexandria Marszalek
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/AJeannae/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
