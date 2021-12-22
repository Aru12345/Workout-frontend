import React,{useState} from "react";
function Form(){

    const[formData,setFormData]=useState({
        name:'',
        equip:'',
        duration:'',
        exercises:'',
        notes:''
    })
    
    return(
       <form>
           <h2>Build your Workout</h2>
           <label>Name:</label>
           <input type="text" name="name" aria-label="name" value={formData.name}  ></input>
           <label>Equipment:</label>
           <input type="text" name="equipment" aria-label="equipment"  value={formData.equip}></input>
           <label>Duration:</label>
           <input type="text" name="duration" aria-label="duration" value={formData.duration}></input>
           <label>Exercises:</label>
           <input type="text" name="exercise" aria-label="exercise" value={formData.exercises}></input>
           <label>Notes:</label>
           <input type="text" name="note" aria-label="note" value={formData.notes}></input>
           <input type="submit" />
          
       </form>
    )
}
export default Form;