import React from 'react'
import HelpButton from './HelpButton'

export default function BookForm(props) {

  function changeForm(e){
    props.handleChange(e)
  }

  function handleSubmit(e){
    e.preventDefault()
    props.handleSubmit()
  }
return (
  <div>
  <HelpButton />

        <form>
          <h2 className="Book-Now">Book Now!</h2>
          <label className="FROM">FROM</label>
         <select id= "departure" onChange={changeForm} >
             <option value="">Pick a city or town</option>
             <option value="boston">
                Boston</option>
             <option value="nyc">New York City</option>
             <option value="trenton">Trenton</option>
             <option value="hartford">Hartford</option>
         </select>
          <label className="FROM">TO</label>
          <select id = "destination" onChange={changeForm}>
            <option value="">Pick a city or town</option>
             <option value="boston">Boston</option>
             <option value="nyc">New York City</option>
             <option value="trenton">Trenton</option>
             <option value="hartford">Hartford</option>
         </select>
          <label className="FROM">LEAVING</label>
          <select id= "date" onChange={changeForm}>
             <option value="">Pick a date</option>
             <option value="wed-2-26">2/26</option>
             <option value="thurs-2-27">2/27</option>
             <option value="fri-2-28">2/28</option>
             <option value="sat-2-29">2/29</option>
             <option value="sun-3-1">3/1</option>
             <option value="mon-3-2">3/2</option>
             <option value="tue-3-3">3/3</option>
             <option value="wed-3-4">3/4</option>
             <option value="thurs-3-5">3/5</option>
             <option value="fri-3-6">3/6</option>
             <option value="sat-3-7">3/7</option>
         </select>
          <button onClick={handleSubmit} type="submit"  className="Button_Off">Find Tickets</button>
  
        </form>
        </div>
    );
}
  