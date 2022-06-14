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


export default function GeneratorDisplay() {

    const [displayState, setDisplayState] = useState(true);
    const [groupCount, setGroupCount] = useState(0);
    const [groupSelected, setGroupSelected] = useState([]);

    function handleButtonClick() {
        setDisplayState(!displayState);
        setGroupCount(0);
    }

    function handleGenerateClick(){
        if(groupCount > 0){
            console.log(groupSelected)
        } else {
            console.error("No group was selected")
        }
    }

    if (displayState) {
        return (
            <>
            <div className="continue-container">
                <h2 className="select-text">Select a workout group</h2>
                <div>
                    <button
                    className={groupCount > 0 ? "selected" : "not-selected"}
                    onClick={handleGenerateClick}>
                    <i className="fas fa-bolt"></i> Generate</button>
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
                 img={group.img}
                 updateCount={setGroupCount}
                 count={groupCount}
                 updateGroup={setGroupSelected}
                 group={groupSelected}
                />
            ))}
            </ScrollMenu>
        
                <div className="continue-button-container">
                        <button className="continue-button"
                        onClick={handleButtonClick}>
                            <i className="fas fa-eye"></i> See Less
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
                        <i className="far fa-eye"></i> See More
                    </button>
                </div>
            </>

        );
    }
}