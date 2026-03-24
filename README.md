# ⚡ Pokédex - Iteradores JavaScript & PokeAPI

Uma aplicação web interativa desenvolvida em JavaScript puro (Vanilla JS) para consumir dados da [PokeAPI](https://pokeapi.co/). O projeto funciona como uma Pokédex virtual, permitindo a busca, filtragem e visualização de detalhes dos Pokémon.

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido como atividade prática para o curso de Sistemas para Internet no Senac, com o objetivo de demonstrar o domínio sobre métodos de iteração de arrays no JavaScript, consumo de APIs RESTful assíncronas e manipulação dinâmica da interface do usuário (DOM).

## ✨ Funcionalidades

* **Listagem Dinâmica:** Carregamento inicial de 50 Pokémon com suas respectivas imagens, números e tipos.
* **Sistema de Busca:** Filtro em tempo real pelo nome do Pokémon.
* **Filtros por Tipo:** Botões interativos para isolar Pokémon por elementos (Fogo, Água, Grama, etc.).
* **Cálculo de Status:** Somatório dinâmico do poder total (experiência base) dos Pokémon exibidos na tela.
* **Detalhes sob Demanda:** Exibição de informações extras (peso e altura) ao clicar no card de um Pokémon.
* **Tratamento de Estados (UI/UX):** Feedback visual claro para carregamento (loading), ausência de resultados e falhas de conexão com a API.

## 🛠️ Tecnologias e Conceitos Utilizados

* **HTML5 & CSS3:** Semântica, uso de variáveis CSS e layout responsivo com CSS Grid.
* **JavaScript (ES6+):** * `async/await` e `fetch` para requisições HTTP e tratamento de `Promises`.
  * `try/catch` para interceptação e tratamento de erros.
* **Iteradores JavaScript Explorados:**
  * `map()`: Para transformar respostas da API em elementos HTML na tela.
  * `filter()`: Para o motor de busca textual e separação de categorias.
  * `some()`: Utilizado em conjunto com o filter para varrer arrays internos (tipos do Pokémon).
  * `reduce()`: Para o processamento matemático do "Poder Total" da lista atual.
  * `find()`: Para localizar o objeto exato correspondente ao card clicado pelo usuário e exibir seus detalhes.

## 🚀 Como executar o projeto localmente

1. Clone este repositório:
   ```bash
   git clone [https://github.com/SEU_USUARIO/NOME_DO_REPO.git](https://github.com/SEU_USUARIO/NOME_DO_REPO.git)
