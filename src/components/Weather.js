import '../components_style/weather.css'
import '../components_style/weather-icons.min.css'

import React from 'react'

const Weather = ({myobj,font_icon}) => {

  return (
    <>
      <div className="card">
        <div className="icon">
          <i className={`wi  ${font_icon}`} id='icons'></i>
        </div>
        <div className="details">
          <div className="temp small-card-details">{myobj.temp+" "}<sup>o</sup>C</div>
          <div className="locationAndTime  small-card-details">
            <div className="city">{myobj.city}</div>
            <div className="time">{new Date().toLocaleString()}</div>
          </div>
        </div>
        <div className="moreDetails">
          <div className="small-card-more-details">
            <div className="title">Humidity</div>
            <div className="value">{myobj.humidity}</div>
          </div>
          <div className="small-card-more-details">
            <div className="title">Wind</div>
            <div className="value">{myobj.speed}</div>

          </div>
          <div className="small-card-more-details">
            <div className="title">Type</div>
            <div className="value" >{myobj.mood}</div>

          </div>
          <div className="small-card-more-details">
            <div className="title">Country</div>
            <div className="value">{myobj.country}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Weather