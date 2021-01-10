import React from 'react'
import './Rating.css'
import RItem from './RItem/RItem'

const Rating = () => {
    return (
        <div className="rating">

            <h2 className="rating__title">Заказчики оценивают всех исполнителей по разнобразным критериям, таких как цена,
                        качество, вежливость</h2>

            <div className="rating__content">

                <RItem />
                <RItem />
                <RItem />
                <RItem />
                <RItem />

            </div>

        </div>
    )
}

export default Rating
