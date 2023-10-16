//Search.jsx
import React, { useState } from 'react';
import Sresult from './Sresult';

const Search = () => {
    const [img,setImg] = useState('');
    const imgDesc = (event) => {
        const data = event.target.value;
        console.log(data);
        setImg(data);
    }
    return (
        <>
        <div className='searchbar'>
            <input type='text' 
            value={img}
            onChange={imgDesc}
            placeholder='search anything'/>
        </div>
        {img==='null'?null:<Sresult Name={img}/>}
        </>
    );
}

export default Search;