import React, {memo, useEffect} from 'react'
import Navbar from './navbar/Navbar'
import cloud from '../../assets/weather_icons/04d.png'
import wind from '../../assets/weather_icons/wind.png'
import moon from '../../assets/weather_icons/half-moon.png'
import sun from '../../assets/weather_icons/sun.png'
import humidity from '../../assets/weather_icons/humidity.png'
import pressure from '../../assets/weather_icons/pressure.png'
import eye from '../../assets/weather_icons/eye.png'
import thermometer from '../../assets/weather_icons/thermometer.png'
import {useDispatch, useSelector} from 'react-redux'
import {searchCity} from '../../redux/search/searchAction'

const Weather = () => {
    useEffect(() => {
        console.log('weather render');

    }, []);
    return (
        <div className="main-grid">

            {/* Navbar */}
            <Navbar/>

            <aside className="aside">
                {/* Now Box */}
                <div className="box-left now">
                    <div className="now-detail">
                        <h1 className="font-light">Now</h1>

                        <div className="now-top ">
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

                <div className="box-left fore-cast">
                    <div>
                        <h5 className='text-surface-2'>5 days forecast</h5>
                    </div>
                    <div className="fore-cast-item">
                        <div className='fore-cast-item-left '>
                            <img src={cloud} alt=""/>
                            <h3 className='font-bold'>22<sup>°c</sup>
                            </h3>
                        </div>
                        <p className='text-surface-2'>2 Mar</p>
                        <p className='day'>ThursDay</p>
                    </div>
                    <div className="fore-cast-item">
                        <div className='fore-cast-item-left '>
                            <img src={cloud} alt=""/>
                            <h3 className='font-bold'>22<sup>°c</sup>
                            </h3>
                        </div>
                        <p className='text-surface-2'>2 Mar</p>
                        <p className='day'>ThursDay</p>
                    </div>
                    <div className="fore-cast-item">
                        <div className='fore-cast-item-left '>
                            <img src={cloud} alt=""/>
                            <h3 className='font-bold'>22<sup>°c</sup>
                            </h3>
                        </div>
                        <p className='text-surface-2'>2 Mar</p>
                        <p className='day'>ThursDay</p>
                    </div>
                    <div className="fore-cast-item">
                        <div className='fore-cast-item-left '>
                            <img src={cloud} alt=""/>
                            <h3 className='font-bold'>22<sup>°c</sup>
                            </h3>
                        </div>
                        <p className='text-surface-2'>2 Mar</p>
                        <p className='day'>ThursDay</p>
                    </div>
                    <div className="fore-cast-item">
                        <div className='fore-cast-item-left '>
                            <img src={cloud} alt=""/>
                            <h3 className='font-bold'>22<sup>°c</sup>
                            </h3>
                        </div>
                        <p className='text-surface-2'>2 Mar</p>
                        <p className='day'>ThursDay</p>
                    </div>
                </div>
            </aside>

            <main className="main">
                <div className="main-content">
                    <div className='today'>
                        <h1>Todays Highlights</h1>
                    </div>

                    <div className="content-air">
                        <div className='air-quality'>
                            <p>Air Quality Index</p>
                            <div className="condition">
                                Good
                            </div>
                        </div>
                        <div className="air-info">
                            <div className="icon">
                                <img src={wind} alt=""/>
                            </div>
                            <div className='gasses'>
                                <div className="gass-detail">
                                    <p>PM<sub>25</sub>
                                    </p>
                                    <h1>3.90</h1>
                                </div>
                                <div className="gass-detail">
                                    <p>SO<sub>2</sub>
                                    </p>
                                    <h1>7.90</h1>
                                </div>
                                <div className="gass-detail">
                                    <p>NO<sub>2</sub>
                                    </p>
                                    <h1>33.90</h1>
                                </div>
                                <div className="gass-detail">
                                    <p>O<sub>3</sub>
                                    </p>
                                    <h1>38.90</h1>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="content-air sun">
                        <div className='air-quality'>
                            <p>Sunrise & Sunset</p>
                        </div>
                        <div className="sun-inner">
                            <div className="sunrise">

                                <img src={sun} className='w-[30%]' alt=""/>

                                <div className="sun-info">
                                    <p>Sunrise</p>
                                    <h1>6:46 AM</h1>
                                </div>

                            </div>
                            <div className="sunset">

                                <img src={moon} className='w-[30%]' alt=""/>

                                <div className="sun-info">
                                    <p>Sunset</p>
                                    <h1>6:46 AM</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-bottom">
                        <div className="bottom-title">
                            <p>Humidity</p>
                        </div>
                        <div className='bottom-desc'>
                            <img src={humidity} alt=""/>
                            <h1>82<small>%</small>
                            </h1>
                        </div>
                    </div>
                    <div className="content-bottom">
                        <div className="bottom-title">
                            <p>Pressure</p>
                        </div>
                        <div className='bottom-desc'>
                            <img src={pressure} alt=""/>
                            <h1>1025<small>hPa</small>
                            </h1>
                        </div>
                    </div>
                    <div className="content-bottom">
                        <div className="bottom-title">
                            <p>Visibility</p>
                        </div>
                        <div className='bottom-desc'>
                            <img src={eye} alt=""/>
                            <h1>10<small>km</small>
                            </h1>
                        </div>
                    </div>
                    <div className="content-bottom">
                        <div className="bottom-title">
                            <p>Feels Like</p>
                        </div>
                        <div className='bottom-desc'>
                            <img src={thermometer} alt=""/>
                            <h1>22<sup>°c</sup>
                            </h1>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default memo(Weather)