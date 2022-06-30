import { AnimatedRoutes } from './routes/AnimatedRoutes';
import './styles/App.css';
import React from 'react';

import Header from './components/ui/Header';
import SplitDisplay from './components/ui/SplitDisplay';
import { options } from './data/alert-options';
import { Provider } from 'react-alert';
import AlertMUITemplate from 'react-alert-template-mui';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
    return (
        <Provider template={AlertMUITemplate} {...options}>
            <Router>
                <Header />
                <SplitDisplay />
                <AnimatedRoutes />
            </Router>
        </Provider>
    );
}
