//App.jsx
import React, { useState } from "react";

const App = () =>{
    //Here we are passing object to useState()..
    const [fullName,setfName] = useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
    });
    const inputValue = (event) =>{
        // setfName(event.target.value);

        const {name,value} = event.target;
        setfName((preValue) =>{
            //here preValue is an object holding value of object we passed in useState()
            return {
                ...preValue,
                [name]: value,
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
                <p>{fullName.email}</p>
                <p>{fullName.phone}</p>
                <input type="text" 
                    placeholder="Enter Your Name"
                    //Now fname is matching with value's fname.
                    name="fname" 
                    onChange={inputValue}
                    value={fullName.fname}
                />
                <input type="text" 
                    placeholder="Enter Your Last Name"
                    name="lname" 
                    onChange={inputValue}
                    value={fullName.lname}
                />
                <input type="email" 
                    placeholder="Enter Your email"
                    name="email" 
                    onChange={inputValue}
                    value={fullName.email}
                    // autoComplete="off"
                />
                <input type="number" 
                    placeholder="Enter Your Phone Number"
                    name="phone" 
                    onChange={inputValue}
                    value={fullName.phone}
                />
                <button type="submit"> Submit</button>
            </div>
        </form>
    </div>
    </>
    );
}
export default App;