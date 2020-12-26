import React from 'react'
import './Perfomers__main.css'
import PSidebar from './Sidebar/PSidebar'
import PContent from './Content/PContent'


const Perfomers__main = () => {
    return (
        <div className="perfomers__main">
            <PSidebar />
            <PContent />
        </div>
    )
}

export default Perfomers__main
