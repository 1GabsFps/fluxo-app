import React, { useState, useEffect } from "react";
import Headers from "../../components/Header/Header";
import Flogo from "../../img/LogoBlue.svg";
import logotxt from "../../img/FlogoTxt.svg";
import Button from "../../components/Buttons/button";
import Input from "../../components/Input/Input";
import { GlobalStyle, MainContainer, HeaderContainer, FormPagamento, Image, Title, InputsConteiner } from "./PagamentoStyle";

export default function Pagamento() {
    const [quantia, setQuantia] = useState("");
    const [preferenceId, setPreferenceId] = useState("");
    const [paymentStatus, setPaymentStatus] = useState(null);
    const token = "TEST-5462818721115165-090312-c154f5048e76cc504e0d051206edb322-236803241";

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://sdk.mercadopago.com/js/v2";
        script.async = true;

        script.onload = () => {
            console.log("MercadoPago script carregado com sucesso");
        };

        script.onerror = () => {
            console.error("Erro ao carregar o script do MercadoPago");
        };

        document.body.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    const handlePagamento = async (event) => {
        event.preventDefault(); // Evita o envio padrão do formulário

        try {
            const preference = {
                items: [
                    {
                        title: "Descrição da compra",
                        unit_price: parseFloat(quantia),
                        quantity: 1
                    }
                ]
            };

            const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(preference)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Erro HTTP! status: ${response.status}, mensagem: ${errorData.message}`);
            }

            const data = await response.json();
            setPreferenceId(data.id);

            const iframe = document.createElement("iframe");
            iframe.src = `https://mercadopago.com.br/checkout/v1/modal?preference-id=${data.id}&from-widget=true`;
            iframe.width = "100%";
            iframe.height = "100%";
            iframe.style = "z-index:1;display:block;position:fixed;left:0;top:0;";
            iframe.frameBorder = "0";
            iframe.transition = "height 2s ease";

            const closeButton = document.createElement("button");
            closeButton.innerText = "Fechar";
            closeButton.style = `
                position: fixed;
                top: 10px;
                right: 10px;
                z-index: 2;
                background-color: #007bff;
                color: white;
                border: none;
                padding: 10px 20px;
                cursor: pointer;
                border-radius: 5px;
                font-size: 16px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                transition: background-color 0.3s ease;
            `;

            closeButton.onmouseover = () => {
                closeButton.style.backgroundColor = "#0056b3";
            };

            closeButton.onmouseout = () => {
                closeButton.style.backgroundColor = "#007bff";
            };
            closeButton.onclick = () => {
                if (document.body.contains(iframe)) {
                    document.body.removeChild(iframe);
                }
                if (document.body.contains(closeButton)) {
                    document.body.removeChild(closeButton);
                }
            };

            document.body.appendChild(iframe);
            document.body.appendChild(closeButton);

            const handleVisibilityChange = async () => {
                if (document.visibilityState === "visible") {
                    try {
                        console.log("Verificando status do pagamento...");
                        const statusResponse = await fetch(`https://api.mercadopago.com/checkout/preferences/${preferenceId}`, {
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${token}`
                            }
                        });

                        if (!statusResponse.ok) {
                            throw new Error(`Erro HTTP! status: ${statusResponse.status}`);
                        }

                        const statusData = await statusResponse.json();
                        const paymentAmount = statusData.items[0].unit_price;
                        const fetchedPaymentStatus = statusData.status;

                        console.log(`Status do pagamento: ${fetchedPaymentStatus}`);
                        setPaymentStatus(fetchedPaymentStatus);

                        if (fetchedPaymentStatus === "approved") {
                            console.log("Transação aprovada, enviando dados para a API...");
                            const apiResponse = await fetch("http://127.0.0.1:8000/recarregar/", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    valor: paymentAmount,
                                    status: fetchedPaymentStatus,
                                    token: document.cookie.split("=")[1],
                                    cartao_id: localStorage.getItem("cartao_id")
                                }),
                                mode: 'cors'
                            });

                            if (!apiResponse.ok) {
                                throw new Error(`Erro HTTP! status: ${apiResponse.status}`);
                            }

                            const apiData = await apiResponse.json();
                            console.log("Resposta da API:", apiData);
                        } else {
                            console.log("Transação não aprovada");
                        }
                    } catch (apiError) {
                        console.error("Erro ao enviar dados para a API:", apiError);
                    } finally {
                        // Fechar o iframe após verificar o status
                        if (document.body.contains(iframe)) {
                            document.body.removeChild(iframe);
                        }
                        if (document.body.contains(closeButton)) {
                            document.body.removeChild(closeButton);
                        }
                    }
                }
            };

            document.addEventListener("visibilitychange", handleVisibilityChange);

        } catch (error) {
            console.error("Error processing payment:", error);
        }
    };

    return (
        <div>
            <GlobalStyle />
            <MainContainer>
                <HeaderContainer>
                    <Headers Title={logotxt} Item1="Item1" Item2="Item2" Item3="Item3" Item4="Item4" />
                </HeaderContainer>
                <FormPagamento onSubmit={handlePagamento}>
                    <InputsConteiner>
                        <Title>Pagamento</Title>
                        <Input type="text" placeholder="Quantia" value={quantia} onChange={(e) => setQuantia(e.target.value)} />
                        <Button type="submit" Text="Pagar" />
                    </InputsConteiner>
                    <div className="cho-container"></div>
                    <div>
                        <Image src={Flogo} alt="Flogo" />
                    </div>
                </FormPagamento>
                {paymentStatus && (
                    <div>
                        <p>Status do pagamento: {paymentStatus}</p>
                    </div>
                )}
            </MainContainer>
        </div>
    );
}