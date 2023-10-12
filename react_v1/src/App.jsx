//App.jsx
import React, { useState } from "react";
// let count = 1;
const App = () =>{
    const state = useState();
    const [count,setCount] = useState(0);
    //[current value,updated value] = useState(initial value)
    let IncNum = () =>{
        setCount(count+1);
        // console.log(count);
    }
    return(
    <>
       <h1> {count} </h1>
       <button onClick={IncNum}> Click Me </button>
    </>
    );
}
export default App;