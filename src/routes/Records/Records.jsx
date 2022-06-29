import React, { useState } from 'react';
import NewRecord from './NewRecord';
export default function Records() {
    const [prButtonClicked, setPrButtonState] = useState('unclicked');

    return (
        <div className="records-container">
            <h2 className="record-h">My Personal Records</h2>
            <div>
                {prButtonClicked === 'unclicked' ? (
                    <button onClick={() => setPrButtonState('clicked')}>
                        <i className="fas fa-plus" /> New PR
                    </button>
                ) : (
                    <NewRecord />
                )}
            </div>
        </div>
    );
}
