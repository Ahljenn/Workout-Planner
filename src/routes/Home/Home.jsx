import React from 'react';
import GeneratorDisplay from './GeneratorDisplay';
import Calculator from './Calculator';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.05 } }}
        >
            <GeneratorDisplay />
            <Calculator />
        </motion.div>
    );
}
