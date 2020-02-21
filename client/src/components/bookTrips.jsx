import React, { Component } from 'react'
import BookForm from './BookForm'
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

handleChange = (e) =>{
    const key = e.target.id
    const value = e.target.value
    this.setState({
     [key]: value  
    })

}



 handleClick = async ()=>{
    this.setState({
        submitted: true
    })
   
}

 
  render() {
    
   
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
  