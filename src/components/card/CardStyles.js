import styled from "@emotion/styled";
import './TypeOfLetter.css';

export const ServicesStyles = styled.div`
    padding: 24px 8%;
    box-sizing: border-box;

    @media (max-width: 530px) {
        width: 100%;
    } 
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
    grid-template-rows: 748px 748px 748px;

    @media (max-width: 1310px) {
        grid-template-rows: 788px 788px 788px;
    }

    @media (max-width: 1200px) {
        grid-template-columns: 50% 50%;
    }

    @media (max-width: 750px) {
        grid-template-rows: 896px 896px 896px;
    }

    @media (max-width: 748px) {
        grid-template-columns: 100%;
        grid-template-rows: 680px 680px 680px 680px 680px 680px 680px 680px;
    }

    @media (max-width: 350px) {
        grid-template-rows: 744px 784px 784px 784px 784px 784px 784px 784px;
    } 
`;

export const CardStyles = styled.div`
    margin: 0 0 32px 0;
    width: 88%;
    height: 688px;
    border-radius: 8px;
    border: #DDDDDD solid 1px;

    &:hover {
        cursor: pointer;
        box-shadow: 0 12px 20px 12px rgba(0, 0, 0, 0.28);
        margin: 0 0 40px 0;
    }

    @media (max-width: 1310px) {
        height: 748px;
    }

    @media (max-width: 1200px) {
        width: 80%;
    }

    @media (max-width: 900px) {
        width: 92%;
        height: 768px;
    }

    @media (max-width: 750px) {
        margin: 0 0 24px 0;
        width: 96%;
        height: 96%;
    }

    @media (max-width: 748px) {
        margin: 0 0 32px 0;
        width: 64%;
        height: 640px;
    }

    @media (max-width: 530px) {
        width: 80%;
    }

    @media (max-width: 530px) {
        width: 88%;
    }   

    @media (max-width: 390px) {
        width: 96%;
    } 

    @media (max-width: 350px) {
        height: 740px;
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
    height: 360px;
    box-sizing: border-box;
    margin: 0;
    padding: 32px 48px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    @media (max-width: 350px) {
        padding: 24px 36px;
    }
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

export const InformationCardStyles = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

export const PStyles = styled.p`
    margin: 0;
    text-align: center;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: 0.4px;

    @media (max-width: 748px) {
        font-size: 14px;
    }

    @media (max-width: 650px) {
        font-size: 13px;
    }

    @media (max-width: 530px) {
        font-size: 14px;
    } 
    
    @media (max-width: 530px) {
        font-size: 13px;
    } 

    @media (max-width: 350px) {
        font-size: 14px;
    } 
`;

export const ContainerCardStyles = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
