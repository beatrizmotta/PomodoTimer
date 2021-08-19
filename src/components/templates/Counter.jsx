import React, { useContext } from 'react'
import { PageContext } from '../../contexts/PageContext'
import './Counter.css'
import LongRest from './counters/LongRest'
import ShortRest from './counters/ShortRest'
import Pomodoro from './counters/Pomodoro'


function Counter(props) {
    /* O componente Counter vai pegar o pageContext que recebeu do App.js (e que é alterado pelo Navigation.jsx)
    e vai renderizar uma das páginas de temporizador baseado em qual link foi clicado. */
    const {page} = useContext(PageContext)
    return (
        <>
        {(page == 'pomodoro') && <Pomodoro />}
        {(page == 'longrest') && <LongRest />}
        {(page == 'shortrest') && <ShortRest />}
        </>
    )
}


export default Counter