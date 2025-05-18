import React, { useRef } from "react";

function Form() {
    const inputRef = useRef(null)
    const focusOnInput = () => {
        inputRef.current.focus()
    }
    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={focusOnInput}>Click</button>
        </div>
    )
}
export default Form