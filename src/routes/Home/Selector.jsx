import React from 'react';
import { ReactSession } from 'react-client-session';

export function Selector({ props }) {
    ReactSession.setStoreType('localStorage');

    return (
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
    );
}
