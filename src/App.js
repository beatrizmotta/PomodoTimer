import logo from './logo.svg';
import Counter from './components/templates/Counter';
import Logo from './components/templates/Logo'
import './App.css';


function App() {
  return (
    <div>
      <Logo />
      <Counter timer={6} radius={310} />
    </div>
  );
}

export default App;
