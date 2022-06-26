import React, { useState, useEffect } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { calculationTypeList } from '../data/workout-data';

function EstimateCard(props) {
    return (
        <div className="display-card-calc">
            <div>
                <h2 className="group-text-calc">
                    {props.i === 0
                        ? `${props.i + 1} Repitition`
                        : `${props.i + 1} Repititions`}
                </h2>
            </div>

            <div className="group-card-calc">
                <p className="rep-text">
                    {100 - 3 * props.i} % of 1 rep max: {props.i + 1} rep(s):{' '}
                    <b className="weight">{props.out} lbs</b>
                </p>
            </div>
        </div>
    );
}

// Add these different calculation types:
// 1. Brzycki formula: Weight × (36 / (37 – number of reps))
// 2. Epley formula: Weight × (1 + (0.0333 × number of reps))
// 3. Lombardi formula: Weight × (number of reps ^ 0.1)
// 4. O’Conner formula: Weight × (1 + (0.025 × number of reps))

export default function Calculator() {
    const [weightState, setWeightState] = useState('');
    const [repState, setRepState] = useState('');
    const [estimate, setEstimate] = useState([]);
    const [calcType, setCalcType] = useState('Jim Wendler Formula');

    function resetFields() {
        setEstimate([]);
        setWeightState('');
        setRepState('');
    }

    useEffect(() => {
        let temp = []; //Used to store the estimation calculations
        if (calculationTypeList[calcType] === 'avg') {
            //Can be optimized in the future by having a set value pair for 'Average All' in the future
            Object.keys(calculationTypeList).map((key) => {
                if (key !== 'Average All') {
                    //Parse with current formula
                    let orm = Math.round(eval(calculationTypeList[key]));
                    for (let i = 0; i < 10; ++i) {
                        temp.push((orm * (100 - 3 * i)) / 100);
                    }
                }
            });
            //Get averages
            for (let i = 0; i < 10; ++i) {
                temp[i] =
                    (temp[i] +
                        temp[i + 10] +
                        temp[i + 20] +
                        temp[i + 30] +
                        temp[i + 40]) /
                    5;
            }
            temp.splice(10, 40);
        } else {
            let orm = Math.round(eval(calculationTypeList[calcType]));
            for (let i = 0; i < 10; ++i) {
                temp.push((orm * (100 - 3 * i)) / 100);
            }
        }
        setEstimate(temp);
    }, [weightState, repState, calcType]);

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
                                        setWeightState(Number(e.target.value));
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
                                        setRepState(Number(e.target.value));
                                    else setRepState(1000);
                                }}
                            />
                        </div>
                    </div>

                    <div className="calculation-type-container">
                        <h2 className="calculation-type-text">
                            <i
                                className="fas fa-question-circle"
                                title="Different calculation types may yield varying results. 
                                If you are unsure what to use, the Jim Wendler formula is a recommended option."
                            ></i>{' '}
                            Calculation type:
                        </h2>
                        <select
                            value={calcType}
                            onChange={(e) => {
                                setCalcType(e.target.value);
                            }}
                        >
                            {Object.keys(calculationTypeList).map((item) => {
                                return <option value={item}> {item}</option>;
                            })}
                        </select>
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
                        return (
                            <EstimateCard
                                out={out}
                                i={index}
                                key={index}
                                calcType={calcType}
                            />
                        );
                    } else {
                        return <p key={out}></p>; //Return nothing if user has not selected any options
                    }
                })}
            </ScrollMenu>
        </>
    );
}
