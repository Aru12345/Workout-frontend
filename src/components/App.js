

import React,{useState,useEffect} from 'react';
import Header from './Header';
import Form from './Form';
import ExerciseContainer from './ExerciseContainer';
import Home from './Home';
import Search from './Search';
import PlannerContainer from './PlannerContainer';
import Utilities from './ Utilities';
import { Route,Switch } from 'react-router-dom';


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
  },[])

  const displayedPlans=plans.filter((plan)=>{
    return plan.planname
  })
 
  function handleAddPlan(newPlan) {
    setPlans([...plans, newPlan]);
  }
  
  
  return (
    <div className='App'>
       <Header  />
    <Switch>
      
      <Route path="/exercises">
             <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
             <ExerciseContainer  exercises={displayedExercises}  />
      </Route>
      <Route path="/plans/new">
            <Form onAddPlan={handleAddPlan}/>
            <PlannerContainer listedPlans={displayedPlans}/>
      </Route> 
      <Route path="/utilities/new">
        <Utilities />
      </Route>
      <Route path="/">
        <Home />

      </Route>
      </Switch>
    </div>
  );
}


export default App;
