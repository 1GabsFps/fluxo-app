# Documentação Técnica Fluxo

# **Introdução**

## Contextualização do Tema

O projeto visa modernizar o sistema de pagamento do transporte público de Jundiaí, atualmente defasado e gerador de transtornos aos usuários. A dependência de dinheiro em espécie e a dificuldade para recarregar os cartões impactam negativamente a experiência dos passageiros, demandando por soluções mais eficientes e convenientes.

## Objetivos

### Objetivos - Geral

- Modernizar o sistema de pagamento do transporte público de Jundiaí, tornando-o mais prático, acessível e integrado à realidade dos usuários.

### Objetivos - Específicos

- Implementar um sistema online e um aplicativo mobile intuitivo para recarga de créditos.
- Diversificar as opções de pagamento, incluindo Pix, cartões de crédito/débito e carteiras digitais.
- Permitir o acompanhamento do histórico de recargas e saldo em tempo real.
- Aprimorar a comunicação com o usuário, disponibilizando informações claras sobre tarifas, itinerários e horários dos ônibus.
- Integrar o sistema com outras plataformas de mobilidade urbana, como aplicativos de transporte privado e compartilhamento de bicicletas.

## Justificativa

A modernização do sistema de pagamento do transporte público de Jundiaí se justifica por diversos fatores, entre eles:

- **Melhoria da experiência do usuário:** A praticidade e a conveniência de um sistema moderno e integrado otimizam o tempo dos passageiros e reduzem o estresse associado ao pagamento da tarifa.
- **Aumento da eficiência operacional:** A redução do uso de dinheiro em espécie diminui os custos com manuseio, segurança e logística, além de agilizar o processo de embarque nos ônibus.
- **Promoção da inclusão social:** A diversificação das formas de pagamento, incluindo opções digitais, facilita o acesso ao transporte público para diferentes camadas da população.
- **Sustentabilidade:** A digitalização do sistema contribui para a redução do uso de papel e a otimização dos recursos, impactando positivamente o meio ambiente.

## Metodologia

### Gerenciamento de Projeto

- Utilização de metodologias ágeis: **Sprint** e **Scrum**.

### Tecnologias Utilizadas

- **Linguagens de Programação:** Python e JavaScript.
- **Linguagens de Marcação:** HTML e CSS.
- **Frameworks e Bibliotecas:** Django, React, Axios, Request.
- **APIs:** API de pagamentos do Mercado Pago.

# **Desenvolvimento**

## Levantamento de Requisitos

### Requisitos Funcionais

#### RF 1: Criação, Acesso e Recuperação de Conta
- **Descrição:** É necessário que o usuário possa criar, entrar e recuperar sua conta.
- **Prioridade:** Alta.

#### RF 2: Recarga de Cartão
- **Descrição:** O usuário cadastrado deve poder recarregar o saldo do seu cartão pelo aplicativo.
- **Prioridade:** Alta.

#### RF 3: Visualização de Saldo
- **Descrição:** O usuário deve poder visualizar o saldo dos cartões que ele possui.
- **Prioridade:** Média.

#### RF 4: FAQ
- **Descrição:** O usuário deve poder visualizar o FAQ.
- **Prioridade:** Baixa.

#### RF 5: Renovação de Cartão
- **Descrição:** O usuário deve conseguir renovar o cartão, tanto online quanto presencialmente.
- **Prioridade:** Média/Alta.

#### RF 6: Cartão Virtual (NFC)
- **Descrição:** Funcionalidade de utilizar o celular como meio de pagamento para comprar passagens.
- **Prioridade:** Baixa.

### Requisitos Não Funcionais

#### RNF 1: Usabilidade
- **Descrição:** A interface do usuário precisa ser intuitiva e dinâmica, dentro das diretrizes de design de interface modernas.
- **Prioridade:** Alta.

#### RNF 2: Manutenção
- **Descrição:** 
    - O código precisa seguir boas práticas de desenvolvimento e ser documentado para facilitar a manutenção e a adição de novas atualizações.
    - O sistema deve ser modular, permitindo que componentes individuais sejam atualizados ou substituídos sem interferência no restante do sistema.
- **Prioridade:** Alta.

#### RNF 3: Legalidade
- **Descrição:** 
    - O sistema deve seguir as leis e regulamentos locais, como a Lei Geral de Proteção de Dados (LGPD) no Brasil.
    - Os dados dos usuários precisam ser manipulados de acordo com as diretrizes de privacidade e segurança de dados.
- **Prioridade:** Alta.

#### RNF 4: Suporte e Documentação
- **Descrição:** 
    - Precisa haver suporte disponível a todos os usuários do sistema.
    - A documentação precisa ser clara, incluindo guias para o usuário, FAQs e documentação técnica para outros desenvolvedores.
- **Prioridade:** Média.

# **Diagrama**

## Diagrama de Classes

[Diagrama de Classes](https://drive.google.com/file/d/1kqC3u1YoTd-ML-9PYeC4I-QJPEY1KKf4/view?usp=sharing)

# **Resultados e Discussão**

- **Resultados Obtidos:** Apresentar os resultados alcançados com o desenvolvimento do sistema.
- **Análise Crítica:** Analisar os resultados, comparando com os objetivos estabelecidos inicialmente.
- **Limitações:** Discutir as limitações do trabalho e possíveis melhorias futuras.

# **Conclusão**

- **Síntese dos Resultados:** Resumir os principais resultados obtidos.
- **Contribuições do Trabalho:** Destacar as contribuições para a área de estudo.
- **Sugestões para Trabalhos Futuros:** Apontar possíveis continuidades ou aprofundamentos para futuras pesquisas.

# **Referências**

- **Citação das Fontes:** Listar todas as fontes bibliográficas utilizadas no trabalho.

## Desenvolvedores

<div align="center">
    <table>
    <tr>
        <td align="center" >
        <a href="https://github.com/diegorkkj">
            <img src="https://avatars.githubusercontent.com/diegorkkj" width="115px;" alt="Foto_Diego"/><br>
            <sub>
            <b>Diego</b>
            </sub>
        </a>
        </td>
        <td align="center">
        <a href="https://github.com/1GabsFps">
            <img src="https://avatars.githubusercontent.com/1GabsFps" width="115px;" alt="Foto_Gabriel"/><br>
            <sub>
            <b>Gabriel Neco</b>
            </sub>
        </a>
        </td>
        <td align="center">
        <a href="https://github.com/Vitrolaaotn">
            <img src="https://avatars.githubusercontent.com/Vitrolaaotn" width="115px;" alt="Foto_Alexandre"/><br>
            <sub>
            <b>Alexandre</b>
            </sub>
        </a>
        </td>
        <td align="center">
        <a href="https://github.com/s4muraii">
            <img src="https://avatars.githubusercontent.com/s4muraii" width="115px;" alt="Foto_Vinicius"/><br>
            <sub>
            <b>Vinicius Moura</b>
            </sub>
        </a>
        </td>
        <td align="center">
        <a href="https://github.com/japiinhaa">
            <img src="https://avatars.githubusercontent.com/Japiinhaa" width="115px;" alt="Foto_Vitor"/><br>
            <sub>
            <b>Vitor</b>
            </sub>
        </a>
        </td>
        <td align="center">
        <a href="https://github.com/pablo11-dev">
            <img src="https://avatars.githubusercontent.com/pablo11-dev" width="115px;" alt="Foto_Pablo"/><br>
            <sub>
            <b>Pablo</b>
            </sub>
        </a>
        </td>
    </tr>
    </table>
</div>

