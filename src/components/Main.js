import React from "react";
import styled from "styled-components";
import Workouts from "./Workouts";
import MyWorkouts from "./MyWorkouts";
import Favorites from "./Favorites";
import CreateWorkout from "./CreateWorkout";
function Main(){
    return (
        <MainContainer>
            <Workouts />
            <Favorites />
            <CreateWorkout />
            <MyWorkouts />
        </MainContainer>
    )
}
export default Main;

const MainContainer=styled.div`
position:absolute
background-image: linear-gradient(to right, blue, purple);
`