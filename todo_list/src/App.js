import React, { useState } from 'react'
import TodoList from './TodoList';

const App = () => {
    const [input, setInput] = useState("");
    const [itemlist, setItemlist] = useState([]);

    const inputData = (event) =>{
        setInput(event.target.value);
    }
    const listOfItems = () =>{
        setItemlist((oldItems)=>{
            return [...oldItems, input];
        });
        setInput("");
    }
    const deleteItems = (id) => {
        // console.log(deleted);
        setItemlist((oldItems) =>{
            return oldItems.filter((arrElem,index)=>{
                return index !== id;
             });
        });
    }

  return (
    <>
    <div className='main_div'>
        <div className='center_div'>
            <br />
            <h1>ToDo List</h1>
            <br />

            <input type="text" 
            placeholder='Add your items'
            value={input} 
            onChange={inputData}/>

            <button onClick={listOfItems}>+</button>
            <ol>
                {itemlist.map((itemval,index) =>{
                    return <TodoList key = {index} 
                    id = {index} 
                    text = {itemval}
                    onSelect = {deleteItems}
                    />;
                })}
            </ol>

        </div>
    </div>
    </>
  )
}

export default App;