import React, {useState, useContext} from 'react';
import check from '../../assets/gifs/icons8-checkmark-30.png'

function Task(props) {
    const [isChecked, setCheckState] = useState(false)

    return (
        <div className={`task ${isChecked ? 'done' : 'notdone'}`}>
            {isChecked ? <strike className="outlined">{props.children}</strike> : props.children}
            <div 
                onClick={() => {
                    isChecked ? setCheckState(false) : setCheckState(true)
                }}
                className='checkmark'>
                <img src={check} className={`checkmark_simbol ${isChecked ? 'done' : ''}`} alt="checkmark" />
            </div>
        </div>
    );
}

export default Task;