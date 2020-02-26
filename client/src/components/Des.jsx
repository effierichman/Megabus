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

    async componentDidMount() {
        try {
            const response = await axios(`http://localhost:3000/trips/${this.props.location.state.departure}/${this.props.location.state.destination}/${this.props.location.state.date}`)
            this.setState({ trips: response.data.selectedTrip })
        } catch (err) {
            console.error(err)
        }
    }


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

handleClick = async (trip)=>{
    this.local(trip)
    this.setState({
        submitted: true,
        selection: trip
    })}
        
    render() {
        
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
    
            //the depInput function, takes the props (the data that is pulled from the api and is being pulled to this component through props) and will dictate on how that data will be displayed.
    const depInput = () => {
            //this is the location of the props given to a variable to be used in the if statements
        const departure_city = this.props.location.state.departure

        
        //this if statement is saying that is the props brought here, which are the departure citites, that because the api data is all lower case, if the city is boston, to display it as Boston and so on...
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


    //this is the same function as depInput, but for the destination cities
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

// like the departure and destination functions, we are taking the data data from props and reformatting it to represent a clearer and more proffestional font. The reason the api has dashes is because we used the data as an end point for the api call, and an endpoint cannot have spaces. So to fix this, we use an if statement to reformat what the data is displayed as.
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



