import React from "react";
import sunny from "../src/3741356_sun_sunny_weather_icon.svg";
import FormattedDate from "./FormattedDate";

export default function Result(props) {
  return (
    <div className="Result">
      <h2 className="CityName">{props.weatherData.name}</h2>
      <div className="row">
        <div className="col-4">
          <img className="icon" src={sunny} alt="weather" width="80px" />
        </div>
        <div className="col-4">
          <div className="TemperatureContainer">
            <h1>{Math.round(props.weatherData.temperature)}</h1>
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
            <li className="DayAndTime">
              <div>
                <FormattedDate date={props.weatherData.date} />
              </div>
            </li>
            <li className="Description text-capitalize">{props.weatherData.description}</li>
            <li>
              Wind: <span className="Wind">{Math.round(props.weatherData.wind)}</span> km/h
            </li>
            <li>
              Humidity: <span className="Humidity">{props.weatherData.humidity}</span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
