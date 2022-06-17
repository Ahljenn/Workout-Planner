import te from 'date-fns/esm/locale/te/index.js';
import React, { useState } from 'react'
import * as data from '../data/workout-data';

function builder(name, count){
    
}

export default function Generator(props) {

    const [workout, setWorkout] = useState([]);
    let temp = [];

    props.groups.forEach((item, index) => {
        Object.entries(data.workouts[item.toLowerCase()]).forEach((wkoutObj) => {
        wkoutObj[1].forEach((wkoutItem) => {
            temp.push(wkoutItem);
            }) 
        })
    })
    
    console.log(temp);
    return (
        <>
            {
            temp.map((item) => {
                return <p>{item}</p>
            })
            }
        </>
    )
}
