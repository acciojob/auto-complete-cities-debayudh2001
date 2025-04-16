
import React, { useMemo, useRef, useState } from "react";
import './../styles/App.css';

let cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Surat",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Faridabad",
  "Meerut",
  "Rajkot",
  "Varanasi",
  "Srinagar",
  "Aurangabad",
  "Dhanbad"
];

const App = () => {
  const [city, setCity] = useState("")
  const [filteredCities, setFilteredCities] = useState([])

  function handleClick(name) {
    setCity(name)
    setFilteredCities([])
  }

  function handleChange(e) {
    setCity(e.target.value)
    setFilteredCities(cities.filter(ct => ct.toLowerCase().includes(city)))
  }

  function handleMouseOver(e) {
    e.target.style.backgroundColor = "green"
    e.target.style.color = "white"
    e.target.style.cursor = "pointer"
  }

  function handleMouseOut(e) {
    e.target.style.backgroundColor = "white"
    e.target.style.color = "black"
  }

  //console.log(filteredCities)

  return (
    <div>
      <h2>Search cities of India:</h2>
      <input type="text" value={city} onChange={handleChange} style={{ width: "250px", padding: "6px", marginBottom: "10px" }} />
      {filteredCities.length !== 0 &&
        <div style={{ width: "265px", maxHeight: "265px", border: "2px solid black", overflowY: "auto", overflowX: "hidden"}}>
          {filteredCities.map((item, ind) => {
            return <div key={ind} style={{width: "100%", borderBottom: "1px solid grey", padding: "8px"}} onClick={() => handleClick(item)} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{item}</div>
          })}
        </div>
      }
    </div>
  )
}

export default App
