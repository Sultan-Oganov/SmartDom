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
import {API_SERVICES} from '../../../../config'
const Categories = () => {
    const [services, setServices] =React.useState(null)
    React.useEffect(()=>{
        getCategories()
    },[])

    const getCategories = async ()=>{
        let token = localStorage.getItem('tokensmart')
        const res = await fetch (API_SERVICES)
        const req = await res.json()
        console.log(req)
        setServices(req)
    }
    return (
        <div className="categories">
            <div className="categories__row">
                {
                    services ? 
                    services.map((el)=>{
                        if(el.parent_status === true ){
                            return(
                                <Categories__item name={el.name} img={child} link="/services" />
                            )
                        }
                    }):''
                }
                

            </div>
            <button className="categories__btn">Все категории</button>
        </div>
    )
}

export default Categories;
