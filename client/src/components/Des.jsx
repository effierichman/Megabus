import React, { Component } from 'react'
import axios from 'axios'

export default class Des extends Component {
constructor(props){
super(props)
this.state = {
    trips: []
}
}

async componentDidMount(){
    console.log(this.props.location)
    try {
        const response = await axios(`http://localhost:3000/trips/${this.props.location.state.departure}/${this.props.location.state.destination}/${this.props.location.state.date}`)
        console.log(response)
       this.setState({ trips: response.data.selectedTrip })
       console.log(this.state.trips)
     } catch (err) {
       console.error(err)
     }
}
    render() {
           const trips =this.state.trips && this.state.trips.map(trip => (
      <div key={trip.id}>
        <h2>
          {trip.departure_city} {trip.destination_city}
          
        </h2>
      </div>
    ))
        return (
            <div>
                {trips}

                
            </div>
        )
    }
}

