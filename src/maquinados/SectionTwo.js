import React from 'react'
import AcercaDeImg from '../img/acerca_de2.png';

export const SectionTwo = () => {
    return (
        <div className="container__section-two" id="nosotros">
            <div className="container__grid__section-2">
                <div className="bx__section-2 one">
                    <h3>Acerca de EG Maquinados</h3>
                    <p>
                        Trabajamos para proveer servicios
                        de maquinado de alta
                        calidad industrial mediante
                        innovación y cuidado del detalle
                    </p>
                    <p>
                        buscando ser la mejor opción en la industria
                        del maquinado de Baja California.
                        Orientando los esfuerzos de la compañía
                        a proporcionar soluciones óptimas
                        estando siempre a la vanguardia
                    </p>
                </div>
                <div className="bx__section-2">
                    <img
                        src={AcercaDeImg}
                        alt="acercade"
                        className="acerca__img"
                    />
                </div>
                <div className="bx__section-2">
                    <ul>
                        <li>Respeto</li>
                        <li>Lealtad</li>
                        <li>Honestidad</li>
                        <li>Comprometidos con la calidad de nuestro servicio</li>
                        <li>Dedicación en cada proyecto</li>
                        <li>Compromiso con nuestro equipo y con el cliente</li>
                        <li>Trabajo en equipo</li>
                        <li>Empatía con nuestros clientes</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
