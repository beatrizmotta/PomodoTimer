import React from 'react';
import './Navigation.css'
import {useContext} from 'react'
import { PageContext } from '../../contexts/PageContext';

function Navigation() {
        const {setPage} = useContext(PageContext)
        return (
            /* Ao clique em qualquer um dos links, o setPage do PageContext que provemos em App.js vai permitir que o link
            sette qual é a página desejada.*/
                <div className="navegacao">
                    <a href="/" className='link' onClick={(e) => {setPage('pomodoro'); e.preventDefault()}}>Pomodoro</a>
                    <a href="/" className='link' onClick={(e) => {setPage('shortrest'); e.preventDefault()}}>Pausa Rápida</a>
                    <a href="/" className='link' onClick={(e) => {setPage('longrest'); e.preventDefault()}}>Pausa Longa</a>
                </div>
        );
    }

export default Navigation;