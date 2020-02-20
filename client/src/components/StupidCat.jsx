import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import stupidcat from '../image/StupidCat.png'
import proud from '../image/Proud.png'

function StupidCat(){
    return(
        <div>
        <h1>Your Greener Travel</h1>
        <p1>Your Megabus is using 37% less fossil fuel than an airplane. Taking Megabus instead of an airplane is reducing your carbon footprint by 3%.</p1>
        <img className='proud' src={proud}/>
        <img className='cat'  src={stupidcat} />
        <button className="Button-comment">Sign up!</button>
        </div>
    
    )
}

export default StupidCat