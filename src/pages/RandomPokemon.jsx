import { useState } from 'react'

import Header from '../components/Header'
import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage'

export default function RandomPokemon() {

  const [pokemon, setPokemon] = useState(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const curiosidades = {

    pikachu: {
      descricao:
        'Pikachu armazena eletricidade em suas bochechas.',
      ataque:
        'Thunderbolt',
      curiosidade:
        'É o mascote oficial da franquia Pokémon.'
    },

    charizard: {
      descricao:
        'Charizard voa pelos céus procurando adversários fortes.',
      ataque:
        'Flamethrower',
      curiosidade:
        'Seu fogo aumenta quando enfrenta inimigos poderosos.'
    },

    gengar: {
      descricao:
        'Gengar gosta de se esconder nas sombras.',
      ataque:
        'Shadow Ball',
      curiosidade:
        'Dizem que ele rouba calor das pessoas.'
    },

    snorlax: {
      descricao:
        'Snorlax passa a maior parte do tempo dormindo.',
      ataque:
        'Body Slam',
      curiosidade:
        'Ele pode bloquear estradas inteiras enquanto dorme.'
    }
  }

  async function gerarPokemon() {

    try {

      setLoading(true)

      setError(false)

      const random =
        Math.floor(Math.random() * 151) + 1

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${random}`
      )

      if (!response.ok) {
        throw new Error()
      }

      const data = await response.json()

      setPokemon(data)

    } catch {

      setError(true)

    } finally {

      setLoading(false)

    }
  }

  function gerarDescricao() {

    if (!pokemon) return null

    const info =
      curiosidades[pokemon.name]

    if (info) return info

    return {

      descricao:
        `${pokemon.name} é um Pokémon do tipo ${pokemon.types[0].type.name}.`,

      ataque:
        pokemon.moves[0]?.move?.name || 'Ataque desconhecido',

      curiosidade:
        `Possui aproximadamente ${pokemon.base_experience} pontos de experiência base.`

    }
  }

  const info = gerarDescricao()

  return (
    <main className='container'>

      <Header
        title='Pokémon Aleatório'
        subtitle='Descubra Pokémons aleatórios'
      />

      <section className='battle-box'>

        <button
          onClick={gerarPokemon}
          aria-label='Gerar Pokémon aleatório'
        >
          Gerar Pokémon
        </button>

      </section>

      {loading && <Loading />}

      {error && <ErrorMessage />}

      {pokemon && !loading && !error && (

        <section className='details-card'>

          <img
            src={
              pokemon.sprites.other['official-artwork'].front_default
            }
            alt={pokemon.name}
          />

          <h1>
            #{pokemon.id} - {pokemon.name}
          </h1>

          <div className='types'>

            {pokemon.types.map((type) => (
              <span key={type.slot}>
                {type.type.name}
              </span>
            ))}

          </div>

          <div className='info-box'>

            <h2>
              Descrição
            </h2>

            <p>
              {info.descricao}
            </p>

            <h2>
              Ataque Principal
            </h2>

            <p>
              {info.ataque}
            </p>

            <h2>
              Curiosidade
            </h2>

            <p>
              {info.curiosidade}
            </p>

            <h2>
              Altura
            </h2>

            <p>
              {pokemon.height / 10} m
            </p>

            <h2>
              Peso
            </h2>

            <p>
              {pokemon.weight / 10} kg
            </p>

            <h2>
              Experiência Base
            </h2>

            <p>
              {pokemon.base_experience}
            </p>

          </div>

        </section>

      )}

    </main>
  )
}