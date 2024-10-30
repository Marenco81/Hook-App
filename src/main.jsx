import { StrictMode, } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import './index.css'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHoooks } from './03-examples/MultipleCustomHoooks'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MultipleCustomHoooks />
  </StrictMode>,
)
