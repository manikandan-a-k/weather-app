import { useState } from "react";
import axios from "axios";
const Weather=()=>{
    
    const [input,setInput]=useState("");
    const [weather,setWeather]=useState("Weather");
    const [desc,setDesc]=useState("Desc");
    const [city,setCity]=useState("city");
    const [country,setCountry]=useState("");
    const [temp,setTemp]=useState("0")
     const handleInput=(event)=>{
        setInput(event.target.value)
     }
    const handleWeather=()=>{
    let weather=axios(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=c75d5a644fb7de50253894f42d348b70`);
    weather.then((weatherdata)=>{
      setWeather(weatherdata.data.weather[0].main);
      setDesc(weatherdata.data.weather[0].description);
      setCity(weatherdata.data.name);
      setTemp(weatherdata.data.main.temp-273.15);
      setCountry(weatherdata.data.sys.country);
    }).catch(()=>{
       alert("Enter Your City")
    })
    }
    return(
        <>
        <div className="weather p-20 bg-[#4169E1] h-screen flex flex-col justify-center items-center">
            <div className="weather-items bg-[#727374] flex flex-col  mt-4 p-5 text-center  rounded-md border border-black w-2/3 ">
            <div className="mb-4 weather-items-s1">
                <h1 className="font-bold text-3xl">Weather Report</h1>
            </div>
             <div className="bg-white  flex justify-between items-center weather-items-s2 rounded-full" >
                
                <input value={input} onChange={handleInput} className=" bg-transparent pl-4 focus:outline-none " placeholder="enter your city" style={{width:"50%"}}></input>
                <button onClick={handleWeather}  className=" bg-black text-white py-2 px-2 rounded-e-full ">Get Report</button>
             </div>
             <div className=" mt-3 flex flex-col gap-1 weather-items-s3">
                <p>{city+" "}{country}</p>
                <h1 className="font-bold text-5xl">{Math.floor(temp)}°C</h1>
             </div>
             <div className="mt-2 flex flex-col gap-1 weather-items-s4">
             <h1 className="font-bold text-3xl">{weather}</h1>
             <p>{desc}</p>
             </div>
            </div>
        </div>
        </>
    )
}
export default Weather;