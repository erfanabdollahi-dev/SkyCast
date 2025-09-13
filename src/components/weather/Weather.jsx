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
import moment from 'moment'
import weatherIcons from '../../weatherIcon'
import { sagaWeatherRequest } from '../../redux/weather/weatherSaga'



const Weather = () => {

    const {current, forecast, air, loading, error} = useSelector(state=> state.weather);
    const dispatch = useDispatch()
    const defaultLoc = {city:'Tehran', lat:'35.6944', lon:'51.4215'}

    const handleDate = (rawdate)=>{
        const date = rawdate.split(' ')[0]
        const m = moment(date);

        const dayMonth = m.format("MMM D");
        const weekDay = m.format("dddd")

        return{
            dayMonth : dayMonth,
            weekDay : weekDay,
            both : `${dayMonth}, ${weekDay}`
        }
    }

    const handleSunTime = (rawdate)=>{
        const data = new Date(rawdate * 1000);
        return data.toLocaleTimeString('en-US',{
            hour: "2-digit",
            minute: "2-digit",
            hour12: true 
        })
    }

    const handleAqi = (aqi)=>{
        switch(aqi){
            case 1: 
                return  ['Good','#55a84f'];
            case 2:
                return ['Fair','#a3c853'];
            case 3: 
                return ['Moderate','#fff833'];
            case 4:
                return ['Unhealthy','#f29c33'];
            case 5:
                return ["Very Unhealthy",'#e93f33']
        }
    }

    const handleIcon = (code)=>{
        return weatherIcons[code] || weatherIcons['01d']
        
    }

    useEffect(() => {
        if(!current){
            
            // dispatch(fetchWeatherData( defaultLoc.lat, defaultLoc.lon))
            dispatch(sagaWeatherRequest(defaultLoc.lat, defaultLoc.lon))
        }

    }, [current, forecast, air, loading, error]);
    return (
        <div className="main-grid">
      
            {/* Navbar */}
            <Navbar/>

            <aside className="aside">

                {/* Now Box */}
                { loading? (
                               <>
                    <div className="box-left now felx justify-center items-center">
                        <div className="loader2"></div>
                    </div>
                      <div className="box-left now felx justify-center items-center">
                        <div className="loader2 w-40"></div>
                    </div>
                    </>
            ) : current && forecast && air ? (        <>
                   <div className="box-left now">
                    <div className="now-detail">
                        <h1 className="font-light">Now</h1>


                        <div className="now-top ">
                            <div className="now-desc">
                                    <h1>{Math.round(current.main.temp)}<sup>°c</sup></h1>
                            </div>
                            <div className="now-icon">
                                <img src={handleIcon(current.weather[0].icon)} alt={current.weather.icon} />
                            </div>
                        </div>

                        <div className="border-b-1  border-surface-1 py-4 mb-4">
                            <h5>{current.weather[0].description}</h5>
                        </div>

                        <div className="location flex flex-col gap-2">
                            <div className="date flex gap-2 items-center">
                                <i className="bx bx-calendar-alt text-white text-2xl"></i>
                                <p className="text-surface-2">{handleDate(forecast[0].dt_txt).both}</p>
                            </div>
                            <div className="location flex gap-2 items-center">
                                <i className="bx bx-current-location text-white text-2xl"></i>
                                <p className="text-surface-2">{`${current.name}, ${current.sys.country}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-left fore-cast">
                    <div>
                        <h5 className='text-surface-2'>5 days forecast</h5>
                    </div>
                    
                    {forecast.map(d=>(
                                    <div className="fore-cast-item items-center text-center" key={d.dt_txt} >
                        <div className='fore-cast-item-left '>
                            <img src={handleIcon(d.weather[0].icon)} alt={d.weather[0].icon}/>
                            <h3 className='font-bold'>{Math.round(d.main.temp)}<sup>°c</sup>
                            </h3>
                        </div>
                        <p className='text-surface-2'>{handleDate(d.dt_txt).dayMonth}</p>
                        <p className='day w-[64px]'>{handleDate(d.dt_txt).weekDay}</p>
                    </div>
                    ))}
       
                </div></>
         ): error ? (
                                  <>
                    <div className="box-left now felx justify-center items-center">
                        <h1 className='text-2xl'>Error</h1>
                    </div>
                      <div className="box-left now felx justify-center items-center">
                        <h1 className='text-2xl'>Error</h1>
                    </div>
                    </>
                    ) : (       
                    <>
                    <div className="box-left now felx justify-center items-center">
                        <div className="loader2"></div>
                    </div>
                      <div className="box-left now felx justify-center items-center">
                        <div className="loader2 w-40"></div>
                    </div>
                    </>)}
             
            </aside>
                    
            <main className="main">
                <div className="main-content">
                    {loading ? (
                              <>
                            <div className='today'>
                        <h1>Todays Highlights</h1>
                    </div>
                        <div className="content-air">
                            <div className="loader2"></div>
                        </div>
                        <div className="content-air sun">
                            <div className="loader2"></div>
                        </div>
                        <div className="content-bottom">
                            <div className="loader2"></div>
                        </div>
                        <div className="content-bottom">
                            <div className="loader2"></div>
                        </div>
                        <div className="content-bottom">
                            <div className="loader2"></div>
                        </div>
                        <div className="content-bottom">
                            <div className="loader2"></div>
                        </div>
                        </>

                    ) : current && forecast && air? (
                                          <>
                    <div className='today'>
                        <h1>Todays Highlights</h1>
                    </div>

                    <div className="content-air">
                        <div className='air-quality'>
                            <p>Air Quality Index</p>
                            <div className='condition' style={{ backgroundColor: handleAqi(air.main.aqi)[1] }} >
                                {handleAqi(air.main.aqi)[0]}
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
                                    <h1>{air.components.pm2_5}</h1>
                                </div>
                                <div className="gass-detail">
                                    <p>SO<sub>2</sub>
                                    </p>
                                    <h1>{air.components.so2}</h1>
                                </div>
                                <div className="gass-detail">
                                    <p>NO<sub>2</sub>
                                    </p>
                                    <h1>{air.components.no2}</h1>
                                </div>
                                <div className="gass-detail">
                                    <p>O<sub>3</sub>
                                    </p>
                                    <h1>{air.components.o3}</h1>
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
                                    <h1>{handleSunTime(current.sys.sunrise)}</h1>
                                </div>

                            </div>
                            <div className="sunset">

                                <img src={moon} className='w-[30%]' alt=""/>

                                <div className="sun-info">
                                    <p>Sunset</p>
                                    <h1>{handleSunTime(current.sys.sunset)}</h1>
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
                            <h1>{current.main.humidity}<small>%</small>
                            </h1>
                        </div>
                    </div>
                    <div className="content-bottom">
                        <div className="bottom-title">
                            <p>Pressure</p>
                        </div>
                        <div className='bottom-desc'>
                            <img src={pressure} alt=""/>
                            <h1>{current.main.pressure}<small>hPa</small>
                            </h1>
                        </div>
                    </div>
                    <div className="content-bottom">
                        <div className="bottom-title">
                            <p>Visibility</p>
                        </div>
                        <div className='bottom-desc'>
                            <img src={eye} alt=""/>
                            <h1>{Math.round(current.visibility / 1000)}<small>km</small>
                            </h1>
                        </div>
                    </div>
                    <div className="content-bottom">
                        <div className="bottom-title">
                            <p>Feels Like</p>
                        </div>
                        <div className='bottom-desc'>
                            <img src={thermometer} alt=""/>
                            <h1>{Math.round(current.main.feels_like)}<sup>°c</sup>
                            </h1>
                        </div>
                    </div>
                    </>
                    ) : error ? (<>
                        <div className='today'>
                        <h1>Todays Highlights</h1>
                    </div>
                        <div className="content-air flex justify-center items-center">
                            <h1 className='text-2xl'>Error</h1>
                        </div>
                        <div className="content-air sun flex justify-center items-center">
                            <h1 className='text-2xl'>Error</h1>
                        </div>
                        <div className="content-bottom flex justify-center items-center">
                            <h1 className='text-2xl'>Error</h1>
                        </div>
                        <div className="content-bottom flex justify-center items-center">
                            <h1 className='text-2xl'>Error</h1>
                        </div>
                        <div className="content-bottom flex justify-center items-center">
                            <h1 className='text-2xl'>Error</h1>
                        </div>
                        <div className="content-bottom flex justify-center items-center">
                            <h1 className='text-2xl'>Error</h1>
                        </div>
                        </>): (
                                            <>    <div className='today'>
                        <h1>Todays Highlights</h1>
                    </div>
                        <div className="content-air flex justify-center items-center">
                            <div className="loader2"></div>
                        </div>
                        <div className="content-air sun flex justify-center items-center">
                            <div className="loader2"></div>
                        </div>
                        <div className="content-bottom flex justify-center items-center">
                            <div className="loader2"></div>
                        </div>
                        <div className="content-bottom flex justify-center items-center">
                            <div className="loader2"></div>
                        </div>
                        <div className="content-bottom flex justify-center items-center">
                            <div className="loader2"></div>
                        </div>
                        <div className="content-bottom flex justify-center items-center">
                            <div className="loader2"></div>
                        </div>
                        </>
                        )}
                    

                </div>
            </main>
        </div>
    )
}

export default memo(Weather)