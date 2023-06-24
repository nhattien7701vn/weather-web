import React from 'react'
import './index.css'
const DayForecastItem = ({ timeLineTime, timeLineIcon, timeLineTemp }) => {
  const date = new Date(timeLineTime * 1000);
  return (<>
    <span className='timeLine-time'>{date.getHours()}{date.getMinutes() === 0 ? ":00" : date.getMinutes()}</span>
    <img className='timeLine-icon' src={timeLineIcon} alt="" />
    <span className='timeLine-temperature'>{timeLineTemp}<sup>°C</sup></span>
  </>
  )
}

export default DayForecastItem
