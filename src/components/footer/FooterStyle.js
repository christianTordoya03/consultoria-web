import styled from "@emotion/styled";
import '../card/TypeOfLetter.css'

export const FooterStyle = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #CFCFCF;
    display: flex;

    @media (max-width: 390px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const FooterTextStyle = styled.p`
    font-family: 'Piazzolla';
    font-weight: normal;
    font-style: normal;
    font-size: 15px;
    margin: 0 0 0 4px;
`;

