import React from 'react';
import { Checkbox } from '../Checkbox';
import { useTasks } from '../../hooks';

export const Tasks = () => {
    const { tasks } = useTasks('1');
    console.log(tasks);
    
    let projectName = '';

    return(
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="project-name">{ projectName }</h2>

            <ul className="tasks__list">
            {tasks.map(tasks => (
                <li key={`${tasks.id}`}>
                <Checkbox id={tasks.id} />
                <span>{tasks.task}</span>
                </li>


            ))}
            </ul>
        </div>



    )
}