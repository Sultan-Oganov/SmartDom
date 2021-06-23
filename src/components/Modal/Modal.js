import React,{useEffect, useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Snackbar from '@material-ui/core/Snackbar';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiAlert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import './Modal.css'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import {API_REG, API_AUTH, RESSET_PASS} from '../../config'
const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const Modal = (props) => {
    const [diss, setDiss] = useState(true)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const [status, setStatus] = useState('')
    const [statusMessage, setStatusMessage] = useState('')
    const [open, setOpen] = useState(false)
    const [resetPass,setReset] = useState(false)
    const history = useHistory()

    const reset = () =>{
        setPass('')
        setEmail('')
        setName('')
        setOpen(false)
    }

    const registration = async (e)=>{
        e.preventDefault()
        alert('')
        let data = {
            username:name,
            email:email,
            password1:pass,
            password2:pass
        }
        console.log(data)
        const url = API_REG;
        
        try {
        const response = await fetch(url, {

            method: 'POST', // или 'PUT'
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)// данные могут быть 'строкой' или {объектом}!
            
        });
        const json = await response.json();
            console.log(json);
            if(json.username){
                setOpen(true)
                setStatus('warning')
                setStatusMessage(json.username[0])
            }
            else if(json.email){
                setOpen(true)
                setStatus('warning')
                setStatusMessage(json.email[0])
            }
            else if(json.password1){
                setOpen(true)
                setStatus('warning')
                setStatusMessage(json.password1[0])
            }
            else{
                setOpen(true)
                setStatus('success')
                setStatusMessage(json.detail)
            }
            
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }
    const authorization = async (e)=>{
        e.preventDefault()
        alert('')
        
        let data = {
            email:email,
            password:pass
        }
        let resetData = {
            email:email,
        }
        let url = resetPass ? RESSET_PASS :API_AUTH
        try {
            const response = await fetch(url, {
    
                method: 'POST', // или 'PUT'
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(resetPass ? resetData: data)
                
            });
            const json = await response.json();
                console.log(json);
                if(json.email){
                    setOpen(true)
                    setStatus('warning')
                    setStatusMessage(json.email[0])
                }
                else if(json.password){
                    setOpen(true)
                    setStatus('warning')
                    setStatusMessage(json.password[0])
                }
                else if(json.non_field_errors){
                    setOpen(true)
                    setStatus('warning')
                    setStatusMessage(json.non_field_errors[0])
                }  else {
                    if(resetPass){
                        setOpen(true)
                        setStatus('success')
                        setStatusMessage(json.detail)
                    }else{
                        localStorage.setItem('tokensmart', json.key)
                        history.push('/profile')
                        window.location.reload()
                        props.handleClose()
                    }
                    
                }  
            } catch (error) {
                console.error('Ошибка:', error);
            }
    }
    return (
        <div>
            
            <Dialog className="moda" onClose={props.handleCloseReg} aria-labelledby="customized-dialog-title" open={props.openReg}>
                <DialogTitle className="modal__title" id="customized-dialog-title" onClose={props.handleCloseReg}></DialogTitle>
                <DialogContent className="modal__content">

                    <div className="modal__wrapper">
                        <div className="modal__top">
                            <div className="modal__title">Быстрая регистрация через:</div>

                            <div className="modal__social">
                                <div className="modal__row">
                                    <Link className="modal__social_item modal__social_fb"></Link>
                                    <Link className="modal__social_item modal__social_gmail"></Link>
                                    <Link className="modal__social_item modal__social_vk"></Link>
                                </div>

                            </div>

                        </div>
                        <form onSubmit={registration}>
                            <div className="modal__center">
                                <div className="modal__title">Или по электронной почте</div>


                                <label htmlFor="userName" className="modal__label">Имя</label>
                                <input 
                                    id="userName" 
                                    className="modalInp" 
                                    type="text" 
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                    required />

                                <label htmlFor="modalEmail" className="modal__label">Электронная почта</label>
                                <input 
                                    id="modalEmail" 
                                    className="modalInp" 
                                    type="email" 
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required />

                                <label htmlFor="pass" className="modal__label">Пароль</label>
                                <input 
                                    id="pass"
                                    className="modalInp" 
                                    type="password" 
                                    value={pass}
                                    minLength={8}
                                    onChange={(e)=>setPass(e.target.value)}
                                    required />
                            </div>
                                <button className="modal__btn" disabled={diss} >Зарегестрироваться</button>
                        </form>
                        

                        <div className="modal__bot">

                            

                            <label className="taskForm__label label fake__checkbox">
                                <input type="checkbox" className="label__checkbox" onClick={()=>setDiss(!diss)}/>
                                <span className="label__checkbox_fake"></span>
                                <span className="label__text checkbox__text">
                                    Я согласен с условиями сайта
                           </span>
                            </label>

                            <div className="modal__link">
                                Уже зарегстрированы
                            <a onClick={()=>{props.handleCloseReg(); props.handleClickOpen();reset() }}className="modal__link">Войдите</a>
                            </div>


                        </div>
                    </div>
                    
                    
                </DialogContent>
            </Dialog>


            
            <Dialog className="moda" onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
                <DialogTitle className="modal__title" id="customized-dialog-title" onClose={props.handleClose}></DialogTitle>
                <DialogContent className="modal__content">

                    <div className="modal__wrapper">
                        <div className="modal__top">
                            <div className="modal__title">Войти через:</div>

                            <div className="modal__social">
                                <div className="modal__row">
                                    <Link className="modal__social_item modal__social_fb"></Link>
                                    <Link className="modal__social_item modal__social_gmail"></Link>
                                    <Link className="modal__social_item modal__social_vk"></Link>
                                </div>

                            </div>

                        </div>
                        <form onSubmit={authorization}>
                            <div className="modal__center">
                                <div className="modal__title">{resetPass ? 'Сброс пароля будет выслан на почту' :'Войти по электронной почте:'}</div>

                                <label htmlFor="modalEmail" className="modal__label">Электронная почта</label>
                                <input 
                                    id="modalEmail" 
                                    className="modalInp" 
                                    type="email" 
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required />
                            {!resetPass && <>
                                <label htmlFor="modalPass" className="modal__label">Пароль</label>
                                
                                <input 
                                    id="modalPass" 
                                    className="modalInp" 
                                    type="password" 
                                    value={pass}
                                    minLength={8}
                                    onChange={(e)=>setPass(e.target.value)}
                                    required />
                                    </>
                                }
                            </div>
                            <div className="modal__log">

                                <button className="modal__btn modal__btn__log"  >{!resetPass ? 'Войти' : 'Cброс пароля' }</button>
                                <a className="modal__fgt_pass" onClick={()=>{
                                    setReset(true)
                                }}>{resetPass ? 'войти' :'Забыли пароль?'}</a>

                            </div>
                         
                          </form>
                        <div className="modal__bot">

                            



                            <div className="modal__link">
                                Еще не с нами?
                            <a onClick={()=>{props.handleClose(); props.handleClickOpenReg();reset() }} className="modal__link">Зарегестрируйтесь</a>
                            </div>


                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            <Snackbar open={open} autoHideDuration={6000} onClose={()=>setOpen(true)}>
                    <Alert onClose={()=>setOpen(false)} severity={status}>
                        {statusMessage}
                    </Alert>
                
            </Snackbar>
        </div >
    );
}

export default Modal