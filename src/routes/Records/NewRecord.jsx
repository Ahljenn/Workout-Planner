import React, { useState, useEffect } from 'react';
import { CardioInput } from './CardioInput';
import { LiftInput } from './LiftInput';
import { useAlert } from 'react-alert';
import DatePicker from 'react-datepicker';
import * as ajax from '../../helpers/ajax';
import { ReactSession } from 'react-client-session';
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

export default function NewRecord({ setPrButtonState }) {
    ReactSession.setStoreType('localStorage');
    const alert = useAlert();
    const [date, changeDate] = useState(new Date());
    const [prType, setPrType] = useState('Lift');
    const [record, setRecord] = useState(initializeRecord());
    const [filled, setFill] = useState(false);

    //Whenever user switches between PR types
    useEffect(() => {
        setRecord(initializeRecord());
        setFill(false);
    }, [prType]);

    //Whenever new data is filled
    useEffect(() => {
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

        setFill(valid);
    }, [record]);

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
                        <LiftInput setRecord={setRecord} record={record} />
                    ) : (
                        <CardioInput setRecord={setRecord} record={record} />
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

            <div className="record-button-container">
                <div>
                    <button
                        className="secondary-button"
                        onClick={() => {
                            setPrButtonState('unclicked');
                        }}
                    >
                        <i className="fas fa-undo"></i> Back
                    </button>
                </div>

                <div>
                    <button
                        className={filled ? 'selected' : 'not-selected'}
                        onClick={async () => {
                            if (filled) {
                                console.log('Sending', record);
                                let prevRecords = ReactSession.get('Record'); //Get previous records, if any

                                if (prevRecords === undefined) {
                                    ReactSession.set('Record', [
                                        {
                                            ...record,
                                            prType: prType,
                                            date: date,
                                        },
                                    ]); //Set first element
                                } else {
                                    ReactSession.set('Record', [
                                        ...prevRecords,
                                        {
                                            ...record,
                                            prType: prType,
                                            date: date,
                                        },
                                    ]);
                                }

                                // await ajax.sendPostRequest(
                                //     '/query/insertNewRecord',
                                //     { ...record, prType: prType }
                                // );
                                alert.success('Stored new personal record!');
                                setPrButtonState('unclicked'); //Reset state to allow user to log more records
                            } else {
                                alert.error(
                                    'Fill out the required fields to add new records'
                                );
                            }
                        }}
                    >
                        <i className="fas fa-pencil-alt" /> Save
                    </button>
                </div>
            </div>
        </>
    );
}
