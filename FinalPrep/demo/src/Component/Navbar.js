import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
  

    return(
     <ul>
    <li><Link to="/about">About</Link> </li><br/>
    <li><Link to="/consume">Consume</Link></li><br/>
     </ul>
    


    )



}

export default Navbar;