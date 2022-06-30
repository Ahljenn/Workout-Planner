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
                Object.values(userRecord).map((key) => {
                    return (
                        <div className="record" key={key.date}>
                            <h2>{`${key.prType}: ${key.name}`}</h2>
                            <h3>{key.date}</h3>
                            <p>
                                {key.time === ''
                                    ? `Weight: ${key.weight}`
                                    : `Time: ${key.time}`}
                            </p>
                            <p>
                                {key.reps === '' ? '' : `Rep(s): ${key.reps}`}
                            </p>
                            <p>
                                {key.notes === '' ? '' : `Notes: ${key.notes}`}
                            </p>
                        </div>
                    );
                })
            )}
        </motion.div>
    );
}
