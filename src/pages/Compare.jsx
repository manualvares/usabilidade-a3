import { useState } from 'react'

import Header from '../components/Header'

import { useLanguage }
from '../context/LanguageContext'

export default function Compare() {

  const { language } = useLanguage()

  const [pokemon1, setPokemon1] = useState('')

  const [pokemon2, setPokemon2] = useState('')

  const [data1, setData1] = useState(null)

  const [data2, setData2] = useState(null)

  async function comparePokemons() {

    try {

      const req1 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon1.toLowerCase()}`
      )

      const req2 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon2.toLowerCase()}`
      )

      const res1 = await req1.json()

      const res2 = await req2.json()

      setData1(res1)

      setData2(res2)

    } catch (error) {

      console.log(error)

    }
  }

  return (
    <main className='container'>

      <Header
        title={
          language === 'pt'
            ? 'Comparador'
            : 'Compare'
        }

        subtitle={
          language === 'pt'
            ? 'Compare dois Pokémons'
            : 'Compare two Pokémons'
        }
      />

      <section className='battle-box'>

        <div className='inputs'>

          <input
            type='text'

            placeholder={
              language === 'pt'
                ? 'Pokémon 1'
                : 'Pokémon 1'
            }

            value={pokemon1}

            onChange={(e) =>
              setPokemon1(e.target.value)
            }
          />

          <input
            type='text'

            placeholder={
              language === 'pt'
                ? 'Pokémon 2'
                : 'Pokémon 2'
            }

            value={pokemon2}

            onChange={(e) =>
              setPokemon2(e.target.value)
            }
          />

        </div>

        <button
          onClick={comparePokemons}
        >
          {language === 'pt'
            ? 'Comparar'
            : 'Compare'}
        </button>

      </section>

      <section className='compare-grid'>

        {data1 && (

          <div className='details-card'>

            <img
              src={data1.sprites.front_default}
              alt={data1.name}
            />

            <h2>
              {data1.name}
            </h2>

            <p>
              HP:
              {' '}
              {data1.stats[0].base_stat}
            </p>

            <p>
              Attack:
              {' '}
              {data1.stats[1].base_stat}
            </p>

            <p>
              Defense:
              {' '}
              {data1.stats[2].base_stat}
            </p>

            <p>
              Speed:
              {' '}
              {data1.stats[5].base_stat}
            </p>

          </div>

        )}

        {data2 && (

          <div className='details-card'>

            <img
              src={data2.sprites.front_default}
              alt={data2.name}
            />

            <h2>
              {data2.name}
            </h2>

            <p>
              HP:
              {' '}
              {data2.stats[0].base_stat}
            </p>

            <p>
              Attack:
              {' '}
              {data2.stats[1].base_stat}
            </p>

            <p>
              Defense:
              {' '}
              {data2.stats[2].base_stat}
            </p>

            <p>
              Speed:
              {' '}
              {data2.stats[5].base_stat}
            </p>

          </div>

        )}

      </section>

    </main>
  )
}