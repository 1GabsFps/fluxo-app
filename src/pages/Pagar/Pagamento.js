import React, { useState, useEffect } from "react";
import Headers from "../../components/Header/Header";
import Flogo from "../../img/LogoBlue.svg";
import logotxt from "../../img/FlogoTxt.svg";
import Button from "../../components/Buttons/button";
import Input from "../../components/Input/Input";
import { GlobalStyle, MainContainer, HeaderContainer, FormPagamento, Image, Title, InputsConteiner } from "./PagamentoStyle";

export default function Pagamento() {
    const [quantia, setQuantia] = useState("");
    const [preferenceId, setPreferenceId] = useState(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://sdk.mercadopago.com/js/v2";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    const handlePagamento = async (event) => {
        event.preventDefault(); // Prevent the default form submission

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
                    "Authorization": `Bearer TEST-5462818721115165-090312-c154f5048e76cc504e0d051206edb322-236803241`
                },
                body: JSON.stringify(preference)
            });

            const data = await response.json();
            setPreferenceId(data.id);

            const mp = new window.MercadoPago("TEST-180d8563-7589-4864-8447-bde13096c8ef", {
                locale: "pt-BR"
            });

            mp.checkout({
                preference: {
                    id: data.id
                },
                autoOpen: true
            });

            // Listen for the payment result
            window.addEventListener("message", async (event) => {
                if (event.data.type === "checkout_closed") {
                    const paymentStatus = event.data.result.status;
                    const paymentAmount = quantia;

                    // print payment status, amount, and card ID
                    console.log("Payment status:", paymentStatus);
                    console.log("Payment amount:", paymentAmount);

                }
            });
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
            </MainContainer>
        </div>
    );
}
