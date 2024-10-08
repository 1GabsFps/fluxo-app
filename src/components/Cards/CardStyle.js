import styled from 'styled-components';

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
    font-family: 'Fredoka One', cursive;
    font-weight: 800;
`;

export const CardText = styled.p`
    font-size: 20px;
    max-width: 90%;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
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
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    &:hover {
        background-color: #555;
    }

    @media (max-width: 768px) {
        width: 150px;
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
