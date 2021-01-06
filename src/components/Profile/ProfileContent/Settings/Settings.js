import React from 'react'
import GenSet from './GenSet/GenSet'
import Notifications from './Notifications/Notifications'
import Security from './Security/Security'
import './Settings.css'

const Settings = () => {
    return (
        <div className="settings">

            <div className="settings__tabs">
                <div className="tabs__link tabs__link_active">Общие настройки</div>
                <div className="tabs__link">Уведомления</div>
                <div className="tabs__link">Безопасность</div>
            </div>

            <GenSet />
            <Notifications />
            <Security />
        </div>
    )
}

export default Settings
