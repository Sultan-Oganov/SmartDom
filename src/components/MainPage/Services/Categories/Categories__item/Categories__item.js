import React from 'react'
import { Link } from 'react-router-dom';
import './Categories__item.css';
import icon from '../../../../../image/services/categories/child.svg'

const Categories__item = (props) => {
    return (

        <Link className="categories__item" to={props.link+'/'+props.name}>
            <img src={props.img ? props.img : icon} />
            <span className="item__name">{props.name}</span>
        </Link>
    )
}

export default Categories__item;