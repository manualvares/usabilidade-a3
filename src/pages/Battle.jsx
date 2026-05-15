import { useState } from 'react'

import Header from '../components/Header'

export default function Battle() {

  const [poke1, setPoke1] = useState('')
  const [poke2, setPoke2] = useState('')
  const [poke3, setPoke3] = useState('')

  const [resultado, setResultado] = useState(null)

  function analisarTime() {

    const pokemons = [
      poke1.toLowerCase(),
      poke2.toLowerCase(),
      poke3.toLowerCase()
    ]

    let estrategia = {
      estilo: '',
      pontosFortes: [],
      fraquezas: [],
      recomendacoes: [],
      estrategiaFinal: ''
    }

    // TIMES OFENSIVOS

    if (
      pokemons.includes('charizard') ||
      pokemons.includes('pikachu') ||
      pokemons.includes('alakazam')
    ) {

      estrategia.estilo =
        'Time ofensivo e veloz.'

      estrategia.pontosFortes.push(
        'Alto dano em pouco tempo.'
      )

      estrategia.pontosFortes.push(
        'Boa pressão ofensiva.'
      )

      estrategia.fraquezas.push(
        'Defesa reduzida contra ataques terrestres.'
      )

      estrategia.recomendacoes.push(
        'Utilize golpes rápidos para eliminar ameaças antes que reajam.'
      )

      estrategia.recomendacoes.push(
        'Charizard funciona melhor longe de Pokémon elétricos.'
      )

      estrategia.estrategiaFinal =
        'O ideal é iniciar a batalha pressionando o adversário rapidamente e evitar confrontos longos.'
    }

    // TIMES DEFENSIVOS

    else if (
      pokemons.includes('snorlax') ||
      pokemons.includes('blastoise') ||
      pokemons.includes('onix')
    ) {

      estrategia.estilo =
        'Time defensivo e resistente.'

      estrategia.pontosFortes.push(
        'Grande capacidade de sobrevivência.'
      )

      estrategia.pontosFortes.push(
        'Boa resistência física.'
      )

      estrategia.fraquezas.push(
        'Velocidade reduzida.'
      )

      estrategia.recomendacoes.push(
        'Utilize Pokémon resistentes para desgastar o inimigo.'
      )

      estrategia.recomendacoes.push(
        'Blastoise pode proteger o time contra ataques de fogo.'
      )

      estrategia.estrategiaFinal =
        'Seu time funciona melhor em batalhas longas, controlando o ritmo do combate.'
    }

    // TIMES EQUILIBRADOS

    else {

      estrategia.estilo =
        'Time equilibrado.'

      estrategia.pontosFortes.push(
        'Boa variedade de ataques.'
      )

      estrategia.pontosFortes.push(
        'Cobertura razoável contra diferentes tipos.'
      )

      estrategia.fraquezas.push(
        'Pode sofrer contra especialistas em velocidade.'
      )

      estrategia.recomendacoes.push(
        'Misture ataques ofensivos e defensivos.'
      )

      estrategia.recomendacoes.push(
        'Adicionar um Pokémon elétrico aumentaria a cobertura do time.'
      )

      estrategia.estrategiaFinal =
        'Seu time possui boa adaptação e funciona melhor alternando entre ataque e defesa.'
    }

    // ANÁLISE INDIVIDUAL

    const analiseIndividual = []

    if (pokemons.includes('pikachu')) {
      analiseIndividual.push(
        'Pikachu é extremamente rápido e ótimo contra tipos água.'
      )
    }

    if (pokemons.includes('charizard')) {
      analiseIndividual.push(
        'Charizard possui excelente poder ofensivo aéreo, mas cuidado com ataques pedra.'
      )
    }

    if (pokemons.includes('venusaur')) {
      analiseIndividual.push(
        'Venusaur ajuda muito no controle de status e recuperação.'
      )
    }

    if (pokemons.includes('gengar')) {
      analiseIndividual.push(
        'Gengar é eficiente para surpreender inimigos com ataques fantasma.'
      )
    }

    estrategia.analiseIndividual =
      analiseIndividual

    setResultado(estrategia)
  }

  return (
    <main className='container'>

      <Header
        title='Battle Center'
        subtitle='Monte estratégias inteligentes para batalha'
      />

      <section className='battle-box'>

        <h2>
          Monte seu time
        </h2>

        <div className='inputs'>

          <input
            type='text'
            placeholder='Pokémon 1'
            value={poke1}
            onChange={(e) => setPoke1(e.target.value)}
          />

          <input
            type='text'
            placeholder='Pokémon 2'
            value={poke2}
            onChange={(e) => setPoke2(e.target.value)}
          />

          <input
            type='text'
            placeholder='Pokémon 3'
            value={poke3}
            onChange={(e) => setPoke3(e.target.value)}
          />

        </div>

        <button
          onClick={analisarTime}
          aria-label='Analisar estratégia do time'
        >
          Analisar Estratégia
        </button>

      </section>

      {resultado && (

        <section
          className='resultado detalhado'
          aria-live='polite'
        >

          <h2>
            Estilo do Time
          </h2>

          <p>
            {resultado.estilo}
          </p>

          <h2>
            Pontos Fortes
          </h2>

          <ul>

            {resultado.pontosFortes.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}

          </ul>

          <h2>
            Fraquezas
          </h2>

          <ul>

            {resultado.fraquezas.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}

          </ul>

          <h2>
            Recomendações Estratégicas
          </h2>

          <ul>

            {resultado.recomendacoes.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}

          </ul>

          <h2>
            Análise Individual
          </h2>

          <ul>

            {resultado.analiseIndividual.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}

          </ul>

          <h2>
            Estratégia Final
          </h2>

          <p>
            {resultado.estrategiaFinal}
          </p>

        </section>

      )}

    </main>
  )
}