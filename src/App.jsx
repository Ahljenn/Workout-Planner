import './styles/App.css';
import SplitDisplay from './components/SplitDisplay';
import GeneratorDisplay from './components/GeneratorDisplay';

export default function App() {
  return (
    <>
     <hr/>
      <header>
        <h1 className="title">Workout Planner</h1>
      </header>
      <SplitDisplay />
      <GeneratorDisplay />
    </>
  );
}