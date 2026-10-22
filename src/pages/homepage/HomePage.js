import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Headers from "../../components/Header/Header";
import Flogo from "../../img/FlogoTxt.svg";
import Button from "../../components/Buttons/button";
import api from "../../utils/api";
import { getAuthToken, removeAuthToken } from "../../utils/auth";
import { GlobalStyle, MainContainer, UserTitle, HiUser, Card, CardsContainer, CardTitle, CardText, ButtonConteiner } from "./HomeStyle";
import { FaCreditCard, FaUserEdit, FaEnvelope } from 'react-icons/fa';

export default function HomePage() {
    const [usuario, setUsuario] = useState("");
    const navigate = useNavigate();

    const handleSair = () => {
        removeAuthToken();
        navigate("/");
    };

    const getUsuario = useCallback(async () => {
        const token = getAuthToken();
        if (!token) {
            navigate("/login");
            return;
        }

        try {
            const response = await api.post('/getuser/', { token });
            if (response.data && response.data.user) {
                setUsuario(response.data.user);
            }
        } catch (error) {
            // Se o token for inválido, redireciona para login
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                removeAuthToken();
                navigate("/login");
            }
        }
    }, [navigate]);

    useEffect(() => {
        getUsuario();
    }, [getUsuario]);

    return (
        <div>
            <GlobalStyle />
            <MainContainer>
                <Headers Title={Flogo} Item1="Sobre" Item2="Contato" Item3="Recarregar" Item4="FAQ" Link1="/faq" Link2="/faq" Link3="/cartoes" Link4="/faq" />
                <HiUser>
                    <UserTitle>Olá, {usuario || "Usuário"}</UserTitle>
                    <Button Text="Sair" onClick={handleSair} />
                </HiUser>
                <CardsContainer>
                    <Card>
                        <FaCreditCard size={100} color="#3A7786" aria-hidden="true" />
                        <CardTitle>Cartões</CardTitle>
                        <CardText>Verifique o saldo de seus cartões e recarregue-os</CardText>
                        <ButtonConteiner>
                            <Button Text="Visualizar" onClick={() => navigate("/cartoes")} />
                        </ButtonConteiner>
                    </Card>
                    <Card>
                        <FaUserEdit size={100} color="#3A7786" aria-hidden="true" />
                        <CardTitle>Conta</CardTitle>
                        <CardText>Edite e visualize as informações do seu perfil</CardText>
                        <ButtonConteiner>
                            <Button Text="Editar Informações" onClick={() => navigate("/editar")} />
                        </ButtonConteiner>
                    </Card>
                    <Card>
                        <FaEnvelope size={100} color="#3A7786" aria-hidden="true" />
                        <CardTitle>Suporte</CardTitle>
                        <CardText>Precisa de ajuda? Nos envie um email!</CardText>
                        <ButtonConteiner>
                            <Button Text="Suporte" onClick={() => navigate("/faq")} />
                        </ButtonConteiner>
                    </Card>
                </CardsContainer>
            </MainContainer>
        </div>
    );
}
