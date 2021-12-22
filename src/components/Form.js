import React,{useState} from "react";
function Form(){
 const[planName,setPlanName]=useState(" ")
 const[equip,setEquip]=useState("")
 const[duration,setDuration]=useState("")
 const[workouts,setWorkouts]=useState("")
 const[notes,setNotes]=useState("")
 const changePlan = (e) =>{
     setPlanName(e.target.value)
     
 }
 const changeEquip=(e)=>{
     setEquip(e.target.value)
 }
 const changeDuration = (e) =>{
     setDuration(e.target.value)
 }
 const changeWorkouts= (e) =>{
    setWorkouts(e.target.value)
}
const changeNotes = (e) =>{
    setNotes(e.target.value)
}

    return(
       <form>
           <h2>Build your Workout</h2>
           <label>Name:</label>
           <input type="text" name="Name" aria-label="name" value={planName} onChange={changePlan}  ></input>
           
           <label>Equipment:</label>
           <input type="text" name="equipment" aria-label="equipment" value={equip} onChange={changeEquip}></input>
           
           <label>Duration:</label>
           <input type="text" name="duration" aria-label="duration" value={duration} onChange={changeDuration} ></input>
           
           <label>Exercises:</label>
           <input type="text" name="exercise" aria-label="exercise" value={workouts} onChange={changeWorkouts} ></input>
           
           <label>Notes:</label>
           <input type="text" name="note" aria-label="note" value={notes} onChange={changeNotes} ></input>
          
           <input type="submit" />
          
       </form>
    )
}
export default Form;