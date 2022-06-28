import React from 'react';
import SplitDisplay from './SplitDisplay';
import GeneratorDisplay from './GeneratorDisplay';
import Calculator from './Calculator';

export default function Home() {
    return (
        <>
            <SplitDisplay />
            <GeneratorDisplay />
            <Calculator />
        </>
    );
}
