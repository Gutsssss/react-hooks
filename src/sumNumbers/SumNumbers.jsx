import React, { useMemo, useState } from "react";

function SumNumbers() {
    let [arr,setArray] = useState([])
    const generateArray = () => {
        const length = Math.floor(Math.random() * 100)
        const newArr = []
        for(let i = 0; i < length;i++) {
            newArr.push(Math.round(Math.random() * 10))
        }
        return setArray(newArr)
    }
    const sumArr = useMemo(() => {
        return arr.reduce((acc,val) => acc + val,0)
    },[arr])
    return (
        <div>
            <button onClick={generateArray}>Generate</button>
            <p>Список чисел: {`[${arr}]`}</p>
            <p>{sumArr}</p>
        </div>
    )
}

export default SumNumbers