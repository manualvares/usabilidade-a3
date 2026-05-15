import { Link } from 'react-router-dom'

export default function PokemonCard({ pokemon }) {

  const imagem =
    pokemon.sprites.other['official-artwork'].front_default

  return (
    <Link
      to={`/pokemon/${pokemon.name}`}
      className='pokemon-card'
    >

      <img
        src={imagem}
        alt={pokemon.name}
      />

      <h2>
        #{pokemon.id} - {pokemon.name}
      </h2>

      <div className='types'>

        {pokemon.types.map((type) => (
          <span key={type.slot}>
            {type.type.name}
          </span>
        ))}

      </div>

    </Link>
  )
}