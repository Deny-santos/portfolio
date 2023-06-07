import React from 'react'
import { motion } from 'framer-motion'

const AppWrapp = (Component, id, classCont = "", animation = false) => function HOC() {
  return (
    <div className={`app__wrapp ${classCont}`} id={`${id}`}>
        {animation === true ? (
          <motion.div
            whileInView={{x: [100, 0], opacity: [0,1]}}
            transition={{duration: 0.5}}
          >
            <Component />
          </motion.div>
        ): (
          <Component />
        )} 
    </div>
  )
}

export default AppWrapp