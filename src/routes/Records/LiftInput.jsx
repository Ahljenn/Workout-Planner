import React from 'react';

export function LiftInput({ setRecord, record }) {
    return (
        <div className="pr-info-container">
            <input
                type="text"
                value={record.name}
                onChange={(e) => {
                    setRecord({ ...record, name: e.target.value });
                }}
                placeholder="Lift Name"
            ></input>
            <input
                type="number"
                value={record.weight}
                onChange={(e) => {
                    setRecord({ ...record, weight: e.target.value });
                }}
                placeholder="Weight"
            ></input>
            <input
                type="number"
                value={record.reps}
                onChange={(e) => {
                    setRecord({ ...record, reps: e.target.value });
                }}
                placeholder="Reps"
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
