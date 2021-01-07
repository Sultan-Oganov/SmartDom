import React from 'react'
import './SearchSorting.css'
import SortingTask from './SortingTask/SortingTask'

const SearchSorting = () => {
    return (
        <div className="searchSorting">

            <div className="searchSorting__choose choose">
                <div className="choose__label">Сортировать</div>
                <div className="choose__item choose__item_date">
                    по дате публикации
                </div>
                <div className="choose__item choose__item_fast">
                    <span>по срочности</span>
                </div>
                <div className="choose__item choose__item_dist">
                    по удаленности
                </div>
            </div>
            <div className="searchSorting__tasks">
                <SortingTask
                    ava="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                    name="Присмотреть за ребенком"
                    address="ул. Ахунбаева, д: 10"
                    workType="Регулярная работа"
                    price="До 3000 с"
                    userName="Урайымова Айдана"
                    more="Подробнее"
                />
                <SortingTask
                    ava="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                    name="Присмотреть за ребенком"
                    address="ул. Ахунбаева, д: 10"
                    workType="Регулярная работа"
                    price="До 3000 с"
                    userName="Урайымова Айдана"
                    more="Подробнее"
                />
                <SortingTask
                    ava="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                    name="Присмотреть за ребенком"
                    address="ул. Ахунбаева, д: 10"
                    workType="Регулярная работа"
                    price="До 3000 с"
                    userName="Урайымова Айдана"
                    more="Подробнее"
                />
                <SortingTask
                    ava="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                    name="Присмотреть за ребенком"
                    address="ул. Ахунбаева, д: 10"
                    workType="Регулярная работа"
                    price="До 3000 с"
                    userName="Урайымова Айдана"
                    more="Подробнее"
                />
                <SortingTask
                    ava="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                    name="Присмотреть за ребенком"
                    address="ул. Ахунбаева, д: 10"
                    workType="Регулярная работа"
                    price="До 3000 с"
                    userName="Урайымова Айдана"
                    more="Подробнее"
                />

            </div>
        </div>
    )
}

export default SearchSorting