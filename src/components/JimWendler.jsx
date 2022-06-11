import React, { useState, useEffect } from 'react'

export default function JimWendler() {
    const [weightState, setWeightState] = useState(0);
    const [repState, setRepState] = useState(0);
    const [estimate, setEstimate] = useState([]);


    useEffect(() => {
        let orm = Math.round((weightState * repState * 0.0333) + weightState);
        let temp = [];
        for(let i = 0; i < 10; ++i){
            temp.push(orm * (100 - 3 * i)/ 100);
        }
        setEstimate(temp)
    })

    return(
        <div className="calculator-container">
            <div className="input-container">
                <div>
                    <input
                    type="number"
                    placeholder="Weight (lbs)"
                    onChange={(e) => {
                        setWeightState(Number(e.target.value));
                    }}/>
                </div>

                <div>
                    <input
                    type="number"
                    placeholder="Reps"
                    onChange={(e) => {
                        setRepState(Number(e.target.value));
                    }}/>
                </div>
            </div>
            <div className="calculator-estimate-container">
                {estimate.map((out, index) => {
                    if(out > 0){
                        return(
                            <div className ="output-container">
                                <p className="rep-text">
                                    {100 - 3 * index} % of 1RM: {index+1} rep(s): <b>{out} lbs</b>
                                </p>
                            </div>)
                    }
                })} 
            </div>
        </div>
    );
}