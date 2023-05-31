import { useState } from "react";
import sunny from "../src/3741356_sun_sunny_weather_icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Search() {
  const [weather, setWeather] = useState({ loaded: false });

  function handleResponse(response) {
    setWeather({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  if (weather.loaded) {
    return (
      <div className="Wrapper">
        <div className="row">
          <div className="col-8">
            <form className="SearchCity">
              <input type="text" placeholder="" autocomplete="off" className="SearchInput" />
            </form>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-light" id="btn-search">
              <i>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="FAicons" />
              </i>
            </button>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-light" id="btn-mylocation">
              <FontAwesomeIcon icon={faLocationDot} className="FAicons" />
            </button>
          </div>
        </div>
        <div className="Result">
          <h2 className="CityName">London</h2>
          <div className="row">
            <div className="col-4">
              <img className="icon" src={sunny} alt="weather" width="80px" />
            </div>
            <div className="col-4">
              <div className="TemperatureContainer">
                <h1>{Math.round(weather.temperature)}</h1>
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
                    <FormattedDate date={weather.date} />
                  </div>
                </li>
                <li className="Description text-capitalize">{weather.description}</li>
                <li>
                  Wind: <span className="Wind">{Math.round(weather.wind)}</span> km/h
                </li>
                <li>
                  Humidity: <span className="Humidity">{weather.humidity}</span>%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=d8be2ee04844f8293aa2d5192b804b5f&units=metric`;
    axios.get(url).then(handleResponse);

    return "Loading...";
  }
}
