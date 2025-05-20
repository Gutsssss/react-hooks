import React from "react";
import styles from './sometext.module.css'
function SomeText({title,className,changeTheme}){
    return (
        <>
        <button onClick={changeTheme}>Смена темы</button>
        <div className={styles[`text-${className}`]}>
        <p >{title}</p>
        </div>
        </>
    )
}

export default SomeText