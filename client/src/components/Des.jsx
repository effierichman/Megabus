import React, { Component } from 'react'
import axios from 'axios'
import image from '../image/yellow-arrow3x.png'
import { Redirect, Link } from 'react-router-dom'
import triangle from '../image/path-2@3x.png'

export default class Des extends Component {

constructor(props){
super(props)
this.state = {
    trips: [],
    submitted: false,
    toggleTrip: '',
    selection: ''
}
}
// on the component load there is an API call inputing departure, destination, date as slugs to return appropriate data
// setting state "trip" to response 
    async componentDidMount() {
        try {
            const response = await axios(`http://localhost:3000/trips/${this.props.location.state.departure}/${this.props.location.state.destination}/${this.props.location.state.date}`)
            this.setState({ trips: response.data.selectedTrip })
        } catch (err) {
            console.error(err)
        }
    }

//setting handleClick trip to localStorage
local =(trip) => {

    if(localStorage) {
        let trips
        if (!localStorage['trip']){
            trips =[];

          }
        else {
            trips = JSON.parse(localStorage['trip'])
        }
        if (!(trips instanceof Array)){
             trips = []
        }
        trips.push(trip)


    localStorage.setItem('trip', JSON.stringify(trips))

    }
}
 //function called when book button is clicked
handleClick = async (trip)=>{
    this.local(trip)
    this.setState({
        submitted: true,
        selection: trip
    })}
        
    render() {
     // mapping over trip data. if "book" button is clicked calls handleClick function and passes the trip data
    //  and redirects to the /my-trips route

        if(this.state.submitted){
            return <Redirect to={{pathname:'/my-trips', state: this.state}} />
        }
           const trips =this.state.trips && this.state.trips.map(trip => (
      <div className="time-container" key={trip}>
          <span className="time">
            {trip.departure_time} 
          </span>
          <img className="Yellow-arrow" src={image} />
          <span className="time">
            {trip.arrival_time} 
          </span>
          
          <button onClick={()=>this.handleClick({trip})}  className="book">Book</button>
      </div>
      
    ))   
    
    const depInput = () => {

        const departure_city = this.props.location.state.departure

        
        
        if (departure_city === 'boston') {
            return (
                'Boston'
            )
        } else if (departure_city === 'trenton') {
            return (
                'Trenton'
            )
        } else if (departure_city === 'hartford') {
            return (
                'Hartford'
            )
        } else if (departure_city === 'nyc') {
            return (
                'NYC'
            )
        } 

    }

    const desInput = () => {

      

        const destination_city = this.props.location.state.destination
        
        if (destination_city === 'boston') {
            return (
                'Boston'
            )
        } else if (destination_city === 'trenton') {
            return (
                'Trenton'
            )
        } else if (destination_city === 'hartford') {
            return (
                'Hartford'
            )
        } else if (destination_city === 'nyc') {
            return (
                'NYC'
            )
        } 
    }


    const dateInput = () => {

      

        const date = this.props.location.state.date
        
        if (date === 'wed-2-26') {
            return (
                'Wed 2/26'
            )
        } else if (date === 'thurs-2-27') {
            return (
                'Thurs 2/27'
            )
        } else if (date === 'fri-2-28') {
            return (
                'Fri 2/28'
            )
        } else if (date === 'sat-2-29') {
            return (
                'Sat 2/27'
            )
        } else if (date === 'sun-3-1') {
            return (
                'Sun 3/1'
            )
        } else if (date === 'mon-3-2') {
            return (
                'Mon 3/2'
            )
        } else if (date === 'tue-3-3') {
            return (
                'Tue 3/3'
            )
        } else if (date === 'wed-3-4') {
            return (
                'Wed 3/4'
            )
        } else if (date === 'thurs-3-5') {
            return (
                'Thurs 3/5'
            )
        } else if (date === 'fri-3-6') {
            return (
                'Fri 3/6'
            )
        } else if (date === 'sat-3-7') {
            return (
                'Sat 3/7'
            )
        } 
    }
       

        return (
            
            <div className="booking-container">
                <span className='city'>
                    {depInput()}
                </span>
                <img className="Yellow-arrow" src={image} />
                <span className='city'>
                    {desInput()}
                </span> 
                <Link to={`/`} className="book-change">Change</Link>
                <hr className="blue-line-one"></hr>
                <div className="book-date">
                    <div className="date">
                {dateInput()}
                    </div>
                </div>
                <hr className="blue-line-two"></hr>
                <img className="triangle"src={triangle} />

                {trips}
            </div>
        )
    }

}



