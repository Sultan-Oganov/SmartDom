import React from 'react'
import './Contacts.css'
import { Link } from 'react-router-dom'
import qstn from '../../../../../image/task/queistion.svg'

const Contacts = () => {
    return (
        <div className="taskForm__contacts contacts">
            <div className="contacts__title">Ваши контакты</div>

            <input type="tel" className="contacts__input" placeholder="Ваш телефон" />

            <Link to="/performers" className="contacts__btn">
                Разместить заявку
            </Link>

            <label className="contacts__checkbox">
                <input type="checkbox" className="label__checkbox" />
                <div className="checkboxes__fake label__checkbox_fake"></div>
                <div className="contact__checkbox_text"><span>Публичная оферта</span></div>
            </label>
        </div>
    )
}

export default Contacts
