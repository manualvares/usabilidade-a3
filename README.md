Pokedex
> Catálogo interativo dos 151 Pokémon da primeira geração, com consulta de stats, comparação entre criaturas e simulação de batalhas.
> 
1. Sobre o projeto
O Pokedex é um catálogo digital focado nos 151 Pokémon originários de Kanto. O objetivo é permitir que qualquer pessoa consulte os atributos de cada criatura, compare dois Pokémon lado a lado e simule batalhas com base nos dados oficiais disponibilizados pela API.
O projeto foi desenvolvido como trabalho académico de Design de Interação, aplicando conceitos de usabilidade (Heurísticas de Nielsen), acessibilidade (WCAG) e componentização com React.
2. Escopo e funcionalidades
O que o sistema faz:
Lista os 151 Pokémon da 1ª geração, com busca por nome ou ID
Exibe uma página de detalhes (tipo e stats base)
Compara dois Pokémon lado a lado
Simula batalhas com base nos atributos de cada criatura
Permite salvar favoritos localmente (localStorage)
Sorteia um Pokémon aleatório
Alterna entre Português (PT-BR) e Inglês (EN)
Alterna entre tema claro e escuro
Fora do escopo:
Gerações além da primeira
Conta de utilizador ou sincronização em nuvem
Telas do sistema
Tela	Descrição
Pokédex	Listagem principal com filtros, busca por nome/ID e cards dos Pokémon.
Batalha	Simulação de combate baseada nos atributos das criaturas.
Favoritos	Lista de Pokémon favoritados localmente.
Aleatório	Sorteio e exibição de um Pokémon de forma aleatória.
Comparar	Comparação detalhada lado a lado entre dois Pokémon.
Help	Secção informativa sobre o projeto e decisões de implementação.
3. Tecnologias utilizadas
Framework: React (JavaScript)
Bundler: Vite
Roteamento: React Router DOM
Estilização: CSS3 com Custom Properties (sem biblioteca externa)
Controle de versão: Git / GitHub
Editor: VS Code
4. Integrações externas / API
O projeto consome a PokéAPI, uma API pública REST com dados completos dos Pokémon.
Base URL: https://pokeapi.co/api/v2/
Endpoints utilizados:
`GET /pokemon/{id}` — dados completos (stats, tipos, sprites)
`GET /pokemon?limit=151` — listagem dos 151 Pokémon de Kanto
Autenticação: não exigida
Chave de API: não necessária
5. Como executar
Pré-requisitos: Node.js 18+ e npm
Clone o repositório:
```bash
git clone URL_DO_REPOSITORIO
```
Aceda à pasta do projeto:
```bash
cd kanto-dex
```
Instale as dependências:
```bash
npm install
```
Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
Abra o navegador em:
http://localhost:5173/
6. Estrutura do projeto
Diretório principal `src/`:
`components/`: componentes reutilizáveis (ex.: ErrorMessage, Header, Loading, Menu, PokemonCard, SearchBar)
`context/`: estados globais (ex.: LanguageContext, ThemeContext)
`pages/`: telas (ex.: About, Battle, Compare, Details, Favorites, Home, RandomPokemon)
`styles/`: estilos e variáveis CSS (ex.: `style.css`)
`App.jsx`: configuração do React Router
`main.jsx`: ponto de entrada do React + Vite
7. Observações finais
Projeto 100% client-side: não há servidor local nem base de dados.
Favoritos persistem no `localStorage` do navegador.
A simulação de batalha é baseada unicamente nos dados numéricos fornecidos pela PokéAPI.
Desenvolvido exclusivamente para fins académicos. Pokémon é propriedade da Nintendo / Game Freak.
