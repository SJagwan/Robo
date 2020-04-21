import React from 'react';
import './Search.css';

export const Search = (props)=>{
    return(
        <div className='search'>
            <input type='text' placeholder="Search Robo" onChange={props.onInput}/>

        </div>
    );
}
