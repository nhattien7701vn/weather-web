import React from 'react'
import './index.css'

const WeatherInfo = ({ location, currentTemp, rainChance, currentIcon }) => {
  return (<>
    <div className="weatherInfo-container">
      <div className="weatherInfo-left">
        <h1>{location}</h1>
        <p>Chance of rain: {rainChance}%</p>
        <h2>{currentTemp}<sup>°C</sup></h2>
      </div>
      <div className='weatherInfo-right'>
        <img src={currentIcon} alt="" />
      </div>
    </div>
  </>
  )
}

export default WeatherInfo
