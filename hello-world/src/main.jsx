import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HelloWorld, { PedroNosAbandonou } from './components/HelloWorld.jsx'
import Soma from './components/Soma.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorld />
    <PedroNosAbandonou />
    <Soma a={2} b={2}/>
    <App />
    <App />
  </StrictMode>,
)
