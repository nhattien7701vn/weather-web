import React from 'react'
import "./index.css"
import CityWeatherItem from './CityItems'
const CitySection = () => {
  return (<ul className='cityWeather-container'>

    <li className='cityWeather-items'>
      <CityWeatherItem />
    </li>
    
    <li className='cityWeather-items'>
      <CityWeatherItem />
    </li>
    
    <li className='cityWeather-items'>
      <CityWeatherItem />
    </li>
    
    <li className='cityWeather-items'>
      <CityWeatherItem />
    </li>
    
    <li className='cityWeather-items'>
      <CityWeatherItem />
    </li>
    
    <li className='cityWeather-items'>
      <CityWeatherItem />
    </li>
    
    <li className='cityWeather-items'>
      <CityWeatherItem />
    </li>
    
    <li className='cityWeather-items'>
      <CityWeatherItem />
    </li>

  </ul>
  )
}
export default CitySection
