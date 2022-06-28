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
                    location.pathname !== '/' ? 'selected' : 'selected-page'
                }
                onClick={() => navigate('/')}
            >
                <i className="fas fa-home"></i> Home
            </button>

            <button
                className={
                    location.pathname !== '/my-prs'
                        ? 'selected'
                        : 'selected-page'
                }
                onClick={() => navigate('/my-prs')}
            >
                <i className="fas fa-book-medical"></i> Records
            </button>

            <button className="disabled">
                <i className="fas fa-sign-in-alt"></i> Login
            </button>
        </div>
    );
}
