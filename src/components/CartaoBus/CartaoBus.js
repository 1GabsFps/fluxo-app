import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Flogo } from "../../img/Flogo.svg";
import { Card, CardContainer, CardText } from "../../components/CartaoBus/CBusStyle";

export function CartaoBus({ id, classe, saldo }) {
    const [hovered, setHovered] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    let cor;
    switch (classe) {
        case "Normal":
            cor = "#98633D";
            break;
        case "Estudante":
            cor = "#6361DC";
            break;
        case "Especial":
            cor = "#4EC23B";
            break;
        case "Idoso":
            cor = "#5F6669";
            break;
        default:
            cor = "#000000";
    }

    const handleMouseEnter = () => {
        if (!isMobile) {
            setHovered(true);
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => setShowInfo(true), 500);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            if (timerRef.current) clearTimeout(timerRef.current);
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
                transition: hovered && !isMobile ? "transform 0.5s" : "none",
            }}
        >
            {!hovered || isMobile ? (
                <>
                    <Flogo 
                        style={{
                            width: "100px",
                            height: "100px",
                            fill: cor,
                            margin: "10px"
                        }} 
                        aria-label={`Logo do cartão ${classe}`}
                    />
                    {isMobile && (
                        <CardContainer>
                            <CardText>Cartão {classe}</CardText>
                            <CardText>Saldo R$: {saldo}</CardText>
                        </CardContainer>
                    )}
                </>
            ) : (
                showInfo && (
                    <CardContainer style={{ transform: "rotateY(180deg)" }}>
                        <CardText>Cartão {classe}</CardText>
                        <CardText>Saldo R$: {saldo}</CardText>
                    </CardContainer>
                )
            )}
        </Card>
    );
}
