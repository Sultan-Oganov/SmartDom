import React from 'react';
import './Search.css';
import { Link } from 'react-router-dom';

const Search = () => {
    const [auth, setAuth] = React.useState(false)
    React.useEffect(()=>{
        let token = localStorage.getItem('tokensmart')
        if(token != '' && token != null ){
            setAuth(true)
        }else{
        setAuth(false)
    }

    })
    return (
        <div className="search">
            <div className="main-screen">
                <div className="main-screen__bg ibg">
                    <div className="main-screen__content">
                        <div className="main-screen__text">
                            <h1 className="main-screen__title">Освободим вас от забот</h1>
                            <div className="main-screen__subtitle">Поможем найти надежного исполнителя для любых задач</div>
                        </div>
                        <div className="main-screen__input">
                            <input type="search" className="inp-srch" placeholder="Напишите, чем вам помочь..." />
                            <button className="main-screen__btn">Заказать <span>услугу</span></button>
                        </div>
                        <div className="main-screen__exapmle">Например: <span><Link to="/" className="main-screen__link"> привезти диван</Link></span></div>
                        {!auth && 
                            <div className="main-screen__cooperation"><Link to="/" className="main-screen__link"> {}стать исполнителем и начать зарабатывать</Link></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
