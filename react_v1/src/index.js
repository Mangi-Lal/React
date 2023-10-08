//This we use for ES5
// var React = require('react'); 
// var ReactDom = require('react-dom');

// This is for ES6
import React from "react";
import ReactDom from "react-dom";

const fname = 'Mangi';
const lname = 'Lal';
ReactDom.render(
  <>
    <h1> {`My Name is ${fname} ${lname}`}</h1>
  </>
  
  ,document.getElementById("root")
); // "root" is in index.html...

{/* <h1> Hello World!!!</h1> // this is not html. this is JSX expression in react */}

