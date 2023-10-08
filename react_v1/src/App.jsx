//App.jsx
import React from "react";
import './index.css';

function App(){
    let currDate = new Date();
    let currTime = currDate.getHours();
    let greeting = '';
    const cssStyle = {};
    // conditional statements
    if(currTime>=1 && currTime<12){
        greeting = 'Good Morning';
        //dynamically adding color to cssStyle object.
        cssStyle.color = 'green'; 
    }else if(currTime>=12 && currTime<19){
        greeting = 'Good Afternoon';
        cssStyle.color = 'orange';
    }else{
        greeting = 'Good Night';
        cssStyle.color = 'gray';
    }
    return(
        <>
        <div>
            <h1> Hello Sir, <span style={cssStyle}> {greeting} </span> </h1>
        </div>
        </>
    );
}

export default App;