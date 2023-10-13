//App.jsx
import React, { useState } from "react";

const App = () =>{
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);
    const [Name, setName] = useState('Click me');
    const bgChange = () =>{
        let newBg = '#34495e';
        setBg(newBg);
        let newName = 'Done ✔';
        setName(newName);
    }
    const bgRestore = () =>{
        setBg(purple);
        setName('Click Me');
    }
    return(
    <>
      <div style={{ backgroundColor: bg}}>
        {/* <button onClick={bgChange} onDoubleClick={bgRestore}>
            {Name} </button> */}
        <button onMouseEnter={bgChange} onMouseLeave={bgRestore}>
            {Name} </button>
      </div> 
    </>
    );
}

export default App;