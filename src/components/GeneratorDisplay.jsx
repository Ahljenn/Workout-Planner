import React, { useState } from 'react';
import WorkoutSelector from './WorkoutSelector';
import GeneratedWorkout from './GeneratedWorkout';
import RecentWorkout from './RecentWorkout';

export default function GeneratorDisplay() {
    const [displayState, setDisplayState] = useState('selecting');
    const [groupCount, setGroupCount] = useState(0);
    const [groupSelected, setGroupSelected] = useState([]);
    const [minutes, setMinutes] = useState(60);
    const [recent, setRecent] = useState([]);

    function handleVisibilityToggle() {
        setDisplayState(
            displayState === 'selecting' ? 'selected' : 'selecting'
        );
        setGroupSelected([]);
        setGroupCount(0);
    }

    function handleGenerateClick() {
        if (groupCount > 0) {
            setDisplayState('generated');
        } else {
            console.error('No group was selected');
        }
    }

    function handleRecentClick() {
        setDisplayState('recent');
    }

    if (displayState === 'selecting') {
        //While using is selecting groups
        return (
            <WorkoutSelector
                minutes={minutes}
                setMinutes={setMinutes}
                handleGenerateClick={handleGenerateClick}
                handleRecentClick={handleRecentClick}
                handleVisibilityToggle={handleVisibilityToggle}
                groupCount={groupCount}
                setGroupCount={setGroupCount}
                groupSelected={groupSelected}
                setGroupSelected={setGroupSelected}
                recent={recent}
                setRecent={setRecent}
            />
        );
    } else if (displayState === 'generated') {
        //After user has selected all groups, and generates
        return (
            <GeneratedWorkout
                minutes={minutes}
                setMinutes={setMinutes}
                setDisplayState={setDisplayState}
                handleVisibilityToggle={handleVisibilityToggle}
                groupCount={groupCount}
                setGroupCount={setGroupCount}
                groupSelected={groupSelected}
                setGroupSelected={setGroupSelected}
            />
        );
    } else if (displayState === 'recent') {
        return <RecentWorkout setDisplayState={setDisplayState} />;
    } else {
        //If user toggles see more/see less
        return (
            <>
                <div className="visibility-button-container">
                    <button
                        className="secondary-button"
                        onClick={handleVisibilityToggle}
                    >
                        <i className="far fa-eye"></i> See More
                    </button>
                </div>
            </>
        );
    }
}
