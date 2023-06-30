import {useState,useEffect} from 'react'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import {
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import "./searchBox.css";
import { useNavigate } from "react-router-dom";
import { DatePicker } from 'react-responsive-datepicker'
import 'react-responsive-datepicker/dist/index.css'

function AddFlite() {
  const [isOpen, setIsOpen] = useState(false)

//   const location = useLocation();
//   console.log(location);
//   const [openDate, setOpenDate] = useState(false);
//   const [from, setFrom] = useState(location.state.from);
//   const [to, setTo] = useState(location.state.to);
//   const [data, setData] = useState([]);
//   const [date, setDate] = useState(location.state.date);
  const onDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate.getDay());
  }
//   const fetchInfo = async () => {
//     const res = await axios.post("http://localhost:4000/api/v1/add-flight/flight-searched", { from, to });
//     return setData(res.data);
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);
//   const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/api/v1/add-flite/add-flite", {from,to})
    .then(result=>{
      if(result.data.length>0){
        navigate('/add-Flight' ,{ state: { from,to,date } } );
      }
    })
    .catch(e=>console.log(e))
  };

// console.log(data);

  return (
    <div>
        <div className="headerSearch text-white">
          <div className="headerSearchItem">
              <label>From</label>
              <input
                onChange={(e) => setFrom(e.target.value)}
                type="text"
                placeholder={from}
                className="headerSearchInput"
              />
          </div>
          <div className="headerSearchItem">
              To
              <input text-black
                onChange={(e) => {
                  console.log(e.target.value)
                  setTo(e.target.value)
                }}
                type="text"
                placeholder={to}
                className="headerSearchInput"
              />
          </div>
          <div className="headerSearchItem">
              Day_Array
              <input
                onChange={(e) => setFrom(e.target.value)}
                type="text"
                placeholder={from}
                className="headerSearchInput"
              />
          </div>
                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={handleClick} >
                    Add Flite
                  </button>
                </div>
        </div>
      
    </div>
  )
}
export default AddFlite;

