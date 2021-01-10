import React from 'react'
import './RItem.css'
import star from '../../../../../image/perfomers/star.png'

const RItem = () => {
    return (
        <div className="rItem">

            <div className="rItem__left">
                <div className="rItem__ava">
                    <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="" />
                </div>
                <h2 className="rItem__userName">Алиса А.</h2>

            </div>


            <div className="rItem__rating">
                <div className="rItem__descr">
                    Все супер! очень быстро👌👌
                </div>

                <div className="rItem__quality">
                    <h4>Оценка: 5.0</h4>
                    <div className="rItem__quality_block">
                        <span>Качество</span><br />
                        <img src={star} alt="" className="rItem__star" />
                        <img src={star} alt="" className="rItem__star" />
                        <img src={star} alt="" className="rItem__star" />
                        <img src={star} alt="" className="rItem__star" />
                        <img src={star} alt="" className="rItem__star" />
                    </div>

                    <div className="rItem__quality_block">
                        <span>Вежливость</span><br />
                        <img src={star} alt="" className="rItem__star" />
                        <img src={star} alt="" className="rItem__star" />
                        <img src={star} alt="" className="rItem__star" />
                        <img src={star} alt="" className="rItem__star" />
                        <img src={star} alt="" className="rItem__star" />
                    </div>

                    <div className="rItem__quality_block">
                        <span>Стоимомть услуг</span><br />
                        <img src={star} alt="" className="rItem__star" />
                        <img src={star} alt="" className="rItem__star" />
                        <img src={star} alt="" className="rItem__star" />
                        <img src={star} alt="" className="rItem__star" />
                        <img src={star} alt="" className="rItem__star" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RItem