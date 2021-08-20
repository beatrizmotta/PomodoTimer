import React, { useState, useEffect } from 'react';
import {TodoContext} from '../../contexts/TodoContext'
import './Todo.css'
import iconTrash from '../../assets/gifs/icons8-trash-24.png'
import Task from './Task';
import grabDoneTasks, {clearDoneTasks} from '../../utils/grabDoneTasks'

function Todo(props) {
    const empty = ''
    const [currentTask, setCurrentTask] = useState('')
    const [tasks, setTasks] = useState([])

    const [checkStatus, setCheckStatus] = useState(false)

    return (
        <>
            <TodoContext.Provider value={{checkStatus, setCheckStatus}}>
                <div className='title'>
                    <p>Tarefas:</p>
                    <span className='clearTasks'>
                        <img onClick={() => {
                            setTasks(Array.from(clearDoneTasks()).map(task => {
                                <Task key={task.innerText}>{task.innerText}</Task>
                            }))
                        }} src={iconTrash} title="Limpar tarefas cumpridas"/>
                    </span>
                </div>
                <div className="tasks">
                    {tasks}
                </div>
                <div className="task taskinput">
                    <input
                        onChange={(e) => {
                            setCurrentTask(<Task key={e.target.value}>{e.target.value}</Task>)
                        }}
                        onKeyPress={(e) => {
                            if (e.code == 'Enter') {
                                e.target.value = empty
                                setCurrentTask('')
                                setTasks(tasks => tasks.concat(currentTask))
                            } else {
                                return
                            }
                        }}
                        placeholder="Adicione uma nova tarefa aqui..."
                    />
                </div>
            </TodoContext.Provider>
        </>
    );
}

export default Todo;