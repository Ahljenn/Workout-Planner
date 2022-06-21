import React, { useState } from 'react'
import WorkoutSelector from './WorkoutSelector';
import GeneratedWorkout from './GeneratedWorkout';

//Scrolling right feature, let user pick which day (chest, leg, shoulder, back, more specific)
//Ask user for split
// https://www.npmjs.com/package/react-horizontal-scrolling-menu


export default function GeneratorDisplay() {

    const [displayState, setDisplayState] = useState("selecting");
    const [groupCount, setGroupCount] = useState(0);
    const [groupSelected, setGroupSelected] = useState([]);
    const [minutes, setMinutes] = useState(60);

    function handleVisibilityToggle() {
        setDisplayState(displayState === "selecting" ? "selected" : "selecting");
        setGroupSelected([]);
        setGroupCount(0);
    }

    function handleGenerateClick(){
        if(groupCount > 0){
            setDisplayState("generated");
        } else {
            console.error("No group was selected")
        }
    }

    if (displayState === "selecting") { //While using is selecting groups
        return (
            <WorkoutSelector 
            minutes={minutes} setMinutes={setMinutes} 
            handleGenerateClick={handleGenerateClick} 
            handleVisibilityToggle={handleVisibilityToggle} 
            groupCount={groupCount} setGroupCount={setGroupCount} 
            groupSelected={groupSelected} setGroupSelected={setGroupSelected} 
            />
        );
    } else if (displayState === "generated") { //After user has selected all groups, and generates
        return (
            <GeneratedWorkout
            minutes={minutes} setMinutes={setMinutes} 
            setDisplayState={setDisplayState}
            handleVisibilityToggle={handleVisibilityToggle} 
            groupCount={groupCount} setGroupCount={setGroupCount} 
            groupSelected={groupSelected} setGroupSelected={setGroupSelected} 
            />
        );
    } else if (displayState === "storing"){
        return <>Storing state</>
    } else { //If user toggles see more/see less
        return (
            <>
                <div className="visibility-button-container">
                    <button className="visibility-button"
                    onClick={handleVisibilityToggle}>
                        <i className="far fa-eye"></i> See More
                    </button>
                </div>
            </>
        );
    }
}