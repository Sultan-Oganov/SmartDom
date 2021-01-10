import React from 'react'
import './Promotion.css'


const Promotion = () => {
    return (
        <div className="promotion">

            <h2 className="promotion__title">Продвижение</h2>

            <div className="promotion__status">

                <h2 className="promotion__title">Статус аккаунта</h2>

                <div className="promotion__toggles">
                    <button className="promotion__toggle promotion__toggle_active">Standard</button>
                    <button className="promotion__toggle">Premium</button>
                </div>

            </div>

            <div className="promotion__divider"></div>

            <div className="promotion__content">

                <h2 className="promotion__title">Статус абонента</h2>

                <div className="promotion__row">

                    <div className="promotion__item">

                        <span className="promootion__text">Купить</span>

                        <button className="promotion__btn">Silver</button>

                        <span className="promotion__price">500 сом</span>


                    </div>

                    <div className="promotion__item">

                        <span className="promootion__text">Купить</span>

                        <button className="promotion__btn">Gold</button>

                        <span className="promotion__price">1000 сом</span>


                    </div>

                    <div className="promotion__item">

                        <span className="promootion__text">Купить</span>

                        <button className="promotion__btn">Platinum</button>

                        <span className="promotion__price">2000 сом</span>


                    </div>


                </div>

            </div>

        </div>
    )
}

export default Promotion
