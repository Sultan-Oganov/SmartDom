import React from 'react'
import './PSidebar.css'
import img from '../../../image/searchTask/categories.svg'
import { Link } from 'react-router-dom'


const PSidebar = () => {
    return (

        <div className="pSidebar" >
            <div className="pSidebar__img">
                <img src={img} alt="" />
            </div>
            <div className="pSidebar__tabs">
                <div className="pSidebar__tab pSidebar__tab_active">
                    Курьерские услуги
                    <div className="pSidebar__items">
                        <li><Link className="pSidebar__item" to="/">Услуги грузчиков</Link></li>
                        <li><Link className="pSidebar__item" to="/">Международные перевозки</Link></li>
                        <li><Link className="pSidebar__item" to="/">Услуги эвакуатора</Link></li>
                        <li><Link className="pSidebar__item" to="/">Вывоз мусора</Link></li>
                        <li><Link className="pSidebar__item" to="/">Грузоперевозки</Link></li>
                        <li><Link className="pSidebar__item" to="/">Перевозка стройматериалов</Link></li>
                        <li><Link className="pSidebar__item" to="/">Перевозка продуктов</Link></li>
                        <li><Link className="pSidebar__item" to="/">Перевозка вещей</Link></li>
                    </div>
                </div>

                <div className="pSidebar__tab">
                    Дети
                </div>
                <div className="pSidebar__tab">
                    Дом
                </div>
                <div className="pSidebar__tab">
                    Медицина
                </div>
                <div className="pSidebar__tab">
                    Возрастные
                </div>
                <div className="pSidebar__tab">
                    Красота
                </div>
                <div className="pSidebar__tab">
                    Кухня
                </div>
                <div className="pSidebar__tab">
                    Водители
                </div>
                <div className="pSidebar__tab">
                    Курьеры
                </div>
            </div>
        </div>
    )
}

export default PSidebar