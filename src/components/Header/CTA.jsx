import React from 'react'
import { CV2 } from "../../assets"

const CTA = () => {
  return (
    <div className='cta'>
        <a className='btn' href={CV2} download>Download CV</a>
        <a className='btn btn-primary' href="#contact">Contact Me</a>
    </div>
  )
}

export default CTA