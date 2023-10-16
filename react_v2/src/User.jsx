//User.jsx
import React from "react";
import { useParams } from "react-router-dom";

// Without hooks
// const User = ({match}) =>{
//     return <h1>This is {match.params.name} Page</h1>
// }

// With hooks

const User = () =>{
    //fname,lname names should match with parameters passed in path using Route...
    const {fname,lname} = useParams();
    return <h1>This is {fname} {lname} Page</h1>
}

export default User;