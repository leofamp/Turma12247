import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Saudacao from './components/Casa/Saudacao'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Saudacao nome = "Leo"></Saudacao>
  </StrictMode>,
)
