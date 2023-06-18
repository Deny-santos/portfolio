import React from 'react'
import "./sucess.css"

const Sucess = ({text = "", show = false}) => {
    return (
        <span className={` message__container ${show ? "show" : ""}`}>{text}</span>
    )
}

export default Sucess
