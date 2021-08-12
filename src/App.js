import Counter from './components/templates/Counter';
import Logo from './components/templates/Logo'
import Navigation from './components/templates/Navigation'
import './App.css';


function App() {
  return (
    <div>
      <Logo />
      <Navigation />
      <Counter timer={6} radius={310} />
    </div>
  );
}

export default App;
