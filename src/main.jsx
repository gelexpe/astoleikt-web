// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async' // 👈 Añade esta línea
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> {/* 👈 Envuelve App */}
      <App />
    </HelmetProvider>
  </StrictMode>,
)
