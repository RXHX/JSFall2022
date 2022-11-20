import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
const Practice4 = () => {
    /*
     * 1. Pull the fetch call out into it's own function fetchCat
     * 2. Call fetchCat on initial page load as done currently
     * 3. Add a timer using useEffect that fetches a new cat every 5 seconds
     * 4. Make sure to cancel the timer when component is unmounted
     */
  
    const [catImg, setCatImg] = useState(``);
  
    const baseUrl = "http://localhost:3000/randomData";
    useEffect(() => {
        axios({
            method: 'get',
            url: baseUrl,
            withCredentials: false
          }).then((response) => {
        console.log(response)
        setCatImg(response);
      });
    }, []);
     
    return (
      <>
        <h1>Random Cat Photo</h1>
        
        {console.log(catImg)}
      </>
    );
  };


  ReactDOM.render(<Practice4 />, document.getElementById("root"));