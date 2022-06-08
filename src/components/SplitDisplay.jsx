import React from 'react';
import Marquee from "react-fast-marquee";

const splitsInfo = [
    { "name" : "Push-Pull-Legs Split",
    "info" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    { "name" : "Bro Splits",
      "info" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  },
    { "name" : "Jim Wendler's 5-3-1",
      "info" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  },
    { "name" : "5-Day Split",
      "info" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
];

export default function SplitDisplay() {
  return (
    <Marquee pauseOnClick={true}>
    {
      splitsInfo.map((split, index) => {
        return(
          <div className="card">
            <h1 className={index % 2 === 0 ? "rolling-text" : "rolling-text-odd"}>
              {split.name}
            </h1>
            <p className="card-info">
              {split.info}
            </p>
          </div>
        )
      })
    }
  </Marquee>
  )
}
