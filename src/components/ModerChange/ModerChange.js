import React from 'react'
import './ModerChange.css'
import ChangeTask from './ChangeTask/ChangeTask'
import Sidebar from '../SearchTask/SearchContent/Sidebar/Sidebar'
import search from '../../image/moder/search.svg'


const ModerChange = () => {
    return (
        <div className="moderChange">

            <div className="moderChange__column">
                <div className="moderChange__search">

                    <input type="search" placeholder="Поиск по имени" maxLength='70' />

                    <img src={search} alt="" />

                </div>

                <div className="moderChange__task">
                    <ChangeTask />
                    <ChangeTask />
                    <ChangeTask />
                    <ChangeTask />
                    <ChangeTask />
                    <ChangeTask />
                    <ChangeTask />
                </div>

            </div>

            <Sidebar img="img" />

        </div>

    )
}

export default ModerChange
