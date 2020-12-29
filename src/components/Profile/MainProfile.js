import React from 'react'
import './MainProfile.css'
import ProfileContent from './ProfileContent/ProfileContent'
import ProfileSide from './ProfileSide/ProfileSide'

const MainProfile = () => {
    return (
        <div className="mainProfile">
            <ProfileContent />
            <ProfileSide />
        </div>
    )
}

export default MainProfile
