import React, { useEffect } from "react";
import { useState } from "react";
const Weather = () => {
    // array de structuring 
    const [city, setCity] = useState("null"); //create state using useState
    const [search, setSearch] = useState("Lahore")
    // setCity and setSearch will store weather info and input string respectively
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=627010f8a8d39899ed3728dcbc4badb9`;
            const response = await fetch(url);  //it will return promise 
            const resJson = await response.json(); //convert reposnse to JSON
            setCity(resJson.main); //store json resonse to setCity main mean we only want main data from Api
            console.log(resJson);

            
        }
        fetchApi(); //function call
    },[search]) //here we use [search] because we want whenever someone search only then api call thats why we use this second argument in useEffect
    return (
        <>
            <div className="box">
                <div className="inputData"> 
                    {/* onchnage will get every input from user and stored into setSearch */}
                    <input type="search" className="inputfield" onChange={(event) => {
                        setSearch(event.target.value)
                    }} /> 
                </div>
                {/* this is ternary operator if user input != any city then error otherwise show weather */}
        {!city ? (<p className="errorMsg"> No data Found <br></br><span > Please enter valid city name</span></p>):(
              <div>
              <div className="info">
                  <h2 className="location">
                  {search}</h2>
                  <div> <i class="fas fa-solid fa-cloud"></i></div>
                  <h1 className="temp"><i class="fa-solid fa-temperature-three-quarters"></i> {city.temp}</h1> 
                 <div className="tempmin_max">
                 <h3><i class="fa-solid fa-temperature-low"></i>{city.temp_min}° C | <i class="fa-solid fa-temperature-high"></i>{city.temp_max}° C</h3>
                 <h3> Hum: {city.humidity}% | Pre: {city.pressure}hpa</h3>
                 </div>
                  
              </div>

              <div className="wave -one"></div>
              <div className="wave -two"></div>
              <div className="wave -three"></div>
  </div>
        )
        }    
            </div>
        </>
    )
}
export default Weather;