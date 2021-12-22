import React,{useState,useEffect} from "react";
import ExerciseCard from "./ExerciseCard";

const typeApi="http://localhost:3000/type"

function ExerciseContainer({exercises}){
  
  

    return(
      <>
      
      <ul className="cards">
      {exercises.map((exercise) => {
        return (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            
            
          />
        );
      })}
    </ul>
      </>
        
          )
}
export default ExerciseContainer;