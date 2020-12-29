import React from 'react'
import './Grand.css'
import img from '../../../image/services/Services.svg'

const Grand = () => {
    return (

        <div className="grand">
            <div className="grand__img">
                <img src={img} alt="" />
            </div>

            <h2 className="grand__title">Возрастные</h2>

            <div className="grand__btns">
                <button className="grand__btn">Сиделки</button>
            </div>
        </div>

    )
}

export default Grand