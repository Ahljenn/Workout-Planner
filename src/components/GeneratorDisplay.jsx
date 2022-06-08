import React, { useState } from 'react'
import { splitsInfo } from '../data/workout-data';

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
            </>
            );
    } else {
        return (
            <div className="continue-button-container">
                <button className="continue-button"
                onClick={handleButtonClick}>
                    See More
                </button>
            </div>
        );
    }
}
