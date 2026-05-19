import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import App from './App'

import './styles/style.css'

import { ThemeProvider }
from './context/ThemeContext'

import { LanguageProvider }
from './context/LanguageContext'

document.body.classList.add('dark')

ReactDOM.createRoot(
  document.getElementById('root')
).render(

  <React.StrictMode>

    <ThemeProvider>

      <LanguageProvider>

        <BrowserRouter>

          <App />

        </BrowserRouter>

      </LanguageProvider>

    </ThemeProvider>

  </React.StrictMode>
)