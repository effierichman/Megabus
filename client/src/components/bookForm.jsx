import React from 'react'
import { Route, withRouter } from 'react-router-dom'


function BookForm() {
    return (
        <form>
          <h2 className="Book-Now">Book Now!</h2>
          <label className="FROM">FROM</label>
         <select>
             <option value="">Pick a city or town</option>
             <option value="boston">
                Boston</option>
             <option value="nyc">New York City</option>
             <option value="trenton">Trenton</option>
             <option value="hartford">Hartford</option>
         </select >
          <label className="FROM">TO</label>
          <select>
            <option value="">Pick a city or town</option>
             <option value="boston">Boston</option>
             <option value="nyc">New York City</option>
             <option value="trenton">Trenton</option>
             <option value="hartford">Hartford</option>
         </select>
          <label className="FROM">LEAVING</label>
          <select>
             <option value="">Pick a date</option>
         </select>
          <button className="Button_Off">Find Tickets</button>
  
        </form>
  
    );
  }
  
  export default BookForm;
  