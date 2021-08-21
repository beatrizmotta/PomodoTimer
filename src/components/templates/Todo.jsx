import React, { useState, useEffect } from 'react';
import './Todo.css'
import iconTrash from '../../assets/gifs/icons8-trash-24.png'
import Task from './Task';
import {grabDoneTasks, grabNotDoneTasks} from '../../utils/grabTasks'

function Todo(props) {
    const empty = ''
    const [currentTask, setCurrentTask] = useState('')
    const [tasks, setTasks] = useState([])

    return (
        <>
            <div className='title'>
                <p>Tarefas:</p>
                <span className='clearTasks'>
                    <img onClick={() => {
                        let alltasks = []
                        let notdonetasks = [...grabNotDoneTasks()]
                        notdonetasks.forEach(t => alltasks.push(t))
                        let donetasks = [...grabDoneTasks()]
                        donetasks.forEach(t => alltasks.push(t))

                        let treatedtasks = alltasks.map(task => 
                            {
                                if (task.classList.contains('notdonetask')) {
                                    return <Task key={task.innerText}>{task.innerText}</Task>
                                } else {
                                    return
                                }
                            }
                        )
                        let remains = treatedtasks.filter(listItem => listItem !== undefined)
                        setTasks(remains)
                    }} src={iconTrash} title="Limpar tarefas cumpridas" />
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
        </>
    );
}

export default Todo;