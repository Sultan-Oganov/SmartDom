import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { CONFIRM_EMAIL } from '../../config'
import MainPage from '../../web-pages/main-page'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ConfirmEmail(props) {
    const [open, setOpen] = useState(false)
    const history = useHistory()
    useEffect(()=>{
        let key =props.match.params.key 
        if(key != '' && key != null && key != undefined){
            confirm(key)
        }
        else{
            history.push('/')
        }
    },[])
    const confirm=async(key)=>{
        let data =  {key: key}
            try {
                const response = await fetch(CONFIRM_EMAIL, {
        
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                    
                });
                const json = await response.json();
                console.log(json)
                if(json.detail){
                    alert(json.detail)
                    history.push('/')
                }else{
                    setOpen(true)
                }
                
            } catch (error) {
                console.error('Ошибка:', error);
            }
    }
    return (
        <>
            <MainPage/>
            <Snackbar open={open} autoHideDuration={6000} onClose={()=>setOpen(true)}>
                    <Alert onClose={()=>setOpen(false)} severity='success'>
                         Email подтвержден! Войдите в аккаунт
                    </Alert>
            </Snackbar>
        </>
    )
}
