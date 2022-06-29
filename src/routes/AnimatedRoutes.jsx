import React from 'react';
import Home from './Home/Home';
import Records from './Records/Records';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/my-prs" element={<Records />} />
            </Routes>
        </AnimatePresence>
    );
}
