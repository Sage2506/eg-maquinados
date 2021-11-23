import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CardImg1 from '../img/cards/Imagen_4_Servicios_1.png';
import CardImg2 from '../img/cards/Imagen_4_Servicios_2.png';
import CardImg3 from '../img/cards/Imagen_4_Servicios_3.png';
import CardImg4 from '../img/cards/Imagen_4_Servicios_4.png';
import CardImg5 from '../img/cards/Imagen_4_Servicios_5.png';
import CardImg6 from '../img/cards/Imagen_4_Servicios_6.png';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 240,
    },
});

const objCard = [
    {
        imgCard: CardImg1,
        textCard: 'Texto de prueba'
    },
    {
        imgCard: CardImg2,
        textCard: 'Texto de prueba'
    },
    {
        imgCard: CardImg3,
        textCard: 'Texto de prueba'
    },
    {
        imgCard: CardImg4,
        textCard: 'Texto de prueba'
    },
    {
        imgCard: CardImg5,
        textCard: 'Texto de prueba'
    },
    {
        imgCard: CardImg6,
        textCard: 'Texto de prueba'
    },

]

export default function MediaCard() {
    const classes = useStyles();



    return (
        <>

            {
                objCard.map(item =>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={item.imgCard}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {item.textCard}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                )

            }
        </>

    );
}


