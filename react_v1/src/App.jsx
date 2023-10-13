//App.jsx
import React, { useState } from "react";

const App = () =>{
    let newtime = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(newtime);

    const UpdateTime = () =>{
        newtime = new Date().toLocaleTimeString();
        setCtime(newtime);

    }
    return(
    <>
       <h1> {ctime} </h1>
       <button onClick={UpdateTime}> Get Time </button>
    </>
    );
}
export default App;