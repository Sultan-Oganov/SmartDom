import React from 'react'
import './Sidebar.css'
import img from '../../../../image/searchTask/categories.svg'
import Items from './Items/Items'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__map">
                <div><iframe scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bishkek+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
            </div>

            <div className="sidebar__down-block">
                <div className="sidebar__img">
                    <img src={img} alt="" />
                </div>


                <div className="sidebar__categories">
                    <Items />
                </div>
            </div>
        </div >
    )
}

export default Sidebar