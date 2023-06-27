import React from 'react'
import "./sucess.css"

const Sucess = ({text = "", show = false, top = false}) => {
    return (
        <span className={` message__container ${show ? "show" : ""} ${top ? "top": "bottom"}`}>
            {text}
            <div className='progress'>
                
            </div>
        </span>
    )
}

export default Sucess
