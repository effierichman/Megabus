import React, { Component } from 'react'
import axios from 'axios'
import image from '../image/yellow-arrow3x.png'
import { Redirect } from 'react-router-dom'


export default class Des extends Component {
constructor(props){
super(props)
this.state = {
    trips: [],
    submitted: false,
    toggleTrip: ''
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

handleClick = async ()=>{
    console.log("test")
    this.setState({
        submitted: true,
        // toggleTrip: this.trips
        // need variable to designate selected trip.
    })}


    render() {
        console.log(this.state.submitted)
        if(this.state.submitted){
            return <Redirect to={{pathname:'/my-trips', state: this.state}} />
        }
           const trips =this.state.trips && this.state.trips.map(trip => (
      <div key={trip.id}>
          <span className="time">
            {trip.departure_time} 
          </span>
          <img className="Yellow-arrow" src={image} />
          <span className="time">
            {trip.arrival_time} 
          </span>
          <button onClick={this.handleClick}  className="book">Book</button>
      </div>
    ))
        return (
            <div className="booking-container">
                <span className='city'>
                    {this.props.location.state.departure} 
                </span>
                <img className="Yellow-arrow"  src={image} />
                <span className='city'>
                    {this.props.location.state.destination}
                </span>
                <div className="book-date">
                {this.props.location.state.date}
                </div>
                {trips}
            </div>
        )
    }
}

