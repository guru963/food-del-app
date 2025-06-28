import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Tablefunction from './contextx/Appcontext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Tablefunction>
      <App />
  </Tablefunction>
  </BrowserRouter>,
)
