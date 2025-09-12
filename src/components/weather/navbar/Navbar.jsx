import React, {memo, useEffect, useState} from 'react'
import logo from '../../../assets/logo.png'
import logo800 from '../../../assets/logomx800.png'
import './navbar.css'
import Search from './Search'

const Navbar = () => {

    useEffect(()=>{
        console.log('navbar render');
        
    })

    return (
        <nav className="nav-bar">
            <div className="">
                <img className='logo' src={logo} alt=""/>
                <img className='logo-800' src={logo800} alt=""/>
            </div>

            <Search/>

            <div className="gps-btn">
                <i className='bx bx-current-location'></i>
                <p>Current Location</p>
            </div>

        </nav>
    )
}

export default memo(Navbar);