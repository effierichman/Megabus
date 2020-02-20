import React, { Component } from 'react'
import axios from 'axios'
// import { getTripData, getAllTrips } from '../api-helper'
import BookForm from './bookForm'
import { Redirect } from 'react-router-dom'

class BookTrips extends Component {
  constructor(props) {
    super(props)

    this.state = {
        trips: [],
      departure: '',
      destination: '',
      date: '',
      submitted: false

    }
  }

  // create handlechange= send state info down to bookform.js which will send it back up 
handleChange = (e) =>{
    const key = e.target.id
    const value = e.target.value
    this.setState({
     [key]: value  
    })
//   let valueDepart= e.target.valueDepart;
//   let valueDestination= e.target.valueDestination;
//   let valueDate= e.target.target.valueData
//   this.setState({
//     departure_city: valueDepart,
//     destination_city: valueDestination,
//     travel_date_begin: valueDate
//   })
}



 handleClick = async ()=>{
    console.log("test")
    this.setState({
        submitted: true
    })
    // try {
    //      const response = await axios(`http://localhost:3000/trips/${this.state.departure}/${this.state.destination}/${this.state.date}`)
    //     this.setState({ trips: response.data.selectedTrip })
    //     console.log(this.state.trips)
    //   } catch (err) {
    //     console.error(err)
    //   }

    // this.setState ({
    //   isLoading: true,
    //   departure_city: this.state
    // })
}

 
  render() {
      console.log(this.state)
      console.log(this.state.submitted)
    // const trips =this.state.trips && this.state.trips.map(trip => (
    //   <div key={trip.id}>
    //     <h2>
    //       {trip.departure_city} {trip.destination_city}
          
    //     </h2>
    //   </div>
    // ))

    if(this.state.submitted){
        return <Redirect to={{pathname:'/des', state: this.state}} />
    }

    return (
        <div>
        {/* <ul>{trips}</ul> */}
        <BookForm handleChange={this.handleChange} handleSubmit={this.handleClick}/>
        </div>
    
    )
  }
}

export default BookTrips
  