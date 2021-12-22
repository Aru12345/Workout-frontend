import React from "react";
function PlanCard({plan}){
    const { id, name, duration,exercises,equipments,note} = plan;
    return(
     
        <p className="plancard">
            <h3>Name-{name}</h3>
            <h3>Equipment-{equipments}</h3>
            <h3>Duration-{duration}</h3>
            <h3>Exercise-{exercises}</h3>
            <h3>Note- {note}</h3>


        </p>
        
    )
    
}
export default PlanCard;