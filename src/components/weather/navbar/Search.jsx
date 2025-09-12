import React, { memo, useState } from 'react'
import {searchCity} from '../../../redux/search/searchAction'
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
    const {data, loading, error} = useSelector(state => state.search)
    const dispatch = useDispatch();
    const [showDropdown, setShowDropdown] = useState(false);
    const [timer,setTimer] = useState()

    const handleFocus = () => setShowDropdown(true);
    const handleBlur = () => setTimeout(() => setShowDropdown(false), 100); 

    const handleSearch = (e) => {

        clearInterval(timer);

        setTimer(setTimeout(() => {
            dispatch(searchCity(e.target.value))
        }, 500))
    }

    const handleSearchItem = (lat, lon)=>{
        console.log(lat,lon);
        console.log('clicked');
        
        
    }

    return (
        <div className={showDropdown ? `input focus` : 'input'}>
            <i className='bx bx-search'></i>
            <input
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleSearch}
                type="text"
         
                autoComplete='false'
                placeholder='search city ...'/>
                
            <div className="search-result-con " hidden={showDropdown ? false : true} >
                <ul className='search-result-ul '>
                    {(data.length > 0 && showDropdown )
                        ? (data.map((c, i) => (

                            <li className=' search-result-item'   key={`${c.lat}-${c.lon}-${i}`}
                                onClick={(e) => {
                                e.stopPropagation(); // prevents parent click
                                handleSearchItem(c.lat, c.lon);
                            }} >
                                <div className='flex items-center gap-2' >
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

export default memo(Search) ;