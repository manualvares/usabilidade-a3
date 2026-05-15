import { useEffect, useState } from 'react'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import PokemonCard from '../components/PokemonCard'
import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage'

export default function Home() {

  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchPokemons()
  }, [])

  async function fetchPokemons() {

    try {

      setLoading(true)

      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      )

      const data = await response.json()

      const details = await Promise.all(
        data.results.map(async (pokemon) => {

          const req = await fetch(pokemon.url)

          return req.json()

        })
      )

      setPokemons(details)

    } catch {

      setError(true)

    } finally {

      setLoading(false)

    }
  }

  const filteredPokemons = pokemons.filter((pokemon) => {

    const nome = pokemon.name.toLowerCase()

    const numero = pokemon.id.toString()

    const busca = search.toLowerCase()

    return (
      nome.includes(busca) ||
      numero.includes(busca)
    )
  })

  if (loading) return <Loading />

  if (error) return <ErrorMessage />

  return (
    <main className='container'>

      <Header
        title='Pokédex'
        subtitle='Explore os Pokémons da primeira geração'
      />

      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredPokemons.length === 0 ? (

        <div className='feedback'>
          Nenhum Pokémon encontrado.
        </div>

      ) : (

        <section className='pokemon-grid'>

          {filteredPokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
            />
          ))}

        </section>

      )}

    </main>
  )
}