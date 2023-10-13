//App.jsx
import React, { useState } from "react";

const App = () =>{
    const [fullName,setfName] = useState({
        fname:"",
        lname:""
    });
    
    

    const inputValue = (event) =>{
        // setfName(event.target.value);
        const value = event.target.value;
        const name = event.target.name;

        setfName((preValue) =>{
            if(name === "fName"){
                return {
                    fname: value,
                    lname: preValue.lname,
                }
            }
            else if(name === "lName"){
                return {
                    fname: preValue.fname,
                    lname: value,
                }
            }
        })
    }
    const onSubmit = (event) =>{
        //It is used to prevent default form behaviour
        event.preventDefault();
        alert('Form submitted');
    }
    return(
    <>
    <div className="main_div">
        <form onSubmit={onSubmit}>
            <div>
                <h1> Hello {fullName.fname} {fullName.lname} </h1>
                <input type="text" 
                    placeholder="Enter Your Name"
                    name="fName" 
                    onChange={inputValue}
                    value={fullName.fname}
                />
                <input type="text" 
                    placeholder="Enter Your Last Name"
                    name="lName" 
                    onChange={inputValue}
                    value={fullName.lname}
                />
                <button type="submit"> Submit</button>
            </div>
        </form>
    </div>
    </>

    );
}

export default App;