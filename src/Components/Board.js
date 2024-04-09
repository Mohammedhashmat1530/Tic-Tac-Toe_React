import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true)

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if( state[a]!=null && state[a]===state[b] && state[b]===state[c]){
               
                return state[a];
            }
            
        }
        return false;
    }

   const isWinner=checkWinner();

    const handleClick = (index) => {
        const copyState = [...state];
        copyState[index] = isX ? "X" : "O";
        setState(copyState);
        setIsX(!isX);
       
    }

    const handleReset = ()=>{
        setState(Array(9).fill(null));
        setIsX(true)
       
    }
    return (
        <>
          
                {isX ? (isWinner ?<> 
                            <h2 className='info'>{isWinner} Won <button onClick={()=>handleReset()} >Play Again</button></h2> 
                            
                        </> :
                        <h2 className='info'>Its X turn</h2>)
                    : (isWinner ? <> 
                            <h2 className='info'>{isWinner} Won <button onClick={()=>handleReset()} >Play Again</button></h2> 
                          
                            </> :<h2 className='info'>Its O turn</h2>)}
           
           
            <div className='board-container'>
                <div className='board-row'>
                    <Square onclick={() => handleClick(0)} value={state[0]} />
                    <Square onclick={() => handleClick(1)} value={state[1]} />
                    <Square onclick={() => handleClick(2)} value={state[2]} />

                </div>
                <div className='board-row'>
                    <Square onclick={() => handleClick(3)} value={state[3]} />
                    <Square onclick={() => handleClick(4)} value={state[4]} />
                    <Square onclick={() => handleClick(5)} value={state[5]} />
                </div>
                <div className='board-row'>
                    <Square onclick={() => handleClick(6)} value={state[6]} />
                    <Square onclick={() => handleClick(7)} value={state[7]} />
                    <Square onclick={() => handleClick(8)} value={state[8]} />
                </div>
            </div>
        </>
    )
}

export default Board
