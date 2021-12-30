import React,{useState} from "react";
import styled from "styled-components";
function ExerciseCard({exercise}){
    const { id, name, type, instruction,equipment,reps,image} = exercise;
    return(
     
        <CardWrapper>
         <img src={image} alt={name} />
          <h4>Name:{name}</h4>
          <h5>Type:{type}</h5>
          <h5>Equipment:{equipment}</h5>
          <h5>Reps:{reps}</h5>
          <h5>Instruction:{instruction}</h5>

        </CardWrapper>
        
    )
}
export default ExerciseCard;

const CardWrapper=styled.div`
display: inline-block;
margin: 30px;
text-align: center;
width: 280px;
height: 430px;
margin:15px;
padding:15px;
box-shadow: 10px 10px 8px #888888;
border-radius:5px;
color:white;
background:#996DEC;
overflow-x:auto;

& img{
    width:170px;
    height:200px;
    
}

`