import styled from "@emotion/styled";
import '../card/TypeOfLetter.css';

export const WelcomeStyles = styled.div`
    width: 100%;
    height: 640px;
    background: black;
`;

export const BoxImageStyles = styled.div`
    width: 100%;
    height: 100%; 
    opacity: 0.64;
    img {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
    `;
    
export const BodyWelcomeStyles = styled.div`
    width: 100%;
    color: white;
    background: red;
    position: absolute;
`;

export const InformationWelcomeStyles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 24px 0;
    
    h1 {
        font-family: 'Roboto';
        text-transform: uppercase;
        font-weight: bold;
        font-size: 56px;
        font-style: normal;
        letter-spacing: 1px;
        margin: 0 0 8px 0;
    }

    h3 {
        font-family: 'Piazzolla';
        font-weight: normal;
        font-size: 28px;
        font-style: normal;
        margin: 0 0 16px 0;
    }

    button {
        cursor: pointer;
        padding: 8px 16px;
        text-transform: capitalize;
    
        &:hover {
            background: red;
        }
    }
`;