import React from 'react'
import './Item.css'

const Item = (props) => {
    return (
        <label className="sidebar__item">
            <input type="checkbox" className="label__checkbox" />
            <div className="sidebar__item_fake label__checkbox_fake"></div>
            <div className="sidebar__item_text">{props.categories}</div>
        </label>
    )
}

export default Item