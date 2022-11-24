import React,{useEffect,useState} from "react";
import axios from "axios";
import { DisplayPersonality } from "./DisplayPersonality";
import { DisplayHeading } from "./DisplayHeading";
import { DisplayCounter } from "./DisplayCounter";
import { AddRandomCard } from "./AddRandomCard";
import { SearchCard } from "./SearchCard";
export const App = () => {
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
        <DisplayHeading heading = "General Quotes By Famous Personality"/>
        <DisplayCounter count = {data.length}/>
        <AddRandomCard />
        <SearchCard data = {data}/>
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