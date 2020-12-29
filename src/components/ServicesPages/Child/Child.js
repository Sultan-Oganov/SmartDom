import React from 'react'
import './Child.css'
import img from '../../../image/services/Services.svg'


const Child = () => {
    return (
        <div className="child">
            <div className="child__img">
                <img src={img} alt="" />
            </div>

            <h2 className="child__title">Дети</h2>

            <div className="child__btns">
                <button className="child__btn">Няни</button>
                <button className="child__btn">Репетиторы</button>
            </div>
        </div>
    )
}

export default Child