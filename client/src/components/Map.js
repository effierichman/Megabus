import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
// import { findByLabelText } from '@testing-library/react';
import { Route, Link, Switch } from 'react-router-dom'
import image from '../image/yellow-arrow3x.png'
import bosnyc from '../image/Boston-NYC.png'
import bostrent from '../image/Boston-Trenton.png'
import boshart from '../image/Boston-Hartford.png'
import hartbos from '../image/Hartford-Boston.png'
import harttrent from '../image/Hartford-Trenton.png'
import hartnyc from '../image/Hartford-NYC.png'
import trentnyc from '../image/Trenton-NYC.png'
import trentbos from '../image/Trenton-Boston.png'
import trenthart from '../image/Trenton-Hartford.png'
import nycbos from '../image/NYC-Boston.png'
import nychart from '../image/NYC-Hartford.png'
import nyctrent from '../image/NYC-Trenton.png'



const Map = (props) => {
    // const { stations, userLoc } = props
    // console.log(userLoc && userLoc.coords.latitude)

    const mapDisplay = () => {

        const departure_city = props.location.state.selection.trip.departure_city

        const destination_city = props.location.state.selection.trip.destination_city
        if (departure_city === 'boston' && destination_city === 'nyc') {
            return (

                <img className='mapImage'  src={bosnyc} />
            )
        } else if (departure_city === 'boston' && destination_city === 'trenton') {
            return (
                <img className='mapImage'  src={bostrent} />
            )
        } else if (departure_city === 'boston' && destination_city === 'hartford') {
            return (
                <img className='mapImage'  src={boshart} />
            )
        } else if (departure_city === 'hartford' && destination_city === 'boston') {
            return (
                <img className='mapImage'  src={hartbos} />
            )
        } else if (departure_city === 'hartford' && destination_city === 'trenton') {
            return (
                <img className='mapImage'  src={harttrent} />
            )
        } else if (departure_city === 'hartford' && destination_city === 'nyc') {
            return (
                <img className='mapImage'  src={hartnyc} />
            )
        } else if (departure_city === 'trenton' && destination_city === 'nyc') {
            return (
                <img className='mapImage'  src={trentnyc} />
            )
        } else if (departure_city === 'trenton' && destination_city === 'boston') {
            return (
                <img className='mapImage'  src={trentbos} />
            )
        } else if (departure_city === 'trenton' && destination_city === 'hartford') {
            return (
                <img className='mapImage'  src={trenthart} />
            )
        }else if (departure_city === 'nyc' && destination_city === 'boston') {
            return (
                <img className='mapImage'  src={nycbos} />
            )
        } else if (departure_city === 'nyc' && destination_city === 'hartford') {
            return (
                <img className='mapImage'  src={nychart} />
            )
        } else if (departure_city === 'nyc' && destination_city === 'trenton') {
            return (
                <img className='mapImage'  src={nyctrent} />
            )
        }

    }


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
            {
                
                mapDisplay()
                
            }
            <div>
                <p className="trip-label">TRIP TIME</p>
                <p className="departure-time-num ">{props.location.state.selection.trip.travel_time}</p>
            </div>
            <div className="button-container">
                <Link to={`/notifications`} className="Button_final">Notifications</Link>
                <Link className="Button_final">Your Greener Travel</Link>
            </div>
        </div >

       



    )
}

export default Map
