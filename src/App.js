import Counter from './components/templates/Counter';
import Logo from './components/templates/Logo'
import Navigation from './components/templates/Navigation'
import './App.css';
import React, { useState } from 'react';
import { PageContext } from './contexts/PageContext';

function App() {
  const [page, setPage] = useState('pomodoro')
    return (
      <div className="main">
        <Logo />
        <PageContext.Provider value={{page, setPage}}>
          <Navigation />
          <div className="content">
            <Counter />
          </div>
        </PageContext.Provider>

      </div>
    );
  }



export default App;
