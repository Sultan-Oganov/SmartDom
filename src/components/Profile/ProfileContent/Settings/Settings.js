import React from 'react'
import { Tabs, Tab, AppBar, makeStyles } from '@material-ui/core'
import GenSet from './GenSet/GenSet'
import Notifications from './Notifications/Notifications'
import Security from './Security/Security'
import './Settings.css'
import zIndex from '@material-ui/core/styles/zIndex'

const Settings = () => {

    const [value, setValue] = React.useState(0)
    const handleTabs = (e, val) => {
        console.log(val)
        setValue(val)
    }

    const useStyles = makeStyles(theme => ({
        indicator: {
            backgroundColor: "#fff5cb",
            height: "100%",
            top: "0px",
            position: 'absolute',
            borderRight: '1px solid #a6a6a6',
            borderLeft: '1px solid #a6a6a6'
        },
        tabsWrapper: {
            background: "#fff",
            position: 'relative',
            width: '100%'
        }
    }));

    const classes = useStyles();

    return (
        <div className="settings">

            <AppBar position="static" className="settings__tabs">
                <Tabs
                    value={value}
                    onChange={handleTabs}
                    className={classes.tabsWrapper}
                    TabIndicatorProps={{ className: classes.indicator }}
                >

                    {/* <Tab label={<div className="tabs__link">Общие настройки</div>} /> */}
                    <Tab label={<div className="tabs__link">Уведомления</div>} />
                    <Tab label={<div className="tabs__link">Безопасность</div>} />

                </Tabs>

            </AppBar>



            {/* <TabPanel value={value} index={0}><GenSet /></TabPanel> */}
            <TabPanel value={value} index={0}><Notifications /></TabPanel>
            <TabPanel value={value} index={1}><Security /></TabPanel>

            {/* <div className="settings__tabs">
                <div className="tabs__link tabs__link_active">Общие настройки</div>
                <div className="tabs__link">Уведомления</div>
                <div className="tabs__link">Безопасность</div>
            </div>

            <GenSet />
            <Notifications />
            <Security /> */}
        </div>
    )
}

export default Settings



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