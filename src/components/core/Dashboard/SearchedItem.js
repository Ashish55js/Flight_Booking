 import React from 'react'
import "./searchedItem.css";

function SearchedItem(props) {
  console.log(props);
  return (
    <div className="searchedItem">
      <div className="flightName">{props.flightname}</div>
      <div className="from">
        <div>{props.from}</div>
        <div>09:00</div>
      </div>
      <div className="to">
        <div>{props.to}</div>
        <div>10:00</div>
      </div>
      <button className="mt-0 text-l bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "  >
        BOOK NOW
      </button>
     
    </div>
  )
}

export default SearchedItem