import React, { useState } from 'react'

export default function JimWendler() {
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