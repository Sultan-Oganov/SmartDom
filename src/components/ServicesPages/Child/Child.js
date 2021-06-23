import React from 'react'
import './Child.css'
import img from '../../../image/services/Services.svg'
import {API_SERVICES} from '../../../config'
import { Link } from 'react-router-dom'

const Child = (props) => {
    const [services, setServices] =React.useState([])
    const [name, setName] = React.useState('')
    React.useEffect(()=>{
        setName(props.match.params.name)
        getCategories()
    },[props.match.params.name])

    const getCategories = async ()=>{
        let token = localStorage.getItem('tokensmart')
        const res = await fetch (API_SERVICES)
        const req = await res.json()
        console.log(req)
        setServices(req)
    }
    return (
        <div className="child">
            <div className="child__img">
                <img src={img} alt="" />
            </div>

            <h2 className="child__title">{name}</h2>

            <div className="child__btns">
                {
                    services ? 
                        services.map(el=>{
                            if(el.parent==name){
                                return(
                                   <Link to={'/performers/'+el.name}> <button className="child__btn">{el.name}</button></Link>
                                )
                            }
                            
                        })
                    :''
                }
            </div>
        </div>
    )
}

export default Child