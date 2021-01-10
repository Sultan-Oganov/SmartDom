import React from 'react'
import GenSet from '../Settings/GenSet/GenSet'
import './AboutMe.css'

const AboutMe = () => {
    return (


        <div className="profile__aboutMe aboutMe">

            {/* <div className="aboutMe__top">

                <div className="aboutMe__block aboutMe__firstBlock">
                    <h3>Немного о себе</h3>
                    <button className="aboutMe__btn aboutMe__text">Добавить</button>
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

            </div> */}

            <GenSet />


        </div>
    )
}

export default AboutMe
