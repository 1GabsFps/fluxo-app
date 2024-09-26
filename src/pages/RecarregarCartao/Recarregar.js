import React, { useState } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import { CartaoBus } from "../../components/CartaoBus/CartaoBus";

export default function Recarregar() {
    const [cartoes, setCartoes] = useState([]);
    const [saldoCartoes, setSaldoCartoes] = useState([]);
    const HandleCartoes = () => {
        const data = {
            token: document.cookie.split("=")[1]
        };
        axios.post('http://127.0.0.1:8000/cartoes/', data)
        .then(response => {
            console.log(response.data);
            setCartoes(response.data.cartoes);
            setSaldoCartoes(response.data.saldo);
        })
        .catch(error => {
            console.error("Erro na requisição:", error);
        });
    }

    return (
        <>
        <Header />
        <div>
            {cartoes.map((cartao, index) => (
                <CartaoBus key={index} cartao={cartao} saldo={saldoCartoes[index]} />
            ))}
        </div>
        </>
    );
}