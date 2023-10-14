import React, { useState } from "react";
import './Accordion.css';
import {question} from './Api';
import Myaccordion from "./Myaccordion";

const Accordion = () =>{
    const [data, setData] = useState(question);
    return (
        <>
            <section className="main_div">
                <h1>React Interview Questions</h1>
            {
                data.map((currEle) =>{
                    const {id} = currEle;
                    return <Myaccordion key = {id} {...currEle}/>;
                })
            }
            </section>
        </>
    );
}

export default Accordion;