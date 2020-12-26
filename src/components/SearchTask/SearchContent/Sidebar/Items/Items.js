import React from 'react'
import Item from './Item/Item'
import './Items.css'

const Items = () => {
    return (
        <div className="items">
            <Item categories="Все категории" />
            <Item categories="Курьерские услуги" />
            <Item categories="Ремонт и строительство" />
            <Item categories="Грузоперевозки" />
            <Item categories="Уборка и помощь по хозяйству" />
            <Item categories="Виртуальный помощник" />
            <Item categories="Красота" />
            <Item categories="Здоровье" />
            <Item categories="Репетиторы и обучение" />
        </div>
    )
}

export default Items
