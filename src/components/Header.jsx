import Nav from './Nav';
import React from 'react';

export default function Header() {
    return (
        <>
            <hr />
            <header>
                <div>
                    <h1 className="title">Workout Planner</h1>
                </div>
                <Nav />
            </header>
        </>
    );
}
