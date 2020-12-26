import React from 'react';
import './Advantage.css';
import img1 from '../../../../image/services/advantage/0.svg';
import img2 from '../../../../image/services/advantage/1.svg';
import img3 from '../../../../image/services/advantage/2.svg';
import img4 from '../../../../image/services/advantage/3.svg';

const Advantage = () => {
    return (
        <div className="advantage">
            <div className="advantage__row">
                <div className="advantage__column advantage__column_big">
                    <div className="advantage__img">
                        <img src={img1} alt="" />
                    </div>
                    <div className="advantage__text">
                        <div className="advantage__label">Умный <span>календарь</span></div>
                        <div className="advantage__descr">Умный календарь поможет Вам построить правильное расписание ваших заданий и заказов</div>
                    </div>

                </div>
                <div className="advantage__column">
                    <div className="advantage__img">
                        <img src={img2} alt="" />
                    </div>
                    <div className="advantage__text">
                        <div className="advantage__label">Обширная клиентская база Smart  <span>DOM</span></div>
                        <div className="advantage__descr">Проверенные исполнители подтвердили свои документы на Smart <span>DOM</span></div>
                    </div>

                </div>
                <div className="advantage__column">
                    <div className="advantage__img">
                        <img src={img3} alt="" />
                    </div>
                    <div className="advantage__text">
                        <div className="advantage__label">Достоверные отзывы</div>
                        <div className="advantage__descr">Более 1 000 000 отзывов от заказчиков помогут выбрать подходящего исполнителя.</div>
                    </div>

                </div>
                <div className="advantage__column advantage__column_big">
                    <div className="advantage__img">
                        <img src={img4} alt="" />
                    </div>
                    <div className="advantage__text">
                        <div className="advantage__label">Удобная и безопасная оплата</div>
                        <div className="advantage__descr">При оплате через сделку без риска Smart <span>DOM</span> вернет деньги, если что-то пойдет не так.</div>
                    </div>

                </div>
            </div>
        </div >
    )
};

export default Advantage;
