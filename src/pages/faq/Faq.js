import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Flogo from "../../img/FlogoTxt.svg";
import { GlobalStyle, MainContainer, FaqTitle, SearchInput, FaqContent, QuestionContainer, QuestionHeader, Question, Answer, SearchIcon, SearchInputContainer } from "./FaqStyle";

export default function Faq() {
    const [faqData, setFaqData] = useState({});
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/faq/")
            .then(response => {
                if (response.data && typeof response.data === 'object') {
                    setFaqData(response.data);
                } else {
                    console.error("Unexpected response format:", response.data);
                }
            })
            .catch(error => {
                console.error("Error fetching FAQ data:", error);
            });
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredFaqData = Object.keys(faqData).filter(key => 
        faqData[key].pergunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faqData[key].resposta.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <GlobalStyle />
            <Header Title={Flogo} />
            <MainContainer>
                <FaqTitle>FAQ</FaqTitle>
                <SearchInputContainer>
                <SearchInput 
                    type="text" 
                    placeholder="Pesquisar..." 
                    value={searchTerm} 
                    onChange={handleSearch} 
                />
                <SearchIcon />
                </SearchInputContainer>
                <FaqContent>
                    {filteredFaqData.map((key, index) => (
                        <QuestionContainer key={index}>
                            <QuestionHeader>
                                <Question>{faqData[key].pergunta}</Question>
                            </QuestionHeader>
                            <Answer isVisible={true}>{faqData[key].resposta}</Answer>
                        </QuestionContainer>
                    ))}
                </FaqContent>
            </MainContainer>
        </div>
    );
}