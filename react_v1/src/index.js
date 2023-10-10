//index.js
import React from "react";
import ReactDOM from "react-dom";
// import youtuber,{favprog,myName,myRollNo} from "./App";
import * as details from './App';
ReactDOM.render(
  <>
  <ol>
    <li>Helloooooo</li>
    <li>{details.default}</li>
    <li>{details.favprog}</li>
    <li>{details.myName()}</li>
    <li>{details.myRollNo()}</li>
  </ol>
  </>,
  document.getElementById('root')
);