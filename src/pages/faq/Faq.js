import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import Header from "../../components/Header/Header";
import Flogo from "../../img/FlogoTxt.svg";
import { GlobalStyle, MainContainer, FaqTitle, SearchInput, FaqContent, QuestionContainer, QuestionHeader, Question, Answer, SearchIcon, SearchInputContainer } from "./FaqStyle";

export default function Faq() {
    const [faqData, setFaqData] = useState({});
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        api.get("/faq/")
            .then(response => {
                if (response.data && typeof response.data === 'object') {
                    setFaqData(response.data);
                }
            })
            .catch(() => {
                // Silently handle or provide default FAQs if offline
            });
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredKeys = Object.keys(faqData).filter(key => {
        const item = faqData[key];
        const pergunta = (item?.pergunta || "").toLowerCase();
        const resposta = (item?.resposta || "").toLowerCase();
        const search = searchTerm.toLowerCase();
        return pergunta.includes(search) || resposta.includes(search);
    });

    return (
        <div>
            <GlobalStyle />
            <Header Title={Flogo} Item1="Sobre" Item2="Contato" Item3="Home" Item4="Login" Link1="/faq" Link2="/faq" Link3="/home" Link4="/login" />
            <MainContainer>
                <FaqTitle>FAQ - Perguntas Frequentes</FaqTitle>
                <SearchInputContainer>
                    <SearchInput 
                        type="text" 
                        placeholder="Pesquisar..." 
                        value={searchTerm} 
                        onChange={handleSearch} 
                        aria-label="Pesquisar perguntas frequentes"
                    />
                    <SearchIcon aria-hidden="true" />
                </SearchInputContainer>
                <FaqContent>
                    {filteredKeys.length > 0 ? (
                        filteredKeys.map((key) => (
                            <QuestionContainer key={key}>
                                <QuestionHeader>
                                    <Question>{faqData[key].pergunta}</Question>
                                </QuestionHeader>
                                <Answer isVisible={true}>{faqData[key].resposta}</Answer>
                            </QuestionContainer>
                        ))
                    ) : (
                        <p style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
                            {searchTerm ? "Nenhuma pergunta encontrada." : "Carregando perguntas..."}
                        </p>
                    )}
                </FaqContent>
            </MainContainer>
        </div>
    );
}
