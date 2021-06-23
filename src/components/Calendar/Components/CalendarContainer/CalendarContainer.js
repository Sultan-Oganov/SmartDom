import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './CalendarContainer.css'
import title from '../../img/title.svg'
import Calendar from './Calendar/Calendar'
import Notes from '../Notes/Notes'

const CalendarContainer = () => {

    const useStyles = makeStyles((theme) => ({
        selectEmpty: {
            margin: '0',
            border: '1px solid #a6a6a6',
            borderRadius: '10px',
            background: '#fff',
            padding: '8px 7px',
            fontFamily: 'Geometria',
            fontSize: '20px',
            width: '100%',
        },
    }));

    const classes = useStyles();

    const [day, setDay] = React.useState('');
    const [time, setTime] = useState('')

    const handleChangeDay = (event) => {
        setDay(event.target.value);
    };
    const handleChangeTime = (event) => {
        setTime(event.target.value);
    };

    return (
        <div className="calendar-wrapper">

            <div className="calendar-container">

                <div className="calendar-container__head">
                    <div className="circle circle__white"></div>
                    <div className="circle circle__white"></div>
                    <div className="circle circle__white"></div>
                </div>

                <div className="calendar-container__container">

                    <div className="calendar-container__left-block date">

                        <div className="date__content">
                            <Calendar />
                        </div>

                    </div>

                    <div className="calendar-container__right-block notes">

                        <Notes />

                    </div>

                </div>

            </div>

            <div className="calendar-down">

                <div className="calendar-down__row">

                    <div className="calendar-down__left">

                        <div className="calendar-down__input">
                            <div className="calendar-down__text">День</div>
                            <FormControl className={classes.formControl}>
                                <Select
                                    value={day}
                                    onChange={handleChangeDay}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        8 окт. 2021
                                    </MenuItem>
                                    <MenuItem value={'9'}>9 окт. 2021</MenuItem>
                                    <MenuItem value={'10'}>10 окт. 2021</MenuItem>
                                    <MenuItem value={'11'}>11 окт. 2021</MenuItem>
                                    <MenuItem value={'12'}>12 окт. 2021</MenuItem>
                                    <MenuItem value={'13'}>13 окт. 2021</MenuItem>
                                    <MenuItem value={'14'}>14 окт. 2021</MenuItem>
                                    <MenuItem value={'14'}>15 окт. 2021</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="calendar-down__input">
                            <div className="calendar-down__text">Время</div>
                            <FormControl className={classes.formControl}>
                                <Select
                                    value={time}
                                    onChange={handleChangeTime}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        08:00 - 09:00
                                    </MenuItem>
                                    <MenuItem value={'09-10'}>09:00 - 10:00</MenuItem>
                                    <MenuItem value={'10-11'}>10:00 - 11:00</MenuItem>
                                    <MenuItem value={'11-12'}>11:00 - 12:00</MenuItem>
                                    <MenuItem value={'12-13'}>12:00 - 13:00</MenuItem>
                                    <MenuItem value={'13-14'}>13:00 - 14:00</MenuItem>
                                    <MenuItem value={'14-15'}>14:00 - 15:00</MenuItem>
                                    <MenuItem value={'14-16'}>15:00 - 16:00</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                    </div>

                    <div className="calendar-down__right">

                        <div className="calendar-down__txtarea">
                            <div className="calendar-down__text">Комментарии</div>
                            <textarea className="calendar-down__textArea" placeholder="Убраться утром у Марии по адресу ул.Моск д.2"></textarea>
                        </div>

                    </div>

                </div>

                <div className="calendar-down__footer">
                    <button className="calendar-down__btn">Подтвердить</button>
                </div>

            </div>

        </div>

    )
}

export default CalendarContainer