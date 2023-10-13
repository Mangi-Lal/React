//App.jsx
import React, { useState } from "react";

const App = () =>{
    const [firstData,setfData] = useState();
    const [FirstName,setfName] = useState();

    const [lastData,setlData] = useState();
    const [LastName,setlName] = useState();
    const inputValuetwo = (event) =>{
        setlData(event.target.value);
    }

    const inputValue = (event) =>{
        setfData(event.target.value);
    }
    const onSubmit = (event) =>{
        //It is used to prevent default form behaviour
        event.preventDefault();
        setfName(firstData);
        setlName(lastData);
    }
    return(
    <>
    <div className="main_div">
        <form onSubmit={onSubmit}>
            <div>
                <h1> Hello {FirstName} {LastName} </h1>
                <input type="text" 
                    placeholder="Enter Your Name" 
                    onChange={inputValue}
                    value={firstData}
                />
                <input type="text" 
                    placeholder="Enter Your Last Name" 
                    onChange={inputValuetwo}
                    value={lastData}
                />
                <button type="submit"> Submit</button>
            </div>
        </form>
    </div>
    </>

    );
}

export default App;