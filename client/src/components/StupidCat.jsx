import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import stupidcat from '../image/StupidCat.png'
import proud from '../image/Proud.png'

function StupidCat(){
    return(
        <div>
        <h1 className="Greener-Travel-title">Your Greener Travel</h1>
        <p>Your Megabus is using 37% less fossil fuel than an airplane. Taking Megabus instead of an airplane is reducing your carbon footprint by 3%.</p>
        <div className="cat-container">
        <img className='proud' src={proud}/>
        <img className='cat'  src={stupidcat} />
        </div>
        <button className="Button-comment">Sign up!</button>
        </div>
    
    )
}

export default StupidCat