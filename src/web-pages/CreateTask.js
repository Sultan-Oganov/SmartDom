import React from 'react'
import TaskDescr from '../components/CreateTask/TascDescr/TaskDescr'
import TaskContent from '../components/CreateTask/TaskContent/TaskContent'

const CreateTask = () => {
    const createTask = {
        width: '100%',
        height: '100%'
    }
    return (
        <div className="createTask" style={createTask}>
            <TaskDescr />
            <TaskContent />
        </div>
    )
}

export default CreateTask