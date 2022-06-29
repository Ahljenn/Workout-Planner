import './styles/App.css';
import React from 'react';
import Home from './routes/Home/Home';
import Records from './routes/Records/Records';
import Header from './components/ui/Header';
import SplitDisplay from './components/ui/SplitDisplay';
import { options } from './data/alert-options';
import { Provider } from 'react-alert';
import AlertMUITemplate from 'react-alert-template-mui';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <Provider template={AlertMUITemplate} {...options}>
            <Router>
                <Header />
                <SplitDisplay />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/my-prs" element={<Records />} />
                </Routes>
            </Router>
        </Provider>
    );
}
