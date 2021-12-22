import React from "react";
import PlanCard from "./PlanCard";
function PlanContainer({plans}){
    return(
        <>
        <ul className="plancards">
      {plans.map((plan) => {
        return (
          <PlanCard
            key={plan.id}
            plan={plan}
            
            
          />
        );
      })}
    </ul>
        </>
    )
}
export default PlanContainer;