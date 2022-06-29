import React, { useState, useEffect } from 'react';
import NewRecord from './NewRecord';
import { motion } from 'framer-motion';

export default function Records() {
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
            <p>No records found</p>
        </motion.div>
    );
}
