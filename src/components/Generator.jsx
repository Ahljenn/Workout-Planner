import React, { useState } from 'react'
import * as data from '../data/workout-data';

function durstenfeldShuffle(arr) {
    for(let i = 0; i < arr.length; ++i){
        let j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function builder(data, count = 0) {
    //Shuffle the data
    durstenfeldShuffle(data);

    //Remove elements depending on the count

    return data;
}

export default function Generator(props) {

    const [workout, setWorkout] = useState([]);
    let tempData = [];

    props.groups.forEach((item, index) => {
        Object.entries(data.workouts[item.toLowerCase()]).forEach((wkoutObj) => {
        // console.log(wkoutObj[0]);
        wkoutObj[1].forEach((wkoutItem) => {
            tempData.push(`${wkoutItem} - ${wkoutObj[0]}`);
            }) 
        })
    });

    builder(tempData);

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
