import React, { useState } from 'react'
import './index.css'
import WeekForecast from '../../common/WeekForecast'
import DayForecast from '../../common/DayForecast'
const Description = ({weekForecast, timeLineList }) => {
  const [isShow, setIsShow] = useState(false)

  return (<>
    <section className={`weekForecast-section ${isShow ? "is-Show" : ""}`}>
      <WeekForecast
        amountDay="7"
        weekForecastTitle="7-day"
        weekForecast={weekForecast}
      />
      <button onMouseEnter={() => setIsShow(!isShow)} className='weekForecast-btnZoom'></button>
    </section>

    <section className={`todayForecast-section ${isShow ? "is-Show" : ""}`} >
      <DayForecast
        dayForecastTitle="Tomorow's"
        isShow={isShow}
        amountItem="3"
        timeLineList={timeLineList}
      />
    </section>
  </>
  )
}

export default Description
