import React from 'react'
import './index.css'
const WeekForecastItem = ({ dayForecast, conditionIcon, conditionText, maxTempC, minTempC }) => {
  return (<>
    <span className='weekInfo-day'>{dayForecast}</span>
    <img className='weekInfo-icon' src={conditionIcon} alt="" />
    <strong className='weekInfo-condition'>{conditionText}</strong>
    <span className='weekInfo-minMAx'><strong>{maxTempC}<sup>°C</sup></strong>/{minTempC}<sup>°C</sup></span>
  </>

  )
}

export default WeekForecastItem
