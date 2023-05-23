import React from "react";
import sunny from "../src/3741356_sun_sunny_weather_icon.svg";

export default function Result() {
  return (
    <div className="Result">
      <h2 className="CityName">London</h2>
      <div className="row">
        <div className="col-4">
          <img className="icon" src={sunny} alt="weather" width="80px" />
        </div>
        <div className="col-4">
          <div className="TemperatureContainer">
            <h1>20</h1>
            <span className="Units">
              °
              <a href="?" className="Celsius">
                C
              </a>{" "}
              | °
              <a href="?" className="Fahrenheit">
                F
              </a>
            </span>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li className="DayAndTime">Thursday</li>
            <li className="Description">Sunny</li>
            <li>
              Wind: <span className="Wind">5</span> km/h
            </li>
            <li>
              Humidity: <span className="Humidity">60</span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
