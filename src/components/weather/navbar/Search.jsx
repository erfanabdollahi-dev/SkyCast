import React, {memo, useEffect, useState} from 'react'
import {searchCity} from '../../../redux/search/searchAction'
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherData} from '../../../redux/weather/weatherAction';

const Search = () => {
    const {data, loading, error} = useSelector(state => state.search)
    const dispatch = useDispatch();
    const [showDropdown,
        setShowDropdown] = useState(false);
    const [timer,
        setTimer] = useState()

    const handleBlur = () => setTimeout(() => setShowDropdown(false), 100);
    const {current, forecast, air} = useSelector(state => state.weather);

    const handleSearch = (e) => {

        clearInterval(timer);

        if (e.target.value.trim().length > 1) {

            setTimer(setTimeout(() => {
                dispatch(searchCity(e.target.value))
            }, 500))
        }
        else{
            setShowDropdown(false)
        }

    }

    useEffect(() => {
        if (data.length) {
            setShowDropdown(true)
        }
        if(!data.length){
            setShowDropdown(false)
        }

    }, [current, data])

    const handleSearchItem = (lat, lon) => {

        dispatch(fetchWeatherData(lat, lon))

    }

    return (
        <div className={showDropdown
            ? `input focus`
            : 'input'}>
            <i className='bx bx-search'></i>
            <input
                onBlur={handleBlur}
                onChange={handleSearch}
                type="text"
                autoComplete='false'
                placeholder='search city ...'/>

            <div
                className="search-result-con "
                hidden={showDropdown
                ? false
                : true}>
                <ul className='search-result-ul '>
                    {(data.length > 0 && showDropdown)
                        ? (data.map((c, i) => (

                            <li
                                className=' search-result-item'
                                key={`${c.lat}-${c.lon}-${i}`}
                                onClick={(e) => {
                                handleSearchItem(c.lat, c.lon);
                            }}>
                                <div className='flex items-center gap-2'>
                                    <i className='bx bxs-location-plus'></i>
                                    <div className="result-desc">
                                        <p>{c.name}</p>
                                        <p className='text-[10px]'>{c.country}</p>
                                    </div>
                                </div>
                            </li>
                        )))
                        : (
                            <li className='searchj-result-item'></li>
                        )
}
                </ul>
            </div>
            {loading
                ? (
                    <span className="loader"></span>
                )
                : (
                    <span className="loader hide"></span>
                )}
        </div>
    )
}

export default memo(Search);