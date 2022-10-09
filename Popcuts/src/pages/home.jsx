import { Header } from '../components/shared/header'
import { Footer } from '../components/shared/footer'
import {CartCard} from '../components/shared/cart/cartCard'
import { Presentation } from '../components/presentation'
import { ItemCard } from '../components/card'

import { cartInitialState, cartReducer } from '../components/shared/cart/cartReducer'
import { useReducer } from 'react'
import { useState } from 'react'
import { CardSection } from '../components/shared/cardsection'





export const Home = ({stateCart, dispatch}) => {

  

  

  

  // const [info, setInfo] = useState(stateCart.products[0])
  
  

  return (
    <div className='home page'>
    
    <Header activepage='home' pages={[ 'home', 'recipes', 'products' ]} statecart={stateCart} dispatch={dispatch}/>

    {/* <CartCard stateCart={stateCart} dispatch={dispatch}/> */}

    <Presentation info={stateCart.home[0]}/>

    <CardSection path={'Product'} info={stateCart.home[1]} variant={'b'}/>

    <CardSection path={'Recipe'} info={stateCart.home[2]} variant={'a'}/>




    <Footer variant={'a'} state={stateCart} dispatch={dispatch}></Footer>

    

    </div>
  )
}


