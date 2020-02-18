import React, { Component } from 'react'
import axios from 'axios'

class BookTrips extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trips: []
    }
  }

  async componentDidMount() {
    try {
      const response = await axios(`http://localhost:3000/trips/boston/nyc/wed-2-26`)
      this.setState({ trips: response.data.selectedTrip })
      console.log(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const trips = this.state.trips.map(trip => (
      <div key={trip.id}>
        <h2>
          {trip.departure_city} {trip.destination_city}
          {/* <button
            onClick={() => this.props.history.push(`/users/${user.id}/items`)}
          >
            View Items
          </button>
          <button
            onClick={() =>
              this.props.history.push(`/users/${user.id}/create-item`)
            }
          >
            Create Item
          </button> */}
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
  