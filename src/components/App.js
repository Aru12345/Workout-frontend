import './App.css';

import React,{useState,useEffect} from 'react';
import Header from './Header';
import Form from './Form';
import ExerciseContainer from './ExerciseContainer';
import styled from "styled-components";
import Search from './Search';
import PlannerContainer from './PlannerContainer';

const exerciseApi="http://localhost:3000/exercises"
const planApi="http://localhost:3000/plans"
function App() {
  const [exercises,setExercises]=useState([]);
  const[searchTerm,setSearchTerm]=useState("");
  const[plans,setPlans]=useState([]);
  
  
  useEffect(() => {
    fetch(exerciseApi)
    .then(res => res.json())
    .then(exerciseData => {
      setExercises(exerciseData)
    })
   }, [])

   const displayedExercises = exercises.filter((exercise) => {
    return exercise.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
 
  useEffect(()=>{
    fetch(planApi)
    .then(res=>res.json())
    .then(planData=>{
      setPlans(planData)
    })
  })
  const displayedPlans=plans.filter((plan)=>{
    return plan.name.toLowerCase()
  })
  return (
    <div className='App'>
       <Header  />
       
       <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
       <ExerciseContainer  exercises={displayedExercises}  />
       <Form />
       <PlannerContainer plans={displayedPlans} />
      

    </div>
  );
}


export default App;
