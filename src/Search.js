import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Result from "./Result";

export default function Search(props) {
  const [weather, setWeather] = useState({ loaded: false });
  const [city, setCity] = useState(props.city);

  function search() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8be2ee04844f8293aa2d5192b804b5f&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(city);
    search();
  }

  function handleStoreCity(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setWeather({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      name: response.data.name,
    });
  }

  if (weather.loaded) {
    return (
      <div className="Wrapper">
        <div className="row">
          <div className="col-8">
            <form onSubmit={handleSubmit} className="SearchCity" id="SearchForm">
              <input type="text" placeholder="What's the weather like in..." autocomplete="off" className="SearchInput" onChange={handleStoreCity} />
            </form>
          </div>
          <div className="col-2">
            <button form="SearchForm" type="submit" className="btn btn-light" id="btn-search">
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
        <Result weatherData={weather} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
