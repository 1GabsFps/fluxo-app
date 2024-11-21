import styled from 'styled-components';
import 'typeface-roboto'
import 'typeface-archivo-black'


export const Card = styled.div`
    width: 400px;
    height: 250px;
    background-color: #262626;
    border-radius: 10px;
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 300px;
        height: 200px;
    }
`;

export const CardTitle = styled.h2`
    font-size: 2em;
    color: #fff;
    font-family: 'Archivo Black', sans-serif;
    font-weight: 800;

    @media (max-width: 768px) {
        font-size: 1.5em;
    }
`;

export const CardText = styled.p`
    font-size: 20px;
    max-width: 90%;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const CardButton = styled.button`
    width: 200px;
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    &:hover {
        background-color: #555;
    }

    @media (max-width: 768px) {
        width: 100px;
    }
`;

export const CardImage = styled.img`
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 10px;
    display: flex;
    padding: 10px;

`;
