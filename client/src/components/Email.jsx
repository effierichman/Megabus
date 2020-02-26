import React from 'react'
import HelpButton from './HelpButton'

// non functioning email component that displays UX wireframe for emailing  

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