import React from 'react'
import "./sucess.css"

const Sucess = ({text = ""}) => {
    return (
        <span className='message__container'>{text}</span>
    )
}

export default Sucess