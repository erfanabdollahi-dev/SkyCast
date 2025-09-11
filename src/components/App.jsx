import React from 'react'
import {useState} from 'react'
import Weather from './weather/Weather'
import cloud from '../assets/weather_icons/04d.png'
import logo from '../assets/logo.png'

function App() {
    const [count,
        setCount] = useState(0)

    return (
        <div className="main-grid">
            <nav className="nav-bar">
                <div className="logo w-40">
                    <img src={logo} alt="" />
                </div>

                <div className="input">
                    <i  className='bx bx-search'  ></i>
                    <input  type="text" autoComplete='false' placeholder='search city ...' />
                    <div className="search-result-con ">
                        <ul className='search-result-ul '>
                            <li className='searchj-result-item'>
                                <div className='flex items-center gap-2'>
                                    <i className='bx bxs-location-plus' ></i>
                                    <div className="result-desc">
                                        <p>London</p>
                                        <p className='text-[10px]'>kigdom</p>
                                    </div>
                                </div>
                            </li>
                            <li className='searchj-result-item'>
                                <div className='flex items-center gap-2'>
                                    <i className='bx bxs-location-plus' ></i>
                                    <div className="result-desc">
                                        <p>London</p>
                                        <p className='text-[10px]'>kigdom</p>
                                    </div>
                                </div>
                            </li>
                            <li className='searchj-result-item'>
                                <div className='flex items-center gap-2'>
                                    <i className='bx bxs-location-plus' ></i>
                                    <div className="result-desc">
                                        <p>London</p>
                                        <p className='text-[10px]'>kigdom</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="gps-btn">
                    <i className='bx bx-current-location'  ></i>
                    <p>Current Location</p>
                </div>

            </nav>

            <aside className="aside">
                {/* Now Box */}
                <div className="box-left now">
                    <div className="now-detail">
                        <h1 className="font-light">Now</h1>

                        <div className="now-top mt-1">
                            <div className="now-desc">
                                <h1>
                                    22<sup>°c</sup>
                                </h1>
                                <h2></h2>
                            </div>
                            <div className="now-icon">
                                <img src={cloud} alt="Cloud Icon"/>
                            </div>
                        </div>

                        <div className="border-b-1  border-surface-1 py-4 mb-4">
                            <h5>broken clouds</h5>
                        </div>

                        <div className="location flex flex-col gap-2">
                            <div className="date flex gap-2 items-center">
                                <i className="bx bx-calendar-alt text-white text-2xl"></i>
                                <p className="text-surface-2">Wednesday 1, Mar</p>
                            </div>
                            <div className="location flex gap-2 items-center">
                                <i className="bx bx-current-location text-white text-2xl"></i>
                                <p className="text-surface-2">London, GP</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Forecast Section */}
                <div>
                    <h5>3 days forecast</h5>
                </div>
                <div className="box-left fore-cast">
                    <div className="fore-cast-item">
                        <div className='fore-cast-item-left '>
                            <img src={cloud} alt=""/>
                            <h3 className='font-bold'>22<sup>°c</sup></h3>
                        </div>
                        <p className='text-surface-2'>2 Mar</p>
                        <p className='text-surface-2'>ThursDay</p>
                    </div>
                    <div className="fore-cast-item">
                        <div className='fore-cast-item-left '>
                            <img src={cloud} alt=""/>
                            <h3 className='font-bold'>22<sup>°c</sup></h3>
                        </div>
                        <p className='text-surface-2'>2 Mar</p>
                        <p className='text-surface-2'>ThursDay</p>
                    </div>
                    <div className="fore-cast-item">
                        <div className='fore-cast-item-left '>
                            <img src={cloud} alt=""/>
                            <h3 className='font-bold'>22<sup>°c</sup></h3>
                        </div>
                        <p className='text-surface-2'>2 Mar</p>
                        <p className='text-surface-2'>ThursDay</p>
                    </div>
                </div>
            </aside>

            <main className="main"></main>
        </div>
    );

}

export default App
