import React from "react";
import ReactDOM from "react-dom";

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/400/300";
const portfolio = 'https://mangilal-portfolio.netlify.app/';

ReactDOM.render(
  <>
    <h1 contentEditable="true">Hello, My Name is Mangi Lal</h1>
    <img src={img1} alt="randomimg"/>
    <img src={img2} alt="randomimg"/>
    <a href={portfolio} target="_blank">
      <img src={img3} alt="randomimg"/> 
    </a>
  </>
  
  ,document.getElementById("root")
);
