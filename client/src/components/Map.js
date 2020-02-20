import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
// import { findByLabelText } from '@testing-library/react';
import { Route } from 'react-router-dom'



const Map = () => {
    // const { stations, userLoc } = props
    // console.log(userLoc && userLoc.coords.latitude)
    const [viewport, setViewport] = useState({
        latitude: 40.7468733,
        longitude: -73.9947449,
        zoom: 6,
        width: '90vw',
        height: '50vh'
    })

    return (
        <div
            style={{
                display: 'flex',
            }}>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoiZWZmaWVyaWNobWFuIiwiYSI6ImNrNnRoc3I0ajBpOTczbG9nOXM3dHEwbWQifQ.2QM5WPMYcgVZ7oKYfNim5w"
                mapStyle='mapbox://styles/effierichman/ck6thvue50gi01ipbpvsgz62y'
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}  >          

            </ReactMapGL>
            {
              
                    <div></div>               

            }

        </div >
    )
}

export default Map
