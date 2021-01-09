import React from 'react'
import { Tabs, Tab, AppBar, makeStyles } from '@material-ui/core'
import './ProfileContent.css'
import photo from '../../../image/avatar.jpg'
import gear from '../../../image/profile/gear.svg'
import location from '../../../image/profile/location.svg'
import camera from '../../../image/task/camera.svg'
import AboutMe from './AboutMe/AboutMe'
import ProfileCount from './ProfileCount/ProfileCount'
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
            zIndex: '100'
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
                        Нет оценок
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
                        <Tab label={<div className="tabs__item">Счет</div>} className="tabs__item" />
                        <Tab label={<div className="tabs__item">Страхование</div>} className="tabs__item" />
                        <Tab label={<div className="tabs__item"><img src={gear} alt="" /></div>} className="tabs__item" />

                    </Tabs>

                </AppBar>



                <TabPanel value={value} index={0}><AboutMe /></TabPanel>
                <TabPanel value={value} index={1}><ProfileCount /></TabPanel>
                <TabPanel value={value} index={2}><Insurance /></TabPanel>
                <TabPanel value={value} index={3}><Settings /></TabPanel>

                {/* <div className="profile__tabs tabs">
                    <div className="tabs__leftBlock">
                        <div className="tabs__item tabs__item_active">Обо мне</div>
                        <div className="tabs__item">Счет</div>
                        <div className="tabs__item">Страхование</div>
                    </div>

                    <div className="tabs__item"><img src={gear} alt="" /></div>
                </div>

                <AboutMe />
                <ProfileCount />
                <Insurance />
                <Settings /> */}

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