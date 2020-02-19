import React, {useState, useEffect} from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import image from '../image/chuck3x.png'
import HelpButton from './helpButton'
import arrow from '../image/yellow-arrow3x.png'


function MyTrips(props) {
  const [trips, setTrips] = useState([])

  useEffect(()=>{
    if(localStorage["trip"]) {
      let trip = localStorage.getItem('trip')
      let myTrip = JSON.parse(trip)
      setTrips(myTrip)
    }
  },[])
  

    
    // console.log(props)
    // console.log(props.location.state.trips)
    // console.log(props.location.state.selection.trip.departure_city)

    // localStorage.getItem('trip');

   

    

  console.log(trips)

    return (
        <div>
          <h1 className="my-trips">My Booked Trips</h1>
          {/* {props.location.state.selection.trip.departure_city}
          {props.location.state.selection.trip.destination_city}
          {props.location.state.selection.trip.departure_time}
          {props.location.state.selection.trip.arrival_time} */}

          
        {trips.map(trip => 
        <div className="each-trip">
        <div>
          <span className="trip-time">
          {trip.trip.departure_city} 
          </span>
          <img className="Yellow-arrow"  src={arrow} />
          <span className="trip-time">
          {trip.trip.destination_city}
          </span>
          <span className="trip-time">
          {trip.trip.departure_time} 
          </span>
          <img className="Yellow-arrow"  src={arrow} />
          <span className="trip-time">

          {trip.trip.arrival_time}
          </span>
        </div>
        <button className="my-trip-button">Trip details</button>
        <button className="cancel-trip-button">Cancel trip</button>
        </div>

        )}



         

        </div>
    );
  }
  
  export default MyTrips;