import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import Header from '../components/Header'

import Loading from '../components/Loading'

import { useLanguage }
from '../context/LanguageContext'

export default function Details() {

  const { name } = useParams()

  const { language } = useLanguage()

  const [pokemon, setPokemon] = useState(null)

  const [loading, setLoading] = useState(true)

  const [favorite, setFavorite] = useState(false)

  useEffect(() => {

    fetchPokemon()

  }, [name])

  async function fetchPokemon() {

    try {

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      )

      const data = await response.json()

      setPokemon(data)

      const saved = JSON.parse(
        localStorage.getItem('favorites')
      ) || []

      const exists = saved.find(
        (item) => item.id === data.id
      )

      setFavorite(!!exists)

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)

    }
  }

  function toggleFavorite() {

    const saved = JSON.parse(
      localStorage.getItem('favorites')
    ) || []

    if (favorite) {

      const updated = saved.filter(
        (item) => item.id !== pokemon.id
      )

      localStorage.setItem(
        'favorites',
        JSON.stringify(updated)
      )

      setFavorite(false)

    } else {

      saved.push(pokemon)

      localStorage.setItem(
        'favorites',
        JSON.stringify(saved)
      )

      setFavorite(true)
    }
  }

  if (loading) return <Loading />

  return (
    <main className='container'>

      <Header
        title={pokemon.name}

        subtitle={
          language === 'pt'
            ? 'Detalhes do Pokémon'
            : 'Pokémon Details'
        }
      />

      <section className='details-card'>

        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />

        <button
          className='favorite-btn'
          onClick={toggleFavorite}

          aria-label='favorite pokemon'
        >
          {favorite ? '⭐' : '☆'}
        </button>

        <h2>
          #{pokemon.id}
        </h2>

        <p>
          HP: {pokemon.stats[0].base_stat}
        </p>

        <p>
          Attack: {pokemon.stats[1].base_stat}
        </p>

        <p>
          Defense: {pokemon.stats[2].base_stat}
        </p>

        <p>
          Speed: {pokemon.stats[5].base_stat}
        </p>

        <p>
          Type:
          {' '}
          {pokemon.types
            .map((type) => type.type.name)
            .join(', ')
          }
        </p>

      </section>

    </main>
  )
}