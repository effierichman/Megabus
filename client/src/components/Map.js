import React from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { Link } from 'react-router-dom'

// in react to display an image, you need to import it and name it as a variable that you can call and it will be displayed where you want them to. example is img className='mapImage'  src={bosnyc} />
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

//This Map function will take props (which is the data from the api call, specifically the departure and destination location) and based on the combination of data it will determine which map to be displayed
const Map = (props) => {
    const mapDisplay = () => {

        //the following two lines of code are creating two variables, one for departure cuty and one for destination city. the variables are given the value of the the props location and will then be able to be used in all the if statements
        const departure_city = props.location.state.selection.trip.departure_city
        const destination_city = props.location.state.selection.trip.destination_city
        
        // each set of if statements are saying; if the departure and desination cities = a certain combonation, then display this particular map
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

     //the depInput function, takes the props (the data that is pulled from the api and is being pulled to this component through props) and will dictate on how that data will be displayed.
    const depInput = () => {
            //this is the location of the props given to a variable to be used in the if statements
        const departure_city = props.location.state.selection.trip.departure_city
        
        if (departure_city === 'boston') {
            return (
                'BOS'
            )
        } else if (departure_city === 'trenton') {
            return (
                'TREN'
            )
        } else if (departure_city === 'hartford') {
            return (
                'HART'
            )
        } else if (departure_city === 'nyc') {
            return (
                'NYC'
            )
        } 
    }

    //this is the same function as depInput, but for the destination cities
    const desInput = () => {

        const destination_city = props.location.state.selection.trip.destination_city
        
        if (destination_city === 'boston') {
            return (
                'BOS'
            )
        } else if (destination_city === 'trenton') {
            return (
                'TREN'
            )
        } else if (destination_city === 'hartford') {
            return (
                'HART'
            )
        } else if (destination_city === 'nyc') {
            return (
                'NYC'
            )
        } 
    }

    return (
        <div>
            <h2 className="en-route">EN ROUTE</h2>

            <div className="map-detail-container">
                <div className="departure">
                    <p className="detail-departure">{depInput()}</p>
                    <p className="departure-time">DEPARTURE <br></br> TIME</p>
                    <p className="departure-time-num">{props.location.state.selection.trip.departure_time}</p>
                </div>

                <img className="detail-arrow" src={image} />

                <div className="arrival">
                    <p className="detail-departure">{desInput()}</p>
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
                //this is calling the mapdisplay function, it is called here because I want the map to be displayed right above Tripp Time on the webpage
                mapDisplay()   
            }
            <div>
                <p className="trip-label">TRIP TIME</p>
                <p className="departure-time-num ">{props.location.state.selection.trip.travel_time}</p>
            </div>
            <div className="button-container">
                <Link to={`/notifications`} className="Button_final">Notifications</Link>
                <Link to= "/stupidcat"
                className="Button_final">Your Greener Travel</Link>
            </div>
        </div >
    )
}

export default Map
