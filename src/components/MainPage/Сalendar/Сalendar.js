import React from 'react';
import './Calendar.css';
import { Link } from 'react-router-dom';
import img1 from '../../../image/calendar/1.svg';
import img2 from '../../../image/calendar/2.svg';
import img3 from '../../../image/calendar/3.svg';
import img4 from '../../../image/calendar/4.svg';

const Calendar = () => {
    return (
        <div className="calendar">
            <div className="calendar__row">
                <div className="calendar__img calendar__img_s">
                    <img src={img1} alt="" />
                </div>
                <div className="calendar__descr descr">
                    <h2 className="descr__title">1. Создайте задание</h2>
                    <div className="descr__text">
                        Опишите своими словами задачу, которую требуется выполнить
                    </div>
                    <Link to="/" className="descr__btn">Создать задание</Link>
                </div>
            </div>
            <div className="calendar__row">
                <div className="calendar__descr descr">
                    <h2 className="descr__title">2. Возможность постановки индивидуального <span>календаря</span></h2>
                    <div className="descr__text">
                        Уже через пару минут вы начнете получать предложения от исполнителей, готовых выполнить ваше задание.
                    </div>
                </div>
                <div className="calendar__img">
                    <img src={img2} alt="" />
                </div>
            </div>
            <div className="calendar__row">
                <div className="calendar__img calendar__img_s">
                    <img src={img3} alt="" />
                </div>
                <div className="calendar__descr descr">
                    <h2 className="descr__title">3. Экономьте свое время с <span>календарём</span> Smart <span>DOM</span></h2>
                    <div className="descr__text">
                        Вы сможете выбрать подходящего исполнителя, по разным критериям:
                    </div>
                </div>
            </div>
            <div className="calendar__row">
                <div className="calendar__descr descr">
                    <h2 className="descr__title">4. Осуществи свою мечту</h2>
                    <div className="descr__text">
                        Со <strong>Smart</strong> <span>DOM</span> вы сможете осуществить свою мечту в реальность
                    </div>
                </div>
                <div className="calendar__img">
                    <img src={img4} alt="" />
                </div>
            </div>
            <button className="calendar__btn">Создайте свой каледарь</button>
            <div className="calendar__btn_descr">и найдите исполнителя за несколько минут</div>
        </div>
    );
};

export default Calendar;