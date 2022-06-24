import React from 'react';
import { ReactSession } from 'react-client-session';

export default function RecentWorkout(props) {
    const recent = ReactSession.get('MostRecentWorkout');

    return (
        <div className="recent-workout-container">
            <h1 className="recent-text">Recent Stored Workout</h1>
            {recent.map((item) => {
                return (
                    <div className="set-container">
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
            })}
            <button
                className="secondary-button"
                onClick={() => {
                    props.setDisplayState('selecting');
                }}
            >
                <i class="fas fa-undo"></i> Back
            </button>
        </div>
    );
}
