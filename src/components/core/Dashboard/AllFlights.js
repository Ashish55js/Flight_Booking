import React from 'react'
import "./allflight.css"
import { useNavigate } from "react-router-dom";
import { useState , useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import FlightItem from "./FlightItem";


function AllFlights() {
    const [data, setData] = useState([]);

    const fetchInfo = async () => {
        const res = await axios.get("http://localhost:4000/api/v1/add-flight/flight-list");
        return setData(res.data);
      };

      useEffect(() => {
        fetchInfo();
      }, []);
      console.log("data"+data);
  return (
    <div>
        <div className='text-2xl font-bold	bg-blue-500 text-white'><h1>List Of Flights </h1></div>
        { data.map((dataObj, index) => {
          return(
                <FlightItem flightname={dataObj.flightName} from={dataObj.from} to={dataObj.to} key={index} id={dataObj._id} />            
          );
        })}
      
    </div>
  )
}

export default AllFlights