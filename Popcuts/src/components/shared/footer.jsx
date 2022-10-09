

import { Image } from "../tools/tags/image"


import logoA from '../../assets/logo.png'
import logoB from '../../assets/logoB.png'
import messageFooterA from '../../assets/message-footerA.png'
import messageFooterB from '../../assets/message-footerB.png'
import fb from '../../assets/fb-icon.svg'
import ig from '../../assets/ig-icon.svg'
import tw from '../../assets/tw-icon.svg'
import { ButtonIcon } from "../tools/tags/buttonIcon"

import { TYPES } from "./cart/cartActions"




export const Footer = ({variant, state, dispatch}) => {





    const condition = (variant == 'a')


    return(
        <div className={`footer ${condition ? 'footer-a' : 'footer-b'} seccion` }>

        <div className="info info-footer">

            <Image img={condition ? logoA : logoB} name='logo footer' className="logo logo-footer"/>

            <p className="info-text"> cali #24-a3 23-8 </p>

            <div className="container container-buttons container-buttons-media">

                <ButtonIcon src={fb} />
                <ButtonIcon src={ig}/>
                <ButtonIcon src={tw}/>



            </div>



        </div>

        <div className="container container-message-footer">

            <Image img={condition ? messageFooterA : messageFooterB} name='mensaje footer' clase="message-footer"/>

        </div>

       

        </div>
    )


}