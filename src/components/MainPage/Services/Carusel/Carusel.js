import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carusel.css';
import { Link } from 'react-router-dom';
import slide1 from '../../../../image/services/slider/1.svg';
import slide2 from '../../../../image/services/slider/2.svg';
import slide3 from '../../../../image/services/slider/3.svg';

const Carusel = () => {
    var settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        lazyLoad: 'ondemand',

        responsive: [
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2,
                    adaptiveHeight: false,
                    centerMode: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    arrows: false
                }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ],

    };
    return (
        <Slider className="slider" {...settings}>
            <Col>
                <Link to="/"><img src={slide1} alt="" className="slider__item" /></Link>
            </Col>
            <Col>
                <Link to="/"><img src={slide2} alt="" className="slider__item" /></Link>
            </Col>
            <Col>
                <Link to="/"><img src={slide3} alt="" className="slider__item" /></Link>
            </Col>
            <Col>
                <Link to="/"><img src={slide2} alt="" className="slider__item" /></Link>
            </Col>
        </Slider>
    );
}

export default Carusel;