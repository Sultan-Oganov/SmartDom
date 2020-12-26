import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">

                    <div className="footer__connection">
                        <img src={logo} alt="logo" className="footer__logo" />
                        <button className="footer__btn footer__label">CALL US</button>
                        <div className="footer__language">
                            Language<span></span>
                        </div>
                    </div>
                    <div className="footer__row">
                        <div className="footer__column">
                            <h3 className="footer__label">
                                contact us
                            </h3>
                            <div className="footer__descr">
                                <div className="descr__lb">Address</div>
                                <p>75 14th Street NE, <br /> Atlanta GA 30309</p>
                                <div className="descr__lb">Phone</div>
                                <a href="tel:6788734442" className="footer__link">(678) 873-4442</a>
                                <div className="descr__lb">E-mail</div>
                                <a href="https://cowrylimo@gmail.com" className="footer__link">cowrylimo@gmail.com</a>
                            </div>

                        </div>
                        <div className="footer__column">
                            <h3 className="footer__label">
                                customer support
                            </h3>
                            <div className="footer__descr">
                                <Link className="footer__link" to="/">Online Quote</Link>
                                <Link className="footer__link" to="/">Terms & Conditions</Link>
                                <Link className="footer__link" to="/">Corporate forms</Link>
                                <Link className="footer__link" to="/">Credit cards Forms</Link>
                            </div>

                        </div>
                        <div className="footer__column">
                            <h3 className="footer__label">
                                Quick links
                            </h3>
                            <div className="footer__descr">
                                <Link className="footer__link" to="/">Home</Link>
                                <Link className="footer__link" to="/">About</Link>
                                <Link className="footer__link" to="/">Services</Link>
                                <Link className="footer__link" to="/">Fleets</Link>
                                <Link className="footer__link" to="/">Reservations</Link>
                                <Link className="footer__link" to="/">Gallery</Link>
                                <Link className="footer__link" to="/">Contact us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer__connection">
                        <h3 className="footer__label">CONNECT WITH US</h3>
                        <div className="footer__social">
                            <div className="social__items"></div>
                            <div className="social__items"></div>
                            <div className="social__items"></div>
                            <div className="social__items"></div>
                            <div className="social__items"></div>
                            <div className="social__items"></div>
                            <div className="social__items"></div>
                            <div className="social__items"></div>
                            <div className="social__items"></div>
                        </div>
                    </div>
                </div>
                <div className="footer__adp adp">
                    <Link>
                        <img src={logo} alt="" className="adp__logo" />
                    </Link>
                    <div className="adp__links">
                        <Link className="adp__link">Как стать исполнителем</Link>
                        <Link className="adp__link">Частые вопросы</Link>
                        <Link className="adp__link">Контакты</Link>
                        <Link className="adp__link">Отзывы</Link>
                        <Link className="adp__link">Наш блог</Link>
                        <Link className="adp__link">Служба поддержки</Link>
                    </div>
                    <div className="adp__social">
                        <div className="social__items"></div>
                        <div className="social__items"></div>
                        <div className="social__items"></div>
                        <div className="social__items"></div>
                        <div className="social__items"></div>
                    </div>
                </div>
                <div className="footer__copy copy ">
                    <div className="copy__city">Atlanta Limo Services | Limo Service in Atlanta | Atlanta Car Services | Wedding Limousine Atlanta | Bus Rental Atlanta | Georgia Wedding Limousines | Limo Atlanta | Wedding Limo Rental | Limo Service Atlanta | Airport Limo Service Atlanta | Atlanta Limo Service | Atlanta Airport Limo Service | Limo Rentals Atlanta | Car Service Atlanta | Airport Service Atlanta | Atlanta Airport Car Service | Wedding Guest Transportation | Wedding Limo Service | Car Service Atlanta Airport | Hummer Limo | Wedding Limousine | Atlanta Airport | Atlanta Stretch Limos | Party Bus Limos | Hummer Limo Rental Atlanta| Limo Atlanta Airport | Limo To Hartsfield Jackson Airport | Airport Limo Atlanta | Bachelorette Party Limo | Limousine Rentals | Transportation From Atlanta Airport | Atlanta Car Service | Airport Transportation | Atlanta, GA Limousine Service | Atlanta Limousine Specials | Limo Service in GA | Limousine Rentals | Atlanta Hummer Limo Service | Atlanta SUV Limo Service | Atlanta Limousine Transportation | ATL Limo Service | ATL Limousines | Atlanta ATL Car Service | Atlanta Limo Discount | Party Limo | Best Limo</div>
                    <div className="copy__cpr">Copyright &copy; 2011-14.Cowry Classic Limousine & Car Service All Rights Reserved</div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
