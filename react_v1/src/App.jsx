//App.jsx
import React from "react";
import SlotM from "./SlotM";

const App = () =>{
    return(
    <>
       <h1 className="heading_style"> 
       🎰 Welcome to <span style = {{fontWeight:'bold'}}> Slot machine game</span> 🎰</h1>
        <div className="slotmachine">
            <SlotM x='😂' y='😂' z='😂'/>
            <hr/>
            <SlotM x='😁' y='🎉' z='🤸‍♂️'/>
            <hr/>
            <SlotM x='🌹' y='🙌' z='💖'/>
            <hr/>
            <SlotM x='✨' y='✨' z='✨'/>
            <hr/>
        </div>
    </>
    );
}
export default App;