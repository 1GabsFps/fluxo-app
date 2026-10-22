import React from "react";
import { Card, CardTitle, CardButton, CardImage, CardText, CardSection } from "./CardStyle";

function Cartoes({ Titulo, Texto, Imagem, Botao, onClick }) {
    return (
        <div>
            <Card>
                <CardSection>
                    <CardTitle>{Titulo}</CardTitle>
                    <CardText>{Texto}</CardText>
                </CardSection>
                <CardSection>
                    <CardImage src={Imagem} alt={`Ilustração do cartão ${Titulo || ''}`} />
                    <CardButton type="button" onClick={onClick}>{Botao}</CardButton>
                </CardSection>
            </Card>        
        </div>
    );
}

export default Cartoes;
