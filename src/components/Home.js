import React from "react";
function Home(){
    return(
        <>
        <div className="homeCards">
        <p className="exCard">
            <img src="https://i.ytimg.com/vi/5swqLti2KUg/maxresdefault.jpg"></img>
            <button>Search Exercises</button>
        </p>
        <p className="plCard">
            <img src="http://gettinmyhealthyon.com/wp-content/uploads/2015/09/Weekly-Workout-Schedule.jpg"></img>
            <button>Build your workout</button>
        </p>
        <p className="ulCard">
            <img src="https://image.winudf.com/v2/image1/Y29tLmlhcHAuZ3ltLnV0aWxpdGllc19zY3JlZW5fMF8xNTQ1NzE2NDExXzAzNg/screen-0.jpg?fakeurl=1&type=.jpg"></img>
            <button>Use Utilities</button>
        </p>

        </div>
       <h1>Home</h1>
        </>
    )
}
export default Home;