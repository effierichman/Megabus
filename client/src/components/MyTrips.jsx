import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import image from '../image/chuck3x.png'
import HelpButton from './helpButton'


function MyTrips(props) {
    console.log(props)
    // console.log(props.location.state.trips)
    console.log(props.location.state.selection.trip.departure_city)


    return (
        <div>
          <h1>My Booked Trips</h1>
          {props.location.state.selection.trip.departure_city}
          {props.location.state.selection.trip.destination_city}
          {props.location.state.selection.trip.departure_time}
          {props.location.state.selection.trip.arrival_time}




         


        </div>
    );
  }
  
  export default MyTrips;