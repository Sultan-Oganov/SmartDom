import React from 'react'
import './TaskContent.css'
import TaskForm from './TaskForm/TaskForm'
import TaskQuestion from './TaskQuestion/TaskQuestion'

const TaskContent = () => {
    return (
        <div className="taskContent">
            <TaskForm />
            <TaskQuestion />
        </div>
    )
}

export default TaskContent