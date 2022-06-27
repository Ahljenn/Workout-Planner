import './styles/App.css';
import React from 'react';
import Home from './routes/Home';
import MyPrs from './routes/MyPrs';
import { options } from './data/alert-options';
import { Provider } from 'react-alert';
import AlertMUITemplate from 'react-alert-template-mui';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <Provider template={AlertMUITemplate} {...options}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/my-prs" element={<MyPrs />} />
                </Routes>
            </Router>
        </Provider>
    );
}
