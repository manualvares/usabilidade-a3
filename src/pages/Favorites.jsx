import { useEffect, useState } from 'react'

import Header from '../components/Header'
import PokemonCard from '../components/PokemonCard'

export default function Favorites() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    carregarFavoritos()
  }, [])

  async function carregarFavoritos() {

    const favoritos =
      JSON.parse(localStorage.getItem('favoritos')) || []

    const detalhes = await Promise.all(

      favoritos.map(async (name) => {

        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        )

        return response.json()

      })
    )

    setPokemons(detalhes)
  }

  return (
    <main className='container'>

      <Header
        title='Favoritos'
        subtitle='Seus Pokémons favoritos'
      />

      {pokemons.length === 0 ? (

        <div className='feedback'>
          Nenhum Pokémon favoritado.
        </div>

      ) : (

        <section className='pokemon-grid'>

          {pokemons.map((pokemon) => (
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