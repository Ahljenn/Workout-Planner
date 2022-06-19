import './styles/App.css';
import React from 'react';
import SplitDisplay from './components/SplitDisplay';
import GeneratorDisplay from './components/GeneratorDisplay';
import JimWendler from './components/JimWendler';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <SplitDisplay />
      <GeneratorDisplay />
      <JimWendler />
    </>
  );
}