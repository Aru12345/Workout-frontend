import React,{useState} from "react";
function ExerciseCard({exercise}){
    const { id, name, type, instruction,equipment,reps,image} = exercise;
    return(
        <li className="card">
            <img src={image} alt={name} />
          <h4>Name:{name}</h4>
          <h5>Type:{type}</h5>
          <h5>Equipment:{equipment}</h5>
          <h5>Reps:{reps}</h5>
          <p>Instruction:{instruction}</p>

        </li>
    )
}
export default ExerciseCard;