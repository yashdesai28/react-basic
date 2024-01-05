import React from "react";

function Prcprops (props){

    return(

        <div>
            <p>this is a props prec okey </p>
            <h2></h2>
            <p>{props.text}</p>
            <h2>{props.author}</h2>
            <h3>{props.dec}</h3>
            <img src={props.img}/>
        
        </div>
    )

}
export default Prcprops