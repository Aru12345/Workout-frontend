import React from "react";
import Type from "./Type";

function TypeCard({dataType}){
    const{name,id}=dataType;
    return(
        <>
        <h2>{name}</h2>
        </>
    )
}
export default TypeCard;