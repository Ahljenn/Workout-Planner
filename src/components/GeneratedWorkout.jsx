import React from 'react';
import Generator from './Generator';

export default function GeneratedWorkout(props) {
    let minutes = props.minutes;
    let setMinutes = props.setMinutes;
    let setDisplayState = props.setDisplayState;

    let handleVisibilityToggle = props.handleVisibilityToggle;

    let groupCount = props.groupCount;
    let setGroupCount = props.setGroupCount;

    let groupSelected = props.groupSelected;
    let setGroupSelected = props.setGroupSelected;

    return (
        <div className="generated-container">
            <Generator
                groups={groupSelected}
                count={groupCount}
                minute={minutes}
                setDisplayState={setDisplayState}
                setGroupCount={setGroupCount}
                setGroupSelected={setGroupSelected}
                setMinutes={setMinutes}
            />
            <span className="generated-button-container">
                <button
                    className="secondary-button"
                    onClick={() => {
                        handleVisibilityToggle();
                        setGroupSelected([]);
                        setMinutes(60);
                        setGroupCount(0);
                    }}
                >
                    <i class="fas fa-undo"></i> Reselect
                </button>

                <button
                    className="secondary-button"
                    onClick={() => {
                        setGroupSelected([...groupSelected]); //Set to a copy, causes a re-render
                    }}
                >
                    <i class="fas fa-random"></i> Shuffle
                </button>
            </span>
        </div>
    );
}
