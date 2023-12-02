import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './style.css'
import { YugiApp } from './YugiApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <YugiApp />
    </BrowserRouter>
  </React.StrictMode>,
)
