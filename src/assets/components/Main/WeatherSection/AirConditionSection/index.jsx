import React, { useState } from 'react'
import './index.css'
import AirConditionItem from './AirConditionItem'

const AirConditionSection = ({ isShow, setIsShow, feelLikeC, windKph, humidity, uvIndex, rainChance, visibilityKm, pressureHpa, sunsetTime }) => {
  return (
    <>
      <section className={`airCondition-section ${isShow ? "is-Show" : ""}`}>
        <p className='airCondition-title'>Air conditions</p>
        <ul className='airCondition-info'>

          <li className="airCondition-infoItem">
            <div className='airCondition-infoTitle'>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 25.9993V10C18 6.68629 20.6863 4 24 4C27.3137 4 30 6.68629 30 10V25.9993C32.4289 27.8237 34 30.7284 34 34C34 39.5228 29.5228 44 24 44C18.4772 44 14 39.5228 14 34C14 30.7284 15.5711 27.8237 18 25.9993Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" /><path d="M24 17V30" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M24 38C26.2091 38 28 36.2091 28 34C28 31.7909 26.2091 30 24 30C21.7909 30 20 31.7909 20 34C20 36.2091 21.7909 38 24 38Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" /></svg>              <span className='airCondition-infoText'>Feel Like</span>
            </div>
            <span className='airCondition-infoData'>{feelLikeC}<sup>°C</sup></span>
          </li>

          <li className="airCondition-infoItem">
            <div className='airCondition-infoTitle'>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17H10C7.79086 17 6 18.7909 6 21V21C6 23.2091 7.79086 25 10 25H12" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M22 33H19C16.7909 33 15 34.7909 15 37V37C15 39.2091 16.7909 41 19 41H22" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M27 7H24C21.7909 7 20 8.79086 20 11V11C20 13.2091 21.7909 15 24 15H27" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M24 15H40" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M12 25H42" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M22 33H34" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </div>
            <span className='airCondition-infoData'>{windKph} km/h</span>
          </li>

          <li className="airCondition-infoItem">
            <div className='airCondition-infoTitle'>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 20V22H9V20C9 16.6863 13.0294 14 18 14C22.9706 14 27 16.6863 27 20Z" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M42 44V12.5C42 7.80558 36.6274 4 30 4C23.3726 4 18 7.80558 18 12.5V14" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M18 29L18 28" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M10.1711 28.0303L9.8291 28.97" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M4.17112 43.0303L3.8291 43.97" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M18 44L18 43" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M18 37L18 35" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M7.34224 35.0603L6.6582 36.9397" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>              <span className='airCondition-infoText'>Humidity</span>
            </div>
            <span className='airCondition-infoData'>{humidity}%</span>
          </li>

          <li className="airCondition-infoItem">
            <div className='airCondition-infoTitle'>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.15039 9.15088L11.3778 11.3783" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M3 24H6.15" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M9.15039 38.8495L11.3778 36.6221" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M38.8495 38.8495L36.6221 36.6221" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M44.9996 24H41.8496" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M38.8495 9.15088L36.6221 11.3783" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M24 3V6.15" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" fill="#333" stroke="#333" stroke-width="4" stroke-linejoin="round" /><path d="M24 45.0001V41.8501" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>              <span className='airCondition-infoText'>UV Index</span>
            </div>
            <span className='airCondition-infoData'>
              {uvIndex} {uvIndex > 5 ? "High" : ""}
            </span>
          </li>

        </ul>
        <button onClick={() => setIsShow(true)} className='airCondition-btnSeeMore'>
          <span>See more</span>
        </button>
      </section>
      <section className={`airCondition-seeMore ${isShow ? "is-show" : ""}`}>
        <ul className='seeMore-info'>

          <li className='seeMore-infoItem'>
            <AirConditionItem infoTitle="UV Index" infoData={uvIndex > 5 ? uvIndex + " High" : ""}>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.15039 9.15088L11.3778 11.3783" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M3 24H6.15" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M9.15039 38.8495L11.3778 36.6221" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M38.8495 38.8495L36.6221 36.6221" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M44.9996 24H41.8496" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M38.8495 9.15088L36.6221 11.3783" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M24 3V6.15" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" fill="#333" stroke="#333" stroke-width="4" stroke-linejoin="round" /><path d="M24 45.0001V41.8501" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </AirConditionItem>
          </li>

          <li className='seeMore-infoItem'>
            <AirConditionItem infoTitle="Wind" infoData={windKph + " km/h"}>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17H10C7.79086 17 6 18.7909 6 21V21C6 23.2091 7.79086 25 10 25H12" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M22 33H19C16.7909 33 15 34.7909 15 37V37C15 39.2091 16.7909 41 19 41H22" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M27 7H24C21.7909 7 20 8.79086 20 11V11C20 13.2091 21.7909 15 24 15H27" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M24 15H40" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M12 25H42" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M22 33H34" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </AirConditionItem>
          </li>

          <li className='seeMore-infoItem'>
            <AirConditionItem infoTitle="Humidity" infoData={humidity + "%"}>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 20V22H9V20C9 16.6863 13.0294 14 18 14C22.9706 14 27 16.6863 27 20Z" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M42 44V12.5C42 7.80558 36.6274 4 30 4C23.3726 4 18 7.80558 18 12.5V14" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M18 29L18 28" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M10.1711 28.0303L9.8291 28.97" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M4.17112 43.0303L3.8291 43.97" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M18 44L18 43" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M18 37L18 35" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M7.34224 35.0603L6.6582 36.9397" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </AirConditionItem>
          </li>

          <li className='seeMore-infoItem'>
            <AirConditionItem infoTitle="Visibility" infoData={visibilityKm + " km"}>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 41C33.9411 41 42 32.678 42 27C42 21.322 33.9411 13 24 13C14.0589 13 6 21.3278 6 27C6 32.6722 14.0589 41 24 41Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" /><path d="M24 33C27.3137 33 30 30.3137 30 27C30 23.6863 27.3137 21 24 21C20.6863 21 18 23.6863 18 27C18 30.3137 20.6863 33 24 33Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" /><path d="M13.2637 11.2661L15.8582 14.8863" stroke="#333" stroke-width="4" stroke-linecap="round" /><path d="M35.625 11.7104L33.0304 15.3307" stroke="#333" stroke-width="4" stroke-linecap="round" /><path d="M24.0088 7V13" stroke="#333" stroke-width="4" stroke-linecap="round" /></svg>
            </AirConditionItem>
          </li>

          <li className='seeMore-infoItem'>
            <AirConditionItem infoTitle="Feel Like" infoData={feelLikeC + "°C"}>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 25.9993V10C18 6.68629 20.6863 4 24 4C27.3137 4 30 6.68629 30 10V25.9993C32.4289 27.8237 34 30.7284 34 34C34 39.5228 29.5228 44 24 44C18.4772 44 14 39.5228 14 34C14 30.7284 15.5711 27.8237 18 25.9993Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" /><path d="M24 17V30" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M24 38C26.2091 38 28 36.2091 28 34C28 31.7909 26.2091 30 24 30C21.7909 30 20 31.7909 20 34C20 36.2091 21.7909 38 24 38Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" /></svg>
            </AirConditionItem>
          </li>

          <li className='seeMore-infoItem'>
            <AirConditionItem infoTitle="Chance of rain" infoData={rainChance > 80 ? rainChance + "% High" : ""}>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 44C32.2843 44 39 37.2843 39 29C39 15 24 4 24 4C24 4 9 15 9 29C9 37.2843 15.7157 44 24 44Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M9 29.0001C9 37.2844 15.7157 44.0001 24 44.0001C32.2843 44.0001 39 37.2844 39 29.0001C39 29.0001 30 32.0001 24 29.0001C18 26.0001 9 29.0001 9 29.0001Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" /></svg>
            </AirConditionItem>
          </li>

          <li className='seeMore-infoItem'>
            <AirConditionItem infoTitle="Pressure" infoData={pressureHpa + " hPA"}>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.2972 18.7786C30.2972 18.7786 27.0679 27.8809 25.5334 29.47C23.9988 31.0591 21.4665 31.1033 19.8774 29.5687C18.2882 28.0341 18.244 25.5019 19.7786 23.9127C21.3132 22.3236 30.2972 18.7786 30.2972 18.7786Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" /><path d="M38.8492 38.8492C42.6495 35.049 45 29.799 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 29.799 5.35051 35.049 9.15076 38.8492" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M24 4V8" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M38.8454 11.1421L35.7368 13.6593" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M42.5223 27.2328L38.6248 26.333" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.47737 27.2328L9.37485 26.333" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M9.15463 11.142L12.2632 13.6593" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </AirConditionItem>
          </li>

          <li className='seeMore-infoItem'>
            <AirConditionItem infoTitle="Sunset" infoData={sunsetTime}>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 8L33 34H5L19 8Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" /><path d="M29 26L34 20L43 34H32" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 41L38 41" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><circle cx="38" cy="10" r="3" fill="none" stroke="#333" stroke-width="4" /></svg>
            </AirConditionItem>
          </li>
          <button onClick={() => setIsShow(false)} className='seeMore-btnHide'>
            <img src="src/assets/icons/Icon-hide.png" alt="" />
          </button>
        </ul>
      </section>
    </>
  )
}

export default AirConditionSection
