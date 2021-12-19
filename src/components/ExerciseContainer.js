import React,{useState,useEffect} from "react";
import Type from './Type';
import ExerciseCard from "./ExerciseCard";

const typeApi="http://localhost:3000/type"
function ExerciseContainer({exercises}){
  const [types,setTypes]=useState([]);
  
  useEffect(() => {
    fetch(typeApi)
    .then(res => res.json())
    .then(typeData => {
      setTypes(typeData)
    })
   }, [])

   const displayedTypes = types.filter((type) => {
    return type.name.toLowerCase()
  });

    return(
      <>
      <Type dataTypes={displayedTypes}/>
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