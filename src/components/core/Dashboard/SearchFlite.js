import {
    faCalendarDays,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "./searchBox.css";
  import { useState,useEffect } from "react";
  import { format } from "date-fns";
  import { useLocation } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
  import Calendar from 'react-calendar';
  import axios from 'axios';
  import 'react-calendar/dist/Calendar.css';
  import SearchedItem from "./SearchedItem";
  
  const SearchFlite = () => {
    const location = useLocation();
    const [openDate, setOpenDate] = useState(false);
    const [from, setFrom] = useState(location.state.from);
    const [to, setTo] = useState(location.state.to);
    const [data, setData] = useState([]);
    const [date, setDate] = useState(location.state.date);
    const onDateChange = (newDate) => {
      setDate(newDate);
      console.log(newDate.getDay());
    }
    const fetchInfo = async () => {
      const res = await axios.post("http://localhost:4000/api/v1/add-flight/flight-searched", { from, to });
        return setData(res.data);
    };
  
    useEffect(() => {
      fetchInfo();
    }, []);
    const navigate = useNavigate();
  
    const handleClick = async (e) => {
      e.preventDefault();
      axios.post("http://localhost:4000/api/v1/add-flight/flight-searched", {from,to})
      .then(result=>{
        if(result.data.length>0){
          navigate('/searched-Flight' ,{ state: { from,to,date } } );
        }
      })
      .catch(e=>console.log(e))
      
      
      
    };
  
  console.log("search"+data);
  
    return (
      <div>
          <div className="headerSearch">
            <div className="headerSearchItem">
                From
                <input
                  onChange={(e) => setFrom(e.target.value)}
                  type="text"
                  placeholder={from}
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
                  placeholder={to}
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
                    <button className="headerBtn" onClick={handleClick} >
                      Search
                    </button>
                  </div>
          </div>
          <div>
            { data.map((dataObj, index) => {
                return(
                <SearchedItem flightname={dataObj.flightName} from={dataObj.from} to={dataObj.to}/>
                );
            })}
          </div>     
        </div>
    );
  };
  
  export default SearchFlite;