import React from "react";
import "./Person.css"

const person = (props) => {

return (
    <div className = "Person">
        <p onClick = {props.onlcick}>I am {props.name} and i am {props.age}</p>
        <p>{props.children}</p>
        <input type = "text" onChange = {props.onChanged} value = {props.name} />
    </div>
        
    )
}

export default person