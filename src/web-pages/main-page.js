import React from 'react';
import Search from '../components/MainPage/Search/Search';
import Services from '../components/MainPage/Services/Services';
import Calendar from '../components/MainPage/Сalendar/Сalendar';
import Delivery from '../components/MainPage/Delivery/Delivery';
import ModalAuthLog from '../components/ModalAuthLog/ModalAuthLog';

const MainPage = () => {
    return (
        <div>
            <ModalAuthLog />
            {/* <Search />
            <Services />
            <Calendar />
            <Delivery /> */}

        </div>
    )
}

export default MainPage;