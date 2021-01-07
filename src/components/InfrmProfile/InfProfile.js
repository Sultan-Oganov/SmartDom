import React from 'react'
import './InfProfile.css'
import ava from '../../image/avatar.jpg'
import img from '../../image/infProf/img.svg'
import like from '../../image/infProf/like.svg'
import star from '../../image/infProf/star.svg'

const InfProfile = () => {
    return (
        <div className="infProfile">

            <div className="infProfile__content">

                <div className="infProfile__top">

                    <div className="infProfile__about">

                        <div className="infProfile__first-block">

                            <div className="infProfile__ava">
                                <img className="infProfile__ava" src={ava} />
                            </div>

                            <div className="infProfile__stat">
                                <p> Отзывы:</p>
                                <img className="infProfile__like" src={like} alt="" />
                                <div className="infProfile__count">
                                    5000
                                </div>
                            </div>
                            <div className="infProfile__stars">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>

                        </div>

                        <div className="infProfile__second-block">

                            <h2 className="infProfile__UserName">Иван Иванов</h2>

                            <div className="infProfile__net">Сейчас на сайте</div>

                            <label htmlFor="infProfile__descr" className="infProfile__txLab">Описание....</label>

                            <textarea name="" id="infProfile__descr" className="infProfile__descr"></textarea>

                        </div>

                        <div className="infProfile__third-block">

                            <img src={img} className="infProfile__img" alt="" />

                        </div>

                        <div className="infProfile__fourth-block">

                            <button className="infProfile__btn btn__about">
                                Написать личное сообщение
                            </button>

                            <button className="infProfile__btn btn__about">
                                Отправить письмо на почту
                            </button>

                        </div>

                    </div>

                </div>

                <div className="infProfile__bot">

                    <div className="infProfile__comment comment">

                        <h1 className="comment__title">Отзывы от заказчиков:</h1>

                        <div className="comment__block">

                            <div className="comment__item">

                                <h2 className="comment__userName">Максим Белоусов</h2>

                                <div className="comment__descr">
                                    Исполнитель выполнил свою работу быстро, я даже удивился! Впервые за всю свою жизнь, курьер выполнил свою работу ОЧЕНЬ быстро! Пять звезд 🔥🔥🔥
                                </div>

                            </div>

                            <div className="comment__item">

                                <h2 className="comment__userName">Максим Белоусов</h2>

                                <div className="comment__descr">
                                    Исполнитель выполнил свою работу быстро, я даже удивился! Впервые за всю свою жизнь, курьер выполнил свою работу ОЧЕНЬ быстро! Пять звезд 🔥🔥🔥
                                </div>

                            </div>

                            <div className="comment__item">

                                <h2 className="comment__userName">Максим Белоусов</h2>

                                <div className="comment__descr">
                                    Исполнитель выполнил свою работу быстро, я даже удивился! Впервые за всю свою жизнь, курьер выполнил свою работу ОЧЕНЬ быстро! Пять звезд 🔥🔥🔥
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="infProfile__bot_button">
                        <button className="infProfile__btn infProfile__create_btn">Создать заявку</button>
                    </div>


                </div>

            </div>

        </div >
    )
}

export default InfProfile