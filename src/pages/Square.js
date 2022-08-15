import React from "react"

const Square=(props)=>{
 return(
    <div 
    onClick={props.onClick}
    style={{border:"1px solid",
    height:'100px',
   width:'40%',
  display:'flex',
  justifyContent:"center",
  background:'gray',
  
  
  
}}
    className="square">
      <h2>{props.value}</h2>
    </div>
   
 )

}

export default Square;