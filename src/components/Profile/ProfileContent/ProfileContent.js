import React from 'react'
import { Tabs, Tab, AppBar, makeStyles } from '@material-ui/core'
import './ProfileContent.css'
import photo from '../../../image/avatar.jpg'
import gear from '../../../image/profile/gear.svg'
import location from '../../../image/profile/location.svg'
import camera from '../../../image/task/camera.svg'
import star from '../../../image/perfomers/star.png'
import AboutMe from './AboutMe/AboutMe'
import Rating from './Rating/Rating'
import ProfileCount from './ProfileCount/ProfileCount'
import Promotion from './Promotion/Promotion'
import Insurance from './Insurance/Insurance'
import Settings from './Settings/Settings'

const ProfileContent = () => {

    const [value, setValue] = React.useState(0)
    const handleTabs = (e, val) => {
        console.log(val)
        setValue(val)
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
                <h2 className="profileContent__name">Здравcтвуйте, Бермет!</h2>
                <div className="profileContent__btns">
                    <button className="profileContent__customer profileContent__btn ">Я заказчик</button>
                    <button className="profileContent__executor profileContent__btn profileContent__btn_active">Я исполнитель</button>
                </div>
            </div>

            <div className="profileContent__center">

                <div className="profileContent__photo">
                    <img src={photo} alt="" />
                    <div className="label__fake label__photo_fake profileContent__photo_fake">
                        <input type="file" className="input__photo" id="input__photo" />
                        <label htmlFor="input__photo">
                            <img className="profileContent__camera" src={camera} alt="" />
                            <span className="fake__text">Добавить фото</span>
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
                        <div className="profileConten__stars">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                    </div>
                    <div className="profileConten__commentCount">
                        <span>Отзывов</span>
                        <div className="commentCount__row">
                            <div className="commentCount__like">"+"</div>
                            <div className="commentCount__dis">"-"</div>
                        </div>
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



                <TabPanel value={value} index={0}><AboutMe /></TabPanel>
                <TabPanel value={value} index={1}><Rating /></TabPanel>
                <TabPanel value={value} index={2}><ProfileCount /></TabPanel>
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