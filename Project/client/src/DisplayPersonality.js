import React from "react"
export const DisplayPersonality = (props) => {
    return(
  <div>
  <div className="card">
      <img src={props.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.quote}</h5>
        <p className="card-text">{props.source}</p>
        <p className="card-text">{props.citation}</p>
        <p className="card-text">{props.year}</p>   
        <button type="button" class="btn btn-danger">Delete</button> 
      </div>
    </div>
    </div>
    )
     
  
  }