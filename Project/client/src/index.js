import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";



const DisplayPersonality = (props) => {
  return(
<div>
<div className="card">
    <img src={props.image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.quote}</h5>
      <p className="card-text">{props.source}</p>
      <p className="card-text">{props.citation}</p>
      <p className="card-text">{props.year}</p>
      <a href="#" className="btn btn-primary">Click Here</a>
    </div>
  </div>
  </div>
  )
   

}




const App = () => {
    /*
     * 1. Pull the fetch call out into it's own function fetchCat
     * 2. Call fetchCat on initial page load as done currently
     * 3. Add a timer using useEffect that fetches a new cat every 5 seconds
     * 4. Make sure to cancel the timer when component is unmounted
     */
  
    const [data, setData] = useState([]);
  
    const baseUrl = "http://localhost:3001/randomData";
    useEffect(() => {
       axios.get(baseUrl).then(response => setData(response.data))
       .catch(error => console.error(error));
    }, []);
     
    return (
      <>
        <h1>Random Cat Photo</h1>
        {console.log(data)}
        {data.map((personality) =>  
               <DisplayPersonality
                  quote = {personality.quote}
                  source = {personality.source}
                  citation = {personality.citation}
                  image = {personality.image}
                  year = {personality.year}
                  key = {personality.id.toString()}                      
               />
           )
           }
             </>
    );
  };


  ReactDOM.render(<App />, document.getElementById("root"));