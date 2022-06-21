import './styles/App.css';
import React from 'react';
import SplitDisplay from './components/SplitDisplay';
import GeneratorDisplay from './components/GeneratorDisplay';
import JimWendler from './components/JimWendler';
import Header from './components/Header';

import { positions, Provider } from 'react-alert';
import AlertMUITemplate from 'react-alert-template-mui';

const options = {
    timeout: 20000,
    position: positions.MIDDLE,
};

export default function App() {
    return (
        <Provider template={AlertMUITemplate} {...options}>
            <Header />
            <SplitDisplay />
            <GeneratorDisplay />
            <JimWendler />
        </Provider>
    );
}
