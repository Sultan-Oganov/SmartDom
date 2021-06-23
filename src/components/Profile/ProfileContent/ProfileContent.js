import React, {useState, useEffect} from 'react'
import { Tabs, Tab, AppBar, makeStyles } from '@material-ui/core'
import './ProfileContent.css'
import photo from '../../../image/avatar.jpg'
import gear from '../../../image/profile/gear.svg'
import location from '../../../image/profile/location.svg'
import camera from '../../../image/task/camera.svg'
import Ratings from './Ratings/Ratings'
import star from '../../../image/perfomers/star.png'
import AboutMe from './AboutMe/AboutMe'
import ProfileCount from './ProfileCount/ProfileCount'
import Promotion from './Promotion/Promotion'
import Insurance from './Insurance/Insurance'
import Settings from './Settings/Settings'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import request from 'superagent'

import {API_PROFILE} from '../../../config'
const ProfileContent = () => {
    const [value, setValue] = useState(0)
    const [data, setData] = useState()
    
    const handleTabs = (e, val) => {
        console.log(val)
        setValue(val)
    }
    useEffect(()=>{
        getFullInfo()
    },[])
    const getFullInfo = async ()=>{
        let token = localStorage.getItem('tokensmart')
        const res = await fetch (API_PROFILE,{
            headers:{
                Authorization: 'Token ' + token,
                'Content-Type': 'application/json'
            }
        }) 
        const req = await res.json()
        console.log(req)
        setData(req)
    }

    let changeProfile = async (status) =>{
        let datasend={
            status_perform:status
        }
        let token = localStorage.getItem('tokensmart')  
        try {
            const response = await fetch(API_PROFILE, {
    
                method: 'PATCH',
                headers: {
                    Authorization: 'Token ' + token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datasend)
                
            });
            const json = await response.json();
            console.log(json)
            localStorage.setItem('status_perform',json.status_perform)
            window.location.reload()

        } catch (error) {
            console.error('Ошибка:', error);
        }
    }

    const changePhoto = async (e)=>{
        
        let token = localStorage.getItem('tokensmart')
       
        let upload = request.patch(API_PROFILE)
        .set('Authorization', 'Token ' + token)
        .field('avatar', e.target.files[0]);
        upload.end((err, response) => {
            console.log(response.body)
            getFullInfo()
        });
    }
    const useStyles = makeStyles(theme => ({
        indicator: {
            backgroundColor: "#f4d962",
            height: "5px",
            top: "45px",
        },
        tabsWrapper: {
            background: "#fff",
        }
    }));

    const classes = useStyles();

    return (
        <div className="profileContent">

            <div className="profileContent__top">
                <h2 className="profileContent__name">Здравcтвуйте, {data ? data.username:''}!</h2>
                {
                    data ? 
                    <div className="profileContent__btns">
                    <button 
                        onClick={()=>changeProfile(!data.status_perform)}
                        className={
                            data.status_perform ? 
                            "profileContent__customer profileContent__btn"
                            : "profileContent__customer profileContent__btn  profileContent__btn_active"}
                    >Я заказчик</button>
                    <button 
                        onClick={()=>changeProfile(!data.status_perform)}
                        className={
                            data.status_perform ? 
                            "profileContent__executor profileContent__btn  profileContent__btn_active" 
                            : "profileContent__executor profileContent__btn"
                    }>Я исполнитель</button>
                </div>
                    : ''
                }
                
            </div>

            <div className="profileContent__center">

                <div className="profileContent__photo">
                    {data && data.avatar  ? 
                        <img src={data.avatar} alt="" />
                        : <img src={photo} alt="" />
                    }
                    
                    <div className="label__fake label__photo_fake profileContent__photo_fake">
                    
                        <input type="file" className="input__photo" id="input__photo" 
                         onChange={changePhoto}
                        />
                        <label htmlFor="input__photo" >
                            <img className="profileContent__camera" src={camera} alt="" />
                            <span className="fake__text">{data && data.avatar  ? "Обновить фото": "Добавить фото"}</span>
                        </label>
                    </div>
                </div>



                <div className="profileConten__feature">
                    <div className="profileContent__location">
                        <img src={location} alt="" />
                        <h3>Бишкек</h3>
                    </div>
                    <div className="profileContent__likes">
                        <span>Рейтинг</span>
                        <Box component="fieldset"
                            
                         mb={3} borderColor="transparent">
                            
                            <Rating style={{display:'flex', justifyContent:'space-between'}} 
                            name="read-only" 
                            value={data ? data.rating: 0}
                            readOnly />
                        </Box>
                        
                    </div>
                    
                </div>

            </div>

            <div className="profileContent__down profile">


                <AppBar position="static" className="profile__tabs tabs">
                    <Tabs
                        value={value}
                        onChange={handleTabs}
                        className={classes.tabsWrapper}
                        TabIndicatorProps={{ className: classes.indicator }}
                    >

                        <Tab label={<div className="tabs__item">Обо мне</div>} className="tabs__item" />
                        <Tab label={<div className="tabs__item">Рейтинг и отзывы</div>} className="tabs__item" />
                        <Tab label={<div className="tabs__item">Баланс</div>} className="tabs__item" />
                        <Tab label={<div className="tabs__item">Продвижение аккаунта</div>} className="tabs__item" />
                        <Tab label={<div className="tabs__item">Страхование</div>} className="tabs__item" />
                        <Tab label={<div className="tabs__item"><img src={gear} alt="" /></div>} className="tabs__item" />

                    </Tabs>

                </AppBar>



                <TabPanel value={value} index={0}><AboutMe data={data}/></TabPanel>
                <TabPanel value={value} index={1}><Ratings /></TabPanel>
                <TabPanel value={value} index={2}><ProfileCount balance={data && data.balance} bonus={data && data.bonus}/></TabPanel>
                <TabPanel value={value} index={3}><Promotion /></TabPanel>
                <TabPanel value={value} index={4}><Insurance /></TabPanel>
                <TabPanel value={value} index={5}><Settings /></TabPanel>


            </div>

        </div>
    )
}

export default ProfileContent

function TabPanel(props) {
    const { children, value, index } = props
    return (
        <div>
            {
                value === index && children
            }
        </div>
    )
}