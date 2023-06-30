import React from 'react'
// import "./flight.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FlightItem(props) {
    const navigate = useNavigate();

    const id=props.id;
    console.log("id="+id);
    const handleClick = async (e) => {
        e.preventDefault();
        axios.delete("http://localhost:4000/api/v1/add-flight/delete-flight/"+id)
        .then(result=>{
            console.log(result.data);
            if(result.data==="success"){
                navigate('/all-flights')
            }
        })
        .catch(e=>console.log(e))
         
        }
        
  return (
    <div>
    <div className="searchedItem ">
      <div className="flightName">{props.flightName}</div>
      <div className="from">
        <div>{props.from}</div>
      </div>
      <div className="to">
        <div>{props.to}</div>
      </div>
      <button className="headerBtn bg-blue-400 rounded p-2 text-white"  onClick={handleClick}>
        Delete
      </button>
     
    </div>
      
    </div>
  )
}

export default FlightItem