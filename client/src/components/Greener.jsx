import React from 'react'
import HelpButton from './HelpButton'
import greenImage from '../image/greener.png'



function Greener() {
    return (
       <div>
           <HelpButton />
           <div className="Green-container">
           <h2 className="Greener-Travel">Greener Travel</h2>
           <img className="Green-image" src={greenImage} />
           <p>You may not notice your footprint when you take a step, but when it comes to our carbon footprint, we watch ours very carefully. We are green certified and committed to providing eco-friendly travel and reducing our carbon footprint whenever possible. </p>
           </div>
       </div>
    );
  }
  
  export default Greener;