import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Consume()
{

    const[youdo,setYoudo] = useState([]);

   useEffect(()=>{
    axios.get('').then((response) =>{
    setYoudo(response.data);
    }).catch((error) => {
        console.log(error);
    })

   },[]);

   return(
    <div>
        {youdo}
    </div>
   )




}
export default Consume;