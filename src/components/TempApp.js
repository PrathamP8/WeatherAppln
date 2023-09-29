import React, { useEffect, useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import weatherImg from "../Images/weatherImg.jpg";

const TempApp = () => {
    // const[cityname, setCityName] = useState(null);
    // const[cityCoord, setCityCoord] = useState(null);
    // const[weatherCond, setWeatherCond] = useState(null);
    const[city, setCity] = useState("");
    const[search, setSearch] = useState("Pune");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search},&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
            const response = await fetch(url);
            const resJson = await response.json();
            // setCityName(resJson.main);
            // setCityCoord(resJson.coord);
            // setWeatherCond(resJson.weather);
            setCity(resJson);
        }

        fetchApi();
    },[search])

  return (
    <>
        <img src={weatherImg} alt='weatherImg' className='overlapDiv'></img>
        <div className="vh-100 ">
            <div className="container py-5 h-100">

                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-8 col-lg-6 col-xl-4">

                        <div className="card" style={{color: "#4B515D", borderRadius: "35px"}}>
                            <div className="card-body p-4">

                                <div>
                                    <input type='search' placeholder='Enter city name' style={{marginLeft: "23%", borderRadius: "25px", paddingLeft: "10px"}} onChange={ (e) => {setSearch(e.target.value)}}></input>
                                </div>

                                {!city.name ? (<p  style={{margin: "20% 35%"}}>No data found</p>) : (
                                    <div>
                                        <div className="d-flex flex-column text-center mt-5 mb-4">
                                            <h2  style={{color: "#1C2331", textTransform: "capitalize"}}>{search}</h2>
                                            <h6 className="display-4 mb-0 font-weight-bold" style={{color: "#1C2331"}}> {city.main.temp}°C </h6>
                                            <h5 className="small" style={{ color: "#868B94" }}>{city.weather[0].main}</h5>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1" style={{fontSize: "1rem"}}>
                                                <div>
                                                    <h6 className="ms-1" style={{paddingLeft: "32%"}}> Longitude: {city.coord.lon}° </h6>
                                                    <h6 className="ms-1" style={{paddingLeft: "32%"}}> Latitude: {city.coord.lat}° </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TempApp;
