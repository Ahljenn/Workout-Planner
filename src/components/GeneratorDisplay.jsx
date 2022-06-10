import React, { useState } from 'react'
import { splitsInfo } from '../data/workout-data';

function JimWendler(){

    const [weightState, setWeightState] = useState(0);
    const [repState, setRepState] = useState(0);

    return(
        <>
            <div className="input-container">
                <input
                type="number"
                placeholder="Weight (lbs)"
                onChange={(e) => {
                    setWeightState(e.target.value);
                }}/>

                <input
                type="number"
                placeholder="Reps"
                onChange={(e) => {
                    setRepState(e.target.value);
                }}/>
            </div>
        </>
    );
}

//Scrolling right feature, let user pick which day (chest, leg, shoulder, back, more specific)
//Ask user for split

export default function GeneratorDisplay() {

    const [displayState, setDisplayState] = useState(true);

    function handleButtonClick() {
        setDisplayState(!displayState);
    }

    if (displayState) {
        return (
            <>
                <div className="main-display-container">
                    <hr className="display-hr"/>
                {
                    splitsInfo.map((split, index) => {
                        return(
                        <div className="split-selection-container">
                            <input type="radio" name="wk-split" id={index}/>
                            <label for={index} className="split-selection-text">{split.name}</label>
                        </div>
                        )
                    })
                }
                </div>
                <div className="continue-button-container">
                        <button className="continue-button"
                        onClick={handleButtonClick}>
                            See Less
                        </button>
                </div>
                <JimWendler />
            </>
        );
    } else {
        return (
            <>
                <div className="continue-button-container">
                    <button className="continue-button-more"
                    onClick={handleButtonClick}>
                        See More
                    </button>
                </div>
                <JimWendler />
            </>

        );
    }
}
