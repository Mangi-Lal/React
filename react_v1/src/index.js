import React from "react";
import ReactDOM from "react-dom";
import './index.css'; 
//new Date(year, month, day, hours, minute, second...)
let currDate = new Date();
let currTime = currDate.getHours();
let greeting = '';
const cssStyle = {};
// conditional statements
if(currTime>=1 && currTime<12){
  greeting = 'Good Morning';
  cssStyle.color = 'green'; // dynamically adding color to cssStyle object.
}else if(currTime>=12 && currTime<19){
  greeting = 'Good Afternoon';
  cssStyle.color = 'orange';
}else{
  greeting = 'Good Night';
  cssStyle.color = 'gray';
}
ReactDOM.render(
  <>
  <div>
    <h1> Hello Sir, <span style={cssStyle}> {greeting} </span> </h1>
  </div>
  </>
  ,document.getElementById("root")
);
