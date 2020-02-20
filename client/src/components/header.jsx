import React from 'react'
import { NavLink } from 'react-router-dom'
import {Route, BrowserRouter as Router} from 'react-router-dom'


class Header extends React.Component{

state={
  open:false
};

handleButtonClick=()=>{
  this.setState(state=>{
    return{ 
      open: !state.open,
  };
});
}



// const Header = () => (
  render(){
  return(
    
  <div className= "container">

<button type="button" class="button" onClick={this.handleButtonClick}>
            ☰
          </button>
          {this.state.open &&(
    <div class="dropdown">
    <ul>
      <li>Explore</li>
      <li>Track my bus</li>
      <li>Help</li>
      <li>Change trip</li>
      <li>Greener travel</li>
    </ul>
  </div>
)}
  <NavLink to = '/'>
    <nav className="TOP-Header">
    <h1 className="megabuscom">megabus.com</h1>
      
    </nav>
   
    </NavLink>
    </div>
  )};

}
  
  export default Header