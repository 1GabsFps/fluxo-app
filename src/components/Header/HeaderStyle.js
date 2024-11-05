import styled, { createGlobalStyle } from "styled-components";

// Importando a fonte do Google Fonts
export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Open Sans', sans-serif;
    }
`;

export const HeaderContainer = styled.div`
    align-items: center;
    display: flex;
    background-color: #3A7786;
    width: 100%;
    height: 50px;
    border-radius: 0px 0px 25px 25px;
    box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.8);
    justify-content: space-between;
    position: fixed;
    top: 0;

    @media (max-width: 768px) {
        height: 40px;
        justify-content: center;
        border-radius: 0px;
    }
`;

export const HeaderTitle = styled.h1`
    color: #3E4648;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    margin: 0;
`;

export const HeaderItens = styled.div`
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    position: relative;

    @keyframes borderExpand {
        from {
            width: 0;
            border-radius: 50px;
        }
        to {
            width: 75%;
            border-radius: 50px;
        }
    }

    @keyframes borderShrink {
        from {
            width: 75%;
            border-radius: 50px;
            right: 0;
        }
        to {
            width: 0;
            border-radius: 50px;
            right: 0;
        }
    }

    &:hover::after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 2px;
        background-color: #fff;
        animation: borderExpand 0.3s forwards;
    }

    &:not(:hover)::after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 2px;
        background-color: #fff;
        animation: borderShrink 0.3s forwards;
    }

    @media screen and (max-width: 768px) {
        padding: 0px;
        margin-left: 5px;
    }

    @media (max-width: 768px) {
        padding: 5px;
    }
`;

export const ItensContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Image = styled.img`
    width: 120px;
    height: 50px;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
        filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.7));
        transition: 0.6s;
    }

    @media (max-width: 768px) {
        width: 100px;
        height: 40px;
    }

    @media (max-width: 768px) {
        animation: shadowBlink 1s infinite
    }

    @keyframes shadowBlink {
        0%, 100% {
            filter: drop-shadow(0px 8px 15px rgba(100, 100, 100, 0.8));
        }
        50% {
            filter: drop-shadow(0px 8px 15px rgba(255, 255, 255, 0.8));
        }
    }
`;

export const CenteredImageContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const MenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const MobileMenu = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    background-color: #3A7786;
    position: absolute;
    top: 50px;
    width: 100%;
    box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.8);

    @media (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        top: 40px;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    animation: ${({ isOpen }) => (isOpen ? 'fadeIn 0.6s forwards' : 'fadeOut 0.6s forwards')};
`;
