import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState('dark')

  useEffect(() => {

    document.body.classList.remove('dark')
    document.body.classList.remove('light')

    document.body.classList.add(theme)

    console.log('tema atual:', theme)

  }, [theme])

  function toggleTheme() {

    setTheme((prev) =>
      prev === 'dark'
        ? 'light'
        : 'dark'
    )
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}