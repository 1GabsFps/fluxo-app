import React, { useState, useEffect } from "react";
import axios from "axios";
import { CartaoBus } from "../../components/CartaoBus/CartaoBus";
import { GlobalStyle, MainContainer, CardsContainer, CardText } from "./RecarregarStyle";
import Header from "../../components/Header/Header";
import Tlogo from "../../img/FlogoTxt.svg";

export default function Recarregar() {
    const [cartoes, setCartoes] = useState([]);

    const HandleCartoes = async () => {
        const data = {
            token: document.cookie.split("=")[1]
        };
        try {
            const response = await axios.post('http://127.0.0.1:8000/cartoes/', data);
            console.log("Dados recebidos:", response.data); // Verificar os dados recebidos
            if (response.data && typeof response.data === 'object') {
                const cartoesArray = Object.values(response.data);
                setCartoes(cartoesArray);
            } else {
                console.error("Os dados recebidos não são um objeto");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    useEffect(() => {
        HandleCartoes();
    }, []);

    return (
        <div>
            <GlobalStyle />
            <MainContainer>
                <Header Title={Tlogo} Item1="Item1" Item2="Item2" Item3="Item3" Item4="Item4" />
                <CardsContainer>
                    {cartoes.length > 0 ? (
                        cartoes.map((cartao) => (
                            <div style={
                                {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }
                            }>
                            <CartaoBus key={cartao.id} id={cartao.id} classe={cartao.classe} saldo={cartao.saldo} />

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