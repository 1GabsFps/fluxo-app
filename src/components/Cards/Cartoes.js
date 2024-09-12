import React from "react";
import { Card, CardTitle, CardButton, CardImage, CardText } from "./CardStyle";

function Cartoes({Titulo, Texto, Imagem, Botao}) {
    return (
        <div>
            <Card>
                <container>
                    <CardTitle>{Titulo}</CardTitle>
                    <CardText>{Texto}</CardText>
                </container>
                <container>
                    <CardImage src={Imagem} />
                    <CardButton>{Botao}</CardButton>
                </container>
            </Card>        
        </div>
    );
    }

export default Cartoes;