import React from 'react'
import './Home.css'
import img from '../../../image/services/Services.svg'

const Home = () => {
    return (
        <div>

            <div className="home">
                <div className="home__img">
                    <img src={img} alt="" />
                </div>

                <h2 className="home__title">Дом</h2>

                <div className="home__btns">
                    <button className="home__btn">Мелкосрочный ремонт</button>
                    <button className="home__btn">Уборка</button>
                </div>
            </div>

        </div>
    )
}

export default Home