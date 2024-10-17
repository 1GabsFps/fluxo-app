import { ReactComponent as Flogo } from "../../img/Flogo.svg";
import { ReactComponent as Txtlogo } from "../../img/FlogoTxt.svg";
import { Card, CardLogo } from "../../components/CartaoBus/CBusStyle";
import { CardContainer, CardText } from "../../components/CartaoBus/CBusStyle";
import { useState } from "react";

export function CartaoBus({ id, classe, saldo }) {
    const [hovered, setHovered] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    let Cor;
    switch (classe) {
        case "Normal":
            Cor = "#98633D";
            break;
        case "Estudante":
            Cor = "#6361DC";
            break;
        case "Especial":
            Cor = "#4EC23B";
            break;
        case "Idoso":
            Cor = "#5F6669";
            break;
        default:
            Cor = "#000000"; // Cor padrão
    }

    const handleMouseEnter = () => {
        setHovered(true);
        setTimeout(() => setShowInfo(true), 500); // Ajuste o tempo conforme necessário
    };

    const handleMouseLeave = () => {
        setHovered(false);
        setShowInfo(false);
    };

    const handleClick = () => {
        localStorage.setItem("cartao", id);
        window.location.href = "/recarregar";
    };

    return (
        <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{
                transform: hovered ? "rotateY(180deg)" : "rotateY(0deg)",
                transition: "transform 0.5s", // Adicione a transição
            }}
        >
            {!hovered && (
                <Flogo style={{
                    width: "100px",
                    height: "100px",
                    fill: Cor,
                    margin: "10px"
                }} />
            )}
            {hovered && showInfo && (
                <CardContainer style={{ transform: "rotateY(180deg)" }}>
                    <CardText>
                        Cartão {classe}
                    </CardText>
                    <CardText>
                        Saldo R$: {saldo}
                    </CardText>
                </CardContainer>
            )}
        </Card>
    );
}