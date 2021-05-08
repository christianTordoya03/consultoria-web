import styled from '@emotion/styled';
import '../card/TypeOfLetter.css';

export const NavbarStyles = styled.div`
    padding: 16px 32px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

    @media (max-width: 741px) {
        padding: 16px 16px;
    }

    @media (max-width: 351px) {
        padding: 16px 8px;
    }

    @media (max-width: 301px) {
        padding: 16px 0;
    }
`;

export const BoxForLogoStyles = styled.div`
    width: 20%;
    padding: 0 0 0 80px;

    @media (max-width: 741px) {
        padding: 0 0 0 40px;
    }

    @media (max-width: 371px) {
        padding: 0 0 0 20px;
    }

    img {
        @media (max-width: 561px) {
            width: 92%;
            height: 96%;
        }

        @media (max-width: 371px) {
            width: 100%;
            height: 96%;
        }

        @media (max-width: 321px) {
            width: 80px;
        }
    }
`;

export const OptionsStyles = styled.div`
    margin: 0;
    padding: 0 64px 0 0;

    @media (max-width: 741px) {
        padding: 0 32px 0 0;
    }

    @media (max-width: 561px) {
        padding: 0 20px 0 0;
    }

    @media (max-width: 371px) {
        padding: 0 8px 0 0;
    }

    @media (max-width: 301px) {
        padding: 0 16px 0 0;
    }

    a {
        @media (max-width: 561px) {
            font-size: 12px;
        }

        @media (max-width: 371px) {
            font-size: 10px;
        }

        @media (max-width: 321px) {
            margin: 4px 3px;
        }
    }
`;
