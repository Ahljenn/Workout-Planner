import React from 'react';

export default function Header() {
    return (
        <>
            <hr />
            <header>
                <div>
                    <h1 className="title">Workout Planner</h1>
                </div>

                <div className="nav-container">
                    <button className="my-workouts">
                        <i className="fas fa-book"></i> Plan
                    </button>

                    <button className="my-workouts">
                        <i className="fas fa-sign-in-alt"></i> Login
                    </button>

                    <button className="my-workouts">
                        <i className="fas fa-user-plus"></i> Sign Up
                    </button>
                </div>
            </header>
        </>
    );
}
