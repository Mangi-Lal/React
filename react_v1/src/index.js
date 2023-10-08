import React from "react";
import ReactDOM from "react-dom";
import './index.css'; 
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const portfolio = 'https://mangilal-portfolio.netlify.app/';

const heading = {
  color: '#fa9191',
  textTransform: 'capitalize',
  textAlign: 'center',
  fontWeight: 'bold',
  textShadow: '0px 2px 4px #ffe9c5',
  margin: '50px 0',
  fontFamily: '"Josefin Slab", serif'
}
ReactDOM.render(
  <>
    <h1 style={heading} >Hello, My Name is Mangi Lal</h1>
    
    <div className="img_div">
    <img src={img1} alt="randomimg"/>
    <img src={img2} alt="randomimg"/>
    <a href={portfolio} target="_blank">
      <img src={img3} alt="randomimg"/> 
    </a>
    </div>
  </>
  ,document.getElementById("root")
);
