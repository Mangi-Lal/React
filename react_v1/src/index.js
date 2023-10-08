import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const todayDate = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
const currtime = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
ReactDOM.render(
  <>
    <h1>Hello, My Name is Mangi Lal</h1>
    <p>Todays Date is {todayDate}</p>
    <p>Current time is {currtime}</p>
  </>
  
  ,document.getElementById("root")
);
