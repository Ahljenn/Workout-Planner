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
                    <h3>Type of PR:</h3>
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
                        </div>
                    ) : (
                        <div className="pr-info-container">
                            <input
                                type="text"
                                placeholder="Workout Name"
                            ></input>
                            <input type="number" placeholder="Time"></input>
                        </div>
                    )}
                </div>
                <div>
                    <h3>Date:</h3>
                    <DatePicker
                        selected={date}
                        onChange={(e) => changeDate(e)}
                    />
                </div>
            </div>
            <button>
                <i className="fas fa-pencil-alt" /> Save
            </button>
        </>
    );
}
