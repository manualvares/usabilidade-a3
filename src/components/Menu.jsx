import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className='menu'>

      <NavLink to='/'>
        Pokédex
      </NavLink>

      <NavLink to='/battle'>
        Battle Center
      </NavLink>

      <NavLink to='/favorites'>
        Favoritos
      </NavLink>

      <NavLink to='/random'>
        Aleatório
      </NavLink>

    </nav>
  )
}