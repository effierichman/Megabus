import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import image from '../image/chuck3x.png'
import HelpButton from './helpButton'


function MyTrips(props) {
    console.log(props)
    console.log(props.location.state.trips)
    return (
        <div>
          <h1>My Booked Trips</h1>
          {props.location.state.trips[0].departure_city}
          {props.location.state.trips[0].destination_city}

        </div>
    );
  }
  
  export default MyTrips;