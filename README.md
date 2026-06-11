# Pokédex 

Uma aplicação web interativa que reúne os 151 Pokémon da primeira geração em um catálogo digital completo. O projeto permite consultar informações detalhadas, comparar criaturas, simular batalhas e explorar funcionalidades extras, proporcionando uma experiência intuitiva e divertida para fãs da franquia.

## 📖 Sobre o Projeto

O **Pokédex Kanto** foi desenvolvido como trabalho acadêmico da disciplina de **Design de Interação**, aplicando conceitos de usabilidade, acessibilidade e desenvolvimento front-end moderno.

O sistema utiliza dados oficiais da PokéAPI para exibir informações atualizadas sobre os Pokémon da região de Kanto, permitindo que os usuários explorem atributos, comparem personagens e realizem simulações de batalha.

Durante o desenvolvimento foram aplicados princípios de:

* Heurísticas de Nielsen
* Acessibilidade (WCAG)
* Design Responsivo
* Componentização com React
* Internacionalização (i18n)
* Gerenciamento de Estado Global

---

## 🚀 Funcionalidades

### Pokédex

* Listagem dos 151 Pokémon da primeira geração
* Busca por nome ou ID
* Filtros rápidos
* Exibição de cards interativos

### Detalhes do Pokémon

* Imagem oficial
* Número da Pokédex
* Tipos
* Estatísticas base
* Informações detalhadas

### Comparação

* Comparação lado a lado entre dois Pokémon
* Visualização rápida de atributos e diferenças

### Simulação de Batalha

* Escolha de Pokémon para combate
* Cálculo baseado nos atributos oficiais
* Resultado automático da batalha

### Favoritos

* Armazenamento local utilizando LocalStorage
* Lista personalizada de Pokémon favoritos

### Pokémon Aleatório

* Sorteio de um Pokémon aleatório da primeira geração

### Internacionalização

* Português (PT-BR)
* Inglês (EN)

### Temas

* Tema Claro
* Tema Escuro

---

## ❌ Fora do Escopo

* Pokémon de gerações posteriores à primeira
* Sistema de autenticação
* Banco de dados próprio
* Sincronização em nuvem
* Cadastro de usuários

---

## 🖥️ Telas do Sistema

| Tela           | Descrição                         |
| -------------- | --------------------------------- |
| Home           | Listagem principal dos Pokémon    |
| Details        | Informações detalhadas do Pokémon |
| Battle         | Simulação de batalhas             |
| Compare        | Comparação entre Pokémon          |
| Favorites      | Lista de favoritos                |
| Random Pokémon | Sorteio aleatório                 |
| About / Help   | Informações sobre o projeto       |

---

## 🛠️ Tecnologias Utilizadas

### Front-end

* React
* JavaScript
* CSS3
* Vite

### Navegação

* React Router DOM

### Ferramentas

* Git
* GitHub
* Visual Studio Code

### API

* PokéAPI

---

## 🔌 Integração com API

O projeto consome dados da PokéAPI, uma API REST pública especializada no universo Pokémon.

### Base URL

https://pokeapi.co/api/v2/

### Endpoints Utilizados

GET /pokemon/{id}
Retorna dados completos de um Pokémon.

GET /pokemon?limit=151
Retorna a lista dos 151 Pokémon da região de Kanto.

### Autenticação

Não é necessária autenticação ou chave de API.

---

## 🎨 Princípios de Design e Usabilidade

### Heurísticas de Nielsen

* Visibilidade do status do sistema através de indicadores de carregamento.
* Consistência visual em toda a aplicação.
* Design minimalista com foco no conteúdo.
* Controle e liberdade do usuário.
* Navegação intuitiva.

### Acessibilidade (WCAG)

* Navegação completa via teclado.
* Indicadores visuais de foco.
* Contraste adequado entre elementos.
* Estrutura semântica.
* Internacionalização através do atributo `lang`.
* Compatibilidade com leitores de tela.

---

## 📂 Estrutura do Projeto

```text
src/
│
├── components/
│   ├── ErrorMessage
│   ├── Header
│   ├── Loading
│   ├── Menu
│   ├── PokemonCard
│   └── SearchBar
│
├── context/
│   ├── LanguageContext
│   └── ThemeContext
│
├── pages/
│   ├── Home
│   ├── Details
│   ├── Battle
│   ├── Compare
│   ├── Favorites
│   ├── RandomPokemon
│   └── About
│
├── styles/
│   └── style.css
│
├── App.jsx
└── main.jsx
```

---

## ▶️ Como Executar

### Pré-requisitos

* Node.js 18+
* npm

### Instalação

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Acesse a pasta:

```bash
cd kanto-dex
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Abra no navegador:

```text
http://localhost:5173
```

---

## 📌 Observações

* Projeto 100% client-side.
* Não utiliza servidor próprio.
* Não utiliza banco de dados.
* Os favoritos são armazenados localmente utilizando LocalStorage.
* A simulação de batalha é baseada exclusivamente nos atributos retornados pela PokéAPI.
* Desenvolvido exclusivamente para fins acadêmicos.

---

## ⚠️ Aviso Legal

Pokémon é uma marca registrada da Nintendo, Game Freak e The Pokémon Company.

Este projeto foi desenvolvido apenas para fins educacionais e acadêmicos, sem fins lucrativos.

---

## 👥 Participantes

* Carlos Eduardo Viana Pereira — 822157798
* Mariana Lopes Francisco — 824214769
* Laís Felipe Resende — 825136287
* Gustavo de Siqueira Bastos — 823122623
* Leticia Lima — 825238848
* Manuella Alvares Oliveira — 82211607
