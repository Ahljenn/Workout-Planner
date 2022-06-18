import React from 'react'
import * as data from '../data/workout-data';

function getTimeShort() { 
    return new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles", timeZoneName: "short"});
}

function durstenfeldShuffle(arr) {
    for(let i = 0; i < arr.length; ++i){
        let j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function inRange (val, left, right) {
    return val >= left && val <= right;
}

function builder(data, time, count) {

    durstenfeldShuffle(data); //Shuffle the data

    /* Remove elements depending on the count
    10-30 minutes: 3 workouts
    30-40 minutes: 4 workouts
    40-60 minutes: 5 workouts
    60-90 minutes: 6-7 workouts
    120 minutes: 8-10 workouts
    120-160 minutes: 12 workouts
    160-180 minutes: 12 workouts, added reps
    180-240 minutes: 12 workouts, added reps x2
    */

    if (inRange(time, 20, 30)) {
        data.splice(0, data.length - 3 - count + 1);
    } else if (inRange(time, 31, 40)) {
        data.splice(0, data.length - 4 - count + 1);
    } else if (inRange(time, 41, 60)) {
        data.splice(0, data.length - 6 - count + 1);
    } else if (inRange(time, 61, 90)) {
        data.splice(0, data.length - 7 - count + 1);
    } else if (inRange(time, 91, 120)) {
        data.splice(0, data.length - 9 - count + 1);
    } else if (inRange(time, 121, 160)) {
        data.splice(0, data.length - 12 - count + 1);
    } else if (inRange(time, 161, 180)) {
        data.splice(0, data.length - 12 - count + 1);
    } else if (inRange(time, 181, 240)) {
        data.splice(0, data.length - 12 - count + 1);
    } 

    //Build reps and sets
    data.forEach((item, index) => {
        let weighted = item.split("/")[1][1]; //Get string if it is weighted or not - single char
        data[index] = {title: item.split("/")[0]}; //Get name of workout
        if (weighted === 'w'){
            const reps = [8, 10, 12, 14];
            let randReps = reps[Math.floor(Math.random() * reps.length)];
            let randSets = Math.floor(Math.random() * (5 - 2) + 2);
            data[index] = {...data[index], reps: `${randReps} reps x ${randSets} sets`}; //Add object to same index with title
        }
    });

    return data;
}

export default function Generator(props) {

    let tempData = [];

    //Go through each workout, accessing them based on their key, then push them to temp data
    //Info is pushed with their workout and if its weighted or nonweighted
    props.groups.forEach((item, index) => {
        if (item !== "Random"){
            Object.entries(data.workouts[item.toLowerCase()]).forEach((wkoutObj) => {
                // console.log(wkoutObj[0]);
                wkoutObj[1].forEach((wkoutItem) => {
                    tempData.push(`${wkoutItem} / ${wkoutObj[0]}`);
                    }) 
                })
        } else {
            //Add logic for random later
        }
    });
    builder(tempData, props.minute, props.count);

    // console.log(tempData);
    return (
        <div className="main-generator-display">
            <div className="todays-workout-container">
                <h2 className="today">Today's workout</h2>
                {
                tempData.map((item) => {
                    return(
                        <div className="set-container">
                            <h2 className={item.reps === undefined ? "set-title-text-none" : "set-title-text"}>
                                {item.title}
                            </h2>
                            <p className="set-text">{item.reps}</p>
                        </div>
                    )
                })
                }
            </div>
            <p className="date">{getTimeShort()}</p>
        </div>
    )
}
