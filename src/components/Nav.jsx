import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Nav() {
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname);

    return (
        <div className="nav-container">
            <button
                className={
                    location.pathname !== '/my-prs'
                        ? 'selected'
                        : ' not-selected'
                }
                onClick={() => navigate('/my-prs')}
            >
                <i className="fas fa-book-medical"></i> Records
            </button>

            <button
                className={
                    location.pathname !== '/' ? 'selected' : ' not-selected'
                }
                onClick={() => navigate('/')}
            >
                <i className="fas fa-book"></i> Home
            </button>

            <button className="not-selected">
                <i className="fas fa-sign-in-alt"></i> Login
            </button>
        </div>
    );
}
