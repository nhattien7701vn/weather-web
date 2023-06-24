import React, { useState } from 'react'
import './index.css'
import WeekForecastItem from './WeekInfoItem'
const WeekForecast = ({ weekForecast, weekForecastTitle, amountDay }) => {
  const [isShow, setIsShow] = useState(false)
  const amountDayOfWeek = weekForecast.slice(0, amountDay)
  function renderWeekInfoItem(item) {
    const itemDate = new Date(item.date_epoch * 1000)
    const currentDate = new Date().getDate()
    return (<li className='weekInfo-item'>
      <WeekForecastItem
        dayForecast={itemDate.getDate() === currentDate ? "Today" : itemDate.getDate()}
        conditionIcon={item.day.condition.icon}
        conditionText={item.day.condition.text}
        maxTempC={item.day.maxtemp_c}
        minTempC={item.day.mintemp_c}
      />
    </li>
    )
  }
  return (<>
    <div className='weekForecast-container'>
      <p className='weekForecast-title'>{weekForecastTitle} Forecast</p>
      <ul className='weekForecast-weekInfo'>
        {amountDayOfWeek.map(renderWeekInfoItem)}
      </ul>
      <button onMouseEnter={() => setIsShow(!isShow)} className='weekForecast-btnZoom'></button>
    </div>
  </>
  )
}

export default WeekForecast
