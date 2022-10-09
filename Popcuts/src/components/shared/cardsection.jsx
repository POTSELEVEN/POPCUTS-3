import { ItemCard } from "../card"
import { useState } from "react"





export const CardSection = ({path, info, variant}) =>{

    const [title, settitle] = useState(info.info.title)
    const [body, setBody] = useState(info.info.body)


    return(

        <div className={`seccion seccion-${variant} seccion-card`}>

            <div className="container container-text">

                <h1 className="title title-section">{title}</h1>

                <p className="info-text">{body}</p>


            </div>

            


            <div className="container container-cards">

                <ItemCard path={path}/>
                <ItemCard path={path}/>
                <ItemCard path={path}/>
                <ItemCard path={path}/>


            </div>



        </div>



    )
    

}