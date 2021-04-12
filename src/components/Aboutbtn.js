import React from 'react';
import gc from '../gc.jpeg'


export default function BTN() {

    const handleOnClick = (e) => {
       
        console.log("You have clicked in the specified area")
    }

    return (
        <div className="absolute w-full h-auto lg:h-">
            <img src={gc} height={900} width={800} alt="me" useMap="#workmap" className="w-full h-full flex-shrink-0 rounded-lg border-4 border-green-500 border-opacity-100"/>
            <map id = "workmap" name="workmap">
                <area shape="square" coords="1,1,800,454,257,357,254,139" alt="Me" href="/about"  onClick={handleOnClick}/>
            </map>
        </div>
    )
} 