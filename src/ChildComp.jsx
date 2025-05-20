import React from "react";

const ChildComponent = ({value}) => {
    console.log('render child')
    return <div>Обычный компонент {value}</div>
}

export default ChildComponent