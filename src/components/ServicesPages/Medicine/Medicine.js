import React from 'react'
import './Medicine.css'
import img from '../../../image/services/Services.svg'

const Medicine = () => {
    return (
        <div className="medicine">
            <div className="medicine__img">
                <img src={img} alt="" />
            </div>

            <h2 className="medicine__title">Медицина</h2>

            <div className="medicine__btns">
                <button className="medicine__btn">Медсестры</button>
                <button className="medicine__btn">Массаж</button>
            </div>
        </div>
    )
}

export default Medicine