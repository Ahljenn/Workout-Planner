import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
export default function NewRecord() {
    const [date, changeDate] = useState(new Date());
    const [prType, setPrType] = useState('Lift');
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
                            <input type="text" placeholder="Lift Name"></input>
                            <input type="number" placeholder="Weight"></input>
                            <input type="number" placeholder="Reps"></input>
                            <input
                                type="text"
                                placeholder="Notes (optional)"
                            ></input>
                        </div>
                    ) : (
                        <div className="pr-info-container">
                            <input
                                type="text"
                                placeholder="Workout Name"
                            ></input>
                            <input type="number" placeholder="Time"></input>
                            <input
                                type="text"
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
            <button className="not-selected">
                <i className="fas fa-pencil-alt" /> Save
            </button>
        </>
    );
}
