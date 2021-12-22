import React from "react";
function PlanCard({listedPlan}){
    const { id, planname,equip, duration,exercises,notes} = listedPlan;
    return(
     
       <>
        <p className="plancard">
            <h3>Name-{planname}</h3>
            <h3>Equipment-{equip}</h3>
            <h3>Duration-{duration}</h3>
            <h3>Exercise-{exercises}</h3>
            <h3>Notes- {notes}</h3>


        </p>
       </>
        
    )
    
}
export default PlanCard;