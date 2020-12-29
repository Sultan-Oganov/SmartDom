import React from 'react'
import './SearchContent.css'
import SearchOptions from './SearchOptions/SearchOptions'
import SearchSorting from './SearchSorting/SearchSorting'
import Sidebar from './Sidebar/Sidebar'

const SearchContent = () => {
    return (
        <div className="searchContent">
            <div className="searchContent__column">
                <SearchOptions />
                <SearchSorting />
            </div>

            <Sidebar img="img" />


        </div>
    )
}

export default SearchContent
