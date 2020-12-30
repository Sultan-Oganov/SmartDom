import React from 'react'
import './GenSet.css'

const GenSet = () => {
    return (
        <div className="genSet">
            <div class="persData">
                <h2 className="persData__title">Личные данные</h2>
                <div class="persData__persone persone__container">
                    <div className="persone">
                        <div className="persone__row">
                            <p className="persone__label">Имя</p>
                            <input className="persone__input" type="text" />
                        </div>
                        <div className="persone__row">
                            <p className="persone__label">Фамилия</p>
                            <input className="persone__input" type="text" />
                        </div>
                        <div className="persone__row">
                            <p className="persone__label">Дата</p>
                            <input className="persone__input" type="date" />
                        </div>
                        <div className="persone__row persone__row_radio">
                            <p className="persone__label">Пол</p>
                            <label className="radio__row">
                                <input type="radio" name="sex" className="label__radio" />
                                <div className="radio__fake label__radio_fake"></div>
                                <div className="checkboxes__text">Мужчина</div>
                            </label>
                            <label className="radio__row">
                                <input type="radio" name="sex" className="label__radio" />
                                <div className="radio__fake label__radio_fake"></div>
                                <div className="checkboxes__text">Женщина</div>
                            </label>

                        </div>
                        <div className="persone__row">
                            <p className="persone__label">Город</p>
                            <input className="persone__input persone__input_city" maxLength="21" name="city" />
                        </div>
                        <div className="persone__row">
                            <p className="persone__label">Email</p>
                            <input className="persone__input" type="email" />
                        </div>
                        <div className="persone__row">
                            <p className="persone__label">Ваш Email виден только вам</p>
                        </div>
                        <button class="persone__btn persone__btn_safe">Сохранить личные данные</button>
                    </div>

                </div>
                <h2 className="persData__title">Номер Телефона</h2>
                <div className="persData__persone">
                    <div class="persone">
                        <div className="persone__row">
                            <p className="persone__label">Контактный номер</p>
                            <input className="persone__input" type="tel" placeholder="+996" />
                            <p className="persone__label">Ваш номер телефона виден только вам</p>
                        </div>
                        <button class="persone__btn persone__btn_safe">Сохранить номер телефона</button>
                    </div>
                </div>
                <button class="persone__btn persone__btn_delete">Удалить профиль</button>


            </div>
        </div>
    )
}

export default GenSet
