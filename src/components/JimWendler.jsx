import React, { useState, useEffect } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

function EstimateCard(props) {
    let index = props.i;
    let out = props.output;

    return (
        <div className="display-card-calc">
            <div>
                <h2 className="group-text-calc">
                    {index === 0
                        ? `${index + 1} Repitition`
                        : `${index + 1} Repititions`}
                </h2>
            </div>

            <div className="group-card-calc">
                <p className="rep-text">
                    {100 - 3 * index} % of 1 rep max: {index + 1} rep(s):{' '}
                    <b className="weight">{out} lbs</b>
                </p>
            </div>
        </div>
    );
}

export default function JimWendler() {
    //Component to handle the 5/3/1 one rep max calculator

    const [weightState, setWeightState] = useState('');
    const [repState, setRepState] = useState('');
    const [estimate, setEstimate] = useState([]);

    function resetFields() {
        setEstimate([]);
        setWeightState('');
        setRepState('');
    }

    useEffect(() => {
        let orm = Math.round(
            Number(weightState) * Number(repState) * 0.0333 +
                Number(weightState)
        );
        let temp = []; //Used to store the estimation calculations
        for (let i = 0; i < 10; ++i) {
            temp.push((orm * (100 - 3 * i)) / 100);
        }
        setEstimate(temp);
    }, [weightState, repState]);

    return (
        <>
            <div className="calculator-container">
                <h2 className="calc-title-text">One rep max calculator</h2>
                <div className="calculator-interaction">
                    <div className="input-container">
                        <div>
                            <input
                                type="number"
                                value={weightState}
                                placeholder="Weight (in lbs)"
                                onChange={(e) => {
                                    if (e.target.value <= 0) setWeightState('');
                                    else if (e.target.value <= 10000)
                                        setWeightState(e.target.value);
                                    else setWeightState(10000);
                                }}
                            />
                        </div>

                        <div>
                            <input
                                type="number"
                                value={repState}
                                placeholder="Reps (amount)"
                                onChange={(e) => {
                                    if (e.target.value <= 0) setRepState('');
                                    else if (
                                        e.target.value <= 1000 &&
                                        e.target.value >= 0
                                    )
                                        setRepState(e.target.value);
                                    else setRepState(1000);
                                }}
                            />
                        </div>
                    </div>

                    <div className="reset-container">
                        <button className="reset-button" onClick={resetFields}>
                            <i className="fas fa-sync"></i> Reset
                        </button>
                    </div>
                </div>
            </div>
            <ScrollMenu>
                {estimate.map((out, index) => {
                    if (repState > 0 && weightState > 0) {
                        return <EstimateCard i={index} output={out} />;
                    } else {
                        return <></>; //Return nothing if user has not selected any options
                    }
                })}
            </ScrollMenu>
        </>
    );
}
