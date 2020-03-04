import React from 'react'
import { Link } from 'react-router-dom'

//component that renders after the help button is clicked
// 4 buttons options each linking to correct page
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
  