import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {Route, BrowserRouter as Router} from 'react-router-dom'


class Header extends React.Component{

container= React.createRef();
state={
  open:false,
};

handleButtonClick=()=>{
  this.setState(state=>{
    return{ 
      open: !state.open,
  };
});
}



componentDidMount(){
  document.addEventListener("mousedown", this.handleClickOutside);
}

componentWillMount(){
  document.removeEventListener("mousedown", this.handleClickOutside);
}

handleClickOutside = event=>{
  if(this.container.current && !this.container.current.contains(event.target)){
    this.setState({
      open: false,
    });
  }
};



  render(){
  return(
    

  <div className= "container">
    

     <nav className="TOP-Header">
     <NavLink style={{ textDecoration: 'none' }}
      to = '/'>
    <h1 className="megabuscom">megabus.com</h1>

    </NavLink>
    
     <div className= "container" ref= {this.container}>

       

<div onClick={this.handleButtonClick}  className="hamberger-container">
         <div className="hamberger"></div>
          <div className="hamberger"></div>
         <div className="hamberger"></div>
    </div> 

            {/* ☰ */}
            
          {this.state.open &&(
    <div className="dropdown">
      
    <ul className= "menu" onClick={this.handleButtonClick} >
      <Link style={{ textDecoration: 'none' }} to={`/my-trips`}><li>Track my bus</li></Link>
      <Link style={{ textDecoration: 'none' }} to={`/email`}><li>Help</li></Link>
      <Link style={{ textDecoration: 'none' }} to={`/my-trips`}><li>Change trip</li></Link>
      <Link style={{ textDecoration: 'none' }} to={`/greener`}><li>Greener travel</li></Link>
    </ul>
  </div>
)}

</div>

       {/* <div  className="hamberger-container">
         <div className="hamberger"></div>
          <div className="hamberger"></div>
         <div className="hamberger"></div>
    </div>  */}

  
    </nav>

  
    </div>
  )};

}
  
  export default Header