import React, { Component } from 'react'
import arrow from '../image/yellow-arrow3x.png'
import { Redirect } from 'react-router-dom'


export default class MyTrips extends Component {



  
  constructor(props){
    super(props)
    this.state = {
        trips: [],
        submitted: false,
        selection: ''
    };
    }
    
        async componentDidMount() {
          if(localStorage["trip"]) {
            let trip = localStorage.getItem('trip')
            let myTrip = JSON.parse(trip)
          
            this.setState({trips: myTrip})
          }
        }
    

  


  
    handleClick = async (trip)=>{
          console.log("test")
          this.setState({
              submitted: true,
              selection: trip
              
          })
          
      }
      
      //delete selected trip from local storage when the cancel trip button is clicked 

       deleteItem(trip) {
        var storedNames = JSON.parse(localStorage.getItem("trip"));
        var tripToRemove = storedNames.find((tripObject,index)=>{
         return trip.id == tripObject.id
        });
        if (tripToRemove !== null ) {
          let indexToRemove = storedNames.indexOf(tripToRemove)
          console.log(indexToRemove)
          storedNames.splice(indexToRemove, 1);

        }
    

        localStorage.setItem('trip', JSON.stringify(storedNames));
        window.location.reload();
      
      }
    
     


    
render () {
 

  if(this.state.submitted){
    return <Redirect to={{pathname:'/my-map', state: this.state}} />
}
if(this.state.trips == '') {
  return (
    <div>
    <h1 className="my-trips">My Booked Trips</h1>

  <h2 className="my-trips">You have no booked trips</h2>
  </div>
  )
}


    return (
        <div>
          <h1 className="my-trips">My Booked Trips</h1>
         

        {this.state.trips.map(trip => 
        <div className="each-trip">
        <div className="total-time">
          <div>
          <span className="trip-time">
          {trip.trip.departure_city} 
          </span>
          <img className="Yellow-arrow"  src={arrow} />
          <span className="trip-time">
          {trip.trip.destination_city}
          </span>
          </div>
          <span className="trip-time">
          {trip.trip.departure_time} 
          </span>
          <img className="Yellow-arrow"  src={arrow} />
          <span className="trip-time">

          {trip.trip.arrival_time}
          </span>
        </div>
        <button onClick={()=>this.handleClick(trip)} className="my-trip-button">Trip details</button>
        <button onClick={()=>this.deleteItem(trip)} className="cancel-trip-button">Cancel trip</button>
        </div>

        )}



         

        </div>
    );
  }

}
  
