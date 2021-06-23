import React, { useEffect } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { API_RESET_PASS } from '../../config';
import { useHistory } from 'react-router-dom';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Security = (props) => {
    const [data,setData] = React.useState(
        {
            new_password1:'',
            new_password2:'',
            uid:'',
            token:''
        }
    ) 

    const [diss,setDiss] = React.useState(true)
    const [open, setOpen] = React.useState(false)
    const [status, setStatus] = React.useState('')
        const history = useHistory()
    const [statusMessage, setStatusMessage] = React.useState('')
    React.useEffect(()=>{
        if(data.new_password1 == data.new_password2 &&
            data.new_password1.length > 8 
            ){
            setDiss(false)
        }
        
       
    })
    React.useEffect(()=>{
        setData({...data, ['uid']:props.match.params.uid, 
        ['token']:props.match.params.token})
    },[props.match.params.uid])
    const setText = (prop) => (event) => {
        setData({ ...data, [prop] : event.target.value });
    };

    const setPass = async () =>{
        try {
            const response = await fetch(API_RESET_PASS+data.uid+'/'+data.token+'/', {
    
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
                
            });
            const json = await response.json();
            console.log(json)
            if(json.new_password1){
                setOpen(true)
                setStatus('warning')
                setStatusMessage(json.new_password1[0])
                
            }
            else if(json.new_password2){
                setOpen(true)
                setStatus('warning')
                setStatusMessage(json.new_password2[0])
            }
            else{
                setOpen(true)
                setStatus('success')
                setStatusMessage(json.detail)
                history.push('/')
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }

    return (
        <div className="security" style={{textAlign:'center', marginLeft:'28%', padding:'10%'}}>
            <h2 className="security__title" style={{marginRight:'50%'}}>сбросить пароль</h2>
            <div className="security__content">
                {/*<h3 className="security__label">Придумайте новый пароль с такими требованиями:</h3>
                 <div className="security__spec">
                    <div className="security__text"><img src={check} alt="" />Длина - не менее 8 символов;</div>
                    <div className="security__text"><img src={check} alt="" />Заглавные буквы;</div>
                    <div className="security__text"><img src={check} alt="" />Строчные буквы;</div>
                    <div className="security__text"><img src={check} alt="" />Цифры или специальные символы: %,#,$ и другие;</div>
                </div> */}

                <div className="security__pw">
                    <div className="security__text">Новый пароль</div>
                    <input type="password" 
                        value={
                            data.new_password1
                        }
                        onChange={setText("new_password1")}
                    />
                </div>
                <div className="security__pw">
                    <div className="security__text">Повторите пароль</div>
                    <input type="password" 
                        value={
                            data.new_password2
                        }
                        onChange={setText("new_password2")}
                    />
                </div>
                <button 
                    className="security__btn"
                    style={diss ? {background:'grey'}: {background:'#f4d962'}} 
                    disabled={diss}
                    onClick={setPass}
                    >Сброс пароля</button>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={()=>setOpen(true)}>
                    <Alert onClose={()=>setOpen(false)} severity={status}>
                        {statusMessage}
                    </Alert>
                
            </Snackbar>
        </div>
    )
}

export default Security
