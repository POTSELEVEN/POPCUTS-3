
import { Svgs } from "./svgs"



export const ButtonIcon = ({src,clase, func, element}) => {

    return <button className={"button button-icon "+ clase} onClick={()=>func(element)}><Svgs src={src} /></button>
  

}