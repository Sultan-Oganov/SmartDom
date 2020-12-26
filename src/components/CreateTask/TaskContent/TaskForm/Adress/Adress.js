import React from 'react'
import './Adress.css'
import qstn from '../../../../../image/task/queistion.svg'
import geo from '../../../../../image/task/geo.svg'
const Adress = () => {
    return (
        <div className="taskForm__adress adress">

            <div className="adress__text label__text">
                <span>Адрес</span>
                <span>мои адреса</span>
            </div>

            <div className="adress__inputs">
                <div className="adress__input label">
                    <input type="text" placeholder="Улица, дом, строение, корпус" />
                    <a href="geo:38.62464092991612">
                        <img src={geo} alt="" />
                    </a>
                </div>
                <div className="adress__input_more">
                    <div className="adress__input label">
                        <input type="text" placeholder="Улица, дом, строение, корпус" />
                        <a href="geo:38.62464092991612">
                            <img src={geo} alt="" />
                        </a>
                    </div>
                    <div className="adress__hideBtn"></div>
                </div>

            </div>

            <a href="#" className="adress__add"><span className="yellow">Добавить еще один адрес</span></a>

            <div className="adress__checkboxes checkboxes ">
                <label className="checkboxes__row">
                    <input type="checkbox" className="label__checkbox" />
                    <div className="checkboxes__fake label__checkbox_fake"></div>
                    <div className="checkboxes__text">Я использую Smart DOM для бизнеса, нужны закрывающие документы</div>
                </label>
                <label className="checkboxes__row">
                    <input type="checkbox" className="label__checkbox" />
                    <div className="checkboxes__fake label__checkbox_fake"></div>
                    <div className="checkboxes__text">Отдаю предпочтение застрахованным исполнителям </div>
                </label>
                <label className="checkboxes__row">
                    <input type="checkbox" className="label__checkbox" />
                    <div className="checkboxes__fake label__checkbox_fake"></div>
                    <div className="checkboxes__text">Исполнитель должен иметь документы для оформления расписки/ доверенности</div>
                </label>

                <div className="checkboxes__links">
                    <a href=""><span className="yellow">Посмотреть пример расписки </span></a>
                    <a href=""><span className="yellow">Дополнительные условия  </span></a>
                </div>
            </div>

        </div>
    )
}

export default Adress
