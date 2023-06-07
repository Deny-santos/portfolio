import React from 'react'
import "./Services.css"
import appWrapp from "../../wrapp/AppWrapp"

const Services = () => {
  return (
    <section>
      <h3>what i offer</h3>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='services'>
          <div className="services__head">
            <h3>UI / UX Desingner</h3>
          </div>
        </article>
      </div>
    </section>
  )
}

export default appWrapp(Services, "services")