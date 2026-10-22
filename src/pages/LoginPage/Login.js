import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import api from "../../utils/api";
import { setAuthToken } from "../../utils/auth";
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
    const navigate = useNavigate();

    useEffect(() => {
        if (window.location.hash === '#cadastro') {
            setShowCadastro(true);
        }
    }, []);

    const handleCadastrar = async () => {
        if (!username || !password || !cpf || !email) {
            toast.error("Todos os campos são obrigatórios", toastOptions);
            return;
        }

        const data = {
            username,
            password,
            cpf,
            email
        };

        try {
            await api.post('/cadastro/', data);
            toast.success('Cadastro efetuado com sucesso!', toastOptions);
            setShowCadastro(false);
            window.location.hash = '';
        } catch (error) {
            toast.error('Erro na requisição de cadastro.', toastOptions);
        }
    };

    const handleLogar = () => {
        if (!cpf || !password) {
            toast.error("CPF e senha são obrigatórios", toastOptions);
            return;
        }

        const data = {
            cpf,
            password
        };

        toast.promise(
            api.post('/login/', data)
                .then(response => {
                    const token = response.data?.token;
                    if (token) {
                        setAuthToken(token);
                        navigate("/home");
                    } else {
                        throw new Error('Token não retornado pelo servidor.');
                    }
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
        const nextState = !showCadastro;
        setShowCadastro(nextState);
        window.location.hash = nextState ? 'cadastro' : '';
    };

    if (showCadastro) {
        return (
            <div>
                <Toaster />
                <GlobalStyle />
                <MainContainer>
                    <LoginForm onSubmit={(e) => { e.preventDefault(); handleCadastrar(); }}>
                        <Image 
                            src={Flogo} 
                            alt="Logo Fluxo" 
                            onClick={() => navigate("/")} 
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && navigate("/")}
                        />
                        <Input 
                            id="cadastro-username"
                            name="username" 
                            placeholder="Username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                        <Input 
                            id="cadastro-cpf"
                            name="cpf" 
                            placeholder="CPF" 
                            value={cpf} 
                            onChange={(e) => setCpf(e.target.value)} 
                        />
                        <Input 
                            id="cadastro-email"
                            name="email" 
                            type="email"
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <Input 
                            id="cadastro-password"
                            name="password" 
                            placeholder="Senha" 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <ButtonConteiner>
                            <Button Text="Cadastrar" type="submit" onClick={handleCadastrar} />
                            <Button Text="Login" inverted={true} onClick={handleButtonClick} />
                        </ButtonConteiner>
                    </LoginForm>
                    <ImageContainer />
                </MainContainer>
            </div>
        );
    }

    return (
        <div>
            <Toaster />
            <GlobalStyle />
            <MainContainer>
                <LoginForm onSubmit={(e) => { e.preventDefault(); handleLogar(); }}>
                    <Image 
                        src={Flogo} 
                        alt="Logo Fluxo" 
                        onClick={() => navigate("/")} 
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && navigate("/")}
                    />
                    <Input 
                        id="login-cpf"
                        name="cpf" 
                        placeholder="CPF" 
                        value={cpf} 
                        onChange={(e) => setCpf(e.target.value)} 
                    />
                    <Input 
                        id="login-password"
                        name="password" 
                        placeholder="Senha" 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <ForgotPassword href="#esqueceu-senha">Esqueceu a senha?</ForgotPassword>
                    <ButtonConteiner>
                        <Button Text="Login" type="submit" onClick={handleLogar} />
                        <Button Text="Cadastre-se" inverted={true} onClick={handleButtonClick} />
                    </ButtonConteiner>
                </LoginForm>
                <ImageContainer />
            </MainContainer>
        </div>
    );
}
