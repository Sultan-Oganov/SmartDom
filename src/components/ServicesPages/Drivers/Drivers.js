import React from 'react'
import './Drivers.css'
import img from '../../../image/services/Services.svg'

const Drivers = () => {
    return (

        <div className="drivers">
            <div className="drivers__img">
                <img src={img} alt="" />
            </div>

            <h2 className="drivers__title">Водители</h2>

            <div className="drivers__btns">
                <button className="drivers__btn">Грузоперевозки</button>
                <button className="drivers__btn">Вывоз мусора</button>
                <button className="drivers__btn">Перевозка продуктов</button>
                <button className="drivers__btn">Услуги манипулятора</button>
            </div>
        </div>

    )
}

export default Drivers