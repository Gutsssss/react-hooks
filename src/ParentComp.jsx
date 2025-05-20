import React,{useState,useCallback} from "react";

import ChildComp from './ChildComp'
import MemoizedChildComp from './MemoizedChildComp'

function ParentComponent() {
    const [count,setCount] = useState(0)
    const [memoValue,setMemoValue] = useState('initial')
    const [otherState,setOtherState] = useState(false)

    const handleClick = () => {
        console.log('Клик по memo кнопке без (useCallback)')
    }
    const anotherHandleClick = useCallback(() => {
        console.log('Клик по memo кнопке с (useCallback)')
    },[])
    return(
        <div>
            <h2>Родиительский компонент</h2>
            <p>Счетчик {count}</p>
            <p>Другое состояние {otherState.toString()}</p>
            <button onClick={() => setCount(c => c + 1)}>Увеличить счетчик</button>        
            <button onClick={() => setOtherState(s => !s)}>Изменить другое состояние</button>
            <button onClick={() => setMemoValue('new ' + Date.now())}>Изменить memo пропс</button>
            <hr/>
            <ChildComp value={count}/>
            <MemoizedChildComp value={memoValue} onClick={handleClick}/>        
            <MemoizedChildComp value={memoValue} onClick={anotherHandleClick}/>        
        </div>
    )
}
export default ParentComponent