import React from 'react'
import { NavLink } from 'react-router-dom'
import {Route, BrowserRouter as Router} from 'react-router-dom'


class Header extends React.Component{

container= React.createRef();
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

handleClickOutside = event=>{
  if(this.container.current && !this.container.current.contains(event.target)){
    this.setState({
      open: false,
    });
  }
};

componentDidMount(){
  document.addEventListener("mousedown", this.handleClickOutside);
}

componentWillMount(){
  document.removeEventListener("mousedown", this.handleClickOutside)
}


// const Header = () => (
  render(){
  return(
    
  <div className= "container" ref= {this.container}>

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