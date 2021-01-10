import React from 'react'
import './TaskDescr.css'

const TaskDescr = () => {
    return (
        <div className="taskDescr">
            <h1 className="taskDescr__title">Ищите быстрого и надежного курьера?</h1>
            <div className="taskDescr__text">
                <div className="taskDescr__column">
                    <div className="taskDescr__num">1.</div>
                    <div className="taskDescr__txt taskDescr__txt_s">
                        <div className="taskDescr__label">Заполните заявку</div>
                        <div className="taskDescr__descr">Мы быстро оповестим исполнителей <strong>Smart</strong> <span>DOM</span> о вашей заявке.</div>
                    </div>

                </div>
                <div className="taskDescr__column">
                    <div className="taskDescr__num">2.</div>
                    <div className="taskDescr__txt">
                        <div className="taskDescr__label">Выберите исполнителя</div>
                        <div className="taskDescr__descr">Выберите подходящего для вас предложение по цене или рейтингу исполнителя.</div>
                    </div>
                </div>
                <div className="taskDescr__column">
                    <div className="taskDescr__num">3.</div>
                    <div className="taskDescr__txt taskDescr__txt_s">
                        <div className="taskDescr__label">Заполните заявку</div>
                        <div className="taskDescr__descr">Мы быстро оповестим исполнителей <strong>Smart</strong> <span>DOM</span> о вашей заявке.</div>
                    </div>

                </div>
                <div className="taskDescr__column">
                    <div className="taskDescr__num">4.</div>
                    <div className="taskDescr__txt">
                        <div className="taskDescr__label">Выберите исполнителя</div>
                        <div className="taskDescr__descr">Выберите подходящего для вас предложение по цене или рейтингу исполнителя.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskDescr