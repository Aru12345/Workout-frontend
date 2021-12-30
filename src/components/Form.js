import React,{useState} from "react";
import styled from "styled-components";
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
      <FormContainer>
       <form onSubmit={handleSubmit}>
           <h3>Build your Workout</h3>
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
          
           <input class="submit" type="submit" />
          
       </form>
       </FormContainer>
    )
}
export default Form;

const FormContainer=styled.div`


width:35%;
border-radius:5px;
margin:auto;

& h3{
  text-align:center;
  text-transform:uppercase;
  font-family:"Times New Roman";
}
& input[type=text] {
  width: 100%;
  padding: 6px 24px;
  margin: 4px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
& input[type=submit] {
  width: 40%;
  background-color: #4E0099;
  color: white;
  padding: 10px 16px ;
  margin: 6px 0;
  border: none;
  border-radius: 4px;
  
}

`