import React from 'react'
import './ChangeTask.css'
import ava from '../../../image/avatar.jpg'
import shield from '../../../image/searchTask/shield.svg'
import card from '../../../image/searchTask/card.svg'
import trash from '../../../image/moder/basket.svg'
import edit from '../../../image/moder/pen.svg'
import { Link } from 'react-router-dom'

const ChangeTask = () => {
    return (
        <div className="ChangeTask">
            <div className="ChangeTask__left-block">
                <img className="ChangeTask__icon" src={ava} alt="" />
            </div>
            <div className="ChangeTask__decsr">
                <div className="ChangeTask__center-block">
                    <h2 className="ChangeTask__name">
                        Присмотреть за ребенком
                    </h2>
                    <div className="ChangeTask__address">ул. Ахунбаева, д: 10</div>
                    <div className="ChangeTask__workType">Регулярная работа</div>
                    <div className="ChangeTask__func">
                        <div className="ChangeTask__shield">
                            <img src={shield} alt="" />
                            <div className="ChangeTask__services">Предпочтение застрахованым</div>
                        </div>
                        <div className="ChangeTask__card">
                            <img src={card} alt="" />
                            <div className="ChangeTask__services">Сделка без риска</div>
                        </div>
                    </div>
                </div>
                <div className="ChangeTask__right-block">
                    <h2 className="ChangeTask__price">до 3000 с.</h2>
                    <div className="ChangeTask__user"><Link to="infProfile">Урайымова Айдана</Link></div>
                    <button className="ChangeTask__more">Подробнее</button>
                </div>
            </div>
            <div className="ChangeTask__change-btn">
                <img data-trash src={trash} className="shake" alt="" />
                <img data-edit src={edit} alt="" />
            </div>

        </div>
    )
}

export default ChangeTask