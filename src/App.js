// https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=67ff2d89a67c04d5e5f18cb0e7fa9e52
import React, { useState,useEffect } from 'react'
import Weather from '../src/components/Weather'
function App() {

  const [cityValue, setCityValue] = useState("Mumbai")
  const [myobj, setMyobj] = useState({})
  const [weatherType, setWeatherType] = useState(myobj.mood)
  const [font_icon, setFont_icon] = useState("wi-day-sunny")

  useEffect(() => {
    if(weatherType){
      switch (weatherType) {
        case "Clouds":setFont_icon("wi-day-cloudy")
          break;
        case "Clear":setFont_icon("wi-day-sunny")
          break;
        case "Haze":setFont_icon("wi-day-haze")
          break;
        case "Rain":setFont_icon("wi-day-rain")
          break;
        case "Sunny":setFont_icon("wi-day-sunny")
          break;
        default:setFont_icon("wi-day-sunny")
          break;
      }
    }
  }, [myobj])

  useEffect(() => {
    handleSearch();
  }, [])

  const handleSearch = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=67ff2d89a67c04d5e5f18cb0e7fa9e52&units=metric`
      var res = await fetch(url);
      const data = await res.json();
      if(data.cod === "404"){
        alert("Incorrect City name")
        return
      }
      var {temp,humidity} = data['main'];
      var {speed} = data['wind'];
      var {main:mood}= data['weather'][0];
      var {country}= data['sys'];
      var city = data['name'];
       var myobj = {
        city,temp,humidity,speed,mood,country
      }
      setMyobj(myobj)
      setWeatherType(myobj.mood)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="container">
        <div className="input">
          <input type="text" placeholder='Enter city name' name='cityN' value={cityValue} onChange={(event)=>{
            setCityValue(event.target.value)
          }} />
          <button onClick={()=>{
            handleSearch()
          }}>Search</button>
        </div>
          <Weather myobj = {myobj} font_icon={font_icon}/>
      </div>
    </>
  );
}

export default App;
