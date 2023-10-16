//User.jsx
import React from "react";
import { useLocation, useParams } from "react-router-dom";

// Without hooks
// const User = ({match}) =>{
//     return <h1>This is {match.params.name} Page</h1>
// }

// With hooks

const User = () =>{
    const location = useLocation();
    // console.log(location);
    //fname,lname names should match with parameters passed in path using Route...
    const {fname,lname} = useParams();
    return (
        <>
        <h1>This is {fname} {lname} Page</h1>
        <p>Your current location is {location.pathname}</p>
        {location.pathname === `/user/mangi/lal`?
        <button onClick={()=>{alert('Got it')}}>Click me</button>:null
        }
        </>
    );
}

export default User;