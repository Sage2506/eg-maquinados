import React from 'react'
import Carousel from 'react-elastic-carousel';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MaximizeIcon from '@material-ui/icons/Maximize';

import CardImg1 from '../img/cards/Imagen_4_Servicios_1.png';
import CardImg2 from '../img/cards/Imagen_4_Servicios_2.png';
import CardImg3 from '../img/cards/Imagen_4_Servicios_3.png';
import CardImg4 from '../img/cards/Imagen_4_Servicios_4.png';
import CardImg5 from '../img/cards/Imagen_4_Servicios_5.png';
import CardImg6 from '../img/cards/Imagen_4_Servicios_6.png';

const useStyles = makeStyles({
    media: {
        height: 340,
    },
    iconLine: {
        fontSize: '80px',
        width: '100%',
        color: '#100056',
    }
});

export const CarouselCards = () => {
    const classes = useStyles();

    const objCard = [
        {
            imgCard: CardImg1,
            textCard: 'Fabricación y reparación de Troqueles'
        },
        {
            imgCard: CardImg2,
            textCard: 'Fabricación y reparación de fixtura'
        },
        {
            imgCard: CardImg3,
            textCard: 'Fabricación y reparación de herramientas especiales.'
        },
        {
            imgCard: CardImg4,
            textCard: 'Fabricación y reparación de engranes y bujes.'
        },
        {
            imgCard: CardImg5,
            textCard: 'Fabricación de piezas en serie, fresado, roscado y torneado.'
        },
        {
            imgCard: CardImg6,
            textCard: 'Rectificado de superficies planas.'
        },

    ]

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 }
    ]


    return (
        <div className="item__carousel">

            <div>
                <h1>Servicios</h1>
                <MaximizeIcon
                    className={classes.iconLine}
                />
            </div>

            <Carousel
                showArrows={false}
                itemsToShow={3}
                breakPoints={breakPoints}
            >
                {
                    objCard.map(item =>
                        <Card className="card__item">
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
            </Carousel>
        </div>
    )
}
