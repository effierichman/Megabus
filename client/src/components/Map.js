import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
// import { findByLabelText } from '@testing-library/react';
import { Route, Link } from 'react-router-dom'
import image from '../image/yellow-arrow3x.png'



const Map = (props) => {
    // const { stations, userLoc } = props
    // console.log(userLoc && userLoc.coords.latitude)

    console.log(props.location.state.selection.trip)
    // const [viewport, setViewport] = useState({
    //     latitude: 40.7468733,
    //     longitude: -73.9947449,
    //     zoom: 6,
    //     width: '90vw',
    //     height: '50vh'
    // })

    return (
        <div>
        <h2 className="en-route">EN ROUTE</h2>


        <div className="map-detail-container">
        <div className="departure">
          <p className="detail-departure">{props.location.state.selection.trip.departure_city}</p>
          <p className="departure-time">DEPARTURE <br></br> TIME</p>
          <p className="departure-time-num">{props.location.state.selection.trip.departure_time}</p>
          </div>

          <img className="detail-arrow" src={image} />

          <div className="arrival">
          <p className="detail-departure">{props.location.state.selection.trip.destination_city}</p>
          <p className="departure-time">ESTIMATED <br></br>ARRIVAL</p>
          <p className="departure-time-num">{props.location.state.selection.trip.arrival_time}</p>
          </div>
          
       


            {/* <ReactMapGL
                {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoiZWZmaWVyaWNobWFuIiwiYSI6ImNrNnRoc3I0ajBpOTczbG9nOXM3dHEwbWQifQ.2QM5WPMYcgVZ7oKYfNim5w"
                mapStyle='mapbox://styles/effierichman/ck6thvue50gi01ipbpvsgz62y'
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}  >          

            </ReactMapGL>
            {
              
                    <div></div>               

            } */}

        </div >

        <div>
            <p className="trip-label">TRIP TIME</p>
          <p className="departure-time-num ">{props.location.state.selection.trip.travel_time}</p>
          </div>
          <div className="button-container">
          <Link className="Button_final">Notifications</Link>
          <Link className="Button_final">Your Greener Travel</Link>
          </div>

        </div>

        
    )
}

export default Map
