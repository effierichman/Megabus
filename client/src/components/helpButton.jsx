import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import image from '../image/chuck@2x.png'

function HelpButton() {
    return (
        <Link to={`/help`}>
        <div className="helper-container">
            <img className="helper" src={image} />
        </div>
        </Link>
  
    );
  }
  
  export default HelpButton;