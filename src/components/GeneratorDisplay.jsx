import React, { useState } from 'react'
import * as data from '../data/workout-data';
import Generator from './Generator';
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

    const [displayState, setDisplayState] = useState("selecting");
    const [groupCount, setGroupCount] = useState(0);
    const [groupSelected, setGroupSelected] = useState([]);
    const [minutes, setMinutes] = useState(60);

    function handleVisibilityToggle() {
        setDisplayState(displayState === "selecting" ? "selected" : "selecting");
        setGroupSelected([]);
        setGroupCount(0);
    }

    function handleGenerateClick(){
        if(groupCount > 0){
            setDisplayState("generated");
        } else {
            console.error("No group was selected")
        }
    }

    if (displayState === "selecting") { //While using is selecting groups
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

                <div className="minute-container">
                    <input 
                    onChange={(e) => {setMinutes(e.target.value)}}
                    type="range" 
                    value={minutes}
                    min="20" 
                    max="240"
                    step="10"
                    className="input-minute"
                    />
                    <div className="minute-text-container">
                        <p className="minute-text">
                            {minutes >= 60 ? Math.floor(minutes / 60) : minutes}
                            {minutes >= 60 ? ` hours and ${minutes % 60} minutes` : " minutes"}
                        </p>
                    </div>
                </div>

                <div className="visibility-button-container">
                        <button className="visibility-button"
                        onClick={handleVisibilityToggle}>
                            <i className="fas fa-eye"></i> See Less
                        </button>
                </div>
            </>
        );
    } else if (displayState === "generated") { //After user has selected all groups, and generates
        return (
            <div className="generated-container">
                <Generator groups={groupSelected} count={groupCount} minute={minutes}/>

                <button 
                className="visibility-button"
                onClick={ ()=> {
                    handleVisibilityToggle("selecting")
                    setGroupSelected([]);
                    setGroupCount(0);
                }}>Reselect</button>
            </div>
        );
    } else { //If user toggles see more/see less
        return (
            <>
                <div className="visibility-button-container">
                    <button className="visibility-button"
                    onClick={handleVisibilityToggle}>
                        <i className="far fa-eye"></i> See More
                    </button>
                </div>
            </>
        );
    }
}