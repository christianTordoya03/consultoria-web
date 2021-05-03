import styled from "@emotion/styled";
import '../card/TypeOfLetter.css';

export const WelcomeStyles = styled.div`
    width: 100%;
    height: 640px;
    background: rgba(0, 0, 0, 0.24);
`;

// export const BoxImageStyles = styled.div`
//     width: 100%;
//     height: 100%; 
//     opacity: 0.64;
//     img {
//         box-sizing: border-box;
//         width: 100%;
//         height: 100%;
//     }
// `;
    
export const BodyWelcomeStyles = styled.div`
    width: 100%;
    color: white;
    position: absolute;
    background: rgba(0, 0, 0, 0.24);
    top: 24%;
`;

export const InformationWelcomeStyles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 36px 0;

    h1 {
        font-family: 'Roboto';
        text-transform: uppercase;
        font-weight: bold;
        font-size: 56px;
        font-style: normal;
        letter-spacing: 1px;
        margin: 0 0 8px 0;
        color: black;
    }

    h3 {
        font-family: 'Piazzolla';
        font-weight: normal;
        font-size: 28px;
        font-style: normal;
        margin: 0 0 16px 0;
        color: black;
    }

    button {
        cursor: pointer;
        padding: 8px 16px;
        text-transform: capitalize;
        border: rgba(0, 0, 255, 0.24) solid 1px;
    
        &:hover {
            background: white;
            outline: none;
            border: rgba(0, 0, 255, 0.24) solid 1px;
            color: black;
        }
    }
`;