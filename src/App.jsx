import { Routes, Route } from 'react-router-dom'

import Menu from './components/Menu'

import Home from './pages/Home'
import Battle from './pages/Battle'
import Details from './pages/Details'
import Favorites from './pages/Favorites'
import RandomPokemon from './pages/RandomPokemon'

export default function App() {
  return (
    <>
      <Menu />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/battle' element={<Battle />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/random' element={<RandomPokemon />} />
        <Route path='/pokemon/:name' element={<Details />} />
      </Routes>
    </>
  )
}