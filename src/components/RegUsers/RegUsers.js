import React from 'react'
import './RegUsers.css'
import block from '../../image/block.svg'
import flower from '../../image/flower.svg'

const RegUsers = () => {
    return (
        <div className="regUsers">

            <img className="regUsers__img_top" src={flower} alt="" />
            <img className="regUsers__img_bot" src={flower} alt="" />

            <h2 className="regUsers__title">Зарегестрированные пользователи</h2>

            <div className="regUsers__table tableUsers">
                <table>
                    <thead>
                        <tr>
                            <th>ФИО</th>
                            <th>Привилегия</th>
                            <th>Заказчик/исполнитель</th>
                            <th>Последний вход</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tableUsers__name">Иванов И.И</td>
                            <td className="tableUsers__privilege">Нет</td>
                            <td className="tableUsers__who">Заказчик</td>
                            <td className="tableUsers__time">сегодня в 15:20</td>
                            <td className="tableUsers__block"><img src={block} alt="" /> Заблокировать</td>
                        </tr>
                        <tr>
                            <td className="tableUsers__name">Иванов И.И</td>
                            <td className="tableUsers__privilege">Премиум</td>
                            <td className="tableUsers__who">Исполнитель</td>
                            <td className="tableUsers__time">сегодня в 14:00</td>
                            <td className="tableUsers__block"><img src={block} alt="" /> Заблокировать</td>
                        </tr>
                        <tr>
                            <td className="tableUsers__name">Иванов И.И</td>
                            <td className="tableUsers__privilege">Нет</td>
                            <td className="tableUsers__who">Заказчик</td>
                            <td className="tableUsers__time">сегодня в 15:20</td>
                            <td className="tableUsers__block"><img src={block} alt="" /> Заблокировать</td>
                        </tr>
                        <tr>
                            <td className="tableUsers__name">Иванов И.И</td>
                            <td className="tableUsers__privilege">Премиум</td>
                            <td className="tableUsers__who">Исполнитель</td>
                            <td className="tableUsers__time">сегодня в 16:00</td>
                            <td className="tableUsers__block"><img src={block} alt="" /> Заблокировать</td>
                        </tr>
                        <tr>
                            <td className="tableUsers__name">Иванов И.И</td>
                            <td className="tableUsers__privilege">Нет</td>
                            <td className="tableUsers__who">Заказчик</td>
                            <td className="tableUsers__time">сегодня в 15:20</td>
                            <td className="tableUsers__block"><img src={block} alt="" /> Заблокировать</td>
                        </tr>
                        <tr>
                            <td className="tableUsers__name">Иванов И.И</td>
                            <td className="tableUsers__privilege">Премиум</td>
                            <td className="tableUsers__who">Исполнитель</td>
                            <td className="tableUsers__time">сегодня в 14:00</td>
                            <td className="tableUsers__block"><img src={block} alt="" /> Заблокировать</td>
                        </tr>
                        <tr>
                            <td className="tableUsers__name">Иванов И.И</td>
                            <td className="tableUsers__privilege">Нет</td>
                            <td className="tableUsers__who">Заказчик</td>
                            <td className="tableUsers__time">сегодня в 15:20</td>
                            <td className="tableUsers__block"><img src={block} alt="" /> Заблокировать</td>
                        </tr>
                        <tr>
                            <td className="tableUsers__name">Иванов И.И</td>
                            <td className="tableUsers__privilege">Премиум</td>
                            <td className="tableUsers__who">Исполнитель</td>
                            <td className="tableUsers__time">сегодня в 16:00</td>
                            <td className="tableUsers__block"><img src={block} alt="" /> Заблокировать</td>
                        </tr>
                        <tr>
                            <td className="tableUsers__name">Иванов И.И</td>
                            <td className="tableUsers__privilege">Нет</td>
                            <td className="tableUsers__who">Заказчик</td>
                            <td className="tableUsers__time">сегодня в 15:20</td>
                            <td className="tableUsers__block"><img src={block} alt="" /> Заблокировать</td>
                        </tr>
                        <tr>
                            <td className="tableUsers__name">Иванов И.И</td>
                            <td className="tableUsers__privilege">Премиум</td>
                            <td className="tableUsers__who">Исполнитель</td>
                            <td className="tableUsers__time">сегодня в 14:00</td>
                            <td className="tableUsers__block"><img src={block} alt="" /> Заблокировать</td>
                        </tr>
                        <tr>
                            <td className="tableUsers__name">Иванов И.И</td>
                            <td className="tableUsers__privilege">Нет</td>
                            <td className="tableUsers__who">Заказчик</td>
                            <td className="tableUsers__time">сегодня в 15:20</td>
                            <td className="tableUsers__block"><img src={block} alt="" /> Заблокировать</td>
                        </tr>
                        <tr>
                            <td className="tableUsers__name">Иванов И.И</td>
                            <td className="tableUsers__privilege">Премиум</td>
                            <td className="tableUsers__who">Исполнитель</td>
                            <td className="tableUsers__time">сегодня в 16:00</td>
                            <td className="tableUsers__block"><img src={block} alt="" /> Заблокировать</td>
                        </tr>
                    </tbody>

                </table>
            </div>



        </div >
    )
}

export default RegUsers