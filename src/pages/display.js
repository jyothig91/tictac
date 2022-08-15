import React from 'react'
import {Navigate} from "react-router-dom"
function Display (){
    const[toPage2,setToPage2]=React.useState(false)
    if(toPage2){
        return   <Navigate to="/Board"/> 
    }
    return(
        <div>
         
           <input type="text" placeholder='player1'/>
           <input type="text" placeholder='player2'/>
          <button onClick={()=>{setToPage2(true)}} >submit</button>
        </div>
    );
}

export default Display;