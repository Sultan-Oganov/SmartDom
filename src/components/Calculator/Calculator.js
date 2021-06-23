import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Calculator.css'
import flowerUp from '../../image/flowerUp.svg'
import flowerDown from '../../image/flowerD.svg'
import calc from '../../image/calc.png'
const Calculator = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const useStyles = makeStyles((theme) => ({
        selectEmpty: {
            margin: '0',
            border: '1px solid #a6a6a6',
            borderRadius: '10px',
            background: '#fff',
            padding: '0 7px',
            fontFamily: 'Geometria',
            fontSize: '14px',
            margin: '0 0 15px 0'
        },
    }));

    const classes = useStyles();
    const [payment, setPayment] = React.useState('');

    const handleChange = (event) => {
        setPayment(event.target.value);
    };

    return (
        <div className="calculator">

            <Button class="openCalc" variant="outlined" color="primary" onClick={handleClickOpen}>
                <img src={calc} />
            </Button>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                className="calculator__wrapper"
            >

                <img className="calculator__flower calculator__flower_up" src={flowerUp} alt="" />
                <img className="calculator__flower calculator__flower_down" src={flowerDown} alt="" />

                <DialogTitle id="responsive-dialog-title"><div className="calculator__title">Калькулятор</div></DialogTitle>
                <DialogContent className="calculator__content">
                    <form className="calculator__form">

                        <div className="calculator__label">
                            Занятия с:
                        </div>
                        <input className="calculator__input" type="time" placeholder="10:00" />

                        <div className="calculator__label">
                            Занятия до:
                        </div>
                        <input className="calculator__input" type="time" placeholder="13:00" />

                        <div className="calculator__label">
                            Оплата за час:
                        </div>
                        <input className="calculator__input" type="number" placeholder="1000 сом" />

                        <div className="calculator__label">
                            Оплата через:
                        </div>
                        <FormControl className="calculator__payments" className={classes.formControl}>
                            <Select
                                value={payment}
                                onChange={handleChange}
                                displayEmpty
                                className={classes.selectEmpty}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem className="calculator__payment" value="">
                                    Выбрать...
                                </MenuItem>
                                <MenuItem className="calculator__payment" value={'ElSom'}>ЭлСом</MenuItem>
                                <MenuItem className="calculator__payment" value={'Card'}>Картой</MenuItem>
                                <MenuItem className="calculator__payment" value={'Cash'}>Наличная оплата</MenuItem>
                            </Select>
                        </FormControl>

                        <div className="calculator__footer">
                            <div className="calculator__label calculator__label_result">
                                <span>Итого:</span>
                                <input className="calculator__input calculator__input_result" type="number" value="3000" />
                            </div>

                            <button className="calculator__btn" onClick={handleClose} autoFocus>
                                Оплатить
                            </button>
                        </div>



                    </form>

                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Calculator