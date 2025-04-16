
import React, { useEffect, useMemo, useRef, useState } from "react";
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

  useEffect(() => {
    setFilteredCities(cities.filter(ct => ct.toLowerCase().includes(city) && city !== ""))
  }, [city])

  function handleClick(name) {
    setCity(name)
    setFilteredCities([])
  }

  function handleChange(e) {
    setCity(e.target.value)
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
      <input type="text" value={city} onChange={handleChange} style={{ width: "250px", padding: "6px"}} />
      {filteredCities.length !== 0 &&
        <ul style={{ width: "265px", maxHeight: "265px", border: "2px solid black", overflowY: "auto", overflowX: "hidden", padding: "0"}}>
          {filteredCities.map((item, ind) => {
            return <li key={ind} style={{width: "100%", borderBottom: "1px solid grey", padding: "8px", listStyleType: "none"}} onClick={() => handleClick(item)} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{item}</li>
          })}
        </ul>
      }
    </div>
  )
}

export default App
