import { useEffect, useState } from 'react'

import Header from '../components/Header'
import PokemonCard from '../components/PokemonCard'

import { useLanguage }
from '../context/LanguageContext'

export default function Favorites() {

  const { language } = useLanguage()

  const [favorites, setFavorites] = useState([])

  useEffect(() => {

    const saved = JSON.parse(
      localStorage.getItem('favorites')
    ) || []

    setFavorites(saved)

  }, [])

  return (
    <main className='container'>

      <Header
        title={
          language === 'pt'
            ? 'Favoritos'
            : 'Favorites'
        }

        subtitle={
          language === 'pt'
            ? 'Seus Pokémons favoritos'
            : 'Your favorite Pokémons'
        }
      />

      {favorites.length === 0 ? (

        <div className='feedback'>

          {language === 'pt'
            ? 'Nenhum favorito salvo.'
            : 'No favorites saved.'}

        </div>

      ) : (

        <section className='pokemon-grid'>

          {favorites.map((pokemon) => (

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