import Header from '../components/Header'

import { useLanguage }
from '../context/LanguageContext'

export default function About() {

  const { language } = useLanguage()

  return (
    <main className='container'>

      <Header
        title={
          language === 'pt'
            ? 'Sobre o Projeto'
            : 'About the Project'
        }

        subtitle={
          language === 'pt'
            ? 'Entenda como funciona a Pokédex'
            : 'Understand how the Pokédex works'
        }
      />

      <section className='details-card'>

        <h2>

          {language === 'pt'
            ? 'O que é este projeto?'
            : 'What is this project?'}

        </h2>

        <p>

          {language === 'pt'
            ? 'Este projeto foi desenvolvido em React utilizando a PokéAPI como fonte de dados.'
            : 'This project was developed in React using PokéAPI as data source.'}

        </p>

        <h2>

          {language === 'pt'
            ? 'Funcionalidades'
            : 'Features'}

        </h2>

        <ul>

          <li>
            {language === 'pt'
              ? 'Busca por nome e número.'
              : 'Search by name and number.'}
          </li>

          <li>
            {language === 'pt'
              ? 'Favoritar Pokémons.'
              : 'Favorite Pokémons.'}
          </li>

          <li>
            {language === 'pt'
              ? 'Pokémon aleatório.'
              : 'Random Pokémon.'}
          </li>

          <li>
            {language === 'pt'
              ? 'Estratégias de batalha.'
              : 'Battle strategies.'}
          </li>

        </ul>

        <h2>

          {language === 'pt'
            ? 'Objetivo'
            : 'Goal'}

        </h2>

        <p>

          {language === 'pt'
            ? 'Demonstrar conceitos de React, UX, acessibilidade e consumo de API.'
            : 'Demonstrate React, UX, accessibility and API consumption concepts.'}

        </p>

      </section>

    </main>
  )
}