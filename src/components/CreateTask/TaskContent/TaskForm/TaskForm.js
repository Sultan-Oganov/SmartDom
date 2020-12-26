import React from 'react'
import './TaskForm.css'
import Labels from './Labels/Labels'
import Address from './Adress/Adress'
import DateAndTime from './DateAndTime/DateAndTime'
import Contacts from './Contacts/Contacts'

const TaskForm = () => {
    return (
        <div className="taskForm">
            <form className="taskForm__form">
                <h2 className="taskForm__title">Заполните заявку</h2>

                <Labels />

                <DateAndTime />

                <Address />

                <Contacts />

                <div className="taskForm__descr">
                    Нажимая “Опубликовать”, вы соглашаетесь с правилами платежного сервиса
                    <a href="#"><span className="yellow">“Единая касса - Безопасная сделака”</span></a> и сервиса <a href="#"><span className="yellow">“Сделка без риска”</span></a>. Ваш банк
                    может взимать дополнительную комиссию. <a href="#"><span className="yellow">Отключить сделку без риска</span></a>
                </div>
            </form>

        </div >
    )
}

export default TaskForm