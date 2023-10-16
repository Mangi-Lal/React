//User.jsx
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// With hooks
const User = () =>{
    const location = useLocation();
    const history = useNavigate();
    console.log(history);
    const {fname,lname} = useParams();
    return (
        <>
        <h1>This is {fname} {lname} Page</h1>
        <p>Your current location is {location.pathname}</p>
        {location.pathname === `/user/mangi/lal`?
        <button onClick={()=>{history('/')}}>Home</button>:null
        }
        </>
    );
}

export default User;