import React from 'react'
import './Courier.css'
import img from '../../../image/services/Services.svg'

const Courier = () => {
    return (
        <div className="courier">
            <div className="courier__img">
                <img src={img} alt="" />
            </div>

            <h2 className="courier__title">Курьеры</h2>

            <div className="courier__btns">

                <div className="courier__first">
                    <button className="courier__btn">Курьерские услуги</button>
                    <button className="courier__btn">Услуги грузчиков</button>
                    <button className="courier__btn">Вывоз мусора</button>
                </div>

                <div className="courier__second">
                    <button className="courier__btn">Международные перевозки</button>
                    <button className="courier__btn">Услуги эвакуатора</button>
                    <button className="courier__btn">Грузоперевозки</button>
                </div>

                <div className="courier__third">
                    <button className="courier__btn">Перевозка стройматериалов</button>
                    <button className="courier__btn">Перевозка продуктов</button>
                    <button className="courier__btn">Перевозка стройматериалов</button>
                </div>



            </div>
        </div>

    )
}

export default Courier