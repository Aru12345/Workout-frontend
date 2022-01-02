import React from "react";
import styled from "styled-components";
function PlanCard({listedPlan}){
    const { id, planname,equip, duration,exercises,notes} = listedPlan;
    return(
     
       <>
        <PlanList>
            <h3>Name-{planname}</h3>
            <h3>Equipment-{equip}</h3>
            <h3>Duration-{duration}</h3>
            <h3>Exercise-{exercises}</h3>
            <h3>Notes- {notes}</h3>


        </PlanList>
       </>
        
    )
    
}
export default PlanCard;

const PlanList=styled.div`
display: inline-block;
text-align: center;
width: 480px;
height: 240px;
margin-top: 70px;
padding:15px ;
margin-bottom:25px;
margin-left:35px;

box-shadow: 10px 10px 8px #888888;
border-radius:5px;
color:white;
background:#996DEC;
`