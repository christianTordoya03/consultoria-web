import React from 'react';
import { 
    BodyCardStyles, 
    BoxImageStyles, 
    CardStyles, 
    ContainerCardsStyles, 
    FirstTitleStyles, 
    InformationCardStyles, 
    ServicesStyles,
    PStyles,
} from './CardStyles';
import consultoria from './DataBaseCard';

const Card = () => {
    return (
        <ServicesStyles>
            <FirstTitleStyles>Servicios</FirstTitleStyles>
            <ContainerCardsStyles>
                {
                    consultoria.map( ({img, casos, informacion, detalleUno, detalleDos, detalleTres, detalleCuatro, detalleCinco, detalleSeis, detalleSiete,}) => (
                        <CardStyles key={casos}>
                            <BoxImageStyles>
                                <img src={img} alt={casos}/>
                            </BoxImageStyles>
                            <BodyCardStyles>
                                <h3>{casos}</h3>
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
                    ))
                }
            </ContainerCardsStyles>
        </ServicesStyles>
    )
}

export default Card;
