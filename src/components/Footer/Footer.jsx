import React from 'react'
import "./Footer.css"
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"

const pages = ['header', "about", "experience", "portifolio", "contact"]
const Footer = () => {
  return (
    <footer>
      <a className='footer__logo' href="/">Deny santos</a>

      <ul className='permalinks'>
          {pages.map((page, index) => (
            <li key={`${page}-${index}`}>
                <a href={`#${page}`}>{page}</a>
            </li>
          ))}
      </ul>

      <div className="footer__socials" target="_blank" rel='noreferrer'>
        <a href="https://www.linkedin.com/in/denisson-santos-019956214">
          <BsLinkedin/>
        </a>
        <a href="https://github.com/Deny-santos" target="_blank" rel='noreferrer'>
          <BsGithub/>
        </a>
        <a href="https://www.instagram.com/denysantoz/" target="_blank" rel='noreferrer'>
          <BsInstagram/>
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DENY SANTOS, todos direitos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer