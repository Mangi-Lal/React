//This we use for ES5
// var React = require('react'); 
// var ReactDom = require('react-dom');

// This is for ES6
import React from "react";
import ReactDom from "react-dom";


ReactDom.render(
  <>
    <h1> Netflix</h1>
    <p> List of 5 Best Series</p>
    <ol>
      <li>Dark</li>
      <li>Extra curricular</li>
      <li>My Holo love</li>
      <li>My first-2 love</li>
      <li>Mr Robot</li>
    </ol>
  </>,
  document.getElementById("root")
); // "root" is in index.html...

{/* <h1> Hello World!!!</h1> // this is not html. this is JSX expression in react */}

