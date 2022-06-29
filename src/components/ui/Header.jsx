import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import randQuote from '../../helpers/randQuote';

export default function Header() {
    const [quote, setQuote] = useState('Placeholder - John Doe');
    useEffect(() => {
        setQuote(randQuote());
    }, []);

    return (
        <header>
            <div className="title-nav-container">
                <div>
                    <h1 className="title">Workout Planner</h1>
                </div>
                <Nav />
            </div>

            <div className="quote-container">
                <h1 className="quote">{quote}</h1>
            </div>
        </header>
    );
}
