import logo from './logo.svg';
//import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './Header';
import Form from './Form';
import ExerciseContainer from './ExerciseContainer';
import styled from "styled-components";

const exerciseApi="http://localhost:3000/exercises"
function App() {
  const [exercises,setExercises]=useState([]);
  
  useEffect(() => {
    fetch(exerciseApi)
    .then(res => res.json())
    .then(exerciseData => {
      setExercises(exerciseData)
    })
   }, [])

   const displayedExercises = exercises.filter((exercise) => {
    return exercise.name.toLowerCase()
  });
 
  return (
    <div className='App'>
       <Header  />
       <Form />
       <ExerciseContainer  exercises={displayedExercises} />
    
      

    </div>
  );
}


export default App;
