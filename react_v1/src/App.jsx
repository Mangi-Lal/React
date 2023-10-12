//App.jsx
//index.js
import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const App = () =>{
    return(
    <>
        <h1 className="heading_style"> List of top 5 netflix serieas in 2020 </h1>
        {Sdata.map((val,index)=>{
            return (
                <Card
                key={val.id}
                imgsrc={val.imgsrc}
                title={val.title}
                sname = {val.sname}
                link = {val.link}
                />
            );
        })}
    </>
    );
}
export default App;