import { faLocationDot, faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';

function SearchBar() {
  // "city"  state will ssave the input data and based on the event on this state, useEffect will start excuting i.e. 
  // mouting state.
  const [city, setCity] = useState("");

  // created an object to store all the required data to be render on the dashboard..
  const [weatherData, setWeatherData] = useState({ temprature: "", humidity: "", windSpeed: "", img: "", feelslike: "", });


  // this key is used to access the data from the API. 
  const key = `9e658bbeb3404de3b0290354242404`;

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`);
      const data = await response.json();
      setWeatherData({ temprature: data?.current?.temp_c, humidity: data?.current?.humidity, feelslike: data?.current?.feelslike_c, windSpeed: data?.current?.wind_kph, img: data?.current?.condition?.icon, location: data?.location?.localtime });
    };


    // if city has some value then it will execute the function "fetchweatherdata"
    if (city) {
      fetchWeatherData();
    }
  }, [city]);


  return (
    <div className='container'>
      <div className='search'>
        <FontAwesomeIcon id='loc' icon={faLocationDot} />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City name..."
        />
      </div>
      <div className='dashboard' >
        <Dashboard weatherData={weatherData} />
      </div>
    </div>
  );
}

export default SearchBar;