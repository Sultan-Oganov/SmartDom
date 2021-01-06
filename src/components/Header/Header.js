import React from 'react';
import './Header.css';
import logo from '../../image/logo.svg';
import bell from '../../image/icon/header/bell.svg';
import user from '../../image/icon/header/ava.svg';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className="header">
            <div className="menu__icon icon-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="header__logo">
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <div className="header__menu">
                    <li><NavLink to="/createTask" className="header__link" ><span>Создать задание</span></NavLink></li>
                    <li><NavLink to="/createCalendar" className="header__link"><span>Создать календарь</span></NavLink></li>
                    <li><NavLink to="/searchTask" className="header__link"><span>Найти задание</span></NavLink></li>
                    <li><NavLink to="/performers" className="header__link"><span>Исполнители</span></NavLink></li>

                    {/* <li><NavLink to="/my-orders" className="header__link"><span>Мои заказы</span></NavLink></li> */}
                    <li><NavLink to="/pays" className="header__link"><span>Мои заказы</span></NavLink></li>
                </div>


            </div>

            <div className="header__user user">

                {/* <div className="user__reg">
                    <Link to="/"><img src={bell} alt="" className="user__icon user__icon_bl shake" /></Link>
                    <Link to="/profile"><img src={user} alt="" className="user__icon user__icon_usr shake" /></Link>
                </div> */}

                <div className="user__unreg">
                    <Link to="/" className="user__link"><span>Вход</span></Link>
                или
                <Link to="/" className="user__link"><span>регистрация</span></Link>
                </div>
            </div>
        </header >
    );
}

export default Header;