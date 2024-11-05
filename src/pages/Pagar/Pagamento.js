import React, { useState } from 'react';
import axios from 'axios';
import logotxt from "../../img/FlogoTxt.svg";
import Flogo from "../../img/LogoBlue.svg";
import Headers from "../../components/Header/Header";
import Button from "../../components/Buttons/button";
import Input from "../../components/Input/Input";
import { GlobalStyle, MainContainer, HeaderContainer, FormPagamento, Image, Title, InputsConteiner } from "./PagamentoStyle";

export default function Pagamento() {
    const [quantia, setQuantia] = useState("");
    const [email, setEmail] = useState("");
    const card = localStorage.getItem('cartao');
    const usrtoken = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];

    const handlePagamento = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/recarregar/', {
                transaction_amount: quantia,
                email: email,
                card_id: card,
                token: usrtoken,
            });
            const { init_point } = response.data;
            window.location.href = init_point;
        } catch (error) {
            console.error("Erro ao processar pagamento:", error);
        }
    }

    return (
        <div>
            <GlobalStyle />
            <MainContainer>
                <HeaderContainer>
                    <Headers Title={logotxt} />
                </HeaderContainer>
                <FormPagamento onSubmit={handlePagamento}>
                    <InputsConteiner>
                        <Title>Pagamento</Title>
                        <Input type="text" placeholder="Quantia" value={quantia} onChange={(e) => setQuantia(e.target.value)} />
                        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Button type="submit" Text="Pagar" />
                    </InputsConteiner>
                    <div className="cho-container"></div>
                    <div>
                        <Image src={Flogo} alt="Flogo" />
                    </div>
                </FormPagamento>
            </MainContainer>
        </div>
    );
}
