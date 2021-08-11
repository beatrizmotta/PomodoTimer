import logo from './logo.svg';
import Counter from './components/templates/Counter';
import './App.css';


function App() {
  return (
    <div>
      <Counter timer={2} radius={300} />
    </div>
  );
}

export default App;
