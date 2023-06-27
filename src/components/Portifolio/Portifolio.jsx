import React from 'react'
import "./Portifolio.css"
import AppWrapp from '../../wrapp/AppWrapp'
import { sites } from "./prejectsValues"
import { IconButton, Tooltip } from '@mui/material'


const Portifolio = () => {
  return (
    <section>
      <h5>My Recent Projects</h5>
      <h2>Web Sites</h2>

      <div className="container portfolio__container">
        {sites.map((site, index) => (
          <Tooltip title={site.description}>
            <IconButton>
              <article key={index + site} className="portfolio__item">
                <div className="portfolio__item-img">
                  <img src={site.img} alt="" />
                </div>
                <h3>{site.titulo}</h3>
                <div className='portfolio__item-cta'>
                  <a href={`${site.linkToGit}`} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={`${site.linkToShowProject}`} className='btn btn-primary' target='_blank' rel='noreferrer'>See project</a>
                </div>
              </article>
            </IconButton>
          </Tooltip>

        ))}
      </div>
    </section>
  )
}

export default AppWrapp(Portifolio, "portifolio")