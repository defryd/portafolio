import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './presentation/navigator/AppRouter'
import './index.css'
import { ThemeProvider } from './presentation/context/ThemeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </StrictMode>,
)
