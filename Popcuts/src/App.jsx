import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { Header } from './components/shared/header'

import './styles/Header.css'

function App() {
  

  return (
    <div className='home'>
    
    <Header activepage='home' pages={[ 'home', 'recipes', 'products' ]}/>

    </div>
  )
}

export default App
