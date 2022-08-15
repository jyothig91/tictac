import React, {useState} from "react"
import Square from "./Square";


function Board(){
  const [ state,setState]=useState(Array(9).fill(null))
  const[isXTurn,setIsXTurn]=useState(true);
 function checkWinner(state){
  const winnerLogic=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  //for(let logic of winnerLogic){
    for (let i = 0; i < winnerLogic.length; i++) { 
  const[a,b,c]=winnerLogic[i];
    if( state[a]  && state[a] === state[b] && state[a]===state[c]){
      return state[a];
    }
  }
  return null;
 };
 //const isWinner=checkWinner();

  const handleClick = (index)=>{
  //   if(state[index]!== null){
  //     return;
  //   }
  //  const copyState=[...state];
  if (checkWinner(state) || state[index]) {
    return
  }


   state[index]=isXTurn?"X":"O";
   setState(state);
   setIsXTurn(!isXTurn);
  }
  const winner = checkWinner(state)
  let status
  
  if (winner) {
   status = ` winner: ${winner} `;
  } else {
    status = 'Next player: ' + (isXTurn ? 'X' : 'O');
  }

  const handleReset = ()=>{
    setState(Array(9).fill(null))
  }
  return(
    <div  className='board-container'>
      <h2 >Lets Play Tic-Tac-Toe</h2>
        {/* 
    {isWinner?(
      <>{isWinner} won the game</>
    ):(
      <>
      <h3>Player {isXTurn?'X':'O'} move</h3> */}
    <div className="board-row">
    <Square onClick={()=>handleClick(0)}value={state[0]}/>
    <Square  onClick={()=>handleClick(1)}value={state[1]}/>
    <Square onClick={()=>handleClick(2)}value={state[2]}/>
    </div>
    <div className="board-row">
    <Square onClick={()=>handleClick(3)} value={state[3]}/>
    <Square onClick={()=>handleClick(4)}value={state[4]}/>
    <Square onClick={()=>handleClick(5)} value={state[5]}/>
    </div>
    <div className="board-row">
    <Square  onClick={()=>handleClick(6)}value={state[6]}/>
    <Square onClick={()=>handleClick(7)}value={state[7]}/>
    <Square onClick={()=>handleClick(8)}value={state[8]}/>
    </div>
    <div className="status">{status}</div>
    <button onClick={handleReset}>Restart</button>
  </div>
 );

}

export default Board;