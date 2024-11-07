import React from "react";
import Headers from "../../components/Header/Header";
import Flogo from "../../img/FlogoTxt.svg";
import Button from "../../components/Buttons/button";
import axios from "axios";
import { GlobalStyle, MainContainer, FormContainer, FormTitle, FormField, FormLabel, FormInput, ButtonContainer, PasswordInputContainer, TogglePasswordButton } from "./EditStyle";

export default function EditPage() {
    const [userData, setUserData] = React.useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (userData.password !== userData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        const token = document.cookie.split("=")[1];
        axios.post('http://127.0.0.1:8000/updateuser/', { ...userData, token })
            .then(response => {
                console.log("User data updated:", response.data);
                // Handle success (e.g., redirect to another page)
            })
            .catch(error => {
                console.error("Error updating user data:", error);
            });
    }

    function togglePasswordVisibility() {
        setShowPassword(!showPassword);
    }

    function toggleConfirmPasswordVisibility() {
        setShowConfirmPassword(!showConfirmPassword);
    }

    function getUserData() {
        const token = document.cookie.split("=")[1];
        axios.post('http://127.0.0.1:8000/getuser/', { token })
            .then(response => {
                setUserData({
                    ...userData,
                    name: response.data.user,
                    email: response.data.email
                });
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
    }

    React.useEffect(() => {
        getUserData();
    }, []);

    return (
        <div>
            <GlobalStyle /> 
            <MainContainer>
                <Headers Title={Flogo} Item1="Item1" Item2="Item2" Item3="Item3" Item4="Item4" />
                <FormContainer onSubmit={handleSubmit}>
                    <FormTitle>Editar Dados</FormTitle>
                    <FormField>
                        <FormLabel>Nome:</FormLabel>
                        <FormInput type="text" name="name" value={userData.name} onChange={handleInputChange} disabled />
                    </FormField>
                    <FormField>
                        <FormLabel>Email:</FormLabel>
                        <FormInput type="email" name="email" value={userData.email} onChange={handleInputChange} />
                    </FormField>
                    <FormField>
                        <FormLabel>Senha:</FormLabel>
                        <PasswordInputContainer>
                            <FormInput type={showPassword ? "text" : "password"} name="password" value={userData.password} onChange={handleInputChange} />
                            <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
                                {showPassword ? "👁️" : "👁️‍🗨️"}
                            </TogglePasswordButton>
                        </PasswordInputContainer>
                    </FormField>
                    <FormField>
                        <FormLabel>Confirmar Senha:</FormLabel>
                        <PasswordInputContainer>
                            <FormInput type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={userData.confirmPassword} onChange={handleInputChange} />
                            <TogglePasswordButton type="button" onClick={toggleConfirmPasswordVisibility}>
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
