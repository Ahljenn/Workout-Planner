import React, { useState, useEffect } from 'react'
import { ScrollMenu } from "react-horizontal-scrolling-menu";

function Card(props){

    const groupName = props.title;
    const groupImg = props.img;
    const updateButton = props.updateCount;
    const updateGroup = props.updateGroup;
    const groupData = props.group;
    const groupCount = props.count;
    const [cardStyle, setStyle] = useState("display-card");
    
    return (
      <div
        onClick={() => { 
            if(cardStyle === "display-card"){
                setStyle("display-card-selected");
                updateButton(groupCount + 1);
                updateGroup(group => [...group, groupName]); //Add to the existing group array using spread 
            } else {
                setStyle("display-card");
                updateButton(groupCount - 1);
                updateGroup(groupData.filter(item => item !== groupName)) //Filter out the name that has been unselected
            }
        }}
        role="button"
        style={{
          userSelect: "none"
        }}
        tabIndex={0}
        className={cardStyle}
      >
        
        <div>
          <h2 className="group-text">{groupName}</h2>
        </div>

        <div className="group-card">
            <img className="inner-card-img" src={groupImg} alt={groupName}/>
        </div>
      </div>
    );
  }

export default function JimWendler() {
    //Component to handle the 5/3/1 one rep max calculator
        
    const [weightState, setWeightState] = useState("");
    const [repState, setRepState] = useState("");
    const [estimate, setEstimate] = useState([]);

    function resetFields(){
        setEstimate([]);
        setWeightState("");
        setRepState("");
    }

    useEffect(() => {
        let orm = Math.round((Number(weightState) * Number(repState) * 0.0333) + Number(weightState));
        let temp = []; //Used to store the estimation calculations
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
                            if(e.target.value <= 10000) setWeightState(e.target.value);
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
                            if(e.target.value <= 1000) setRepState(e.target.value);
                            else setRepState(1000);
                        }}/>
                    </div>
                </div>

                <div className="reset-container">
                    <button className="reset-button" onClick={resetFields}>
                    <i className="fas fa-sync"></i> Reset
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