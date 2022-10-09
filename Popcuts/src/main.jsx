import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from "./pages/home";
import { MainApp } from './MainApp';
import './index.css'

// import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/Header.css'
import './styles/Cart.css'
import './styles/Footer.css'
import './styles/body.css'
import './styles/itemcard.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp />

    </BrowserRouter>
  
)
