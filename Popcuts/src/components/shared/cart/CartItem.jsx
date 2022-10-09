import {Image} from '../../tools/tags/image'
import { ButtonIcon } from "../../tools/tags/buttonIcon"
import  plusIcon  from "../../../assets/plus-icon.svg";
import  minusIcon  from "../../../assets/minus-icon.svg";

import { useState } from 'react';

export const CartItem = ({data, addToCart, removeFromCart}) => {

    let{name, price, image, id, amount, info} = data

       

    return (
    <div className="item" >

            <div className="container container-image container-image-item">

                <Image img={image} clase='image image-item'/>

            </div>

            <div className="info info-item">

                <p className="subtitle subtitle-cart">{name}</p>
                <p className="subtitle subtitle-cart">{price}</p>
                
            </div>

            <div className="container container-buttons container-buttons-item">

                <ButtonIcon src={plusIcon} func={addToCart} element={id}/>
                <button className='button button-icon'>{amount}</button>
                <ButtonIcon src={minusIcon} func={removeFromCart} element={id}/>
                


            </div>


        </div>
    )
}