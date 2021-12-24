import React,{useState} from "react";
const planApi="http://localhost:3000/plans"
function Form({onAddPlan}){
const[formData,setFormData]=useState({
    planname:'',
    equi:'',
    duration:'',
    exercise:'',
    note:''
})

function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

function handleSubmit(event) {
    event.preventDefault();

    const newPlan ={
        ...formData
    };

    fetch("http://localhost:3000/plans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlan),
    })
      .then((r) => r.json())
      .then(onAddPlan);
    

  }
  

    return(
       <form onSubmit={handleSubmit}>
           <h2>Build your Workout</h2>
           <label>Name:</label>
           <input type="text" name="planname" aria-label="name" value={formData.planname} onChange={handleChange}  ></input>
           
           <label>Equipment:</label>
           <input type="text" name="equi" aria-label="equip" value={formData.equi} onChange={handleChange} ></input>
           
           <label>Duration:</label>
           <input type="text" name="duration" aria-label="duration" value={formData.duration}  onChange={handleChange}></input>
           
           <label>Exercises:</label>
           <input type="text" name="exercise" aria-label="exercise" value={formData.exercise} onChange={handleChange} ></input>
           
           <label>Notes:</label>
           <input type="text" name="note" aria-label="note" value={formData.note} onChange={handleChange} ></input>
          
           <input type="submit" />
          
       </form>
    )
}
export default Form;