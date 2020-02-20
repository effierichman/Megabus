import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import image from '../image/chuck3x.png'
import HelpButton from './helpButton'


function Email() {
    return (
        <div>
            <HelpButton />
        <form>
            <input className="comment" placeholder="First Last" />
            <input className="comment" placeholder="firstlast@me.com"  />

            <input className="comment" placeholder="Question about charge"  />

            <input className="comment-hello" placeholder="Hello..."  />
            <button className="Button-comment">Send</button>
        </form>
        </div>
    );
  }
  
  export default Email;