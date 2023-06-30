import {
    faCalendarDays,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "./searchBox.css";
  import { useState,useEffect } from "react";
  import { format } from "date-fns";
  import { useNavigate } from "react-router-dom";
  import Calendar from 'react-calendar';
  import axios from 'axios';
  import 'react-calendar/dist/Calendar.css';
  
  
  const SearchBox = () => {
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState(new Date());
   
    const onDateChange = (newDate) => {
      setDate(newDate);
      console.log(newDate.getDay());
    }
    const navigate = useNavigate();
    const day=date.getDay();
    console.log(day);

    const handleClick = async (e) => {
      e.preventDefault();
        axios.post("http://localhost:4000/api/v1/add-flight/flight-searched", {from,to,day})
      .then(result=>{
        if(result.data.length>0){
            console.log(result);
          navigate('/searched-Flight' ,{ state: { from,to,date } } );
        }
      })
      .catch(e=>console.log(e))
      
      
      
    };

    
  
    return (
        <div className="headerSearch">
          <div className="headerSearchItem">
              <label>From</label>
              <input
                onChange={(e) => setFrom(e.target.value)}
                type="text"
                placeholder="Type for source"
                className="headerSearchInput"
              />
          </div>
          <div className="headerSearchItem">
              To
              <input
                onChange={(e) => {
                  console.log(e.target.value)
                  setTo(e.target.value)}}
                type="text"
                placeholder="Type Destination Here"
                className="headerSearchInput"
              />
          </div>
          <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >{`${format(date, "MM/dd/yyyy")} `}</span>
                  {openDate && (
                    <Calendar
                    onChange={onDateChange}
                    value={date}
                    className="date"
                    showNeighboringMonth={false}
                    locale={"en-US"}
                  />
                  )}
                </div>
                <div className="headerSearchItem">
                  <button className="bg-blue-600" onClick={handleClick} >
                    Search
                  </button>
                </div>
        </div>
    );
  };
  
  export default SearchBox;