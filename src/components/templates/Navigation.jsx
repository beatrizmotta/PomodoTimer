import React from 'react';
import './Navigation.css'
import {useContext} from 'react'
import { PageContext } from '../../contexts/PageContext';

function Navigation() {
        const {setPage} = useContext(PageContext)
        return (
                <div className="navegacao">
                    <a href="/" className='link' onClick={(e) => {setPage('pomodoro'); e.preventDefault()}}>Pomodoro</a>
                    <a href="/" className='link' onClick={(e) => {setPage('shortrest'); e.preventDefault()}}>Pausa Rápida</a>
                    <a href="/" className='link' onClick={(e) => {setPage('longrest'); e.preventDefault()}}>Pausa Longa</a>
                </div>
        );
    }

export default Navigation;