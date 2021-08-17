import React, { useContext } from 'react'
import { PageContext } from '../../contexts/PageContext'
import './Counter.css'
import LongRest from './counters/LongRest'
import ShortRest from './counters/ShortRest'
import Pomodoro from './counters/Pomodoro'


function Counter(props) {

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