import React from "react";
import styled from "styled-components";

function  Utilities(){
 return (
     <UtilitiesCard>
     <iframe id="sc-protiene_intake_cal"  src="https://www.stylecraze.com/tools/protein-intake-calculator/?embed_id=1" ></iframe> 
     <iframe src='https://www.stemjar.com/wp-admin/body_fat_calculator_index.html'   id='showiframe1'></iframe>
     <iframe src="https://www.mealpro.net/bmi/?color=996DEC"></iframe>
     <iframe src="https://www.mealpro.net/calorie/?color=996DEC" ></iframe>
     </UtilitiesCard>
 )
}
export default Utilities;
 
const UtilitiesCard=styled.div`
display: inline-block;
text-align: center;
color:white;


& iframe{
    height:600px;
    margin-top:1%;
    margin-left:1%;
    width:500px;
    height:620px;
   
    
    
}

`