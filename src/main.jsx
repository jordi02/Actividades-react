import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Acc1 from './eje-unidad1-1/actividad1.jsx'
import './index.css'
import CountryList from './eje-unidad1-1/actividad3.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Acc1/>
    <CountryList/>
  </React.StrictMode>,
)
