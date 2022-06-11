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
    
    return (
      <div
        role="button"
        style={{
          userSelect: "none"
        }}
        tabIndex={0}
        className="display-card"
      >
        
        <div>
          <div>{props.title}</div>
          {/* <div style={{ backgroundColor: visible ? "transparent" : "gray" }}>
            visible: {JSON.stringify(visible)}
          </div> */}
        </div>

        <div className="group-card">
            test
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
            <ScrollMenu
                LeftArrow={<div style={{ fontSize: "30px" }}>{" < "}</div>}
                RightArrow={<div style={{ fontSize: "30px" }}>{" > "}</div>}
            >
            {data.workoutGroups.map((group, index) => (
                <Card
                 title={group.name}
                 itemId={index}
                 key={index}
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