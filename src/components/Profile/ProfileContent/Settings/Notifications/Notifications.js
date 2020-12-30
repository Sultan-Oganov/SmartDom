import React from 'react'
import './Notifications.css'

const Notifications = () => {
    return (
        <div className="notifications">
            <h2 className="notifications__title">Получать уведомления:</h2>

            <div class="notifications__content">

                <label className="checkboxes__row">
                    <input type="checkbox" className="label__checkbox" />
                    <div className="checkboxes__fake label__checkbox_fake"></div>
                    <div className="checkboxes__text ">Системные уведомления</div>
                </label>

                <label className="checkboxes__row">
                    <input type="checkbox" className="label__checkbox" />
                    <div className="checkboxes__fake label__checkbox_fake"></div>
                    <div className="checkboxes__text ">Я хочу получать новости сайта</div>
                </label>

                <div className="notifications__text">Подписываться на задания могут только исполнители <a href="" class="notifications__link">с подтвержденным аккаунтом</a></div>
                <button className="notifications_btn">Сохранить</button>
            </div>
        </div>
    )
}

export default Notifications