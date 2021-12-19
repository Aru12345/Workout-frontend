import react from "react";
import TypeCard from "./TypeCard";

function Type({dataTypes}){
    return(
       <>
        <ul >
      {dataTypes.map((dataType) => {
        return (
          <TypeCard
            key={dataType.id}
            dataType={dataType}
            
            
          />
        );
      })}
    </ul>
       </>
        
    )
}
export default Type;