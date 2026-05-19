import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {

  const [language, setLanguage] = useState('pt')

  function toggleLanguage() {
    setLanguage((prev) =>
      prev === 'pt' ? 'en' : 'pt'
    )
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}