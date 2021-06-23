import React from 'react';
import './Delivery.css';
import Task from './Task/Task';
import icon from '../../../image/delivery/ava.jpg';
import img from '../../../image/delivery/1.svg';
import img2 from '../../../image/delivery/2.svg';
import { Link } from 'react-router-dom';

const Delivery = () => {
    return (
        <div className="delivery">

            <h2 className="delicery__title">Что заказывают на Smart <span>DOM</span> прямо сейчас</h2>

            <div className="delivery__row">
                <div className="delivery__tasks">

                    <Task img={icon}
                        title="Привезти посылку с почты"
                        text="Добрый день! Посылка должна прибыть сегодня в почтовое отделание №5." />
                    <Task
                        title="Привезти посылку с почты"
                        text="Добрый день! Посылка должна прибыть сегодня в почтовое отделание №5." />
                    <Task img={icon}
                        title="Привезти посылку с почты"
                        text="Добрый день! Посылка должна прибыть сегодня в почтовое отделание №5." />
                    <Task
                        title="Привезти посылку с почты"
                        text="Добрый день! Посылка должна прибыть сегодня в почтовое отделание №5." />
                    <Task img={icon}
                        title="Привезти посылку с почты"
                        text="Добрый день! Посылка должна прибыть сегодня в почтовое отделание №5." />
                    <Task
                        title="Привезти посылку с почты"
                        text="Добрый день! Посылка должна прибыть сегодня в почтовое отделание №5." />

                  <Link to='/createTask'>  <button className="delivery__btn" >Создайте своё задание</button></Link>


                </div>
                <div className="delivery__img">
                    <img src={img} />
                    <img src={img2} />
                </div>

            </div>


        </div>
    );
};

export default Delivery;
