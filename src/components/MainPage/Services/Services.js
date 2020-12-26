import React from 'react';
import './Services.css';
import Carusel from './Carusel/Carusel';
import Categories from './Categories/Categories';
import Advantage from './Advantage/Advantage';

const Services = () => {
    return (
        <div className="services">
            <h2 className="services__title">Популярные услуги</h2>
            <Carusel />
            <h2 className="services__title">Более 1 500 000 исполнителей</h2>
            <h4 className="services__subtitle">готовы помочь вам в решении самых разнообразных задач</h4>
            <Categories />
            <Advantage />
            <h2 className="services__label">
                Экономьте время с <span>календарем</span> от Smart <span>DOM</span>.
            </h2>
        </div>
    )
}


export default Services;