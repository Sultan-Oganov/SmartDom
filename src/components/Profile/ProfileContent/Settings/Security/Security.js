import React from 'react'
import './Security.css'
import check from '../../../../../image/profile/Check.svg'

const Security = () => {
    return (
        <div className="security">
            <h2 className="security__title">Изменить пароль</h2>
            <div className="security__content">
                <h3 className="security__label">Придумайте новый пароль с такими требованиями:</h3>
                <div className="security__spec">
                    <div className="security__text"><img src={check} alt="" />Длина - не менее 8 символов;</div>
                    <div className="security__text"><img src={check} alt="" />Заглавные буквы;</div>
                    <div className="security__text"><img src={check} alt="" />Строчные буквы;</div>
                    <div className="security__text"><img src={check} alt="" />Цифры или специальные символы: %,#,$ и другие;</div>
                </div>

                <div className="security__pw">
                    <div className="security__text">Новый пароль</div>
                    <input type="password" />
                </div>
                <div className="security__pw">
                    <div className="security__text">Повторите пароль</div>
                    <input type="password" />
                </div>
                <button className="security__btn">Сохранить новый пароль</button>
            </div>
        </div>
    )
}

export default Security
