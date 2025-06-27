import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js'; // para componentes JS como Modal, Toast etc.
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
