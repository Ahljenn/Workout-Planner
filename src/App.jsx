import './styles/App.css';
import SplitDisplay from './components/SplitDisplay';

export default function App() {
  return (
    <>
     <hr/>
      <header>
        <h1 className="title">Workout Planner</h1>
      </header>
      <SplitDisplay />
    </>
  );
}