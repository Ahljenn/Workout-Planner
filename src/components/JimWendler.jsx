import React, { useState, useEffect } from 'react'

export default function JimWendler() {
    //Component to handle the 5/3/1 one rep max calculator
        
    const [weightState, setWeightState] = useState("");
    const [repState, setRepState] = useState("");
    const [estimate, setEstimate] = useState([]);
    let temp = []; //Used to store the estimation calculations

    function resetFields(){
        temp = [];
        setWeightState("");
        setRepState("");
    }

    useEffect(() => {

        let orm = Math.round((Number(weightState) * Number(repState) * 0.0333) + Number(weightState));
        for(let i = 0; i < 10; ++i){
            temp.push(orm * (100 - 3 * i)/ 100);
        }
        setEstimate(temp)
    }, [weightState, repState])

    return(
        <div className="calculator-container">
            <h2>One rep max calculator</h2>
            <div className="calculator-interaction">
                <div className="input-container">
                    <div>
                        <input
                        type="number"
                        value={weightState}
                        placeholder="Weight (in lbs)"
                        onChange={(e) => {
                            if(e.target.value <= 3000) setWeightState(e.target.value);
                            else setWeightState(3000);
                        }}
                        />
                    </div>

                    <div>
                        <input
                        type="number"
                        value={repState}
                        placeholder="Reps (amount)"
                        onChange={(e) => {
                            if(e.target.value <= 300) setRepState(e.target.value);
                            else setRepState(300);
                        }}/>
                    </div>
                </div>

                <div className="reset-container">
                    <button className="reset-button" onClick={resetFields}>
                    <i class="fas fa-sync"></i> Reset
                    </button>
                </div>
            </div>

            <div className="calculator-estimate-container">
                {estimate.map((out, index) => {
                    if( repState > 0 && weightState > 0){
                        return(
                            <div className ="output-container">
                                <p className="rep-text">
                                    {100 - 3 * index} % of 1 rep max: {index+1} rep(s): <b className="weight">{out} lbs</b>
                                </p>
                            </div>)
                    }
                })} 
            </div>
        </div>
    );
}