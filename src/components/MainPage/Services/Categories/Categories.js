import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './Categories.css';
import Categories__item from './Categories__item/Categories__item';
import child from '../../../../image/services/categories/child.svg';
import kitchen from '../../../../image/services/categories/kitchen.svg';
import home from '../../../../image/services/categories/home.svg';
import medicine from '../../../../image/services/categories/medicine.svg';
import grand from '../../../../image/services/categories/grand.png';
import beautiful from '../../../../image/services/categories/beautiful.svg';
import car from '../../../../image/services/categories/car.svg';
import courier from '../../../../image/services/categories/courier.svg';

const Categories = () => {
    return (
        <div className="categories">
            <div className="categories__row">
                <Categories__item name="Дети" img={child} link="/Child" />
                <Categories__item name="Кухня" img={kitchen} link="/Kitchen" />
                <Categories__item name="Дом" img={home} link="/Home" />
                <Categories__item name="Медицина" img={medicine} link="/Medicine" />
                <Categories__item name="Возрастные" img={grand} link="/Grand" />
                <Categories__item name="Красотa" img={beautiful} link="/Beautiful" />
                <Categories__item name="Водители" img={car} link="/Drivers" />
                <Categories__item name="Курьеры" img={courier} link="/Courier" />
            </div>
            <button className="categories__btn">Все категории</button>
        </div>
    )
}

export default Categories;
