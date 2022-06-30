import React from 'react';
export function CardioInput({ setRecord, record }) {
    return (
        <div className="pr-info-container">
            <input
                type="text"
                value={record.name}
                onChange={(e) => {
                    setRecord({ ...record, name: e.target.value });
                }}
                placeholder="Workout Name"
            ></input>
            <input
                type="text"
                value={record.time}
                onChange={(e) => {
                    setRecord({ ...record, time: e.target.value });
                }}
                placeholder="Time"
            ></input>
            <input
                type="text"
                value={record.notes}
                onChange={(e) => {
                    setRecord({ ...record, notes: e.target.value });
                }}
                placeholder="Notes (optional)"
            ></input>
        </div>
    );
}
