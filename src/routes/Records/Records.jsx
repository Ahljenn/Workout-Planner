import React, { useState } from 'react';
import NewRecord from './NewRecord';
import { motion } from 'framer-motion';
import { ReactSession } from 'react-client-session';

export default function Records() {
    ReactSession.setStoreType('localStorage');
    const userRecord = ReactSession.get('Record');
    const [prButtonClicked, setPrButtonState] = useState('unclicked');

    return (
        <motion.div
            className="records-container"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.05 } }}
        >
            <h2 className="record-h">My Personal Records</h2>

            <div>
                {prButtonClicked === 'unclicked' ? (
                    <button onClick={() => setPrButtonState('clicked')}>
                        <i className="fas fa-plus" /> New PR
                    </button>
                ) : (
                    <NewRecord setPrButtonState={setPrButtonState} />
                )}
            </div>
            {userRecord === undefined ? (
                <p>No records found</p>
            ) : (
                <div className="main-record-container">
                    {Object.values(userRecord).map((key) => {
                        return (
                            <div
                                className="record"
                                key={key.date}
                                title={key.notes}
                            >
                                <h2 className="record-title-text">
                                    <i className="fas fa-times-circle"></i>{' '}
                                    {`${key.prType}: ${key.name}`}
                                </h2>

                                <p className="date">{key.date}</p>
                                <h2 className="record-info-text" id="dark">
                                    {key.time === ''
                                        ? `Weight: ${key.weight}`
                                        : `Time: `}
                                </h2>
                                <h2 className="record-info-text">
                                    {key.reps === ''
                                        ? `${key.time}`
                                        : `Rep(s): ${key.reps}`}
                                </h2>
                            </div>
                        );
                    })}
                </div>
            )}
        </motion.div>
    );
}
