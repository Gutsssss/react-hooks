import React, { useCallback, useState } from "react";

function MyCounter() {
    const [peopleList] = useState([
  {id:1,name:'Jhon'},
  {id:2,name:'Mary'},
  {id:3,name:'Peter'},
  {id:4,name:'Alex'},
  {id:5,name:'Doe'},
  {id:6,name:'Mark'}
])
    const [counter,setCounter] = useState(0)

    const increment = useCallback(() => {
        
        setCounter(counter => {
            if(counter >= peopleList.length) {
                return counter
            }
            return counter + 1
        })
    },[peopleList.length])
    const decrement = useCallback(() => {
        setCounter(prevCounter => { 
            if(prevCounter <= 0 ) {
                return prevCounter
            }
            return counter - 1
            
        })
    },[counter])
    return (
        <>
        <div>
            <button onClick={increment}>+</button>
            <p>{counter}</p>
            <button onClick={decrement}>-</button>
            <div className="list">
                {peopleList.slice(0,counter).map((person) => {
                   return <p key={person.id}>{person.name}</p>
})}
           </div>
        </div>
        </>
    )
}
export default MyCounter
