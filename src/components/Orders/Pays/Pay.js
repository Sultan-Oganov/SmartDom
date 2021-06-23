import React from 'react'
import './Pay.css'
import Sidebar from '../../SearchTask/SearchContent/Sidebar/Sidebar'
import SortingTask from '../../SearchTask/SearchContent/SearchSorting/SortingTask/SortingTask'
import check from '../../../image/icon/check.svg'
import Dropdown from 'react-bootstrap/Dropdown'

const Pay = () => {
    const [status, setStatus] = React.useState()
    React.useEffect(()=>{
        let status_perform = localStorage.getItem('status_perform')
        setStatus(status_perform  == 'true' ? true : false)
    })
    return (
        <div className="pay">

            <div className="pay__wrapper">
                <div className="pay__toggles toggles">

                    <div className="pay__btns">
                        <button className={ status  ? "pay__customer pay__btn" : 'pay__customer pay__btn pay__btn_active'}>Я заказчик</button>
                        <button className={ !status  ? "pay__executor pay__btn" : 'pay__executor pay__btn pay__btn_active'}>Я исполнитель</button>
                    </div>

                    <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                            Денежный перевод
                    </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Принято</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">В процессе</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Ожидает</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Отменено</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

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
        </div>
    )
}

export default Pay