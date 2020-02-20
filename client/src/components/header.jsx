import React from 'react'
import { NavLink } from 'react-router-dom'
import {Route, BrowserRouter as Router} from 'react-router-dom'


const Header = () => (
  <div className= "container">
     <nav className="TOP-Header">

       {/* //hey donald this is the hamberger bar */}
       <div className="hamberger-container">
         <div className="hamberger"></div>
          <div className="hamberger"></div>
         <div className="hamberger"></div>
    </div>

    <NavLink style={{ textDecoration: 'none' }}
to = '/'>
    <h1 className="megabuscom">megabus.com</h1>
    </NavLink>
    
    </nav>
   
  
    </div>
  )
  
  export default Header