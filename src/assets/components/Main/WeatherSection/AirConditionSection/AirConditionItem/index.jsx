import React, { Children } from 'react'
import './index.css'

const AirConditionItem = ({ infoTitle, infoData, children }) => {
  return (<>
    <div className='seeMore-infoTitle'>
      {children}
      <span className='seeMore-infoText'>{infoTitle}</span>
    </div>
    <span className='seeMore-infoData'>{infoData}</span>
  </>
  )
}

export default AirConditionItem
