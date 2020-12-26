import React from 'react'
import './DateAndTime.css'
import qstn from '../../../../../image/task/queistion.svg'

const DateAndTime = () => {
    return (
        <div className="taskForm__dateAndTime">
            <div className="dateAndTime__text label__text">Дата и время</div>
            <div className="dateAndTime__row">
                <div className="taskForm__startWork">
                    <span>Начать работу</span>
                </div>

                <div className="dateAndTime">
                    <input type="date" id="date" />
                    <input type="time" id="time" />
                    {/* <label htmlFor="date" className="date">
                        <input type="date" id="date" />

                    </label>
                    <label htmlFor="time" className="time">
                        <input type="time" id="time" />
                    </label> */}

                </div>
            </div>
            <div className="dateAndTime__links">
                <a href="" className="toggle__link" >сегодня</a>,
                <a href="" className="toggle__link" >завтра</a>
            </div>

        </div>
    )
}

export default DateAndTime