import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Headline from './components/Headline.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Headline />
    <App />
  </StrictMode>,
)
