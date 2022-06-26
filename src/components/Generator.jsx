import React, { useTransition } from 'react';
import { ReactSession } from 'react-client-session';
import builder from './Builder';
import * as data from '../data/workout-data';
import * as ajax from '../helpers/ajax';
import * as util from '../helpers/util';
import { useAlert } from 'react-alert';

ReactSession.setStoreType('localStorage');

export default function Generator(props) {
    const [isPending, startTransition] = useTransition();
    const alert = useAlert();
    let tempData = [];

    //Go through each workout, accessing them based on their key, then push them to temp data
    //Info is pushed with their workout and if its weighted or nonweighted
    props.groups.forEach((item) => {
        if (item !== 'Random') {
            Object.entries(data.workouts[item.toLowerCase()]).forEach(
                (wkoutObj) => {
                    // console.log(wkoutObj[0]);
                    wkoutObj[1].forEach((wkoutItem) => {
                        tempData.push(`${wkoutItem} / ${wkoutObj[0]}`);
                    });
                }
            );
        } else {
            let keys = Object.keys(data.workouts);
            let randomWorkout = keys[(keys.length * Math.random()) << 0];
            for (const key in data.workouts[randomWorkout]) {
                for (const i in data.workouts[randomWorkout][key]) {
                    tempData.push(
                        `${data.workouts[randomWorkout][key][i]} / ${key}`
                    );
                }
            }
        }
    });
    builder(tempData, props.minute, props.count);

    // console.log(tempData);
    return (
        <div className="main-generator-display">
            <div className="todays-workout-container">
                <h2 className="today">Today's workout</h2>
                {isPending ? (
                    <div className="loading-container">
                        <i className="fas fa-spinner fa-spin"></i>
                    </div>
                ) : (
                    tempData.map((item) => {
                        return (
                            <div
                                className="set-container"
                                key={item.reps + item.title + util.getTimeShort}
                            >
                                <h2
                                    className={
                                        item.reps === undefined
                                            ? 'set-title-text-none'
                                            : 'set-title-text'
                                    }
                                >
                                    {item.title}
                                </h2>
                                <p className="set-text">{item.reps}</p>
                                <p className="set-text-minutes">
                                    {item.minutes}
                                </p>
                            </div>
                        );
                    })
                )}
            </div>

            <div>
                <p className="date">{util.getTimeShort()}</p>
                <p className="minute-text-estimate">
                    <span>Estimated time of completion: </span>
                    {props.minute >= 60
                        ? Math.floor(props.minute / 60)
                        : props.minute}
                    {props.minute >= 60
                        ? ` hours and ${props.minute % 60} minutes`
                        : ' minutes'}
                </p>
            </div>

            <div className="store-container">
                <button
                    className="store-button"
                    onClick={() => {
                        ReactSession.set('MostRecentWorkout', tempData); //Store recent workout in session

                        ajax.sendPostRequest('/query/insertWorkout', tempData)
                            .then((result) => {
                                startTransition(() => {
                                    console.log(
                                        'Stored into database...',
                                        result
                                    );

                                    //reset the parameters
                                    props.setGroupSelected([]);
                                    props.setGroupCount(0);
                                    props.setMinutes(60);
                                    props.setDisplayState('selecting'); //Rerenders display in other component

                                    alert.success('Stored workout success!'); //Show only after the re-render
                                });
                            })
                            .catch((err) => {
                                alert.error(err);
                            });
                    }}
                >
                    <i className="fas fa-database"></i> Store
                </button>
            </div>
        </div>
    );
}
