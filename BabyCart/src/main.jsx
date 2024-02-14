import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartState from './Context/Cart/CartState.jsx'
import CartContext from './Component/NewContext/CartContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <CartState>
    <App />
    </CartState>
  </React.StrictMode>,
)
