import React, { useEffect } from 'react'
import {useState} from 'react'
import Weather from './weather/Weather'
import {Provider} from 'react-redux';
import store from '../redux/store';

function App() {
    useEffect(()=>{
        console.log('a[[ render');
        
    },[])
    return (
        <Provider store={store}>
            <Weather/>
        </Provider>
    );

}

export default App
