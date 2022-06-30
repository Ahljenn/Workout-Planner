import React, { useState } from 'react';
import NewRecord from './NewRecord';
import { motion } from 'framer-motion';
import { ReactSession } from 'react-client-session';

export default function Records() {
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
                    console.log(key); //Continue here
                })
            )}
        </motion.div>
    );
}
