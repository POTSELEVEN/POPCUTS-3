
import { createElement } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useReducer } from "react"


import { CartItem } from "./CartItem"
import  imagei  from "../../../assets/proteic-sushi.png";
import { cartInitialState, cartReducer } from "./cartReducer"
import { TYPES } from "./cartActions"
import { ButtonIcon } from "../../tools/tags/buttonIcon"





export const CartList = ({stateCart, dispatch}) => {

    


    // const [condition, setCondition] = useState(false)

    const {products, cart} = stateCart;

    // const addToCart = (id) => {
        
    //     dispatch({type: TYPES.ADD_TO_CART, payload: id})
    //     console.log('añadio')
    // }

    const increaseAmount = (id) => {

        
        dispatch({type: TYPES.INCREASE_AMOUNT, payload: id})

    }

    const removeFromCart = (id) => {

        dispatch({type: TYPES.REMOVE_FROM_CART, payload: id})

        

    }

    // useEffect(() => {
    //   if(cart.length==0){
    //     setCondition(true)
    //   }
    //   else{
    //     setCondition(false)
    //   }
    
      
    // }, [])
    


    


 
    // const item = CartItem(productList[0], 2)

    // const [ itemlist, setItemList] = useState([item])

        
    
    // useEffect(() => {

    //     let listapr = document.getElementById('productList')

    //     while(listapr.firstChild){

    //         listapr.removeChild(listapr.firstChild)
    //     }

    //     let content = document.createElement('div')

    //     for (let i = 0; i < 3; i = i + 1 ){
    
    //        let item = document.createElement('div')
    
    //        let imagecontainer = document.createElement('div')
    
    //        let details = document.createElement('div')
    
    //        let buttons = document.createElement('div')
    
    //        let nameproduct = document.createElement('p')
    
    //        let priceproduct = document.createElement('p')

    //        let image = document.createElement('img')

    

    //         imagecontainer.appendChild()
    //         details.appendChild(nameproduct)
    //         details.appendChild(priceproduct)
            
    //         item.appendChild(imagecontainer)
    //         item.appendChild(details)
    //         item.appendChild(buttons)
    //         content.appendChild(item)
                    
    //     }

    //     listapr.appendChild(content)


        
    //   return () => {
        
    //   }
    // }, [])


    return (

        <div className="list product-list" id="productList">

            
        {cart.map((item,index) => <CartItem key={index} data={item} addToCart={increaseAmount} removeFromCart={removeFromCart}/>)}
{/*         
        {condition &&
        
        <h1 className="subtitle subtitle-cart"> aun no hay productos en el carrito</h1>} */}

        
        </div>


    )

    }

 