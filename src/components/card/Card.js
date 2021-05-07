import React from 'react';
import { 
    BodyCardStyles, 
    BoxImageStyles, 
    CardStyles, 
    CardTitleStyles,
    ContainerCardsStyles, 
    ContainerCardStyles,
    FirstTitleStyles, 
    InformationCardStyles,
    ServicesStyles,
    PStyles,
} from './CardStyles';
import consultoria from './DataBaseCard';

const Card = () => {
    return (
        <ServicesStyles id="services">
            <FirstTitleStyles>Servicios</FirstTitleStyles>
            <ContainerCardsStyles>
                {
                    consultoria.map( ({img, casos, segundaLineaCasos, informacion, detalleUno, detalleDos, detalleTres, detalleCuatro, detalleCinco, detalleSeis, detalleSiete,}) => (
                        <ContainerCardStyles key={casos}>
                            <CardStyles key={casos}>
                                <BoxImageStyles>
                                    <img src={img} alt={casos}/>
                                </BoxImageStyles>
                                <BodyCardStyles>
                                    <CardTitleStyles>
                                        <h3>{casos}</h3>
                                        {segundaLineaCasos && <h3>{segundaLineaCasos}</h3>}
                                    </CardTitleStyles>
                                    <InformationCardStyles>
                                        <PStyles>{informacion}</PStyles>
                                        {detalleUno && <PStyles>{detalleUno}</PStyles>}
                                        {detalleDos && <PStyles>{detalleDos}</PStyles>}
                                        {detalleTres && <PStyles>{detalleTres}</PStyles>}
                                        {detalleCuatro && <PStyles>{detalleCuatro}</PStyles>}
                                        {detalleCinco && <PStyles>{detalleCinco}</PStyles>}
                                        {detalleSeis && <PStyles>{detalleSeis}</PStyles>}
                                        {detalleSiete && <PStyles>{detalleSiete}</PStyles>}
                                    </InformationCardStyles>
                                </BodyCardStyles>
                            </CardStyles>
                        </ContainerCardStyles>
                    ))
                }
            </ContainerCardsStyles>
        </ServicesStyles>
    )
}

export default Card;
