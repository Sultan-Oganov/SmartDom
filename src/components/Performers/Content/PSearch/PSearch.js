import React from 'react'
import './PSearch.css'

const PSearch = () => {
    return (
        <div className="psearch">
            <div className="psearch__up">
                <h2 className="psearch__title">Курьерские услуги: рейтинг
исполнителей</h2>
                <div className="psearch__city">Город: <span>Бишкек</span></div>
            </div>
            <div className="psearch__inp">
                <input type="text" name="" id="" placeholder="Поиск по имени" />
                <div className="psearch__checkboxes">
                    <label className="checkboxes__row">
                        <input type="checkbox" className="label__checkbox" />
                        <div className="checkboxes__fake label__checkbox_fake"></div>
                        <div className="checkboxes__text">Сделка без риска</div>
                    </label>
                    <label className="checkboxes__row">
                        <input type="checkbox" className="label__checkbox" />
                        <div className="checkboxes__fake label__checkbox_fake"></div>
                        <div className="checkboxes__text">Сейчас на сайте</div>
                    </label>
                </div>

            </div>
        </div>
    )
}

export default PSearch