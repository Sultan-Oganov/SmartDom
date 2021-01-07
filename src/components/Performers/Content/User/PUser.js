import React from 'react'
import './PUser.css'
import star from '../../../../image/perfomers/star.png'
import like from '../../../../image/perfomers/like.svg'
import { Link } from 'react-router-dom'

const pUser = (props) => {
    return (
        <div className="pUser__card">

            <div className="pUser__left-block">
                <div className="pUser__ava">
                    <img className="pUser__ava" src={props.img ? props.img : "https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568228-stock-illustration-female-face-avatar-round-flat.jpg"} />
                </div>

                <div className="pUser__comment">
                    <p> Отзывы:</p>
                    <img className="pUser__like" src={like} alt="" />
                    <div className="pUser__count">
                        {props.count}
                    </div>
                </div>
                <div className="pUSer__stars">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
            </div>

            <div className="pUser__right-block">
                <Link to="/InfProfile" className="pUser__name">{props.name}</Link>
                <div className="pUser__online">{props.online}</div>
                <div className="pUser__descr">{props.descr}</div>
                <button className="pUser__btn">Предложить задание</button>
            </div>

        </div>
    )
}

export default pUser
