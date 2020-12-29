import React from 'react'
import './Beautiful.css'
import img from '../../../image/services/Services.svg'

const Beautiful = () => {
    return (

        <div className="beautiful">
            <div className="beautiful__img">
                <img src={img} alt="" />
            </div>

            <h2 className="beautiful__title">Красота</h2>

            <div className="beautiful__btns">
                <button className="beautiful__btn">Маникюр</button>
                <button className="beautiful__btn">Педикюр</button>
            </div>
        </div>

    )
}

export default Beautiful