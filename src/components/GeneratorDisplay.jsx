import React, { useState } from 'react'
import { splitsInfo } from '../data/workout-data';


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

                <div className="workouts-container">
                    {/* Put this into an array of objects then map through it */}
                    <img src="https://cdn3.iconfinder.com/data/icons/workouts/500/back-512.png"/>
                    <img src="https://library.kissclipart.com/20180916/wbw/kissclipart-exercise-clipart-exercise-fitness-centre-weight-tr-70bd23ec73d5f38a.png"/>
                    <img src="https://cdn3.iconfinder.com/data/icons/legs-and-glutes-building-exercise-and-muscle-build/325/leg-building-exercises-004-512.png"/>
                </div>

                {/* {
                    splitsInfo.map((split, index) => {
                        return(
                        <div className="split-selection-container">
                            <input type="radio" name="wk-split" id={index}/>
                            <label for={index} className="split-selection-text">{split.name}</label>
                        </div>
                        )
                    })
                } */}



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
            <>
                <div className="continue-button-container">
                    <button className="continue-button-more"
                    onClick={handleButtonClick}>
                        See More
                    </button>
                </div>
            </>

        );
    }
}
