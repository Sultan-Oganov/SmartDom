import React, { useState } from 'react'
import './MyOrder.css'
import img from '../../../image/orders/noOrder.svg'
import Sidebar from '../../SearchTask/SearchContent/Sidebar/Sidebar'


const MyOrder = () => {

    return (
        <div className="myOrder">
            <div className="myOrder__wrapper">
                <div className="myOrder__toggles">

                    <div className="toggles__btns">
                        <button className="myOrder__customer myOrder__btn myOrder__btn_active">Я заказчик</button>
                        <button className="myOrder__executor myOrder__btn">Я myOrderлнитель</button>
                    </div>

                    <label className="checkboxes__row">
                        <input type="checkbox" className="label__checkbox" />
                        <div className="checkboxes__fake label__checkbox_fake"></div>
                        <div className="checkboxes__text myOrder__checkbox_text">Бизнес задания</div>
                    </label>

                </div>

                <div className="myOrder__img">
                    <img src={img} alt="" />
                    <div className="myOrder__text">
                        Как это у вас нет созданных заданий?!
                    </div>
                </div>
            </div>
            <Sidebar />
        </div>

    )
}

export default MyOrder