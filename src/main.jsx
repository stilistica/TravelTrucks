import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import './css/reset.css'
import './css/fonts.css'
import "modern-normalize";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
