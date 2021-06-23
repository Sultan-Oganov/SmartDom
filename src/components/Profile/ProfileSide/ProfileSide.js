import React from 'react'
import './ProfileSide.css'
import img from '../../../image/searchTask/categories.svg'

const ProfileSide = () => {
    return (
        <div className="profileSide">
            <div className="profileSide__wrapper">
                <div className="profileSide__view">
                    0 просмотров профиля
                </div>

                <div className="profileSide__img">
                    <img src={img} alt="" />
                </div>

                <div className="profileSide__linking linking">
                    {/* <h2 className="linking__label">Подтвержденные аккаунты</h2>

                    <div className="linking__item">
                        <div className="linking__soc"></div>
                        <div className="linking__inf">
                            <div className="linking__name">Email</div>
                            <button className="linking__btn">Привязать</button>
                        </div>
                    </div>

                    <div className="linking__item">
                        <div className="linking__soc"></div>
                        <div className="linking__inf">
                            <div className="linking__name">Email</div>
                            <button className="linking__btn">Привязать</button>
                        </div>
                    </div>

                    <div className="linking__descr">
                        Повысьте доверие пользователей к
                        себе - привяжите свои аккаунты
                        социальных сетей к портфолио
                    <strong> Smart <span>DOM</span></strong>. Мы обязуемся не
                    раскрывать ваши контакты.
                </div>

                    <div className="linking__item">
                        <div className="linking__soc"></div>
                        <div className="linking__inf">
                            <div className="linking__name">Вконтакте</div>
                            <button className="linking__btn">Привязать</button>
                        </div>
                    </div>

                    <div className="linking__item">
                        <div className="linking__soc"></div>
                        <div className="linking__inf">
                            <div className="linking__name">Facebook</div>
                            <button className="linking__btn">Привязать</button>
                        </div>
                    </div>

                    <div className="linking__item">
                        <div className="linking__soc"></div>
                        <div className="linking__inf">
                            <div className="linking__name">Google</div>
                            <button className="linking__btn">Привязать</button>
                        </div>
                    </div>

                    <div className="linking__item">
                        <div className="linking__soc"></div>
                        <div className="linking__inf">
                            <div className="linking__name">Apple ID</div>
                            <button className="linking__btn">Привязать</button>
                        </div>
                    </div> */}

                </div>
            </div>

        </div>
    )
}

export default ProfileSide
