import React from "react";
import PlanCard from "./PlanCard";
function PlanContainer({listedPlans}){
    return(
        <>
     <ul className="cards">
      {listedPlans.map((listedPlan) => {
        return (
          <PlanCard
            key={listedPlan.id}
            listedPlan={listedPlan}
          />
        );
      })}
    </ul>
        </>
    )
}
export default PlanContainer;