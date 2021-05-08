import styled from "@emotion/styled";
import '../card/TypeOfLetter.css';

export const WelcomeStyles = styled.div`
    width: 100%;
    height: 600px;
    background: rgba(0, 0, 0, 0.24);

    @media (max-width: 1075px) {
        height: 480px;
    }

    @media (max-width: 1008px) {
        height: 400px;
    }

    @media (max-width: 800px) {
        height: 300px;
    }
`;

export const BoxImageStyles = styled.div`
    width: 100%;
    height: 100%;
    img {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
`;
    
export const BodyWelcomeStyles = styled.div`
    width: 100%;
    height: 600px;
    color: white;
    position: absolute;
    background: rgba(0, 0, 0, 0.32);
    top: 13.5%;
    display: flex;
    align-items: center;

    @media (max-width: 1534px) {
        top: 10.75%;
    }

    @media (max-width: 1367px) {
        top: 12%;
    }

    @media (max-width: 1340px) {
        top: 12.5%;
    }

    @media (max-width: 1260px) {
        top: 13.25%;
    }

    @media (max-width: 1204px) {
        top: 13.75%;
    }

    @media (max-width: 1154px) {
        top: 14.25%;
    }

    @media (max-width: 1075px) {
        top: 15.5%;
        height: 480px;
    }

    @media (max-width: 1008px) {
        height: 400px;
    }

    @media (max-width: 808px) {
        height: 300px;
    }
`;

export const InformationWelcomeStyles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 36px 0;
    background: rgba(0, 0, 0, 0.08);
    padding: 20px 0;

    h1 {
        font-family: 'Roboto';
        text-transform: uppercase;
        font-weight: bold;
        font-size: 56px;
        font-style: normal;
        letter-spacing: 1px;
        margin: 0 0 8px 0;
        color: white;
        text-shadow: 8px 4px 8px rgba(0, 0, 0, 0.32);

        @media (max-width: 1008px) {
            font-size: 48px;
        }

        @media (max-width: 720px) {
            font-size: 40px;
        }

        @media (max-width: 401px) {
            font-size: 32px;
        }
    }

    h3 {
        font-family: 'Piazzolla';
        font-weight: normal;
        font-size: 28px;
        font-style: normal;
        margin: 0 0 16px 0;
        color: white;
        text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.64);

        @media (max-width: 1008px) {
            font-size: 24px;
        }

        @media (max-width: 720px) {
            font-size: 20px;
            margin: 0 0 20px 0;
        }

        @media (max-width: 401px) {
            font-size: 16px;
        }
    }

    button {
        cursor: pointer;
        padding: 8px 16px;
        text-transform: capitalize;
        border: rgba(0, 0, 255, 0.24) solid 1px;
        border-radius: 8px;
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 16px;
        font-style: normal;
        display: flex;
        align-items: center;
        justify-content: center;
    
        &:hover {
            background: black;
            outline: none;
            border: rgba(0, 0, 255, 0.24) solid 1px;
            color: white;
        }

        @media (max-width: 720px) {
            padding: 6px 12px;
            font-size: 14px;
        }
    }
`;