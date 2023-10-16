import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () =>{
    return (
        <>
        {/* <a href="/"> AboutMe </a>
        <a href="/contact"> Contact </a> 
        NOW USING REACT ROUTER DOM */}

        {/* Ye kaam kr rha but isme pta nhi lg pa rha konsa link active h
        <Link to={'/'}> AboutMe </Link>
        <br/>
        <Link to={'/Contact'}> Contact </Link> */}

        {/* In React Router Dom 6 and above
        Default active class
        By default, an active class is added to a <NavLink> component when it is active so you can use CSS to style it. */}

        <nav id="sidebar" className="menu_style">
        <NavLink to={'/'}> AboutMe </NavLink >
        <NavLink to={'/contact'}> Contact </NavLink >
        <NavLink to={'/service'}> Services </NavLink>
        {/* /user/mangi/lal is default user  */}
        <NavLink to={'/user/mangi/lal'}> User </NavLink>
        </nav>
        </>
    );
}

export default Menu;