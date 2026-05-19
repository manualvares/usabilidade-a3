export default function Header({
  title,
  subtitle
}) {

  return (
    <header className='header'>

      <img
        className='logo'
        src='/pokebola.png'
        alt='Pokébola'
      />

      <h1>
        {title}
      </h1>

      <p>
        {subtitle}
      </p>

    </header>
  )
}