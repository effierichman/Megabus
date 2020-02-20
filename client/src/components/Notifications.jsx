import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'

function Notification() {
    return(

    <div>
        <h3>Sign up for notifications while en route</h3>
        <form>
           
            <input className="comment" placeholder="Enter Phone Number"  />
            <input className="comment" placeholder="Enter email"  />
            <button className="Button-comment">Sign up!</button>
        </form>
        </div>
    );

}

export default Notification

