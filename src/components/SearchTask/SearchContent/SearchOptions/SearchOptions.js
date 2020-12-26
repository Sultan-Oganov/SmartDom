import React from 'react'
import './SearchOptions.css'

const SearchOptions = () => {
    return (
        <div className="searchContent__options">

            <div className="searchContent__up">
                <input type="search"
                    className="input__search"
                    placeholder="Поиск по ключевым словам"
                />
                <button className="serchContent__btn">
                    Найти
             </button>
            </div>

            <div className="searchContent__center">
                <div className="searchContent__city">
                    <div className="searchContent__text">
                        Город, район, адрес
                </div>
                    <input
                        type="search"
                        className="input__city"
                        placeholder="Бишкек"
                    />
                </div>
                <div className="searchContent__radius">
                    <div className="searchContent__text">
                        Радиус поиска
                </div>
                    <input
                        type="search"
                        className="input__radius"
                        placeholder="10км"
                    />
                </div>
                <div className="searchContent__price">
                    <div className="searchContent__text">
                        Стоимость заданий от
                </div>
                    <input
                        type="text"
                        className="input__price"
                        placeholder="сом."
                    />
                </div>

            </div>
            <div className="searchConten__chekboxes">
                <div className="checkboxes__rows">
                    <label className="checkboxes__row">
                        <input type="checkbox" className="label__checkbox" />
                        <div className="checkboxes__fake label__checkbox_fake"></div>
                        <div className="checkboxes__text">Удаленная работа</div>
                    </label>
                    <label className="checkboxes__row">
                        <input type="checkbox" className="label__checkbox" />
                        <div className="checkboxes__fake label__checkbox_fake"></div>
                        <div className="checkboxes__text">Сделка без риска</div>
                    </label>
                </div>
                <div className="checkboxes__rows">
                    <label className="checkboxes__row">
                        <input type="checkbox" className="label__checkbox" />
                        <div className="checkboxes__fake label__checkbox_fake"></div>
                        <div className="checkboxes__text">Задание без предложений</div>
                    </label>
                    <label className="checkboxes__row">
                        <input type="checkbox" className="label__checkbox" />
                        <div className="checkboxes__fake label__checkbox_fake"></div>
                        <div className="checkboxes__text">Бизнес-задания</div>
                    </label>
                </div>

            </div>
        </div>
    )
}

export default SearchOptions
