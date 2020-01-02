import React from "react";
import "./Person.css"
import Radium  from "radium"
const person = (props) => {
    const style = {
        "@media (min-width: 500px)": {
            width: "450x"
        }
    }
return (
    <div className = "Person" style = {style}>
        <p onClick = {props.click}>I am {props.name} and i am {props.age}</p>
        <p>{props.children}</p>
        <input type = "text" onChange = {props.onChanged} value = {props.name} />
    </div>
        
    )
}

export default Radium(person)