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
    selection: ''
}
}

    async componentDidMount() {
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
    console.log("test")
    this.local(trip)
    this.setState({
        submitted: true,
        selection: trip
        
    })
    
}




    // componentWillMount(){
    //     localStorage.getItem('trip') && this.setState({
    //       selection: JSON.parse(localStorage.getItem('trip')),
    //     })
    //   }
    
    //   componentWillUpdate(nextProps, nextState) {
    //       if(localStorage) {
    //           let trips
    //           if (!localStorage['trip']){
    //               trips =[];
    //             }
    //           else {
    //               trips = JSON.parse(localStorage['trip'])
    //           }
    //           if (!(trips instanceof Array)){
    //                trips = []
    //           }
    //           trips.push(this.state.selection.trip)


    //     localStorage.setItem('trip', JSON.stringify(trips))
    
    //  }

    // }

   

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
        return (
            
            <div className="booking-container">
                <span className='city'>
                    {this.props.location.state.departure}
                </span>
                <img className="Yellow-arrow" src={image} />
                <span className='city'>
                    {this.props.location.state.destination}
                </span> 
                <Link to={`/`} className="book-change">Change</Link>
                <hr className="blue-line-one"></hr>
                <div className="book-date">
                    <div className="date">
                {this.props.location.state.date}
                    </div>
                </div>
                <hr className="blue-line-two"></hr>
                <img className="triangle"src={triangle} />

                {trips}
            </div>
        )
    }
}

