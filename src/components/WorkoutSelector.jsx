import React, { useState, useEffect } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { ReactSession } from 'react-client-session';
import * as data from '../data/workout-data';

function WorkoutCard(props) {
    const groupName = props.title;
    const groupImg = props.img;
    const updateButton = props.updateCount;
    const updateGroup = props.updateGroup;
    const groupData = props.group;
    const groupCount = props.count;
    const [cardStyle, setStyle] = useState('display-card');

    return (
        <div
            onClick={() => {
                if (cardStyle === 'display-card') {
                    setStyle('display-card-selected');
                    updateButton(groupCount + 1);
                    updateGroup((group) => [...group, groupName]); //Add to the existing group array using spread
                } else {
                    setStyle('display-card');
                    updateButton(groupCount - 1);
                    updateGroup(groupData.filter((item) => item !== groupName)); //Filter out the name that has been unselected
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
                <h2 className="group-text">{groupName}</h2>
            </div>

            <div className="group-card">
                <img
                    className="inner-card-img"
                    src={groupImg}
                    alt={groupName}
                />
            </div>
        </div>
    );
}

export default function WorkoutSelector(props) {
    let minutes = props.minutes;
    let setMinutes = props.setMinutes;

    let handleGenerateClick = props.handleGenerateClick;
    let handleVisibilityToggle = props.handleVisibilityToggle;

    let groupCount = props.groupCount;
    let setGroupCount = props.setGroupCount;

    let groupSelected = props.groupSelected;
    let setGroupSelected = props.setGroupSelected;

    let recent = props.recent;
    let setRecent = props.setRecent;

    useEffect(() => {
        setRecent(ReactSession.get('MostRecentWorkout'));
    }, []);

    return (
        <>
            <div className="continue-container">
                <h2 className="select-text">Select a workout group </h2>

                <div className="select-button-container">
                    <button
                        title="Adding 3 or more workouts may not generate a complete workout if there is not enough time allocated"
                        className={groupCount > 0 ? 'selected' : 'not-selected'}
                        onClick={handleGenerateClick}
                    >
                        <i className="fas fa-bolt"></i> Generate
                    </button>

                    <button
                        title="Access recent workout"
                        className={
                            recent === undefined ? 'no-recent' : 'recent'
                        }
                        onClick={() => {
                            if (recent) {
                                console.log(recent);
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
                        updateCount={setGroupCount}
                        count={groupCount}
                        updateGroup={setGroupSelected}
                        group={groupSelected}
                    />
                ))}
            </ScrollMenu>

            <div className="minute-container">
                <input
                    onChange={(e) => {
                        setMinutes(e.target.value);
                    }}
                    type="range"
                    value={minutes}
                    min="20"
                    max="240"
                    step="10"
                    className="input-minute"
                />
                <div className="minute-text-container">
                    <p className="minute-text">
                        {minutes >= 60 ? Math.floor(minutes / 60) : minutes}
                        {minutes >= 60
                            ? ` hours and ${minutes % 60} minutes`
                            : ' minutes'}
                    </p>
                </div>
            </div>

            <div className="visibility-button-container">
                <button
                    className="visibility-button"
                    onClick={handleVisibilityToggle}
                >
                    <i className="fas fa-eye"></i> See Less
                </button>
            </div>
        </>
    );
}
