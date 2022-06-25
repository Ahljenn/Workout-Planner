import React from 'react';
import Generator from './Generator';

export default function GeneratedWorkout(props) {
    return (
        <div className="generated-container">
            <Generator
                groups={props.groupSelected}
                count={props.groupCount}
                minute={props.minutes}
                setDisplayState={props.setDisplayState}
                setGroupCount={props.setGroupCount}
                setGroupSelected={props.setGroupSelected}
                setMinutes={props.setMinutes}
            />
            <span className="generated-button-container">
                <button
                    className="secondary-button"
                    onClick={() => {
                        props.handleVisibilityToggle();
                        props.setGroupSelected([]);
                        props.setMinutes(60);
                        props.setGroupCount(0);
                    }}
                >
                    <i className="fas fa-undo"></i> Reselect
                </button>

                <button
                    className="secondary-button"
                    onClick={() => {
                        props.setGroupSelected([...props.groupSelected]); //Set to a copy, causes a re-render
                    }}
                >
                    <i className="fas fa-random"></i> Shuffle
                </button>
            </span>
        </div>
    );
}
