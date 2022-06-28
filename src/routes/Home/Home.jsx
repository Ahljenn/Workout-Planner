import React from 'react';
import Header from '../../components/Header';
import SplitDisplay from '../../components/SplitDisplay';
import GeneratorDisplay from '../../components/GeneratorDisplay';
import Calculator from '../../components/Calculator';

export default function Home() {
    return (
        <>
            <SplitDisplay />
            <GeneratorDisplay />
            <Calculator />
        </>
    );
}
