import React from 'react'
import './TaskQuestion.css'

const TaskQuestion = () => {
    return (
        <div className="taskQuestion">
            <h2 className="taskQuestion__title">Частые вопросы</h2>
            <a href="#" className="taskQuestion__item">Сколько предложений я получу?</a>
            <a href="#" className="taskQuestion__item">Обязательно ли выбирать исполнителя?</a>
            <a href="#" className="taskQuestion__item">Какую цену установить?</a>
            <a href="#" className="taskQuestion__item">Как оплачивать услуги?</a>
            <a href="#" className="taskQuestion__item">Как выбрать надежного исполнителя?</a>
            <a href="#" className="taskQuestion__item">Как не выбрать исполнителем мошенника?</a>
        </div>
    )
}

export default TaskQuestion
