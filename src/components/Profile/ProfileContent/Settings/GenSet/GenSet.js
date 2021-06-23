import React, { useEffect, useState } from 'react'
import './GenSet.css'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import pen from '../../../../../image/icon/pen.png'
import { API_PROFILE } from '../../../../../config';
import { Dialog, DialogContent, DialogTitle, Modal } from '@material-ui/core';

const GenSet = (props) => {


    const useStyles = makeStyles((theme) => ({
        formControl: {
            width: '100%',
            padding: '7px 15px',
            fontSize: '15px',
            border: '1px solid #a6a6a6',
            borderRadius: '5px',
        },
    }));

    const classes = useStyles();
    
    const [open, setOpen] = React.useState(false);

   
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

  
    const [openStydy, setOpenStydy] = React.useState(false);


    const handleCloseStudy = () => {
        setOpenStydy(false);
    };

    const handleOpenStudy = () => {
        setOpenStydy(true);
    };

    const [disabled, setDisabled] = useState(true)
    const [disabledPhone, setDisabledPhone] = useState(true)
    const [telephone, setTelephone ] = useState()
    const [allUser, setAllUser] = useState({})
    const [gender, setGender] = useState()
    const [deleted,setDeleted] = useState(false)
    useEffect(()=>{
        
        setAllUser(props.data ? props.data : null)
        setTelephone(props.data ? props.data.phone_number : '+996')
        setGender(props.data && props.data.gender)

    },[props.data])
    
    const setProfileInfo = async ()=>{
        delete allUser.avatar
        let token = localStorage.getItem('tokensmart')
        try {
            const response = await fetch(API_PROFILE, {
    
                method: 'PATCH',
                headers: {
                    Authorization: 'Token ' + token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(allUser)
                
            });
            const json = await response.json();
            console.log(json)
            setDisabled(true)
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }
    
    const editInput = (prop) => (event) => {
        if(prop == 'gender'){
            setGender(event.target.value)
        }
        setAllUser({ ...allUser, [prop] : event.target.value });
    };
    const changePhone = async ()=>{
        let datasend={
            phone_number:telephone
        }
        let token = localStorage.getItem('tokensmart')  
        try {
            const response = await fetch(API_PROFILE, {
    
                method: 'PATCH',
                headers: {
                    Authorization: 'Token ' + token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datasend)
                
            });
            const json = await response.json();
            console.log(json)
            setDisabledPhone(true)
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }

    return (
        
        <div className="genSet">
            <div class="persData">
                <h2 className="persData__title">Личные данные <span onClick={()=>setDisabled(!disabled)}><img style={{width:'30px', cursor:'pointer'}} src={pen}/></span></h2>

                <div class="persData__persone persone__container">
                
                    
                    {
                        allUser ? 
                        <div className="persone">
                        <div className="persone__row">
                            <p className="persone__label">Имя</p>
                            <input 
                                className="persone__input" 
                                type="text"
                                value={allUser.first_name}
                                onChange={editInput('first_name')}
                                disabled={disabled}
                                />
                        </div>
                        <div className="persone__row">
                            <p className="persone__label">Фамилия</p>
                            <input 
                                className="persone__input" 
                                type="text" 
                                value={allUser.last_name}
                                onChange={editInput('last_name')}
                                disabled={disabled}
                                />
                        </div>
                        <div className="persone__row">
                            <p className="persone__label">Дата</p>
                            <input 
                                className="persone__input" 
                                type="date" 
                                value={allUser.birthday}
                                date-format="DD MMMM YYYY"
                                onChange={editInput('birthday')
                                }
                                disabled={disabled}
                                />
                        </div>
                        
                        <div className="persone__row persone__row_radio">
                            <p className="persone__label">Пол</p>
                            <label className="radio__row">
                                <input type="radio" name="sex" onChange={editInput('gender')} value='male' className="label__radio" disabled={disabled} checked={gender == 'male' && true  }/>
                                <div className="radio__fake label__radio_fake"></div>
                                <div className="checkboxes__text" >Мужчина</div>
                            </label>
                            <label className="radio__row">
                                <input type="radio" name="sex" onChange={editInput('gender')} value='female' className="label__radio" disabled={disabled} checked={gender == 'female' && true  }/>
                                <div className="radio__fake label__radio_fake"></div>
                                <div className="checkboxes__text">Женщина</div>
                            </label>

                        </div>

                        <div className="persone__row">
                            <p className="persone__label">Образование</p>
                            <FormControl className={classes.formControl}>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    open={openStydy}
                                    onClose={handleCloseStudy}
                                    onOpen={handleOpenStudy}
                                    value={allUser.education}
                                    onChange={editInput('education')}
                                    disabled={disabled}
                                    required
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'elementary'}>Начальное профессиональное образование</MenuItem>
                                    <MenuItem value={'secondary'}>Среднее профессиональное образование</MenuItem>
                                    <MenuItem value={'higher'}>Высшее профессиональное</MenuItem>
                                </Select>
                            </FormControl>
                        </div>


                        <div className="persone__row">
                            <p className="persone__label">Город</p>
                            <FormControl className={classes.formControl}>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    open={open}
                                    onClose={handleClose}
                                    onOpen={handleOpen}
                                    value={allUser.city}
                                    onChange={editInput('city')}
                                    disabled={disabled}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Bishkek'}>Бишкек</MenuItem>
                                    <MenuItem value={'Kant'}>Кант</MenuItem>
                                    <MenuItem value={'Karabalta'}>Карабалта</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="persone__row">
                            <p className="persone__label">Немного о себе</p>
                            <textarea name=""
                                value={allUser.about_me}
                                onChange={editInput('about_me')} className="persone__input"
                                disabled={disabled}
                            ></textarea>
                        </div>

                        <div className="persone__row">
                            <p className="persone__label">Адрес</p>
                            <input 
                                className="persone__input" 
                                type="text" 
                                placeholder="Ул.Фрунзе 123 дом 45 кв.67"
                                value={allUser.address}
                                onChange={editInput('address')}
                                disabled={disabled}
                                required
                                />
                        </div>
                        <div className="persone__row">
                            <p className="persone__label">Email</p>
                            <input 
                                className="persone__input" 
                                type="email" 
                                value={allUser.email}
                                onChange={editInput('email')}
                                disabled={disabled}
                                required
                                />
                        </div>
                        <div className="persone__row">
                            <p className="persone__label">Ваш Email виден только вам</p>
                        </div>

                        <div className="persone__row persone__checkboxes-wrap">
                            <p className="persone__label">Ваш статус</p>
                            <div className="persone__checkboxes">

                                <label className="checkboxes__row aboutMe__fourthBlock">
                                    <input type="checkbox" className="label__checkbox" checked />
                                    <div className="checkboxes__fake label__checkbox_fake"></div>
                                    <div className="checkboxes__text">Standard</div>
                                </label>
                                <label className="checkboxes__row aboutMe__fourthBlock">
                                    <input type="checkbox" className="label__checkbox" disabled />
                                    <div className="checkboxes__fake label__checkbox_fake"></div>
                                    <div className="checkboxes__text">Premium</div>
                                </label>
                                {/* <label className="checkboxes__row aboutMe__fourthBlock">
                                    <input type="checkbox" className="label__checkbox" disabled />
                                    <div className="checkboxes__fake label__checkbox_fake"></div>
                                    <div className="checkboxes__text">Gold</div>
                                </label>
                                <label className="checkboxes__row aboutMe__fourthBlock">
                                    <input type="checkbox" className="label__checkbox" disabled />
                                    <div className="checkboxes__fake label__checkbox_fake"></div>
                                    <div className="checkboxes__text">Premium</div>
                                </label> */}

                            </div>
                        </div>

                        <button class="persone__btn persone__btn_safe"
                         style={disabled ? {backgroundColor:"grey"} : {backgroundColor:'#f4d962'}} 
                         disabled={disabled}
                         onClick={setProfileInfo}
                         >Сохранить личные данные</button>
                    </div>
                        :''
                    }
                    
                    

                </div>
                <h2 className="persData__title">Номер Телефона <span onClick={()=>setDisabledPhone(!disabledPhone)}><img style={{width:'30px', cursor:'pointer'}} src={pen}/></span></h2>
                <div className="persData__persone">
                    <div class="persone">
                        <div className="persone__row">
                            <p className="persone__label">Контактный номер</p>
                            <input 
                                className="persone__input"
                                type="tel" 
                                value={telephone} 
                                onChange={(e)=>setTelephone(e.target.value)} 
                                disabled={disabledPhone}
                                maxLength={13}
                            />
                            <p className="persone__label">Ваш номер телефона виден только вам</p>
                        </div>
                        <button class="persone__btn persone__btn_safe" 
                            disabled={disabledPhone}
                            style={disabledPhone ? {backgroundColor:"grey"} : {backgroundColor:'#f4d962'}} 
                            onClick={changePhone}
                        >Сохранить номер телефона</button>
                    </div>
                </div>
                <button
                    class="persone__btn persone__btn_delete"
                    onClick={setDeleted}
                    >Удалить профиль</button>

                    <Modal
                    open={deleted}
                    onClose={()=>setDeleted(false)}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                        

                    </Modal>
            </div>
        </div>
    )
}

export default GenSet
