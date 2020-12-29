import React from 'react'
import './ProfileCount.css'
import arrow from '../../../../image/searchTask/arrow.svg'

const ProfileCount = () => {
    return (
        <div className="profileCount">

            <h3 className="profileCount__balance">
                Ваш баланс 0 бонусов
            </h3>

            <div className="profileCount__history history">

                <div className="history__top">

                    <h3 className="history__label">История операций</h3>

                    <div className="dropdown">
                        <div className="dropdown__label">
                            За месяц
                        </div>
                        <img src={arrow} alt="" className="dropdown__arrow" />
                    </div>

                </div>

                <div className="history__center">
                    <button className="history__btn">Все операции</button>
                    <a href="" className="history__func">Пополнение счета</a>
                    <a href="" className="history__func">Списание с счета</a>
                </div>

                <div className="history__down">
                    <div className="history__transaction">
                        За данный период транзакций не было
                    </div>
                </div>

            </div>

            <div className="profileCount__question question">
                <h3 className="question__title">Частые вопросы</h3>
                <div className="question__label">
                    Бонусы <strong>Smart DOM</strong>
                </div>
                <div className="question__text">
                    Бонусы можно использовать для оплаты работы исполнителей. Бонусы ельзя вывести
                    со счета
                </div>
                <h3 className="question__label">Какая минимальная сумма для пополнения счета?</h3>
                <div className="question__price">500 сомов</div>
            </div>

        </div>
    )
}

export default ProfileCount
