import React from 'react'
import GenSet from '../Settings/GenSet/GenSet'
import './AboutMe.css'

const AboutMe = (props) => {
    return (


        <div className="profile__aboutMe aboutMe">


            <GenSet data={props.data}/>


        </div>
    )
}

export default AboutMe
