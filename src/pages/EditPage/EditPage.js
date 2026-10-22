import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Headers from "../../components/Header/Header";
import Flogo from "../../img/FlogoTxt.svg";
import Button from "../../components/Buttons/button";
import api from "../../utils/api";
import { getAuthToken } from "../../utils/auth";
import { GlobalStyle, MainContainer, FormContainer, FormTitle, FormField, FormLabel, FormInput, ButtonContainer, PasswordInputContainer, TogglePasswordButton } from "./EditStyle";

const toastOptions = {
    style: {
        background: 'black',
        color: 'white',
    },
};

export default function EditPage() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userData.password && userData.password !== userData.confirmPassword) {
            toast.error("As senhas não coincidem!", toastOptions);
            return;
        }
        const token = getAuthToken();
        if (!token) {
            navigate("/login");
            return;
        }

        try {
            await api.post('/updateuser/', { ...userData, token });
            toast.success("Dados atualizados com sucesso!", toastOptions);
        } catch (error) {
            toast.error("Erro ao atualizar dados do usuário.", toastOptions);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(prev => !prev);
    };

    const getUserData = useCallback(async () => {
        const token = getAuthToken();
        if (!token) {
            navigate("/login");
            return;
        }
        try {
            const response = await api.post('/getuser/', { token });
            if (response.data) {
                setUserData(prev => ({
                    ...prev,
                    name: response.data.user || "",
                    email: response.data.email || ""
                }));
            }
        } catch (error) {
            toast.error("Erro ao carregar dados do usuário.", toastOptions);
        }
    }, [navigate]);

    useEffect(() => {
        getUserData();
    }, [getUserData]);

    return (
        <div>
            <Toaster />
            <GlobalStyle /> 
            <MainContainer>
                <Headers Title={Flogo} Item1="Sobre" Item2="Contato" Item3="Home" Item4="FAQ" Link1="/faq" Link2="/faq" Link3="/home" Link4="/faq" />
                <FormContainer onSubmit={handleSubmit}>
                    <FormTitle>Editar Dados</FormTitle>
                    <FormField>
                        <FormLabel htmlFor="edit-name">Nome:</FormLabel>
                        <FormInput id="edit-name" type="text" name="name" value={userData.name} onChange={handleInputChange} disabled />
                    </FormField>
                    <FormField>
                        <FormLabel htmlFor="edit-email">Email:</FormLabel>
                        <FormInput id="edit-email" type="email" name="email" value={userData.email} onChange={handleInputChange} />
                    </FormField>
                    <FormField>
                        <FormLabel htmlFor="edit-password">Nova Senha:</FormLabel>
                        <PasswordInputContainer>
                            <FormInput id="edit-password" type={showPassword ? "text" : "password"} name="password" value={userData.password} onChange={handleInputChange} />
                            <TogglePasswordButton type="button" aria-label={showPassword ? "Ocultar senha" : "Exibir senha"} onClick={togglePasswordVisibility}>
                                {showPassword ? "👁️" : "👁️‍🗨️"}
                            </TogglePasswordButton>
                        </PasswordInputContainer>
                    </FormField>
                    <FormField>
                        <FormLabel htmlFor="edit-confirm-password">Confirmar Nova Senha:</FormLabel>
                        <PasswordInputContainer>
                            <FormInput id="edit-confirm-password" type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={userData.confirmPassword} onChange={handleInputChange} />
                            <TogglePasswordButton type="button" aria-label={showConfirmPassword ? "Ocultar confirmação de senha" : "Exibir confirmação de senha"} onClick={toggleConfirmPasswordVisibility}>
                                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                            </TogglePasswordButton>
                        </PasswordInputContainer>
                    </FormField>
                    <ButtonContainer>
                        <Button Text="Salvar" type="submit" />
                    </ButtonContainer>
                </FormContainer>
            </MainContainer>    
        </div>
    );
}
