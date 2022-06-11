import React, { useState, useContext } from 'react'
import * as data from '../data/workout-data';

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

//Scrolling right feature, let user pick which day (chest, leg, shoulder, back, more specific)
//Ask user for split
// https://www.npmjs.com/package/react-horizontal-scrolling-menu


function Card(props){
    //https://codesandbox.io/s/vdr0d?file=/src/index.tsx:193-223
    const visibility = useContext(VisibilityContext);
    const visible = visibility.isItemVisible(props.itemId);
    const groupName = props.title;
    const groupImg = props.img;


    const [cardStyle, setStyle] = useState("display-card");

    return (
      <div
        onClick={() => {setStyle(cardStyle == "display-card" ? "display-card-selected" : "display-card")}}
        role="button"
        style={{
          userSelect: "none"
        }}
        tabIndex={0}
        className={cardStyle}
      >
        
        <div>
          <h2 className="group-text">{groupName}</h2>
          {/* <div style={{ backgroundColor: visible ? "transparent" : "gray" }}>
            visible: {JSON.stringify(visible)}
          </div> */}
        </div>

        <div className="group-card">
            <img className="inner-card-img" src={groupImg}/>
        </div>
      </div>
    );
  }


export default function GeneratorDisplay() {

    const [displayState, setDisplayState] = useState(true);

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
                    className="not-selected"
                    
                    >Generate</button>
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
                />
            ))}
            </ScrollMenu>
        

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
                    <button className="continue-button"
                    onClick={handleButtonClick}>
                        See More
                    </button>
                </div>
            </>

        );
    }
}