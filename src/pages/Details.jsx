import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage'

export default function Details() {

  const { name } = useParams()

  const [pokemon, setPokemon] = useState(null)

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState(false)

  const [favoritado, setFavoritado] = useState(false)

  useEffect(() => {

    fetchPokemon()

    verificarFavorito()

  }, [])

  async function fetchPokemon() {

    try {

      setLoading(true)

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}`
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

  function verificarFavorito() {

    const favoritos =
      JSON.parse(localStorage.getItem('favoritos')) || []

    setFavoritado(
      favoritos.includes(name)
    )
  }

  function toggleFavorito() {

    const favoritos =
      JSON.parse(localStorage.getItem('favoritos')) || []

    let novosFavoritos

    if (favoritos.includes(name)) {

      novosFavoritos =
        favoritos.filter((item) => item !== name)

      setFavoritado(false)

    } else {

      novosFavoritos = [...favoritos, name]

      setFavoritado(true)
    }

    localStorage.setItem(
      'favoritos',
      JSON.stringify(novosFavoritos)
    )
  }

  if (loading) return <Loading />

  if (error) return <ErrorMessage />

  return (
    <main className='container'>

      <section className='details-card'>

        <button
          className='favorite-btn'
          onClick={toggleFavorito}
          aria-label='Favoritar Pokémon'
        >
          {favoritado
            ? '★ Favoritado'
            : '☆ Favoritar'}
        </button>

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
            Habilidades
          </h2>

          <ul>

            {pokemon.abilities.map((ability) => (
              <li key={ability.ability.name}>
                {ability.ability.name}
              </li>
            ))}

          </ul>

          <h2>
            Status
          </h2>

          <ul>

            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}

          </ul>

        </div>

      </section>

    </main>
  )
}