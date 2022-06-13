import React, { useState } from 'react'
import * as data from '../data/workout-data';

import { ScrollMenu } from "react-horizontal-scrolling-menu";

//Scrolling right feature, let user pick which day (chest, leg, shoulder, back, more specific)
//Ask user for split
// https://www.npmjs.com/package/react-horizontal-scrolling-menu

function Card(props){
    //https://codesandbox.io/s/vdr0d?file=/src/index.tsx:193-223

    const groupName = props.title;
    const groupImg = props.img;
    const updateButton = props.update;

    const [cardStyle, setStyle] = useState("display-card");
    

    return (
      <div
        onClick={() => { 
            if(cardStyle === "display-card"){
                setStyle("display-card-selected");
                updateButton(true);
            } else {
                setStyle("display-card");
                updateButton(false);
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


export default function GeneratorDisplay() {

    const [displayState, setDisplayState] = useState(true);
    const [generatableState, setGeneratableState] = useState(false);

    function handleButtonClick() {
        setDisplayState(!displayState);
    }

    if (displayState) {
        return (
            <>
            <div className="continue-container">
                <h2 className="select-text">Select a workout group</h2>
                <div>
                    <button
                    className={generatableState ? "selected" : "not-selected"}
                    >
                    <i class="fas fa-bolt"></i> Generate</button>
                </div>
            </div>
            <ScrollMenu
                // LeftArrow={<div style={{ fontSize: "30px" }}>{" < "}</div>}
                // RightArrow={<div style={{ fontSize: "30px" }}>{" > "}</div>}
            >
            {data.workoutGroups.map((group, index) => (
                <Card
                 title={group.name}
                 itemId={index}
                 key={index}
                 img={group.img}
                 update={setGeneratableState}
                />
            ))}
            </ScrollMenu>
        

                <div className="continue-button-container">
                        <button className="continue-button"
                        onClick={handleButtonClick}>
                            <i class="fas fa-eye"></i> See Less
                        </button>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="continue-button-container">
                    <button className="continue-button"
                    onClick={handleButtonClick}>
                        <i class="far fa-eye"></i> See More
                    </button>
                </div>
            </>

        );
    }
}