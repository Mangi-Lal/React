//This we use for ES5
// var React = require('react'); 
// var ReactDom = require('react-dom');

// This is for ES6
import React from "react";
import ReactDom from "react-dom";

const fname = 'Mangi';
ReactDom.render(
  <>
    <h1>My First name is {fname}</h1>
    <p>My lucky Number is {9 * 4}</p>
    <p>Random Number {Math.random()}</p>
  </>
  
  ,document.getElementById("root")
); // "root" is in index.html...

{/* <h1> Hello World!!!</h1> // this is not html. this is JSX expression in react */}

