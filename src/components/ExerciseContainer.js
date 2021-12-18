import React from "react";
import Type from './Type';
import ExerciseCard from "./ExerciseCard";
function ExerciseContainer({exercises}){
    return(
        
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
        
        
          )
}
export default ExerciseContainer;