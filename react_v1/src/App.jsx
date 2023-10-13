//App.jsx
import React, { useState } from "react";

const App = () =>{
    const [inputData,setData] = useState();
    const [FullName,setName] = useState();
    //When we trigger onChange then inputValue function is called 
    //and one object is also passed to inputValue, which we are 
    //taking as (event). 
    const inputValue = (event) =>{
        //user jo bhi type krega 'event.target.value' ke through access kr skte h.
        // console.log(event.target.value);
        setData(event.target.value);
    }
    const onSubmit = () =>{
        //bcz we are storing input data in variable 'inputData'
        //this is called 'single source of truth'.
        setName(inputData);
    }
    return(
    <>
      <h1> Hello {FullName} </h1>
      <input type="text" 
        placeholder="Enter Your Name" 
        onChange={inputValue}
        value={inputData}/>
      <button onClick={onSubmit}> Click Me</button>
    </>
    );
}

export default App;