import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 300px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 100px;
    box-shadow: 0px 0px 10px 0px #000;
    cursor: pointer;
    transition: transform 0.6s, box-shadow 0.6s;
    transform-style: preserve-3d;

    @media (max-width: 768px) {
        width: 300px;
        height: 200px;
        transform: none;
        transition: none;
    }

    &:hover {
        transform: rotateY(180deg);
        box-shadow: 0px 0px 20px 0px #000;

        @media (max-width: 768px) {
            transform: none;
            box-shadow: 0px 0px 10px 0px #000;
        }
    }   
`;

export const CardLogo = styled.img`
    width: 200px;
    height: 200px;
`;

export const CardText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: #fff;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const CardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #3A7786;
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1.2em;
`;

export const CardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #3A7786;
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1.2em;
    transform: rotateY(180deg);

    @media (max-width: 768px) {
        display: none;
    }
`;