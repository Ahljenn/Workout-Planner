import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const navigate = useNavigate();

    return (
        <div className="nav-container">
            <button className="selected" onClick={() => navigate('/my-prs')}>
                <i className="fas fa-book-medical"></i> My PRs
            </button>

            <button className="not-selected">
                <i className="fas fa-book"></i> Plan
            </button>

            <button className="not-selected">
                <i className="fas fa-sign-in-alt"></i> Login
            </button>
        </div>
    );
}
