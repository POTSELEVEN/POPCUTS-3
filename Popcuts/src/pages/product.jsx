import { Header } from '../components/shared/header'
import { Footer } from '../components/shared/footer'
import {CartCard} from '../components/shared/cart/cartCard'
import { Presentation } from '../components/presentation'
import { ItemCard } from '../components/card'

import { cartInitialState, cartReducer } from '../components/shared/cart/cartReducer'
import { useReducer } from 'react'
import { useState } from 'react'
import { CardSection } from '../components/shared/cardsection'
import { TYPES } from '../components/shared/cart/cartActions'






export const Product = ({stateCart, dispatch}) => {

  

  


  const addToCart = (id) => {

    if (stateCart.cart.find((product) => product.id === id)){
        dispatch({type: TYPES.INCREASE_AMOUNT, payload: id})
        console.log('sumo')
    }

    else{
    
    dispatch({type: TYPES.ADD_TO_CART, payload: id})
    console.log('añadio')
    }

}

  

  // const [info, setInfo] = useState(stateCart.products[0])
  
  

  return (
    <div className='recipes page'>
    
    <Header activepage='products' pages={[ 'home', 'recipes', 'products' ]} statecart={stateCart} dispatch={dispatch}/>

    {/* <CartCard stateCart={stateCart} dispatch={dispatch}/> */}

    <Presentation info={stateCart.products[0]}/>

    <div className="container seccion">

    
      <button className='button button-add seccion-b subtitle' onClick={()=>addToCart(1)}> Add To Card </button>


    </div>


    




    <Footer variant={'a'} state={stateCart} dispatch={dispatch}></Footer>

    

    </div>
  )
}


