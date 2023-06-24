import React from 'react'
import './index.css'
const CityWeatherItem = () => {
  return (<>
    {/* {cityIcon} */}
    <img className='cityWeather-icon' src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="" />
    <div className="location-group">
      <h2 className='cityWeather-cityName'>Ho Chi Minh</h2>
      {/* cityLocation */}
      <span className='cityWeather-cityTime'>10:23</span>
      {/* {cityHour}:{cityMinute} */}
    </div>
    <p className='cityWeather-cityTemp'>31<sup>°C</sup></p>
  </>)
}

export default CityWeatherItem
