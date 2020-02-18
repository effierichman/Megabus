import React from 'react'


function BookForm() {
    return (
        <form>
          <h2 className="Book-Now">Book Now!</h2>
          <label className="FROM">FROM</label>
         <select>
             <option>Pick a city or town</option>
             <option>Boston</option>
             <option>New York City</option>
             <option>Trenton</option>
         </select >
          <label className="FROM">TO</label>
          <select>
             <option>Pick a city or town</option>
             <option>Boston</option>
             <option>New York City</option>
             <option>Trenton</option>
         </select>
          <label className="FROM">LEAVING</label>
          <select>
             <option>Pick a date</option>
         </select>
          <button className="Button_Off">Find Tickets</button>
  
        </form>
  
    );
  }
  
  export default BookForm;
  