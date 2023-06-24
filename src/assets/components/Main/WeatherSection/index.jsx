import React from 'react'
import './index.css'
import WeatherInfo from './WeatherInfo'

const WeatherSection = ({ currentIcon, location, currentTemp, rainChance }) => {
  return (
    <section className="weather-section">
      <WeatherInfo
        currentIcon={currentIcon}
        location={location}
        currentTemp={currentTemp}
        rainChance={rainChance} />
    </section>
  )
}

export default WeatherSection
