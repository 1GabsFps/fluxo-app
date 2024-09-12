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

`;

export const CardTitle = styled.h2`
    font-size: 24px;
    color: #fff;
`;

export const CardText = styled.p`
    font-size: 16px;
    color: #fff;
`;

export const CardButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: #555;
    }
`;

export const CardImage = styled.img`
    width: 200px;
    object-fit: cover;
    border-radius: 10px;
    display: flex;
    padding: 10px;

`;
