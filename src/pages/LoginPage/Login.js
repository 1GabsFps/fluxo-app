import React, { useState } from "react";
import axios from "axios";
import Input from "../../components/Input/Input";
import { GlobalStyle, MainContainer, LoginForm, ForgotPassword, ButtonConteiner, ImageContainer } from "./LoginStyle";
import Button from "../../components/Buttons/button";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [cpf, setCpf] = useState("");
    const [showCadastro, setShowCadastro] = useState(false);

    const HandleCadastrar = () => {
        if (!username || !password || !cpf || !email) {
            console.error("Todos os campos são obrigatórios");
            return;
        }

        const data = {
            username,
            password,
            cpf,
            email
        };
        console.log("Dados enviados para cadastro:", data);

        axios.post('http://127.0.0.1:8000/cadastro/', data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error("Erro na requisição:", error);
            });
    };

    const HandleLogar = () => {
        if (!email || !password) {
            console.error("Email e senha são obrigatórios");
            return;
        }

        const data = {
            email,
            password
        };
        console.log("Dados enviados para login:", data);

        axios.post('http://127.0.0.1:8000/', data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error("Erro na requisição:", error);
            });
    };

    const handleButtonClick = () => {
        setShowCadastro(true);
    };

    if (showCadastro) {
        return (
            <div>
                <GlobalStyle />
                <MainContainer>
                    <LoginForm onSubmit={(e) => e.preventDefault()}>
                        <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <Input placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <ButtonConteiner>
                            <Button Text="Cadastrar" onClick={HandleCadastrar} />
                        </ButtonConteiner>
                    </LoginForm>
                </MainContainer>
            </div>
        );
    }

    return (
        <div>
            <GlobalStyle />
            <MainContainer>
                <LoginForm onSubmit={(e) => e.preventDefault()}>
                    <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <ForgotPassword>Esqueceu a senha?</ForgotPassword>
                    <ButtonConteiner>
                        <Button Text="Login" onClick={HandleLogar} />
                        <Button Text="Cadastre-se" inverted='true' onClick={handleButtonClick} />
                    </ButtonConteiner>
                </LoginForm>
                <ImageContainer>
                </ImageContainer>
            </MainContainer>
        </div>
    );
}