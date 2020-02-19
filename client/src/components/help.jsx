import React from 'react'
import { Link } from 'react-router-dom'

function App() {
    return (
        <div className="Rectangle">
            <Link to={`/MyTrips`} className="Button_Off">Track my bus</Link>
            <Link to={`/email`} className="Button_Off">Email Megabus</Link>
            <Link to={`/greener`} className="Button_Off">Greener travel</Link>
            <Link className="Button_Off">More help</Link>
        </div>
    );
  }
  
  export default App;
  