import Counter from './components/templates/Counter';
import Logo from './components/templates/Logo'
import Navigation from './components/templates/Navigation'
import Todo from './components/templates/Todo';
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
            <PageContext.Provider value={{ page, setPage }}>
                <Navigation />
                <div className="content">
                    <Counter />
                    <div className="todo_container">
                        <div className="todo">
                            <Todo />
                        </div>
                    </div>
                </div>
            </PageContext.Provider>
            <footer>
                <p>Made by <a target="_blank" href="https://beatrizmotta.github.io/">Beatriz Motta</a>. Icons by <a target="_blank" href="https://icons8.con">Icons8</a>.</p>
            </footer>
        </div>
    );
}



export default App;
