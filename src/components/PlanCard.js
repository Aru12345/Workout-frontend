import React from "react";
function PlanCard({plan}){
    const { id, name,equip, duration,exercises,notes} = plan;
    return(
     
        <p className="plancard">
            <h3>Name-{name}</h3>
            <h3>Equipment-{equip}</h3>
            <h3>Duration-{duration}</h3>
            <h3>Exercise-{exercises}</h3>
            <h3>Note- {notes}</h3>


        </p>
        
    )
    
}
export default PlanCard;