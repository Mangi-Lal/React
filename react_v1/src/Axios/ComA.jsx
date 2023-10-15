import React, { useEffect, useState } from "react";
import axios from "axios";

//ComA.jsx
const ComA = () =>{
    const [num,setNum] = useState();
    const [name,setName] = useState();
    const [moves,setMoves] = useState();
    

    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        } 
        getData();
    })
    return (
        <>
            <h1>You selected <span style={{color:'green'}}> {num} </span> value </h1>
            <h1>PokeMon Name is  <span style={{color:'red', textTransform:'uppercase'}}> {name} </span></h1>
            <h1>It,s moves are:  <span style={{color:'yellow'}}> {moves} </span> </h1>
            <select value={num} onChange={
                (event) =>{
                    // console.log(event.target.value);
                    setNum(event.target.value);
                }}>
                <option value="1"> 1 </option>
                <option value="25"> 25 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
            </select>
        </>
    )
}

export default ComA;