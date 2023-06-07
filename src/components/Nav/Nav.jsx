import React, { useState } from 'react'
import "./Nav.css"
import { BiHome, BiUser, BiBook, BiMessageAltDetail} from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"

const icons = [<BiHome/>,<BiUser/>, <BiBook/>, <RiServiceLine/>, <BiMessageAltDetail/>]

const Nav = () => {
  const [selected, setSelected] = useState("")

  function handleSelect(id) {
    setSelected(id)
  }
  return (
    <nav>
        {["header", "about", "experience", "portifolio", "contact"].map((component, index) => (
          <a 
            key={index} 
            href={`#${component}`}
            onClick={() => handleSelect(component)}
            className={`${selected === component ? "active" : ""}`}
              >
               {icons[index]}
          </a>
        ))}
    </nav>
  )
}

export default Nav