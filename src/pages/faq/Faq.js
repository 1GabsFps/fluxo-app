import React, { useEffect, useState } from "react";
import axios from "axios";
import { GlobalStyle, MainContainer, FaqTitle, SearchInput, FaqContent, QuestionContainer, QuestionHeader, Question, Answer, ArrowIcon } from "./FaqStyle";

export default function Faq() {
    const [faqData, setFaqData] = useState({});
    const [openQuestions, setOpenQuestions] = useState({});
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

    const toggleQuestion = (index) => {
        setOpenQuestions(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

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
            <MainContainer>
                <FaqTitle>FAQ</FaqTitle>
                <SearchInput 
                    type="text" 
                    placeholder="Search..." 
                    value={searchTerm} 
                    onChange={handleSearch} 
                />
                <FaqContent>
                    {filteredFaqData.map((key, index) => (
                        <QuestionContainer key={index} onClick={() => toggleQuestion(index)}>
                            <QuestionHeader>
                                <Question>{faqData[key].pergunta}</Question>
                                <ArrowIcon isOpen={openQuestions[index]}>▼</ArrowIcon>
                            </QuestionHeader>
                            <Answer isVisible={openQuestions[index]}>{faqData[key].resposta}</Answer>
                        </QuestionContainer>
                    ))}
                </FaqContent>
            </MainContainer>
        </div>
    );
}
