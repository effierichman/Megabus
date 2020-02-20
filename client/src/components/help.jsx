import React from 'react'
import { Link } from 'react-router-dom'


function App() {
    return (
        
        <div className="Rectangle">
            <Link to={`/my-trips`} className="Button">Track my bus</Link>
            <Link to={`/email`} className="Button">Email Megabus</Link>
            <Link to={`/greener`} className="Button">Greener travel</Link>
            <Link to ={`/FAQ`} className="Button">More help</Link>
        </div>
    );
  }
  
  export default App;
  