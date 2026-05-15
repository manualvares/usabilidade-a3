import { useState } from 'react'

import Header from '../components/Header'

export default function Battle() {

  const [poke1, setPoke1] = useState('')
  const [poke2, setPoke2] = useState('')
  const [poke3, setPoke3] = useState('')

  const [resultado, setResultado] = useState('')

  function analisarTime() {

    const estrategias = [

      `Seu time possui boa cobertura ofensiva.
      ${poke1 || 'Pokémon 1'} poderia ser substituído por Gyarados
      para melhorar batalhas contra tipos fogo e terra.`,

      `Seu time parece equilibrado.
      ${poke2 || 'Pokémon 2'} seria mais eficiente se fosse trocado
      por Alakazam devido à alta velocidade e ataque especial.`,

      `Você possui um estilo ofensivo.
      ${poke3 || 'Pokémon 3'} pode apresentar fraqueza contra elétricos.
      Um Pokémon do tipo terra ajudaria bastante.`,

      `Seu time possui boa resistência.
      Considere adicionar um Pokémon de gelo
      para aumentar cobertura contra dragões.`,

      `Seu time tem boa velocidade.
      Uma troca estratégica por Snorlax
      melhoraria a defesa geral do grupo.`
    ]

    const random =
      estrategias[
        Math.floor(Math.random() * estrategias.length)
      ]

    setResultado(random)
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

        <button onClick={analisarTime}>
          Analisar Estratégia
        </button>

      </section>

      {resultado && (

        <section
          className='resultado'
          aria-live='polite'
        >
          {resultado}
        </section>

      )}

    </main>
  )
}