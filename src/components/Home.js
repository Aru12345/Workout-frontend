import React from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";
function Home(){
    return(
        <HomeContainer>
        
        <img src="https://www.novonordisk.co.in/patient-education/diabetes/4-pillars-of-diabetes-care/exercise-in-diabetes-management/_jcr_content/root/imagevideotext_copy.coreimg.png/1602061414284/website-exercise-2.png"></img>
        
        <h2>Endure The Pain,Enjoy The Gain</h2>
        <p>My Fitness helps you reach your Weight Loss and Fitness Goals.</p>
        
        </HomeContainer>
    )
}
export default Home;
const HomeContainer =styled.div`
text-align:center;

& img{
    width:600px;
    height:450px;
    padding:3% 0% 0% 0%;
}
& h2{
    width:70%;
    text-align:center;
    font-family:monospace;
    color:black;
    font-size:300%;
    padding-left:15%;
}
& p{
    padding:0.5% 0% 2% 2%;
    font-size:150%;
  
  
}
`