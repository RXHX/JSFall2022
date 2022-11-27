import React from "react"
export const SearchCard = (props) => {
  
  return(
    <div className="input-group">
  <div className="form-outline">
    <input type="search" id="form1" placeholder="Search here" className="form-control" />
  </div>
  <button type="button" className="btn btn-info">Go</button>
</div>
  )


}