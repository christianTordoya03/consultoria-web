import styled from "@emotion/styled";
import './TypeOfLetter.css';

export const ServicesStyles = styled.div`
    padding: 24px 8%;
`;

export const FirstTitleStyles = styled.h1`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 0 40px 0;
    font-family: 'Inter';
    font-size: 48px;
    font-weight: bold;
    font-style: normal;
    letter-spacing: 0;
    text-transform: uppercase;
`;

export const ContainerCardsStyles = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 33% 33% 33%;
`;

export const CardStyles = styled.div`
    margin: 0 0 48px 0;
    width: 88%;
    border-radius: 8px;
    border: #DDDDDD solid 1px;

    &:hover {
        cursor: pointer;
        box-shadow: 0 8px 8px 8px rgba(0, 0, 0, 0.08);
        border: none;
    }
`;

export const BoxImageStyles = styled.div`
    width: 100%;
    height: 264px;
    margin: 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    img {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
`;

export const BodyCardStyles = styled.div`
    margin: 0;
    padding: 32px 48px;
    height: 360px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`;

export const CardTitleStyles = styled.div`
    width: 100%;
    padding: 4px 0;
    margin: 0 0 16px 0;
    h3 {
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        
        font-family: 'Piazzolla';
        font-size: 24px;
        font-weight: bold;
        font-style: normal;
    }
`;

export const InformationCardStyles = styled.div``;

export const PStyles = styled.p`
    margin: 0;
    text-align: center;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: 0.4px;
`;
