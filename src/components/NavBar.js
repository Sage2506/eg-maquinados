import React, { useState } from 'react';
import { Link } from 'react-scroll'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Hidden, makeStyles } from '@material-ui/core';
import { BoxDrawer } from './BoxDrawer';
import Logo from '../img/Logo_nav.png';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
        color: '#fff',
        alignSelf: 'start'
    },
    offset: theme.mixins.toolbar,
    links: {
        color: '#fff'
    },
    appBar: {
        color: 'primary'
    }

}));

export default function NavBar() {
    const classes = useStyles();

    const [open, setopen] = useState(false);

    const abrirBarra = () => {
        setopen(!open);
    }


    return (
        <>
            <AppBar position="static" color="transparent" className={classes.appBar}>
                <Toolbar className="nav__bar">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        className={classes.menuButton}
                        onClick={abrirBarra}
                    >
                        <MenuIcon />
                    </IconButton>

                    <img
                        src={Logo}
                        className="logo"
                        alt="eg-maquinados"
                    />

                    <div className="bx">
                        <Button
                            className={classes.links}
                        >
                            Inicio
                        </Button>

                        <Link
                            to="nosotros"
                            spy={true}
                            smooth={true}
                        >
                            <Button
                                className={classes.links}
                            >
                                Nosotros
                            </Button>
                        </Link>

                        <Link
                            to="servicios"
                            spy={true}
                            smooth={true}
                        >
                            <Button
                                className={classes.links}
                            >Servicios
                            </Button>
                        </Link>

                        <Link
                            to="produccion"
                            spy={true}
                            smooth={true}
                        >
                            <Button
                                className={classes.links}
                            >Producción
                            </Button>
                        </Link>

                        <Link
                            to="informacion"
                            spy={true}
                            smooth={true}
                        >
                            <Button
                                className={classes.links}
                            >Información
                            </Button>
                        </Link>

                        <Link
                            to="contacto"
                            spy={true}
                            smooth={true}
                        >
                            <Button
                                className={classes.links}
                            >Contacto
                            </Button>
                        </Link>

                    </div>

                    <div className="btns bx">

                        <Link
                            to="contacto"
                            spy={true}
                            smooth={true}
                        >
                            <Button
                                variant="contained"
                            >
                                Solicitar cotización
                            </Button>
                        </Link>

                        <Button>
                            <i
                                className="fab fa-facebook-square"

                            />
                        </Button>

                        <Button>
                            <i
                                className="fab fa-whatsapp-square"

                            />
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Hidden msUp>
                <BoxDrawer
                    variant="temporary"
                    open={open}
                    onClose={abrirBarra}
                />
            </Hidden>
        </>
    );
}
