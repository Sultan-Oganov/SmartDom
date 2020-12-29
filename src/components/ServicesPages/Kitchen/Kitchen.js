import React from 'react'
import './Kitchen.css'
import img from '../../../image/services/Services.svg'

const Kitchen = () => {
    return (
        <div className="kitchen">
            <div className="kitchen__img">
                <img src={img} alt="" />
            </div>

            <h2 className="kitchen__title">Кухня</h2>

            <div className="kitchen__btns">
                <button className="kitchen__btn">Повара</button>
                <button className="kitchen__btn">Посудомойщики</button>
                <button className="kitchen__btn">Универсалы</button>
                <button className="kitchen__btn">Обслуживающий персонал</button>
                <button className="kitchen__btn">Закуп продуктов</button>
            </div>
        </div>
    )
}

export default Kitchen