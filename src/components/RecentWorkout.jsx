import React from 'react';
import { ReactSession } from 'react-client-session';

export default function RecentWorkout(props) {
    const recent = ReactSession.get('MostRecentWorkout');
    const minutes = recent[recent.length - 2].minutes;

    return (
        <div className="recent-workout-container">
            <h1 className="recent-text">Recent Stored Workout</h1>
            <div>
                <p className="date">From: {recent[recent.length - 1].date}</p>
                <p className="minute-text-estimate">
                    <span>Estimated minutes of completion: </span>
                    {minutes >= 60 ? Math.floor(minutes / 60) : minutes}
                    {minutes >= 60
                        ? ` hours and ${minutes % 60} minutes`
                        : ' minutes'}
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
                        </div>
                    );
                }
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
