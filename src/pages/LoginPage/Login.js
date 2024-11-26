import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import Input from "../../components/Input/Input";
import { GlobalStyle, MainContainer, LoginForm, ForgotPassword, ButtonConteiner, ImageContainer, Image } from "./LoginStyle";
import Flogo from "../../img/LogoBlue.svg";
import Button from "../../components/Buttons/button";

const toastOptions = {
    style: {
        background: 'black',
        color: 'white',
    },
};

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [cpf, setCpf] = useState("");
    const [showCadastro, setShowCadastro] = useState(false);

    useEffect(() => {
    if (window.location.hash === '#cadastro') {
        setShowCadastro(true);
    }
}, []);

    const HandleCadastrar = () => {
        if (!username || !password || !cpf || !email) {
            toast.error("Todos os campos são obrigatórios", toastOptions);
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
                toast.success('Cadastro efetuado com sucesso!', toastOptions);
                console.log(response.data);
                //Adicionar Notify de cadastro efetuado com sucesso

            })
            .catch(error => {
                toast.error('Erro na requisição de cadastro.', toastOptions);
                console.error("Erro na requisição:", error);
            });
    };

    const HandleLogar = () => {
        if (!cpf || !password) {
            toast.error("CPF e senha são obrigatórios", toastOptions);
            console.error("cpf e senha são obrigatórios");
            return;
        }

        const data = {
            cpf,
            password
        };

        toast.promise(
            axios.post('http://127.0.0.1:8000/login/', data)
                .then(response => {
                    const token = response.data.token;
                    document.cookie = `token=${token}; path=/`;
                    console.log("Token salvo nos cookies:", token);
                        window.location.href = "/home";
                })
                .catch(error => {
                    if (error.response && error.response.status === 404) {
                        throw new Error('CPF ou senha incorretos.');
                    } else {
                        throw new Error('Erro na requisição de login.');
                    }
                }),
            {
                loading: 'Processando login...',
                success: 'Login efetuado com sucesso!',
                error: (err) => err.message,
            },
            toastOptions
        );
    };

    const handleButtonClick = () => {
        setShowCadastro(!showCadastro)
        if (!showCadastro) {
            window.location.hash = 'cadastro';
        } else {
            window.location.hash = '';
        }
    };

    if (showCadastro) {
        return (
            <div>
                <Toaster />
                <GlobalStyle />
                <MainContainer>
                    <LoginForm onSubmit={(e) => e.preventDefault()}>
                    <Image src={Flogo} onClick={() => window.location.href = "/"} />
                    <Input name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <Input name="cpf" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                    <Input name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input name="password" placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <ButtonConteiner>
                        <Button Text="Cadastrar" onClick={HandleCadastrar} />
                        <Button Text="Login" inverted="true" onClick={handleButtonClick}/>
                    </ButtonConteiner>
                    </LoginForm>
                    <ImageContainer>
                    </ImageContainer>
                </MainContainer>
            </div>
        );
    }

    return (
        <div>
            <Toaster />
            <GlobalStyle />
            <MainContainer>
                <LoginForm onSubmit={(e) => e.preventDefault()}>
                <Image src={Flogo} onClick={() => window.location.href = "/"} />
                    <Input name="cpf" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                    <Input name="password" placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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