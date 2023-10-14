import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const Incdec = () =>{
    const [num,setNum] = useState(1);

    const IncNum = () =>{
        setNum(num+1);
    }
    const DecNum = () =>{
        if(num>0){
            setNum(num-1);
        }
        else{
            alert('Number is beyond zero limit');
        }
    }
    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <h1> {num} </h1>
                <div className="btn_div">
                    <button onClick={IncNum} > <AddIcon sx={{fontSize:40, color:'green', background: 'transparent' }}/> </button>
                    
                    <button onClick={DecNum}> <DeleteIcon sx={{fontSize:40, color: 'red', background: 'transparent' }}/> </button>
                    
                </div>
            </div>
        </div>
        </>
    );
}

export default Incdec;