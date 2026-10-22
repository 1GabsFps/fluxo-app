import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import api from "../../utils/api";
import { getAuthToken } from "../../utils/auth";
import logotxt from "../../img/FlogoTxt.svg";
import Flogo from "../../img/LogoBlue.svg";
import Headers from "../../components/Header/Header";
import Button from "../../components/Buttons/button";
import Input from "../../components/Input/Input";
import { GlobalStyle, MainContainer, HeaderContainer, FormPagamento, Image, Title, InputsConteiner } from "./PagamentoStyle";

const toastOptions = {
    style: {
        background: 'black',
        color: 'white',
    },
};

export default function Pagamento() {
    const [quantia, setQuantia] = useState("");
    const [email, setEmail] = useState("");
    const card = localStorage.getItem('cartao');
    const usrtoken = getAuthToken();

    const handlePagamento = async (e) => {
        e.preventDefault();
        if (!quantia || !email) {
            toast.error('Erro, todos os campos devem ser preenchidos.', toastOptions);
            return;
        }

        try {
            const response = await api.post('/recarregar/', {
                transaction_amount: quantia,
                email: email,
                card_id: card,
                token: usrtoken,
            });
            const { init_point } = response.data;
            if (init_point) {
                toast.success('Pagamento iniciado com sucesso!', toastOptions);
                window.location.href = init_point;
            } else {
                toast.error('Não foi possível iniciar o checkout de pagamento.', toastOptions);
            }
        } catch (error) {
            toast.error('Erro ao processar o pagamento. Tente novamente.', toastOptions);
        }
    };

    return (
        <div>
            <Toaster />
            <GlobalStyle />
            <MainContainer>
                <HeaderContainer>
                    <Headers Title={logotxt} Item1="Sobre" Item2="Contato" Item3="Home" Item4="FAQ" Link1="/faq" Link2="/faq" Link3="/home" Link4="/faq" />
                </HeaderContainer>
                <FormPagamento onSubmit={handlePagamento}>
                    <InputsConteiner>
                        <Title>Pagamento</Title>
                        <Input 
                            id="pagamento-quantia" 
                            type="text" 
                            placeholder="Quantia" 
                            value={quantia} 
                            onChange={(e) => setQuantia(e.target.value)} 
                        />
                        <Input 
                            id="pagamento-email" 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <Button type="submit" Text="Pagar" />
                    </InputsConteiner>
                    <div className="cho-container" />
                    <div>
                        <Image src={Flogo} alt="Logo Fluxo" />
                    </div>
                </FormPagamento>
            </MainContainer>
        </div>
    );
}
