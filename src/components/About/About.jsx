import React from 'react'
import "./About.css"
import AppWrapp from '../../wrapp/AppWrapp'
import { perfilcom } from "../../assets"
import { abouts } from "./Values"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"

const About = () => {
  return (
    <section>
      <h5>More</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={perfilcom} alt="profile" />
          </div>
        </div>

          <div className="about__content">
              <div className="about__cards">
                {abouts.map((element, index) => (
                  <article  key={element+index} className='about__card'>
                    {element.icon}
                    <h5>{element.title}</h5>
                    <small>{element.description}</small>
                  </article>
                ))}
              </div>
            <p><ImQuotesLeft/> Technology is my hobby, Programming is my passion, I'm available for new opportunities, Internship, Freelancer, Effective. Click the button below and contact me <ImQuotesRight/></p>
            <a className='btn btn-primary' href="#contact">Contact Me</a>
          </div>
      </div>
    </section>
  )
}

export default AppWrapp(About, 'about')