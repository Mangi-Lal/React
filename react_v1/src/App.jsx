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

        const {value,name} = event.target;
        setfName((preValue) =>{
            if(name === "fName"){
                //As we know initial value of useState(),we passed, is an object.
                //so we are required to return an object.
                return {
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: preValue.phone,
                }
            }
            else if(name === "lName"){
                return {
                    fname: preValue.fname,
                    lname: value,
                    email: preValue.email,
                    phone: preValue.phone,
                }
            }
            else if(name === "email"){
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: value,
                    phone: preValue.phone,
                }
            }
            else if(name === "phone"){
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: value,
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
                <p>{fullName.email}</p>
                <p>{fullName.phone}</p>
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