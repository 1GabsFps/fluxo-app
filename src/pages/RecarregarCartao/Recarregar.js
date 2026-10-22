import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import api from "../../utils/api";
import { getAuthToken } from "../../utils/auth";
import { CartaoBus } from "../../components/CartaoBus/CartaoBus";
import { GlobalStyle, MainContainer, CardsContainer, CardText } from "./RecarregarStyle";
import Header from "../../components/Header/Header";
import Tlogo from "../../img/FlogoTxt.svg";

export default function Recarregar() {
    const [cartoes, setCartoes] = useState([]);
    const navigate = useNavigate();

    const handleCartoes = useCallback(async () => {
        const token = getAuthToken();
        if (!token) {
            navigate("/login");
            return;
        }
        try {
            const response = await api.post('/cartoes/', { token });
            if (response.data && typeof response.data === 'object') {
                const cartoesArray = Array.isArray(response.data) 
                    ? response.data 
                    : Object.values(response.data);
                setCartoes(cartoesArray);
            }
        } catch (error) {
            toast.error("Não foi possível carregar seus cartões.");
        }
    }, [navigate]);

    useEffect(() => {
        handleCartoes();
    }, [handleCartoes]);

    const handleRecharge = (cartao) => {
        if (cartao.classe === 'Idoso' || cartao.classe === 'Especial') {
            toast.error("Cartões de idoso ou especial não podem ser carregados.");
        } else {
            localStorage.setItem("cartao", cartao.id);
            navigate("/recarregar");
        }
    };

    return (
        <div>
            <GlobalStyle />
            <Toaster />
            <MainContainer>
                <Header Title={Tlogo} Item1="Sobre" Item2="Contato" Item3="Home" Item4="FAQ" Link1="/faq" Link2="/faq" Link3="/home" Link4="/faq" />
                <CardsContainer>
                    {cartoes.length > 0 ? (
                        cartoes.map((cartao) => (
                            <div 
                                key={cartao.id}
                                role="button"
                                tabIndex={0}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer"
                                }}
                                onClick={() => handleRecharge(cartao)}
                                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleRecharge(cartao)}
                            >
                                <CartaoBus id={cartao.id} classe={cartao.classe} saldo={cartao.saldo} />
                            </div>
                        ))
                    ) : (
                        <CardText>Você não possui cartões cadastrados</CardText>
                    )}
                </CardsContainer>
            </MainContainer>
        </div>
    );
}
