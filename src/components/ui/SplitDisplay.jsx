import React from 'react';
import Marquee from 'react-fast-marquee';
import { splitsInfo } from '../../data/workout-data';

export default function SplitDisplay() {
    return (
        <>
            <Marquee pauseOnHover={true}>
                {splitsInfo.map((split, index) => {
                    return (
                        <div className="card" key={split + index}>
                            <h1
                                className={
                                    index % 2 === 0
                                        ? 'rolling-text'
                                        : 'rolling-text-odd'
                                }
                            >
                                {split.name}
                            </h1>
                            <p className="card-info">{split.info}</p>
                        </div>
                    );
                })}
            </Marquee>
        </>
    );
}
