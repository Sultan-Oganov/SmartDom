import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div>

            <div className="profile__aboutMe aboutMe">

                <div className="aboutMe__top">

                    <div className="aboutMe__block aboutMe__firstBlock">
                        <h3>Немного о себе</h3>
                        <button className="aboutMe__btn aboutMe__text">Добавить</button>
                    </div>

                    <div className="aboutMe__block aboutMe__secondBlock">
                        <h3>У вас нет оценок в настоящее время</h3>
                        <div className="aboutMe__text">
                            Заказчики оценивают всех исполнителей по разообразным критериям, таких как цена,
                            качество, вежливость
        </div>
                    </div>

                    <div className="aboutMe__block aboutMe__thirdBlock">
                        <h3>Отзывов пока нет</h3>
                        <div className="aboutMe__text">
                            Отзывы появятся после того, как  создадите или выполните задание
        </div>
                    </div>


                    <label className="checkboxes__row aboutMe__fourthBlock">
                        <input type="checkbox" className="label__checkbox" />
                        <div className="checkboxes__fake label__checkbox_fake"></div>
                        <div className="checkboxes__text">Публичная оферта</div>
                    </label>

                </div>

                <div className="aboutMe__down">

                    <div className="aboutMe__warn warn">

                        <div className="warn__text">
                            Выполнять заказы на Smart DOM могут только совершеннолетние пользователи,
                            прошедшие процендуру подтверждения профиля.
        </div>

                        <button className="warn__btn">
                            Я хочу стать исполнителем
        </button>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default AboutMe
