import React from 'react'
import { NavLink } from 'react-router-dom'
import {Route, BrowserRouter as Router} from 'react-router-dom'


const Header = () => (
  <div className= "container">
  <NavLink style={{ textDecoration: 'none' }}
to = '/'>
    <nav className="TOP-Header">
    <h1 className="megabuscom">megabus.com</h1>
      
    </nav>
   
    </NavLink>
    </div>
  )
  
  export default Header