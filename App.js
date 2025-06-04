
import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const apiKey = "c70da672e2912abc8be6d8ff01292380";

  const getWeather = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const data = res.data;

      alert(

        `Weather in ${data.name}:\n` +
          `🌡 Temp: ${data.main.temp}°C\n` +
          `💧 Humidity: ${data.main.humidity}%\n` +
          `🌬 Wind: ${data.wind.speed} m/s\n` +
          `☁ Condition: ${data.weather[0].main}`
      );
      setCity(""); 

    }  catch (error) {
      console.error("API Error:", error);  
      alert("❌ City not found or error fetching data.");
    }
    
  };

  return (
  <div>
    <div className="heading">
      <h1>WELCOME TO WEATHER REPORT PANEL ☁</h1>
      <div className="marquee-container">
        <marquee className="marquee">thanks for visiting....❤️</marquee>
      </div>
    </div>

    <div className="home-pg">
      <form onSubmit={getWeather}>
        <header>WEATHER DASHBOARD</header>
        <input
          placeholder="ENTER PLACE"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
);


}

export default App;
