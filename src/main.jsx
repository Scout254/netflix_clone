import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StateProvider } from './StateProvider'
import reducer, { initialState } from './reducer'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
    <StateProvider initialState={initialState} reducer={reducer}>

    <App />
    </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
