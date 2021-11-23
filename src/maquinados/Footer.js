import React from 'react';
import Logo from '../img/logo.png';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        input: {
            color: 'primary',

        }
    },
}));

export const Footer = () => {

    const classes = useStyles();

    return (
        <div className="footer">
            <div className="grid__footer">
                <div className="bx__footer-links">
                    <ul className="bx__contact-phone">
                        <li>
                            Tel oficina: 
                            <a href="tel:664-880-3571">664-880-3571</a>
                        </li>
                        <li>
                            Edgar Garduño: 
                            <a href="tel:663-211-5423">663-211-5423</a>
                        </li>
                        <li>
                            Emilio Garduño: 
                            <a href="tel:663-211-5423">664-669-4274</a>
                        </li>
                    </ul>
                    <ul className="bx__contact-phone">
                        <li>ubicación</li>
                        <li>Privada Narcisos 2247</li>
                        <li>Lomas Terrabella 22203</li>
                        <li>Correo: egmail@gmail.com</li>
                    </ul>
                </div>
                <div className="bx__footer-subscribe">
                    <div className="subcribe__bx">
                        <div className="align__bx-footer">
                            <div>
                                <img
                                    src={Logo}
                                    className="logoFooter"
                                    alt="eg-maquinados"
                                />
                            </div>

                            <div>
                                <p className="news">Newsletter</p>
                                <p className="txt-subscribe">Subscribite para recibir
                                    Información de nuestros productos</p>

                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField
                                        required
                                        label="Dirección email"
                                        variant="filled"
                                        className="input__text"
                                        size="small"
                                        id="filled-size-small"
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        className={classes.btnSubmit}
                                    >
                                        Enviar
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
