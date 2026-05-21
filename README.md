Pokémon UX Pokédex

1. Visão geral do projeto
O Pokémon UX Pokédex é uma aplicação desenvolvida em React com foco em usabilidade, acessibilidade e experiência do usuário.
O sistema permite pesquisar Pokémons da primeira geração utilizando a PokéAPI, exibindo informações detalhadas, estratégias de batalha e funcionalidades interativas.

O projeto foi criado com objetivo acadêmico para aplicar conceitos de:

React
Consumo de API
UX/UI
Heurísticas de Nielsen
Acessibilidade WCAG


2. Escopo da aplicação
Funcionalidades principais

Listagem dos 151 Pokémons iniciais
Busca por nome e número
Página de detalhes
Sistema de favoritos
Pokémon aleatório
Comparação entre Pokémons
Centro de batalha com estratégias
Tradução PT-BR / EN
Tema claro e escuro
Responsividade


Telas do sistema

Tela Função

Home Listagem e busca
Details Informações do Pokémon
Battle Estratégias de batalha
Favorites Pokémons favoritados
Random Pokémon aleatório
Compare Comparação
About Informações e ajuda

3. Tecnologias e dependências

Stack utilizada
React
Vite
JavaScript
CSS3

Bibliotecas principais
React Router DOM


Ferramentas utilizadas
VS Code
Git
GitHub

Estrutura da aplicação
Frontend React
API externa PokéAPI
Sem backend próprio
Sem banco de dados

4. Como executar o projeto localmente
Requisitos

Node.js 18 ou superior
npm

Instalar dependências
npm install

Executar o projeto
npm run dev

5. Integração com API ou dados externos

API utilizada
PokéAPI
[PokéAPI Oficial](https://pokeapi.co/?utm_source=chatgpt.com)

Endpoint principal
https://pokeapi.co/api/v2/pokemon
Dados consumidos

Nome
Número
Tipos
Sprites
Stats
Habilidades
Autenticação

A API não necessita token ou autenticação.

6. Estrutura do projeto
src
 ├── components
 ├── context
 ├── pages
 ├── styles
 ├── App.jsx
 └── main.jsx

Organização
components → componentes reutilizáveis
pages → páginas do sistema
context → gerenciamento de tema e idioma
styles → estilização global
App.jsx → rotas da aplicação
main.jsx → inicialização do React
