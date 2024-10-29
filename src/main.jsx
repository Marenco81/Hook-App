import { StrictMode, } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import './index.css'
import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp />
  </StrictMode>,
)
