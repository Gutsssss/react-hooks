import React from "react";

const MemoizedChildComp = React.memo(({value,onClick}) => {
    console.log('render memoized')
    return(
    <div>
        <div>Memoized компонент {value}</div>
        <button onClick={onClick}>Кнопка в memo</button>
    </div>
    )
})
export default MemoizedChildComp