import React from 'react';
import '../scss/weather-widget.scss'
export const WeatherWidget = () => {
    return (
        <div className="weather-widget" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/images/widgets/BG-Road.jpg')`}}>
            <div className="weather-desc">
                <p>What’s your plan?</p>
                <p>Looks like a shady day</p>
                <p>36°</p>
            </div>
            {/* <div > */}
                <img className="add-city" src="/images/widgets/AddCity.svg" alt="AddCity" />
            {/* </div> */}
        </div>
    )
}