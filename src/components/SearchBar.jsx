export default function SearchBar({ value, onChange }) {
  return (
    <section className='search-area'>

      <label htmlFor='search'>
        Buscar Pokémon
      </label>

      <input
        id='search'
        type='text'
        placeholder='Digite o nome do Pokémon'
        value={value}
        onChange={onChange}
      />

    </section>
  )
}