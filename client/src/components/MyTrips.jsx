import React, {useState, useEffect} from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import image from '../image/chuck3x.png'
import HelpButton from './helpButton'


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
          <h1>My Booked Trips</h1>
          {/* {props.location.state.selection.trip.departure_city}
          {props.location.state.selection.trip.destination_city}
          {props.location.state.selection.trip.departure_time}
          {props.location.state.selection.trip.arrival_time} */}

          
        {trips.map(trip => <li>{trip.trip.id}</li>)}



         


        </div>
    );
  }
  
  export default MyTrips;