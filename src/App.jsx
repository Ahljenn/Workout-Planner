import './styles/App.css';
import SplitDisplay from './components/SplitDisplay';



export default function App() {
  return (
    <>
      <header>
        <h1 className="title">Workout Planner</h1>
      </header>

    <SplitDisplay />
{/* 
      <Marquee pauseOnClick={true}>
        {
        splits.map((split, index) => {
          if (index % 2 === 0) return <h1 className="rolling-text">{split}</h1>
          else return <h1 className="rolling-text-odd">{split}</h1>
        })}
      </Marquee> */}

    </>
  );
}