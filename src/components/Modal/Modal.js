import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import './Modal.css'
import { Link } from 'react-router-dom'

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

const Modal = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [auth, setAuth] = React.useState(false);

    const handleClickOpenAuth = () => {
        setAuth(true);
    };
    const handleCloseAuth = () => {
        setAuth(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpenAuth}>
                Регистрация
            </Button>
            <Dialog className="modal" onClose={handleCloseAuth} aria-labelledby="customized-dialog-title" open={auth}>
                <DialogTitle className="modal__title" id="customized-dialog-title" onClose={handleCloseAuth}></DialogTitle>
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

                        <div className="modal__center">
                            <div className="modal__title">Или по электронной почте</div>


                            <label htmlFor="modalEmail" className="modal__label">Электронная почта</label>

                            <input id="modalEmail" className="modalInp" type="email" required />
                        </div>

                        <div className="modal__bot">

                            <button className="modal__btn">Зарегестрироваться</button>

                            <label className="taskForm__label label fake__checkbox">
                                <input type="checkbox" className="label__checkbox" />
                                <span className="label__checkbox_fake"></span>
                                <span className="label__text checkbox__text">
                                    Я согласен с условиями сайта
                           </span>
                            </label>

                            <div className="modal__link">
                                Уже зарегстрированы
                            <Link to="" className="modal__link">Войдите</Link>
                            </div>


                        </div>
                    </div>
                </DialogContent>
            </Dialog>


            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Вход
            </Button>
            <Dialog className="modal" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle className="modal__title" id="customized-dialog-title" onClose={handleClose}></DialogTitle>
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

                        <div className="modal__center">
                            <div className="modal__title">Войти по электронной почте:</div>

                            <label htmlFor="modalEmail" className="modal__label">Электронная почта</label>
                            <input id="modalEmail" className="modalInp" type="email" required />

                            <label htmlFor="modalPass" className="modal__label">Пароль</label>
                            <input id="modalPass" className="modalInp" type="password" required />
                        </div>

                        <div className="modal__bot">

                            <div className="modal__log">

                                <button className="modal__btn modal__btn__log">Войти</button>
                                <Link to="" className="modal__fgt_pass">Забыли пароль?</Link>

                            </div>




                            <div className="modal__link">
                                Еще не с нами?
                            <Link to="" className="modal__link">Зарегестрируйтесь</Link>
                            </div>


                        </div>
                    </div>
                </DialogContent>
            </Dialog>

        </div >
    );
}

export default Modal