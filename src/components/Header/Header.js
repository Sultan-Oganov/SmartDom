import React,{useState, useEffect} from 'react';
import './Header.css';
import logo from '../../image/logo.svg';
import bell from '../../image/icon/header/bell.svg';
import user from '../../image/icon/header/ava.svg';
import { NavLink, Link, useHistory } from 'react-router-dom';
import Modal from '../Modal/Modal'
import Calculator from '../Calculator/Calculator';

const Header = (props) => {
    const [auth, setAuth] = useState(false)
    const [open, setOpen] = useState(false);
    const [openReg, setOpenReg] = useState(false);
    const [status, setStatus] = useState();
    const history = useHistory()

    useEffect(()=>{
        let status_perform = localStorage.getItem('status_perform')
        let token = localStorage.getItem('tokensmart')
        if(token != '' && token != null ){
            setAuth(true)
        }else{
            setAuth(false)
        }
        setStatus(status_perform  == 'true' ? true : false)
        
    })
    const handleClickOpenReg = () => {
        setOpenReg(true);
    };
    const handleCloseReg = () => {
        setOpenReg(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
 
   const logout = () =>{
       localStorage.removeItem('tokensmart', '')

       history.push('/')
       window.location.reload()
   }
    return (
        <>
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
                    
                    {auth && <li><NavLink to="/createCalendar" className="header__link"><span>Создать календарь</span></NavLink></li>}
                    {
                        auth && status ? 
                         <li><NavLink to="/searchTask" className="header__link"><span>Найти задание</span></NavLink></li> 
                         : 
                         auth && !status ?
                         <li><NavLink to="/performers" className="header__link"><span>Исполнители</span></NavLink></li>
                         : null
                    }

                    
                    {auth && <li><NavLink to="/pays" className="header__link"><span>Мои заказы</span></NavLink></li>}
                    {/* <li><NavLink to="/my-orders" className="header__link"><span>Мои заказы</span></NavLink></li> */}
                    {/* <li><NavLink to="/change" className="header__link"><span>Moder Change</span></NavLink></li> */}
                </div>


            </div>

            <div className="header__user user">
            {
                auth? 
                <div className="user__reg">
                    <Link to="/"><img src={bell} alt="" className="user__icon user__icon_bl shake" /></Link>
                    <Link to="/profile"><img src={user} alt="" className="user__icon user__icon_usr shake" /></Link>
                    <a className="user__link" onClick={logout}><span>Выйти</span></a>
                </div>

                :
                <div className="user__unreg">
                    <a className="user__link" onClick={()=>setOpen(!open)}><span>Вход</span></a>
                или
                    <a className="user__link" onClick={()=>setOpenReg(!openReg)}><span>регистрация</span></a>
                </div>
            }
                
                
            </div>
            
        </header >
        <Modal 
               open={open} 
               handleClickOpen={handleClickOpen}
               handleClose={handleClose}
               openReg={openReg} 
               handleClickOpenReg={handleClickOpenReg}
               handleCloseReg={handleCloseReg}
        />
        <Calculator/>
            </>
    );
}

export default Header;