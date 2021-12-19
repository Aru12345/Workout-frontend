import React,{useState} from "react";
import styled from "styled-components";
function ExerciseCard({exercise}){
    const { id, name, type, instruction,equipment,reps,image} = exercise;
    return(
     
        <p className="card">
         <img src={image} alt={name} />
          <h4>Name:{name}</h4>
          <h5>Type:{type}</h5>
          <h5>Equipment:{equipment}</h5>
          <h5>Reps:{reps}</h5>
          <h5>Instruction:{instruction}</h5>

        </p>
        
    )
}
export default ExerciseCard;

