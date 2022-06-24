import React, { useState, useEffect } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { ReactSession } from 'react-client-session';
import * as data from '../data/workout-data';

function WorkoutCard(props) {
    const [cardStyle, setStyle] = useState('display-card');

    return (
        <div
            onClick={() => {
                if (cardStyle === 'display-card') {
                    setStyle('display-card-selected');
                    props.updateCount(props.count + 1);
                    props.updateGroup((group) => [...group, props.title]); //Add to the existing group array using spread
                } else {
                    setStyle('display-card');
                    props.updateCount(props.count - 1);
                    props.updateGroup(
                        props.group.filter((item) => item !== props.title)
                    ); //Filter out the name that has been unselected
                }
            }}
            role="button"
            style={{
                userSelect: 'none',
            }}
            tabIndex={0}
            className={cardStyle}
        >
            <div>
                <h2 className="group-text">{props.title}</h2>
            </div>

            <div className="group-card">
                <img
                    className="inner-card-img"
                    src={props.img}
                    alt={props.title}
                />
            </div>
        </div>
    );
}

export default function WorkoutSelector(props) {
    useEffect(() => {
        props.setRecent(ReactSession.get('MostRecentWorkout'));
        props.setGroupSelected([]);
        props.setGroupCount(0);
        props.setMinutes(60);
    }, []);

    return (
        <>
            <div className="continue-container">
                <h2 className="select-text">Select a workout group </h2>

                <div className="select-button-container">
                    <button
                        title="Adding 3 or more workouts may not generate a complete workout if there is not enough time allocated"
                        className={
                            props.groupCount > 0 ? 'selected' : 'not-selected'
                        }
                        onClick={props.handleGenerateClick}
                    >
                        <i className="fas fa-bolt"></i> Generate
                    </button>

                    <button
                        title="Access recent workout"
                        className={
                            props.recent === undefined ? 'no-recent' : 'recent'
                        }
                        onClick={() => {
                            if (props.recent) {
                                props.handleRecentClick();
                            }
                        }}
                    >
                        Recent workout
                    </button>
                </div>
            </div>

            <ScrollMenu>
                {data.workoutGroups.map((group, index) => (
                    <WorkoutCard
                        title={group.name}
                        itemId={index}
                        img={group.img}
                        updateCount={props.setGroupCount}
                        count={props.groupCount}
                        updateGroup={props.setGroupSelected}
                        group={props.groupSelected}
                        key={group.name + index}
                    />
                ))}
            </ScrollMenu>

            <div className="minute-container">
                <input
                    onChange={(e) => {
                        props.setMinutes(e.target.value);
                    }}
                    type="range"
                    value={props.minutes}
                    min="20"
                    max="240"
                    step="10"
                    className="input-minute"
                />
                <div className="minute-text-container">
                    <p className="minute-text">
                        {props.minutes >= 60
                            ? Math.floor(props.minutes / 60)
                            : props.minutes}
                        {props.minutes >= 60
                            ? ` hours and ${props.minutes % 60} minutes`
                            : ' minutes'}
                    </p>
                </div>
            </div>

            <div className="visibility-button-container">
                <button
                    className="secondary-button"
                    onClick={props.handleVisibilityToggle}
                >
                    <i className="fas fa-eye"></i> See Less
                </button>
            </div>
        </>
    );
}
