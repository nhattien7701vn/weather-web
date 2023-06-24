import React, { useEffect } from 'react'
import './index.css'
import DayForecastItem from './DayForecastItem'

const DayForecast = ({ timeLineList, amountItem, dayForecastTitle }) => {
  const timeLine = timeLineList.filter((_, index) => index % (24 / amountItem) === 0);
  function renderDayForecastItem(timeline) {
    return <li className='timeLine-item'>
      <DayForecastItem
        timeLineTime={timeline.time_epoch}
        timeLineIcon={timeline.condition.icon}
        timeLineTemp={timeline.temp_c}
      />
    </li>
  }
  return (
    <div className="todayForecast-container">
      <p className='todayForecast-title'>{dayForecastTitle} forecast</p>
      <ul className='todayForecast-timeLine'>{timeLine.map(renderDayForecastItem)}</ul>
    </div>
  )
}

export default DayForecast
