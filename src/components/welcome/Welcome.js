import React from 'react';
import Background from '../../images/background.jpg';
import { BodyWelcomeStyles, BoxImageStyles, WelcomeStyles, InformationWelcomeStyles } from './WelcomeStyles';

const Welcome = () => {
    return (
        <WelcomeStyles>
            <BodyWelcomeStyles>
                <InformationWelcomeStyles>
                    <h1>bienvenidos</h1>
                    <h3>Profesionales a tu servicio</h3>
                    <button>inicio</button>
                </InformationWelcomeStyles>
            </BodyWelcomeStyles>
            <BoxImageStyles>
                <img src={Background} alt="office"/>
            </BoxImageStyles>
        </WelcomeStyles>
    )
}

export default Welcome;
