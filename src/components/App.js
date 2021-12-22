import logo from './logo.svg';
//import './App.css';

import React,{useState,useEffect} from 'react';
import Header from './Header';
import Form from './Form';
import ExerciseContainer from './ExerciseContainer';
import styled from "styled-components";
import Search from './Search';


const exerciseApi="http://localhost:3000/exercises"
function App() {
  const [exercises,setExercises]=useState([]);
  const[searchTerm,setSearchTerm]=useState("");
  
  
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
 
  return (
    <div className='App'>
       <Header  />
       <Form />
       <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
       <ExerciseContainer  exercises={displayedExercises}  />
    
      

    </div>
  );
}


export default App;
