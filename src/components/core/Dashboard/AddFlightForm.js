import {
    faCalendarDays,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "./searchBox.css";
  import { toast } from "react-hot-toast"
  import { useState,useEffect } from "react";
  import { format } from "date-fns";
  import { useNavigate } from "react-router-dom";
  import axios from 'axios';
  import 'react-calendar/dist/Calendar.css';
  
  
  const AddFlightForm = () => {
    const [flightName, setFlightName] = useState();
    const [from, setFrom] = useState();
    const [to, setTo] = useState(new Date());
    const [day, setAllChecked] = useState([]);
      
    const [formData, setFormData] = useState({
        flightName: "",
        from: "",
        to: "",
        day: "",
      })

    function handleChange(e) {
        
       if (e.target.checked) {
          setAllChecked([...day, e.target.value]);
       } else {
          setAllChecked(day.filter((item) => item !== e.target.value));
       }
    }

    const handleClick = async (e) => {
      e.preventDefault();
        axios.post("http://localhost:4000/api/v1/add-flight/add-flight", {flightName, from, to, day})
      .then(result=>{
        if(result){
            toast("Flight Added Successfully.");
            console.log("Flight Added Successfully"+result);
        //   navigate('/add-flight' ,{ state: { flightName, from, to, day } } );
        }
      })
      .catch=(e)=>{
        toast.error("Something is wrong Flight not added.")
      }
      // reset from
      this.setFormData({
        setFlightName:"",
        setFrom:"",
        setTo:"",
        setAllCheced:""
      })
      

    };

    return (
        <form className="form">
                <div className="headerSearch p-5 h-4/5 inline-block">
            <div className="p-3 bg-blue-600 bold text-white">
                <h1>Add Flight</h1>
            </div>
          <div className="headerSearchItem p-3">
              FlightName :
              <input
                onChange={(e) => setFlightName(e.target.value)}
                type="text"
                placeholder="Type Flight Name Here"
                className="headerSearchInput"
              />
          </div>
          <div className="headerSearchItem p-3">
              Source :
              <input
                onChange={(e) => {
                  console.log(e.target.value)
                  setFrom(e.target.value)}}
                type="text"
                placeholder="Type Source Here"
                className="headerSearchInput"
              />
          </div>
          <div className="headerSearchItem p-3">
              Destination :
              <input
                onChange={(e) => {
                  console.log(e.target.value)
                  setTo(e.target.value)}}
                type="text"
                placeholder="Type Destination Here"
                className="headerSearchInput"
              />
          </div>

          <div className="p-3">
            <label>Flight Day :</label><br/>
            <input value = "0" type = "checkbox" onChange = {handleChange} />
            <span> SUNDAY </span>          
            <input value = "1" type = "checkbox" onChange = {handleChange} />
            <span> MONDAY </span>  
            <input value = "2" type = "checkbox" onChange = {handleChange} />
            <span> TUESDAY </span>  
            <input value = "3" type = "checkbox" onChange = {handleChange} />
            <span> WEDNESDAY </span>  
            <input value = "4" type = "checkbox" onChange = {handleChange} />
            <span> THURSDAY </span>  
            <input value = "5" type = "checkbox" onChange = {handleChange} />
            <span> FRIDAY </span>   
            <input value = "6" type = "checkbox" onChange = {handleChange} />
            <span> SATURDAY </span>  
         </div>
                <div className="AddFlightButton">
                  <button className="mx-5 my-5 bg-blue-200 text-white rounded" onClick={handleClick} >
                    Add Flight
                  </button>
                </div>
        </div>
        </form>
        
    );
  };
  
  export default AddFlightForm;