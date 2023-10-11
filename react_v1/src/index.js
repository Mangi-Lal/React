//index.js
import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";

ReactDOM.render(
  <>
  <Card
  imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
  title="A Netflix Original Series"
  sname = "DARK"
  link = "https://www.netflix.com/in/title/80100172"
  />
  <Card
  imgsrc="https://www.hitc.com/static/uploads/hitcn/1816/extracurricular_netflix_780_1544944.jpg"
  title="A Netflix Original Series"
  sname = "Extra curricular"
  link = "https://www.netflix.com/in/title/80990668"
  />
  <Card
  imgsrc="https://wallpapercave.com/wp/wp1917154.jpg"
  title="A Netflix Original Series"
  sname = "Stranger Things"
  link = "https://www.netflix.com/in/title/80057281"
  />
  </>,
  document.getElementById('root')
);