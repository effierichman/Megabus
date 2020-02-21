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

}



 handleClick = async ()=>{
    console.log("test")
    this.setState({
        submitted: true
    })
  
}

 
  render() {
      console.log(this.state)
      console.log(this.state.submitted)
  
    if(this.state.submitted){
        return <Redirect to={{pathname:'/des', state: this.state}} />
    }

    return (
        <div>
        <BookForm handleChange={this.handleChange} handleSubmit={this.handleClick}/>
        </div>
    
    )
  }
}

export default BookTrips
  