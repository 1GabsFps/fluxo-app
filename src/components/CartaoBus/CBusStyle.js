import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 300px;
    background-color: #000;
    border-radius: 10px;
    margin: 10px;
    box-shadow: 0px 0px 10px 0px #000000;
    cursor: pointer;
    transition: transform 0.6s, box-shadow 0.6s;

    @media (max-width: 768px) {
        width: 300px;
        height: 200px;
    }

    &:hover {
        transform: rotateY(180deg);
        box-shadow: 0px 0px 10px 0px #fff;
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

