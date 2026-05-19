import { NavLink } from 'react-router-dom'

import { useLanguage }
from '../context/LanguageContext'

export default function Menu() {

  const {
    language,
    toggleLanguage
  } = useLanguage()

  function changeTheme() {

    if (
      document.body.classList.contains('dark')
    ) {

      document.body.classList.remove('dark')

      document.body.classList.add('light')

    } else {

      document.body.classList.remove('light')

      document.body.classList.add('dark')
    }
  }

  return (

    <nav className='menu'>

      <NavLink to='/'>
        Pokédex
      </NavLink>

      <NavLink to='/battle'>
        {language === 'pt'
          ? 'Batalha'
          : 'Battle'}
      </NavLink>

      <NavLink to='/favorites'>
        {language === 'pt'
          ? 'Favoritos'
          : 'Favorites'}
      </NavLink>

      <NavLink to='/random'>
        {language === 'pt'
          ? 'Aleatório'
          : 'Random'}
      </NavLink>

      <NavLink to='/compare'>
        {language === 'pt'
          ? 'Comparar'
          : 'Compare'}
      </NavLink>

      <NavLink to='/about'>
        Help
      </NavLink>

      <button
        className='lang-btn'
        onClick={toggleLanguage}
      >
        {language === 'pt'
          ? 'EN'
          : 'PT-BR'}
      </button>

      <button
        className='theme-btn'
        onClick={changeTheme}
      >
        🌙 / ☀️
      </button>

    </nav>
  )
}