import React from 'react'
import "./Header.css"
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import { me } from "../../assets"
import AppWrapp from '../../wrapp/AppWrapp'
import Typical from 'react-typical'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm </h5>
        <h1>Deni Santos</h1>
        <h5 className="text-light"><Typical loop={Infinity} steps={["Web Developer", 1000, "Analysis And Systems Development"]} /></h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={me} alt="me" />
        </div>

        <div className='scroll_wrapp'>
          <div></div>
          <a className='scroll_down' href="#contact" >Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default AppWrapp(Header, "header")