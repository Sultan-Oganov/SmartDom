import React from 'react'
import './ProfileContent.css'
import photo from '../../../image/avatar.jpg'
import gear from '../../../image/profile/gear.svg'
import location from '../../../image/profile/location.svg'
import camera from '../../../image/task/camera.svg'
import AboutMe from './AboutMe/AboutMe'
import ProfileCount from './ProfileCount/ProfileCount'
import Insurance from './Insurance/Insurance'

const ProfileContent = () => {
    return (
        <div className="profileContent">

            <div className="profileContent__top">
                <h2 className="profileContent__name">Здравcтвуйте, Бермет!</h2>
                <div className="profileContent__btns">
                    <button className="profileContent__customer profileContent__btn ">Я заказчик</button>
                    <button className="profileContent__executor profileContent__btn profileContent__btn_active">Я исполнитель</button>
                </div>
            </div>

            <div className="profileContent__center">

                <div className="profileContent__photo">
                    <img src={photo} alt="" />
                    <div className="label__fake label__photo_fake profileContent__photo_fake">
                        <input type="file" className="input__photo" id="input__photo" />
                        <label htmlFor="input__photo">
                            <img className="profileContent__camera" src={camera} alt="" />
                            <span className="fake__text">Добавить фото</span>
                        </label>
                    </div>
                </div>



                <div className="profileConten__feature">
                    <div className="profileContent__location">
                        <img src={location} alt="" />
                        <h3>Бишкек</h3>
                    </div>
                    <div className="profileContent__likes">
                        Нет оценок
                    </div>
                </div>

            </div>

            <div className="profileContent__down profile">

                <div className="profile__tabs tabs">
                    <div className="tabs__leftBlock">
                        <div className="tabs__item tabs__item_active">Обо мне</div>
                        <div className="tabs__item">Счет</div>
                        <div className="tabs__item">Страхование</div>
                    </div>

                    <div className="tabs__item"><img src={gear} alt="" /></div>
                </div>

                <AboutMe />
                {/* <ProfileCount /> */}
                {/* <Insurance /> */}

            </div>

        </div>
    )
}

export default ProfileContent
