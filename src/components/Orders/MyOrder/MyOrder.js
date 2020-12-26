import React from 'react'
import './MyOrder.css'
import img from '../../../image/orders/noOder.svg'

const MyOrder = () => {
    return (
        <div className="myOrder">
            <div className="myOrder__toggles toggles">

                <div className="toggles__btns">
                    <button className="toggles__customer">Я заказчик</button>
                    <button className="toggles__executor">Я исполнитель</button>
                </div>

                <label className="checkboxes__row">
                    <input type="checkbox" className="label__checkbox" />
                    <div className="checkboxes__fake label__checkbox_fake"></div>
                    <div className="checkboxes__text">Бизнес задания</div>
                </label>

            </div>

            <div className="myOrder__img">
                <img src={img} alt="" />
                <div className="myOrder__text">
                    Как это у вас нет созданных заданий?!
                </div>
            </div>


        </div>
    )
}

export default MyOrder