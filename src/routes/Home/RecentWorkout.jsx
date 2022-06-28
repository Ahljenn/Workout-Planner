import React from 'react';
import { ReactSession } from 'react-client-session';

export default function RecentWorkout(props) {
    const recent = ReactSession.get('MostRecentWorkout');
    const time = recent[recent.length - 2].minutes;

    return (
        <div className="recent-workout-container">
            <h1 className="recent-text">Recent Stored Workout</h1>
            <div>
                <p className="date">From: {recent[recent.length - 1].date}</p>
                <p className="minute-text-estimate">
                    <span>Estimated time of completion: </span>
                    {time >= 60 ? Math.floor(time / 60) : time}
                    {time >= 60 ? ` hours and ${time % 60} time` : ' time'}
                </p>
            </div>
            {recent.map((item, index) => {
                if (index < recent.length - 2) {
                    return (
                        <div
                            className="set-container"
                            key={item.title + item.reps}
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
                            <p className="set-text-minutes">{item.minutes}</p>
                        </div>
                    );
                }
                return <></>;
            })}
            <button
                className="secondary-button"
                onClick={() => {
                    props.setDisplayState('selecting');
                }}
            >
                <i className="fas fa-undo"></i> Back
            </button>
        </div>
    );
}
