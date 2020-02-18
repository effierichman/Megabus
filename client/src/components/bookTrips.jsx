import React, { Component } from 'react'
import axios from 'axios'
import { getTripData, getAllTrips } from '../../services/api-helper'

class BookTrips extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trips: [],
      searchValue: [],
      departure_city: [],
      destination_city: [],
      travel_date_begin: []

    }
    this.handleChange
  }

  // create handlechange= send state info down to bookform.js which will send it back up 
handleChange = async(e)=>{
  let valueDepart= e.target.valueDepart;
  let valueDestination= e.target.valueDestination;
  let valueDate= e.target.target
  this.setState({
    departure_city: valueDepart,
    destination_city: valueDestination,
    travel_date_begin: valueDate
  })
}

  handleClick = async(e)=>{
    e.preventDefault()

    this.setState={
      isLoading: true,
      departure_city: this.state.,

    }
    let trip = await getTripData();

  }


  async componentDidMount() {
      const response = await getAllTrips()
      this.setState({
        trips: response.data
      })

    //   this.setState({ trips: response.data.selectedTrip })
    //   console.log(response.data.selectedTrip )
    // } catch (err) {
    //   console.error(err)
  }

  render() {
    const trips = this.state.trips.map(trip => (
      <div key={trip.id}>
        <h2>
          {trip.departure_city} {trip.destination_city}
          
        </h2>
      </div>
    ))

    return (
        <div>
        <h4>Trips</h4>
        <ul>{trips}</ul>
        </div>
    
    )
  }
}

export default BookTrips
  