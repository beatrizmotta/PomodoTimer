import Counter from './components/templates/Counter';
import Logo from './components/templates/Logo'
import Navigation from './components/templates/Navigation'
import './App.css';
import React, { useState } from 'react';
import { PageContext } from './contexts/PageContext';

function App() {
  /* Passando a página inicial como a "Pomodoro" (timer de 25 minutos) */
  const [page, setPage] = useState('pomodoro')
    return (
      <div className="main">
        <Logo />
        {/* Settando o PageContext Provider, que vai possibilitar ao usuário mudar entre páginas  */}
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
