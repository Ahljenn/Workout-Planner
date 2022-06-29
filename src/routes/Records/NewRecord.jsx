import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function initializeRecord() {
    return {
        name: '',
        weight: '',
        reps: '',
        time: '',
        notes: '',
    };
}

export default function NewRecord() {
    const [date, changeDate] = useState(new Date());
    const [prType, setPrType] = useState('Lift');

    const [record, setRecord] = useState(initializeRecord());

    useEffect(() => {
        setRecord(initializeRecord());
    }, [prType]);

    return (
        <>
            <div className="new-pr-container">
                <div>
                    <h2 className="record-h">Type of PR:</h2>
                    <select
                        value={prType}
                        onChange={(e) => {
                            setPrType(e.target.value);
                        }}
                    >
                        <option value="Lift">Lift</option>
                        <option value="Cardio">Cardio</option>
                    </select>
                    {prType === 'Lift' ? (
                        <div className="pr-info-container">
                            <input
                                type="text"
                                value={record.name}
                                onChange={(e) => {
                                    setRecord({
                                        ...record,
                                        name: e.target.value,
                                    });
                                }}
                                placeholder="Lift Name"
                            ></input>
                            <input
                                type="number"
                                value={record.weight}
                                onChange={(e) => {
                                    setRecord({
                                        ...record,
                                        weight: e.target.value,
                                    });
                                }}
                                placeholder="Weight"
                            ></input>
                            <input
                                type="number"
                                value={record.reps}
                                onChange={(e) => {
                                    setRecord({
                                        ...record,
                                        reps: e.target.value,
                                    });
                                }}
                                placeholder="Reps"
                            ></input>
                            <input
                                type="text"
                                value={record.notes}
                                onChange={(e) => {
                                    setRecord({
                                        ...record,
                                        notes: e.target.value,
                                    });
                                }}
                                placeholder="Notes (optional)"
                            ></input>
                        </div>
                    ) : (
                        <div className="pr-info-container">
                            <input
                                type="text"
                                value={record.name}
                                onChange={(e) => {
                                    setRecord({
                                        ...record,
                                        name: e.target.value,
                                    });
                                }}
                                placeholder="Workout Name"
                            ></input>
                            <input
                                type="number"
                                value={record.time}
                                onChange={(e) => {
                                    setRecord({
                                        ...record,
                                        time: e.target.value,
                                    });
                                }}
                                placeholder="Time"
                            ></input>
                            <input
                                type="text"
                                value={record.notes}
                                onChange={(e) => {
                                    setRecord({
                                        ...record,
                                        notes: e.target.value,
                                    });
                                }}
                                placeholder="Notes (optional)"
                            ></input>
                        </div>
                    )}
                </div>

                <div>
                    <h2 className="record-h">Date:</h2>
                    <DatePicker
                        selected={date}
                        onChange={(e) => changeDate(e)}
                    />
                </div>
            </div>
            <button
                className="not-selected"
                onClick={() => {
                    let valid = true;

                    if (prType === 'Lift') {
                        if (
                            record.name.length < 1 ||
                            record.weight.length < 1 ||
                            record.reps.length < 1
                        ) {
                            valid = false;
                        }
                    }

                    if (prType === 'Cardio') {
                        if (record.name.length < 1 || record.time.length < 1) {
                            valid = false;
                        }
                    }

                    console.log(valid ? 'good' : 'bad');
                }}
            >
                <i className="fas fa-pencil-alt" /> Save
            </button>
        </>
    );
}
