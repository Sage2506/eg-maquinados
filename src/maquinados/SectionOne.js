import React from 'react'
import imgHome from '../img/menu-1.png';

export const SectionOne = () => {
    return (
        <div className="home__app">

            <div className="txt__home">
                <div className="txt__home-text">
                    
                        <h1>EG</h1>
                        <h1>MAQUINADOS</h1>
                   
                    <h3>Maquinado de procesos especiales</h3>
                </div>
            </div>

            <div className="img__home">
                <img
                    src={imgHome}
                    alt="maquilados"
                    className="img-home"
                />
            </div>
        </div>
    )
}
