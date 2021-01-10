import React from 'react'
import './GenSet.css'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const GenSet = () => {


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
    const [city, setCity] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const [study, setStudy] = React.useState('');
    const [openStydy, setOpenStydy] = React.useState(false);

    const handleChangeStudy = (event) => {
        setStudy(event.target.value);
    };

    const handleCloseStudy = () => {
        setOpenStydy(false);
    };

    const handleOpenStudy = () => {
        setOpenStydy(true);
    };


    return (
        <div className="genSet">
            <div class="persData">
                <h2 className="persData__title">Личные данные</h2>
                <div class="persData__persone persone__container">
                    <div className="persone">
                        <div className="persone__row">
                            <p className="persone__label">Имя</p>
                            <input className="persone__input" type="text" />
                        </div>
                        <div className="persone__row">
                            <p className="persone__label">Фамилия</p>
                            <input className="persone__input" type="text" />
                        </div>
                        <div className="persone__row">
                            <p className="persone__label">Дата</p>
                            <input className="persone__input" type="date" />
                        </div>
                        <div className="persone__row persone__row_radio">
                            <p className="persone__label">Пол</p>
                            <label className="radio__row">
                                <input type="radio" name="sex" className="label__radio" checked />
                                <div className="radio__fake label__radio_fake"></div>
                                <div className="checkboxes__text">Мужчина</div>
                            </label>
                            <label className="radio__row">
                                <input type="radio" name="sex" className="label__radio" />
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
                                    value={study}
                                    onChange={handleChangeStudy}
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
                                    value={city}
                                    onChange={handleChange}
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
                            <textarea name="" className="persone__input"></textarea>
                        </div>

                        <div className="persone__row">
                            <p className="persone__label">Адрес</p>
                            <input className="persone__input" type="text" />
                        </div>
                        <div className="persone__row">
                            <p className="persone__label">Email</p>
                            <input className="persone__input" type="email" />
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
                                    <div className="checkboxes__text">Silver</div>
                                </label>
                                <label className="checkboxes__row aboutMe__fourthBlock">
                                    <input type="checkbox" className="label__checkbox" disabled />
                                    <div className="checkboxes__fake label__checkbox_fake"></div>
                                    <div className="checkboxes__text">Gold</div>
                                </label>
                                <label className="checkboxes__row aboutMe__fourthBlock">
                                    <input type="checkbox" className="label__checkbox" disabled />
                                    <div className="checkboxes__fake label__checkbox_fake"></div>
                                    <div className="checkboxes__text">Premium</div>
                                </label>

                            </div>
                        </div>

                        <button class="persone__btn persone__btn_safe">Сохранить личные данные</button>
                    </div>

                </div>
                <h2 className="persData__title">Номер Телефона</h2>
                <div className="persData__persone">
                    <div class="persone">
                        <div className="persone__row">
                            <p className="persone__label">Контактный номер</p>
                            <input className="persone__input" type="tel" placeholder="+996" />
                            <p className="persone__label">Ваш номер телефона виден только вам</p>
                        </div>
                        <button class="persone__btn persone__btn_safe">Сохранить номер телефона</button>
                    </div>
                </div>
                <button class="persone__btn persone__btn_delete">Удалить профиль</button>


            </div>
        </div>
    )
}

export default GenSet
