import React from 'react';
import {NavLink} from 'react-router-dom';

function Header()
{
     
    return(
    <header>
    <span>
 
     <ul>
        <li><NavLink  to="/">Home</NavLink></li>
        <li><NavLink  to="/create">Create</NavLink></li>
        <li><NavLink  to="/edit">Edit</NavLink></li>
        <li><NavLink  to="/update">Update</NavLink></li>
        <li><NavLink  to="/delete">Delete</NavLink></li>
        <li><NavLink to="/consume">Consume</NavLink></li>
       
     </ul>
    </span>
    </header>

    )



}

export default Header;