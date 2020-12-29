import React from 'react'
import './Pay.css'
import Sidebar from '../../SearchTask/SearchContent/Sidebar/Sidebar'
import SortingTask from '../../SearchTask/SearchContent/SearchSorting/SortingTask/SortingTask'
import check from '../../../image/icon/check.svg'


const Pay = () => {
    return (
        <div className="pay">

            <div className="pay__wrapper">
                <div className="pay__toggles toggles">

                    <div className="pay__btns">
                        <button className="pay__customer pay__btn pay__btn_active">Я заказчик</button>
                        <button className="pay__executor pay__btn">Я исполнитель</button>
                    </div>

                    <label className="checkboxes__row">
                        <input type="checkbox" className="label__checkbox" />
                        <div className="checkboxes__fake label__checkbox_fake"></div>
                        <div className="checkboxes__text pay__checkbox_text">Бизнес задания</div>
                    </label>

                </div>

                <div className="pay__tasks">
                    <SortingTask
                        name="Присмотреть за ребенком"
                        check={check}
                        address="ул. Ахунбаева, д: 10"
                        price="3000 сом."
                        btn="Получить оплату"
                    />
                    <SortingTask
                        name="Присмотреть за ребенком"
                        checkDis="none"
                        check={check}
                        address="ул. Ахунбаева, д: 10"
                        price="3000 сом."
                        btnDis="none"
                        btn="Получить оплату"
                    />
                </div>

            </div>
            <Sidebar />
        </div>
    )
}

export default Pay