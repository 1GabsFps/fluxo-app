import { ReactComponent as Flogo } from "../../img/Flogo.svg";
import { ReactComponent as Txtlogo } from "../../img/FlogoTxt.svg";
import { Card, CardLogo, CardContainer, CardText } from "../../components/CartaoBus/CBusStyle";
import { useState, useEffect } from "react";

export function CartaoBus({ id, classe, saldo }) {
    const [hovered, setHovered] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
        if (!isMobile) {
            setHovered(true);
            setTimeout(() => setShowInfo(true), 500); // Ajuste o tempo conforme necessário
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setHovered(false);
            setShowInfo(false);
        }
    };

    return (
        <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: hovered && !isMobile ? "rotateY(180deg)" : "rotateY(0deg)",
                transition: hovered && !isMobile ? "transform 0.5s" : "none", // Adicione a transição
            }}
        >
            {!hovered || isMobile ? (
                <>
                    <Flogo style={{
                        width: "100px",
                        height: "100px",
                        fill: Cor,
                        margin: "10px"
                    }} />
                    {isMobile && (
                        <CardContainer>
                            <CardText>
                                Cartão {classe}
                            </CardText>
                            <CardText>
                                Saldo R$: {saldo}
                            </CardText>
                        </CardContainer>
                    )}
                </>
            ) : (
                showInfo && (
                    <CardContainer style={{ transform: "rotateY(180deg)" }}>
                        <CardText>
                            Cartão {classe}
                        </CardText>
                        <CardText>
                            Saldo R$: {saldo}
                        </CardText>
                    </CardContainer>
                )
            )}
        </Card>
    );
}