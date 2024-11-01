import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/normalize.css'
import './style/index.css'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App cardCount={12} />
  </StrictMode>,
);