import React, { useEffect, useState }  from "react";
import axios from 'axios';

const Todo = (props) => (
  
        
    <tr className="d-flex">
      <td className="col-10">{props.todo}</td>
    </tr>
   
  );



const Consume = () => {
  const[data,setData] = useState([]);
   
   useEffect(() =>{
    axios.
    get('https://randomuser.me/api/')
    .then((response) => setData(response.data.results))
    .catch((e) => console.log("Exception is "+e));
    
   },[]);

return(
<div>
    <h3> Data Here is:</h3>
    <table>
    <thead>
          <tr>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
    {
        data.map((info,index) => {
            return(
                <Todo
                todo={info.gender}
                key={index}
               
              />
            )
        })
    }
    </tbody>
     </table>
</div>
);


}

export default Consume;