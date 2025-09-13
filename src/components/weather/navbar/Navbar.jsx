import React, {memo, useEffect, useState} from 'react'
import logo from '../../../assets/logo.png'
import logo800 from '../../../assets/logomx800.png'
import './navbar.css'
import Search from './Search'
import { useDispatch } from 'react-redux'
import { fetchWeatherData } from '../../../redux/weather/weatherAction'
import { sagaWeatherRequest } from '../../../redux/weather/weatherSaga'

const Navbar = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
 
        
    })

    const handleGpsBtn = ()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position) =>{
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude; 

                    console.log("Lat:", lat, "Lon:", lon); 
                    
                dispatch(sagaWeatherRequest( lat, lon));
                },
                (error)=>{
                    console.error('error getting this location', error.message)
                }
            
            
            )
        }
        else{
            alert("Geolocation is not supported by this browser.");
            
        }
    }

    return (
        <nav className="nav-bar">
            <div className="">
                <img className='logo' src={logo} alt=""/>
                <img className='logo-800' src={logo800} alt=""/>
            </div>

            <Search/>

            <div className="gps-btn" onClick={handleGpsBtn}>
                <i className='bx bx-current-location'></i>
                <p>Current Location</p>
            </div>

        </nav>
    )
}

export default memo(Navbar);