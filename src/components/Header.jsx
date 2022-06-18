import React from 'react'

export default function Header() {
  return (
    <>
     <hr/>
      <header>
        <div>
            <h1 className="title">Workout Planner</h1>
        </div>

        <div className="nav-container">
            <button 
                className="my-workouts">
                <i class="fas fa-sign-in-alt"></i> Sign-in
            </button>

            <button 
                className="my-workouts">
                <i class="fas fa-book"></i> My plan
            </button>

        </div>

      </header>
    </>
  )
}
