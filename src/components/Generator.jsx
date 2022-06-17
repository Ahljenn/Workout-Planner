import te from 'date-fns/esm/locale/te/index.js';
import React, { useState } from 'react'
import * as data from '../data/workout-data';

function builder(name, count){
    
}

export default function Generator(props) {

    const [workout, setWorkout] = useState([]);
    let tempData = [];

    props.groups.forEach((item, index) => {
        Object.entries(data.workouts[item.toLowerCase()]).forEach((wkoutObj) => {
        console.log(wkoutObj[0]);
        wkoutObj[1].forEach((wkoutItem) => {
            tempData.push(`${wkoutItem} - ${wkoutObj[0]}`);
            }) 
        })
    })

    console.log(tempData);
    return (
        <>
            {
            tempData.map((item) => {
                return <p>{item}</p>
            })
            }
        </>
    )
}
